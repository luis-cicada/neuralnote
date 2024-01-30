import { FlatList, SafeAreaView, Text, View } from 'react-native'
import BaseTouchableWithIcon from '../../base/BaseTouchableWithIcon'

const recordingList = [
  {
    id: 1,
    title: 'Recording 1',
    date: '2021-09-18',
    duration: '00:00:00',
  },
  {
    id: 2,
    title: 'Recording 2',
    date: '2021-09-18',
    duration: '00:00:00',
  },
  {
    id: 3,
    title: 'Recording 3',
    date: '2021-09-18',
    duration: '00:00:00',
  },
  {
    id: 4,
    title: 'Recording 4',
    date: '2021-09-18',
    duration: '00:00:00',
  },
  {
    id: 5,
    title: 'Recording 5',
    date: '2021-09-18',
    duration: '00:00:00',
  },
  {
    id: 6,
    title: 'Recording 6',
    date: '2021-09-18',
    duration: '00:00:00',
  },
  {
    id: 7,
    title: 'Recording 7',
    date: '2021-09-18',
    duration: '00:00:00',
  },
  {
    id: 8,
    title: 'Recording 8',
    date: '2021-09-18',
    duration: '00:00:00',
  },
  {
    id: 9,
    title: 'Recording 9',
    date: '2021-09-18',
    duration: '00:00:00',
  },
  {
    id: 10,
    title: 'Recording 10',
    date: '2021-09-18',
    duration: '00:00:00',
  },
]

const HomeRecordings = () => {
  return (
    <SafeAreaView className="bg-green-600 w-full h-full flex flex-1 dark:bg-gray-900">
      <FlatList
        data={recordingList}
        renderItem={({ item }) => (
          <View className="flex flex-row w-full justify-between items-center px-4 py-8 border-b-2 border-green-900 gap-x-8 dark:border-gray-400 dark:bg-slate-900">
            <View className="flex flex-1 flex-row justify-between items-center">
              <BaseTouchableWithIcon
                icon="PlayIcon"
                onPress={() => null}
                size={24}
                outline
              />
              <Text className="text-white font-bold text-lg">{item.title}</Text>
              <Text className="text-white font-bold text-lg">{item.date}</Text>
              <Text className="text-white font-bold text-lg">
                {item.duration}
              </Text>
              <BaseTouchableWithIcon
                icon="EllipsisHorizontalCircleIcon"
                onPress={() => null}
                size={28}
                outline
              />
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default HomeRecordings
