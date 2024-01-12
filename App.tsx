import './global.css';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BaseScreen from './app/screens/base/BaseScreens';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BaseScreen />
    </NavigationContainer>
  );
};

export default App;
