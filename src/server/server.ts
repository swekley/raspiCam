import express from 'express';
import path from 'path';
import { isDefined } from '../shared/helperFunctions';
import { RaspiGallery, RaspiStatus, GenericSettingDesc, Setting } from '../shared/settings/types';
import { RaspiControl } from './control';
import { SettingsBase, SettingsHelper } from './settings';
import { splitJpeg } from './splitJpeg';
import { FileWatcher } from './watcher';

type SettingRequest = express.Request<undefined, undefined, Setting<GenericSettingDesc>>;

/**
 * Initialize the express server
 */
const server = (
  control: RaspiControl,
  settingsHelper: SettingsHelper,
  fileWatcher: FileWatcher,
): express.Express => {
  const app = express();

  // Serve the static content from public
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/photos', express.static(fileWatcher.getPath()));
  app.use(express.json());

  //#region Helper functions

  const getSettings = (x: SettingsBase) => (_: express.Request, res: express.Response) =>
    res.send(x.read());

  const applySettings = (x: SettingsBase) => (req: SettingRequest, res: express.Response) => {
    x.apply(req.body);
    res.status(200).send(x.read());
  };

  const applyAndRestart = (x: SettingsBase) => (req: SettingRequest, res: express.Response) => {
    const applied = x.apply(req.body);
    const sendSettings = () => res.status(200).send(x.read());
    if (applied) {
      control.restartStream().then(sendSettings).catch(sendSettings);
    } else {
      sendSettings();
    }
  };

  const getStatus = (): RaspiStatus => ({
    ...control.getStatus(),
    latestFile: fileWatcher.getLatestFile(),
  });

  //#endregion

  app.get('/api/camera', getSettings(settingsHelper.camera));
  app.post('/api/camera', applyAndRestart(settingsHelper.camera));

  app.get('/api/preview', getSettings(settingsHelper.preview));
  app.post('/api/preview', applyAndRestart(settingsHelper.preview));

  app.get('/api/stream', getSettings(settingsHelper.stream));
  app.post('/api/stream', applyAndRestart(settingsHelper.stream));

  app.get('/api/video', getSettings(settingsHelper.video));
  app.post('/api/video', applySettings(settingsHelper.video));

  app.get('/api/photo', getSettings(settingsHelper.photo));
  app.post('/api/photo', applySettings(settingsHelper.photo));

  app.get('/api/control', getSettings(settingsHelper.control));
  app.post('/api/control', applySettings(settingsHelper.control));

  app.get('/api/application', getSettings(settingsHelper.application));
  app.post('/api/application', applySettings(settingsHelper.application));

  app.get('/api/status', (_, res) => {
    res.send(getStatus());
  });

  app.get('/api/start', (_, res) => {
    control.start();
    res.status(200).send('ok');
  });

  app.get('/api/stop', (_, res) => {
    control.stop();
    res.status(200).send('ok');
  });

  app.get('/api/stream/live', (_, res) => {
    const liveStream = control.getStream();

    if (liveStream) {
      res.writeHead(200, { 'Content-Type': 'video/mp4' });

      res.on('close', () => {
        res.destroy();
      });

      liveStream.pipe(res);
    } else {
      res.status(503).send('Camera restarting or in use');
    }
  });

  app.get('/api/stream/mjpeg', (_, res) => {
    const liveStream = control.getStream();

    if (liveStream) {
      const boundary = 'streamBoundary';
      res.setHeader('Content-Type', 'multipart/x-mixed-replace;boundary="' + boundary + '"');
      res.setHeader('Connection', 'close');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Cache-Control', 'no-cache, private');
      res.setHeader('Expires', 0);
      res.setHeader('Max-Age', 0);

      liveStream.pipe(
        splitJpeg((jpeg) => {
          res.write(`Content-Type: image/jpeg\n`);
          res.write(`Content-Length: ${jpeg.length}\n\n`);
          res.write(jpeg);
          res.write(`\n--${boundary}\n`);
        }),
      );

      res.on('close', () => {
        res.destroy();
      });
    } else {
      res.status(503).send('Camera restarting or in use');
    }
  });

  app.get('/api/gallery', (_, res) => {
    const gallery: RaspiGallery = {
      files: fileWatcher.getFiles(),
    };
    res.status(200).send(gallery);
  });

  app.post('/api/gallery/delete', (req, res) => {
    const files =
      Array.isArray(req.body) &&
      req.body.map((value) => (typeof value === 'string' ? value : undefined)).filter(isDefined);

    files && fileWatcher.deleteFiles(files);
    res.status(200).send('Gallery files deleted');
  });

  // All other requests to index html
  app.get('*', (_, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

  return app;
};

export default server;
