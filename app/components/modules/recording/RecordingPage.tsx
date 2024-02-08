import React from 'react'
import { View } from 'react-native'
import RecordingContent from './RecordingContent'
import RecordingFooter from './RecordingFooter'

const RecordingPage: React.FC = () => {
  return (
    <View className="bg-slate-700 w-full flex flex-1 justify-around">
      <RecordingContent />
      <RecordingFooter />
    </View>
  )
}

export default RecordingPage
