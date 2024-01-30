import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native'
import StackNavigator from '../../routes/StackNavigator'

const BaseScreen = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView className="bg-green-300 flex flex-1 dark:bg-gray-900 dark:text-white">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View className="bg-green-300 flex flex-1 dark:bg-gray-900">
        <StackNavigator />
      </View>
    </SafeAreaView>
  )
}

export default BaseScreen
