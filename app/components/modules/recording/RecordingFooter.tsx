import { MotiView } from 'moti'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Easing } from 'react-native-reanimated'
import BaseTouchableWithIcon from '../../base/BaseTouchableWithIcon'
import { IRecordingFooterProps } from './types'

const _color = '#7B0000'
const _size = 15

const RecordingFooter: React.FC<IRecordingFooterProps> = _ => {
  return (
    <View className="bg-gray-900 flex flex-col w-full h-44 justify-center items-center px-12 gap-y-8">
      <View className="flex flex-row w-full justify-center items-center gap-x-2">
        <View style={[styles.dot, styles.center, styles.margin]}>
          {[...Array(2).keys()].map(index => {
            return (
              <MotiView
                key={index}
                from={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 3 }}
                transition={{
                  type: 'timing',
                  duration: 1000,
                  easing: Easing.out(Easing.ease),
                  delay: index * 400,
                  repeatReverse: false,
                  loop: true,
                }}
                style={[StyleSheet.absoluteFillObject, styles.dot]}
              />
            )
          })}
        </View>
        <Text className="text-white text-base font-bold">Recording</Text>
        <Text className="text-white text-base font-bold">00:00</Text>
      </View>
      <View className="flex flex-row w-full justify-center items-center gap-x-10">
        <BaseTouchableWithIcon
          icon="PauseIcon"
          size={24}
          onPress={() => null}
          className="bg-gray-500/60 size-12 rounded-full"
        />
        <BaseTouchableWithIcon
          icon="StopIcon"
          size={24}
          onPress={() => null}
          className="bg-gray-500/60 size-12 rounded-full"
        />
        <BaseTouchableWithIcon
          icon="TrashIcon"
          size={22}
          onPress={() => null}
          className="bg-red-500 size-10 rounded-full"
          outline
        />
      </View>
    </View>
  )
}

export default RecordingFooter

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    marginHorizontal: 12,
  },
})
