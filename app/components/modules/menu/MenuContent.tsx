import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

const menuList = [
  {
    id: 1,
    title: 'Recordings',
    description: 'View all recordings',
  },
  {
    id: 2,
    title: 'Settings',
    description: 'Change app settings',
  },
  {
    id: 3,
    title: 'About',
    description: 'About the app',
  },
  {
    id: 4,
    title: 'Help',
    description: 'Get help with the app',
  },
  {
    id: 5,
    title: 'Feedback',
    description: 'Send feedback to the developer',
  },
  {
    id: 6,
    title: 'Privacy Policy',
    description: 'Read our privacy policy',
  },
  {
    id: 7,
    title: 'Terms of Service',
    description: 'Read our terms of service',
  },
  {
    id: 8,
    title: 'Sign Out',
    description: 'Sign out of the app',
  },
]

const MenuContent: React.FC = () => {
  return (
    <FlatList
      data={menuList}
      renderItem={({ item }) => (
        <View className="flex w-full my-2">
          <Text className="text-white text-base font-bold py-2">
            {item.title}
          </Text>
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.6}
            className="flex w-full p-4 justify-center bg-slate-800 rounded-md">
            <Text className="text-white">{item.description}</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
      className="flex-1 px-4"
    />
  )
}

export default MenuContent
