import React from 'react'
import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native'
import StackNavigator from '../../routes/StackNavigator'

const BaseScreen: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView className="bg-gray-900 flex flex-1 text-white">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View className="bg-gray-900 flex flex-1">
        <StackNavigator />
      </View>
    </SafeAreaView>
  )
}

export default BaseScreen
