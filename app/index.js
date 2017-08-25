import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

EStyleSheet.build({
  $primaryColor: '#FFFFFF'
});

export default () => <Navigator />;
