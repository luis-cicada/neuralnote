import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import {AppStackParamList, AppStackScreens} from './types';
import {useColorScheme} from 'react-native';

const Stack = createStackNavigator<AppStackParamList>();

const StackNavigator: React.FC<AppStackParamList> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? '#0f172a' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <Stack.Navigator
      initialRouteName={AppStackScreens.HOME}
      screenOptions={{headerShown: true}}>
      <Stack.Screen
        name={AppStackScreens.HOME}
        component={Home}
        options={{
          headerTitle: 'Voice Notes',
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTitleStyle: {color: textColor, fontWeight: '700'},
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
