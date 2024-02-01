import React from 'react'
import { View } from 'react-native'
import RecordingContent from './RecordingContent'
import RecordingFooter from './RecordingFooter'

const RecordingPage = () => {
  return (
    <View className="bg-green-300 w-full flex flex-1 justify-around dark:bg-slate-700">
      <RecordingContent />
      <RecordingFooter />
    </View>
  )
}

export default RecordingPage
