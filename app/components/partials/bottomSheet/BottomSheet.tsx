import React from 'react';
import {useColorScheme} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {IBottomSheet} from '../types';

/**
 * Renders a bottom sheet base component
 * @component
 *
 * @prop {Function} close
 * @prop {LegacyRef} refRBSheet
 * @prop {Function} open
 * @prop {ReactNode} children
 *
 * @returns   {JSX.Element}
 */
const BottomSheet = ({refRBSheet, children}: IBottomSheet) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? '#0f172a' : '#fff';

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown
      closeOnPressMask
      height={300}
      customStyles={{
        container: {
          height: '80%',
          maxHeight: 1500,
          paddingBottom: 15,
          backgroundColor: backgroundColor,
        },
        draggableIcon: {
          backgroundColor: '#FFF',
        },
      }}
      animationType="fade">
      {children}
    </RBSheet>
  );
};

export default BottomSheet;
