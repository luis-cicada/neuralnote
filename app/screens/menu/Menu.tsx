import React from 'react'
import { SafeAreaView } from 'react-native'
import MenuContent from '../../components/modules/menu/MenuContent'
import MenuFooter from '../../components/modules/menu/MenuFooter'

const Menu: React.FC = () => {
  return (
    <SafeAreaView className="bg-gray-900 flex flex-1 text-white">
      <MenuContent />
      <MenuFooter />
    </SafeAreaView>
  )
}

export default Menu
