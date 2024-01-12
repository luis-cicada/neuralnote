import './global.css';

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    borderBlockColor: 'blue',
    borderWidth: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{...backgroundStyle}}
        contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            backgroundColor: 'orange',
            width: '100%',
            height: 50,
            position: 'absolute',
            top: 0,
          }}></View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            width: '100%',
            height: '30%',
            borderBlockColor: 'red',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              borderBlockColor: 'purple',
              borderWidth: 1,
              width: '100%',
              height: '50%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: '30%',
                height: '50%',
                borderBlockColor: 'black',
                borderWidth: 1,
                borderRadius: 30,
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '30%',
                height: '50%',
                borderBlockColor: 'black',
                borderWidth: 1,
                borderRadius: 30,
              }}></TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '30%',
                height: '50%',
                borderBlockColor: 'black',
                borderWidth: 1,
                borderRadius: 30,
              }}></TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: '100%',
            height: 100,
            position: 'absolute',
            bottom: 0,
          }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
