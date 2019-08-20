import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';

const App = () => (
  <Fragment>
    <StatusBar barStyle="ligth-content" backgroundColor="#8b10ea" />
    <Routes />
  </Fragment>
);

export default App;
