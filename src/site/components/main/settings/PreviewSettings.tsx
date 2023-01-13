import React from 'react';
import { PreviewSetting, PreviewSettingDesc } from '../../../../shared/settings/preview';
import { BooleanSetting } from './common/BooleanSetting';
import { restoreSettings, updateTypedField } from './common/helperFunctions';
import { SettingsExpander, SettingsExpanderHeader } from './common/SettingsExpander';
import {
  SettingsHeader,
  SettingsHeaderText,
  SettingsRestoreButton,
  SettingsWrapper,
} from './common/Styled';

export interface PreviewSettingsProps {
  preview: PreviewSettingDesc;
  updatePreview: (data: PreviewSetting) => void;
}

export const PreviewSettings: React.FC<PreviewSettingsProps> = ({ preview, updatePreview }) => {
  const updateField = updateTypedField(updatePreview);

  return (
    <SettingsWrapper>
      <SettingsHeader fontSize="m">
        <SettingsHeaderText>Preview</SettingsHeaderText>
        <SettingsRestoreButton
          type="SettingsRestore"
          onClick={() => updatePreview(restoreSettings(preview))}
        />
      </SettingsHeader>

      <SettingsExpander header={<SettingsExpanderHeader>HDMI Preview</SettingsExpanderHeader>}>
        <BooleanSetting {...preview.nopreview} update={updateField('nopreview')} />
        <BooleanSetting {...preview.fullscreen} update={updateField('fullscreen')} />
      </SettingsExpander>
    </SettingsWrapper>
  );
};
