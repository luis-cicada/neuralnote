import React from 'react';
import {View} from 'react-native';
import rnSoundLevelMonitor from 'react-native-sound-level-monitor';
import RecordingContent from './RecordingContent';
import RecordingFooter from './RecordingFooter';

const soundLevelMonitor = rnSoundLevelMonitor();

const RecordingPage = () => {
  const [loudness, setLoudness] = React.useState(-60);

  React.useEffect(() => {
    const removeListener = soundLevelMonitor.addListener(data => {
      setLoudness(data.value);
    });

    return removeListener;
  }, []);

  React.useEffect(() => {
    soundLevelMonitor.start();
    return soundLevelMonitor.stop;
  }, []);

  const progress = React.useMemo(() => (loudness + 60) / 70, [loudness]);

  return (
    <View className="bg-green-300 w-full flex flex-1 justify-around dark:bg-slate-700">
      <RecordingContent />
      <RecordingFooter progress={progress} />
    </View>
  );
};

export default RecordingPage;
