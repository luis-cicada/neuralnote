import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, useColorScheme } from 'react-native'
import BaseTouchableWithIcon from '../components/base/BaseTouchableWithIcon'
import Home from '../screens/home/Home'
import Menu from '../screens/menu/Menu'
import { AppStackParamList, AppStackScreens } from './types'

const Stack = createStackNavigator<AppStackParamList>()

const backNavigation: React.FC = (navigation: any) => {
  return (
    <View className="flex flex-1 px-6 justify-center">
      <BaseTouchableWithIcon
        icon="Cog8ToothIcon"
        onPress={() => navigation.navigate(AppStackScreens.MENU)}
        size={26}
      />
    </View>
  )
}

const StackNavigator: React.FC<AppStackParamList> = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundColor = isDarkMode ? '#0f172a' : '#fff'
  const textColor = isDarkMode ? '#fff' : '#000'

  return (
    <Stack.Navigator
      initialRouteName={AppStackScreens.HOME}
      screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name={AppStackScreens.HOME}
        component={Home}
        options={({ navigation }) => ({
          headerTitle: 'Neural - Notes',
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTitleStyle: { color: textColor, fontWeight: '700' },
          headerRight: () => backNavigation(navigation),
        })}
      />
      <Stack.Screen
        name={AppStackScreens.MENU}
        component={Menu}
        options={{
          headerTitle: 'Menu',
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTitleStyle: { color: textColor, fontWeight: '700' },
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
