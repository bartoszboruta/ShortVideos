import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from 'types';

type VideoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Video'
>;

type VideoScreenRouteProp = RouteProp<RootStackParamList, 'Video'>;

type Props = {
  navigation: VideoScreenNavigationProp;
  route: VideoScreenRouteProp;
};

export default function Video(props: Props) {
  console.log(props.route.params.id);
  return (
    <View>
      <Text></Text>
    </View>
  );
}
