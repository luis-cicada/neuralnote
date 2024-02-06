import './global.css'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import BaseScreen from './app/screens/base/BaseScreens'
import SplashScreen from 'react-native-splash-screen'
import { Platform } from 'react-native'

const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <BaseScreen />
    </NavigationContainer>
  )
}

export default App
