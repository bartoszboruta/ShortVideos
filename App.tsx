import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { RootStackParamList} from 'types';

import Home from 'screens/Home';
import Shorts from 'screens/Shorts';
import Video from 'screens/Video';


const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Shorts" component={Shorts} />
        <RootStack.Screen name="Video" component={Video} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
