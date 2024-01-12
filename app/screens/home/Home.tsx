import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import BaseTouchableWithIcon from '../../components/base/BaseTouchableWithIcon';
import RecordingPage from '../../components/modules/recording/RecordingPage';
import BottomSheet from '../../components/partials/bottomSheet/BottomSheet';

const Home = () => {
  const refRBSheet = React.useRef<any>();

  const open = () => {
    refRBSheet.current?.open();
  };

  const close = () => {
    refRBSheet.current?.close();
  };

  return (
    <>
      <View className="bg-green-300 w-full h-14 dark:bg-slate-700">
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
              icon="ChevronDownIcon"
              onPress={() => null}
              size={24}
            />
          </View>
        </View>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className="bg-green-600 w-full h-full flex flex-1 px-5 py-4 dark:bg-slate-900">
        <Text className="font-bold font-lg dark:text-white">Scroll View</Text>
      </ScrollView>
      <View className="bg-blue-600 w-full flex justify-center items-center h-20 dark:bg-slate-700">
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex justify-center items-center bg-blue-800 px-12 py-2 rounded-full dark:bg-blue-500"
          onPress={open}>
          <Text className="text-white font-bold text-xl">Record</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet refRBSheet={refRBSheet} open={open} close={close}>
        <RecordingPage />
      </BottomSheet>
    </>
  );
};

export default Home;
