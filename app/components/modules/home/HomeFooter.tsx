import {TouchableOpacity, View} from 'react-native';
import {IHomeFooterProps} from './types';
import BaseIcon from '../../partials/icons/BaseIcon';

const HomeFooter = ({onPress}: IHomeFooterProps) => {
  return (
    <View className="bg-blue-600 w-full flex justify-center items-center h-20 dark:bg-slate-700">
      <View className="bg-white flex size-14 rounded-full justify-center items-center">
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-red-700 flex justify-center items-center rounded-full size-12"
          onPress={onPress}>
          <BaseIcon icon="MicrophoneIcon" size={28} outline />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeFooter;
