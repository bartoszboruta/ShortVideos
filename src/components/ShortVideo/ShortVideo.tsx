import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';

import {Video as VideoType} from 'types';
import styles from './styles';

type Props = {
  video: VideoType;
  visible: boolean;
};

export default function Home(props: Props) {
  const [paused, setPaused] = useState(!props.visible);
  const ref = useRef(null);

  useEffect(() => {
    setPaused(!props.visible);
    ref?.current?.seek(0);
  }, [props.visible]);

  return (
    <View style={styles.container}>
      <Video
        paused={paused}
        resizeMode="cover"
        source={props.video.url}
        style={styles.backgroundVideo}
        ref={ref}
      />
    </View>
  );
}
