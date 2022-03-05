import React from 'react';
import Page from '../../components/layout/Page';
import BoxSettingsComponent from '../../components/settings/box-settings/BoxSettingsComponent';

const BoxSettings = () => {
  return (
    <Page title="BoxSettings" header={"BoxSettings"} >
      <BoxSettingsComponent/>
    </Page>
  );
};

export default BoxSettings;
