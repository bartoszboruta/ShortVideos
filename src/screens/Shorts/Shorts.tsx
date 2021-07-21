import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList, Video} from 'types';
import ShortVideo from 'components/ShortVideo';

import verticalVideos from 'assets/VerticalVideos/index';

type ShortsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Shorts'
>;

type Props = {
  navigation: ShortsScreenNavigationProp;
};

export default function Shorts(props: Props) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    fetchVideos();
  }, []);

  const renderShortVideo = useCallback(
    ({item, index}: {item: Video; index: number}) => {
      return <ShortVideo visible={index === visibleIndex} video={item} />;
    },
    [visibleIndex],
  );

  const onViewableItemsChanged = useCallback((items: any) => {
    setVisibleIndex(parseInt(items?.viewableItems?.[0]?.key));
  }, []);

  const fetchVideos = async () => {
    setVideos(
      verticalVideos.map((video, index) => ({
        id: index,
        width: 100,
        height: 100,
        url: video,
        full_res: null,
        image: '',
        duration: 100,
        user: {id: 1, name: 'test', url: ''},
        video_files: [],
        video_pictures: [],
        avg_color: null,
        tags: [],
      })),
    );
    setLoading(false);
  };

  if (loading) {
    return null;
  }

  return (
    <View>
      <FlatList
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        pagingEnabled={true}
        data={videos}
        keyExtractor={item => item?.id?.toString()}
        renderItem={renderShortVideo}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
