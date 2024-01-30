import React from 'react'
import { Text, View } from 'react-native'
import BaseTouchableWithIcon from '../../base/BaseTouchableWithIcon'
import { IHomeHeaderProps } from './types'

const HomeHeader = ({ order, setOrder }: IHomeHeaderProps) => {
  return (
    <View className="bg-green-300 w-full h-14 border-b-2 border-green-900 dark:bg-slate-700 dark:border-gray-400">
      <View className="flex flex-1 flex-row w-full items-center justify-between px-4">
        <View className="flex flex-1 flex-row gap-x-3">
          <BaseTouchableWithIcon
            icon="FolderPlusIcon"
            onPress={() => null}
            size={28}
          />
          <BaseTouchableWithIcon
            icon="Squares2X2Icon"
            onPress={() => null}
            size={28}
            outline
          />
          <BaseTouchableWithIcon
            icon="MagnifyingGlassIcon"
            onPress={() => null}
            size={28}
          />
        </View>
        <View className="flex flex-1 flex-row justify-end items-center gap-x-1">
          <Text className="text-green-600 font-bold text-lg dark:text-blue-500">
            Date Created
          </Text>
          <BaseTouchableWithIcon
            icon={order === 'desc' ? 'ChevronDownIcon' : 'ChevronUpIcon'}
            onPress={() => {
              if (order === 'desc') {
                setOrder('asc')
              } else {
                setOrder('desc')
              }
            }}
            size={24}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader
