import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from 'types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home(props: Props) {
  return (
    <View>
      <Pressable onPress={() => props.navigation.navigate('Shorts')}>
        <Text>Shorts</Text>
      </Pressable>
    </View>
  );
}
