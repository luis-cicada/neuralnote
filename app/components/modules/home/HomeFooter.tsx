import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import BaseIcon from '../../partials/icons/BaseIcon'
import { IHomeFooterProps } from './types'

const HomeFooter = ({ onPress }: IHomeFooterProps) => {
  return (
    <View className="bg-blue-600 w-full flex justify-center items-center h-20 dark:bg-slate-700">
      <View className="bg-white flex size-14 rounded-full justify-center items-center">
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-red-600 flex justify-center items-center rounded-full size-12 dark:bg-gray-700"
          onPress={onPress}>
          <BaseIcon icon="MicrophoneIcon" size={28} outline />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeFooter
