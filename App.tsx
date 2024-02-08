import './global.css'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import BaseScreen from './app/screens/base/BaseScreens'

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
