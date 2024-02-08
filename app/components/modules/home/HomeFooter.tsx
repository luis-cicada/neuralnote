import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import BaseIcon from '../../partials/icons/BaseIcon'
import { IHomeFooterProps } from './types'

const HomeFooter: React.FC<IHomeFooterProps> = ({ onPress }) => {
  return (
    <View className="bg-slate-700 w-full flex justify-center items-center h-20">
      <View className="bg-white flex size-14 rounded-full justify-center items-center">
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-gray-700 flex justify-center items-center rounded-full size-12"
          onPress={onPress}>
          <BaseIcon icon="MicrophoneIcon" size={28} outline />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeFooter
