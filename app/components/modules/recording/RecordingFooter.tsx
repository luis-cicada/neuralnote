import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import BaseTouchableWithIcon from '../../base/BaseTouchableWithIcon';
import {IRecordingFooterProps} from './types';

const RecordingFooter = ({progress}: IRecordingFooterProps) => {
  return (
    <View className="bg-gray-900 flex flex-col w-full h-44 justify-center items-center px-12 gap-y-4">
      <View className="flex flex-row w-full justify-center items-center gap-x-2">
        <View className="size-4 rounded-full bg-red-500" />
        <Text className="text-white text-lg font-bold">Recording...</Text>
      </View>
      <View className="flex flex-row gap-x-6 items-center">
        <Progress.Bar
          progress={progress}
          width={120}
          height={10}
          borderWidth={2}
          style={{borderRadius: 20}}
          animated
        />
        <Text className="text-white text-lg font-bold">00:00</Text>
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
  );
};

export default RecordingFooter;
