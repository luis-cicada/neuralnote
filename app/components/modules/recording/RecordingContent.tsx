import { View, Text } from 'react-native'

const RecordingContent = () => {
  return (
    <View className="flex flex-1 px-4 py-8">
      <Text className="text-white text-xl font-bold">Recording 1</Text>
      <View className="flex flex-col w-full py-4">
        <Text className="text-white text-base font-light">Transcribing...</Text>
      </View>
    </View>
  )
}

export default RecordingContent
