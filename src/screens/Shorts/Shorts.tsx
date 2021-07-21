import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {createClient} from 'pexels';
import {RootStackParamList} from 'types';

type ShortsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Shorts'
>;

type Props = {
  navigation: ShortsScreenNavigationProp;
};

type User = {
  id: number;
  name: string;
  url: string;
};

type VideoFile = {
  id: number;
  quality: string;
  file_type: string;
  width: number | null;
  height: number | null;
  link: string;
};

type Tag = {};

type VideoPicture = {
  id: number;
  nr: number;
  picture: string;
};

type Video = {
  id: number;
  width: number;
  height: number;
  url: string;
  full_res: string | null;
  image: string;
  duration: number;
  user: User;
  video_files: VideoFile[];
  video_pictures: VideoPicture[];
  avg_color: null;
  tags: Tag[];
};

type VideosData = {
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  videos: Video[];
  next_page: string;
};

export default function Shorts(props: Props) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setLoading(false);
    // const client = createClient(
    //   '563492ad6f917000010000015b4970a2c00d42b3a1b2fdf43ab97e98',
    // );

    // client.videos
    //   .popular({
    //     per_page: 10,
    //     min_height: 2000,
    //     min_width: 900,
    //     max_duration: 15,
    //   })
    //   .then(videos => {
    //     console.log(JSON.stringify(videos, null, 2));
    //   });
    setVideos(response.videos);
  };

  return <View></View>;
}

// temp solution - do not abuse api limits
const response: VideosData = {
  page: 1,
  per_page: 10,
  videos: [
    {
      id: 856973,
      width: 4096,
      height: 2304,
      duration: 14,
      full_res: null,
      tags: [],
      url: 'https://www.pexels.com/video/time-lapse-video-sunset-856973/',
      image:
        'https://images.pexels.com/videos/856973/free-video-856973.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      avg_color: null,
      user: {
        id: 2659,
        name: 'Pixabay',
        url: 'https://www.pexels.com/@pixabay',
      },
      video_files: [
        {
          id: 352634,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2560,
          height: 1440,
          link: 'https://player.vimeo.com/external/226685105.hd.mp4?s=b6a194faf216cac660ec198e72b4e939cd74dee3&profile_id=170&oauth2_token_id=57447761',
        },
        {
          id: 352635,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1280,
          height: 720,
          link: 'https://player.vimeo.com/external/226685105.hd.mp4?s=b6a194faf216cac660ec198e72b4e939cd74dee3&profile_id=174&oauth2_token_id=57447761',
        },
        {
          id: 352636,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 640,
          height: 360,
          link: 'https://player.vimeo.com/external/226685105.sd.mp4?s=90e56fbbb50fbc68a850f8db3f051c7465bfef71&profile_id=164&oauth2_token_id=57447761',
        },
        {
          id: 352637,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 3840,
          height: 2160,
          link: 'https://player.vimeo.com/external/226685105.hd.mp4?s=b6a194faf216cac660ec198e72b4e939cd74dee3&profile_id=172&oauth2_token_id=57447761',
        },
        {
          id: 352638,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1920,
          height: 1080,
          link: 'https://player.vimeo.com/external/226685105.hd.mp4?s=b6a194faf216cac660ec198e72b4e939cd74dee3&profile_id=175&oauth2_token_id=57447761',
        },
        {
          id: 352639,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 960,
          height: 540,
          link: 'https://player.vimeo.com/external/226685105.sd.mp4?s=90e56fbbb50fbc68a850f8db3f051c7465bfef71&profile_id=165&oauth2_token_id=57447761',
        },
        {
          id: 352640,
          quality: 'hls',
          file_type: 'video/mp4',
          width: null,
          height: null,
          link: 'https://player.vimeo.com/external/226685105.m3u8?s=95c3e7835aed7eea99a3580bc443be6a2b988e0a&oauth2_token_id=57447761',
        },
      ],
      video_pictures: [
        {
          id: 58274,
          nr: 0,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-0.jpg',
        },
        {
          id: 58275,
          nr: 1,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-1.jpg',
        },
        {
          id: 58276,
          nr: 2,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-2.jpg',
        },
        {
          id: 58277,
          nr: 3,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-3.jpg',
        },
        {
          id: 58278,
          nr: 4,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-4.jpg',
        },
        {
          id: 58279,
          nr: 5,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-5.jpg',
        },
        {
          id: 58280,
          nr: 6,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-6.jpg',
        },
        {
          id: 58281,
          nr: 7,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-7.jpg',
        },
        {
          id: 58282,
          nr: 8,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-8.jpg',
        },
        {
          id: 58283,
          nr: 9,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-9.jpg',
        },
        {
          id: 58284,
          nr: 10,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-10.jpg',
        },
        {
          id: 58285,
          nr: 11,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-11.jpg',
        },
        {
          id: 58286,
          nr: 12,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-12.jpg',
        },
        {
          id: 58287,
          nr: 13,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-13.jpg',
        },
        {
          id: 58288,
          nr: 14,
          picture:
            'https://images.pexels.com/videos/856973/pictures/preview-14.jpg',
        },
      ],
    },
    {
      id: 1394254,
      width: 4096,
      height: 2160,
      duration: 9,
      full_res: null,
      tags: [],
      url: 'https://www.pexels.com/video/video-of-car-travelling-1394254/',
      image:
        'https://images.pexels.com/videos/1394254/free-video-1394254.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      avg_color: null,
      user: {
        id: 574687,
        name: 'Ruvim Miksanskiy',
        url: 'https://www.pexels.com/@digitech',
      },
      video_files: [
        {
          id: 56367,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 640,
          height: 338,
          link: 'https://player.vimeo.com/external/288484037.sd.mp4?s=4b5e8ae728da50876e684a5c64626760b314bf00&profile_id=164&oauth2_token_id=57447761',
        },
        {
          id: 56368,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 4096,
          height: 2160,
          link: 'https://player.vimeo.com/external/288484037.hd.mp4?s=c8a840414fc4792144c9be81687413c31e663acb&profile_id=172&oauth2_token_id=57447761',
        },
        {
          id: 56369,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2048,
          height: 1080,
          link: 'https://player.vimeo.com/external/288484037.hd.mp4?s=c8a840414fc4792144c9be81687413c31e663acb&profile_id=175&oauth2_token_id=57447761',
        },
        {
          id: 56370,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1366,
          height: 720,
          link: 'https://player.vimeo.com/external/288484037.hd.mp4?s=c8a840414fc4792144c9be81687413c31e663acb&profile_id=174&oauth2_token_id=57447761',
        },
        {
          id: 56371,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 960,
          height: 506,
          link: 'https://player.vimeo.com/external/288484037.sd.mp4?s=4b5e8ae728da50876e684a5c64626760b314bf00&profile_id=165&oauth2_token_id=57447761',
        },
        {
          id: 56372,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2732,
          height: 1440,
          link: 'https://player.vimeo.com/external/288484037.hd.mp4?s=c8a840414fc4792144c9be81687413c31e663acb&profile_id=170&oauth2_token_id=57447761',
        },
        {
          id: 56373,
          quality: 'hls',
          file_type: 'video/mp4',
          width: null,
          height: null,
          link: 'https://player.vimeo.com/external/288484037.m3u8?s=836da26f97b6ca1212a8d7ef233775319b1360b7&oauth2_token_id=57447761',
        },
      ],
      video_pictures: [
        {
          id: 126440,
          nr: 0,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-0.jpg',
        },
        {
          id: 126441,
          nr: 1,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-1.jpg',
        },
        {
          id: 126442,
          nr: 2,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-2.jpg',
        },
        {
          id: 126443,
          nr: 3,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-3.jpg',
        },
        {
          id: 126444,
          nr: 4,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-4.jpg',
        },
        {
          id: 126445,
          nr: 5,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-5.jpg',
        },
        {
          id: 126446,
          nr: 6,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-6.jpg',
        },
        {
          id: 126447,
          nr: 7,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-7.jpg',
        },
        {
          id: 126448,
          nr: 8,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-8.jpg',
        },
        {
          id: 126449,
          nr: 9,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-9.jpg',
        },
        {
          id: 126450,
          nr: 10,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-10.jpg',
        },
        {
          id: 126451,
          nr: 11,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-11.jpg',
        },
        {
          id: 126452,
          nr: 12,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-12.jpg',
        },
        {
          id: 126453,
          nr: 13,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-13.jpg',
        },
        {
          id: 126454,
          nr: 14,
          picture:
            'https://images.pexels.com/videos/1394254/pictures/preview-14.jpg',
        },
      ],
    },
    {
      id: 3640624,
      width: 3840,
      height: 2160,
      duration: 9,
      full_res: null,
      tags: [],
      url: 'https://www.pexels.com/video/a-colorful-sunset-by-the-beach-3640624/',
      image:
        'https://images.pexels.com/videos/3640624/free-video-3640624.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      avg_color: null,
      user: {
        id: 2007755,
        name: 'Cinema  Professionals',
        url: 'https://www.pexels.com/@cinema-professionals-2007755',
      },
      video_files: [
        {
          id: 382342,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1280,
          height: 720,
          link: 'https://player.vimeo.com/external/387695871.hd.mp4?s=f305d8d33d5052183d016550deb4ad5cceb9673e&profile_id=174&oauth2_token_id=57447761',
        },
        {
          id: 382343,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 3840,
          height: 2160,
          link: 'https://player.vimeo.com/external/387695871.hd.mp4?s=f305d8d33d5052183d016550deb4ad5cceb9673e&profile_id=172&oauth2_token_id=57447761',
        },
        {
          id: 382344,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2560,
          height: 1440,
          link: 'https://player.vimeo.com/external/387695871.hd.mp4?s=f305d8d33d5052183d016550deb4ad5cceb9673e&profile_id=170&oauth2_token_id=57447761',
        },
        {
          id: 382345,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1920,
          height: 1080,
          link: 'https://player.vimeo.com/external/387695871.hd.mp4?s=f305d8d33d5052183d016550deb4ad5cceb9673e&profile_id=175&oauth2_token_id=57447761',
        },
        {
          id: 382346,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 960,
          height: 540,
          link: 'https://player.vimeo.com/external/387695871.sd.mp4?s=3ba030a7d46293fec8dc4ec3b541ca4f2ca837ea&profile_id=165&oauth2_token_id=57447761',
        },
        {
          id: 382347,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 640,
          height: 360,
          link: 'https://player.vimeo.com/external/387695871.sd.mp4?s=3ba030a7d46293fec8dc4ec3b541ca4f2ca837ea&profile_id=164&oauth2_token_id=57447761',
        },
        {
          id: 382348,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 426,
          height: 240,
          link: 'https://player.vimeo.com/external/387695871.sd.mp4?s=3ba030a7d46293fec8dc4ec3b541ca4f2ca837ea&profile_id=139&oauth2_token_id=57447761',
        },
        {
          id: 382349,
          quality: 'hls',
          file_type: 'video/mp4',
          width: null,
          height: null,
          link: 'https://player.vimeo.com/external/387695871.m3u8?s=74f6105a5d8dd640df0e44f6516f22039cb8c3d5&oauth2_token_id=57447761',
        },
      ],
      video_pictures: [
        {
          id: 844809,
          nr: 0,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-0.jpg',
        },
        {
          id: 844810,
          nr: 1,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-1.jpg',
        },
        {
          id: 844811,
          nr: 2,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-2.jpg',
        },
        {
          id: 844812,
          nr: 3,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-3.jpg',
        },
        {
          id: 844813,
          nr: 4,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-4.jpg',
        },
        {
          id: 844814,
          nr: 5,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-5.jpg',
        },
        {
          id: 844815,
          nr: 6,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-6.jpg',
        },
        {
          id: 844816,
          nr: 7,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-7.jpg',
        },
        {
          id: 844817,
          nr: 8,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-8.jpg',
        },
        {
          id: 844818,
          nr: 9,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-9.jpg',
        },
        {
          id: 844819,
          nr: 10,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-10.jpg',
        },
        {
          id: 844820,
          nr: 11,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-11.jpg',
        },
        {
          id: 844821,
          nr: 12,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-12.jpg',
        },
        {
          id: 844822,
          nr: 13,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-13.jpg',
        },
        {
          id: 844823,
          nr: 14,
          picture:
            'https://images.pexels.com/videos/3640624/pictures/preview-14.jpg',
        },
      ],
    },
    {
      id: 1918465,
      width: 3840,
      height: 2160,
      duration: 15,
      full_res: null,
      tags: [],
      url: 'https://www.pexels.com/video/bird-s-eye-view-of-ocean-waves-1918465/',
      image:
        'https://images.pexels.com/videos/1918465/free-video-1918465.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      avg_color: null,
      user: {
        id: 574687,
        name: 'Ruvim Miksanskiy',
        url: 'https://www.pexels.com/@digitech',
      },
      video_files: [
        {
          id: 80278,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2560,
          height: 1440,
          link: 'https://player.vimeo.com/external/317887716.hd.mp4?s=34c0c277af1eba7238d77b6896016e29acccfbc0&profile_id=170&oauth2_token_id=57447761',
        },
        {
          id: 80279,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 3840,
          height: 2160,
          link: 'https://player.vimeo.com/external/317887716.hd.mp4?s=34c0c277af1eba7238d77b6896016e29acccfbc0&profile_id=172&oauth2_token_id=57447761',
        },
        {
          id: 80280,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1280,
          height: 720,
          link: 'https://player.vimeo.com/external/317887716.hd.mp4?s=34c0c277af1eba7238d77b6896016e29acccfbc0&profile_id=174&oauth2_token_id=57447761',
        },
        {
          id: 80281,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1920,
          height: 1080,
          link: 'https://player.vimeo.com/external/317887716.hd.mp4?s=34c0c277af1eba7238d77b6896016e29acccfbc0&profile_id=175&oauth2_token_id=57447761',
        },
        {
          id: 80282,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 640,
          height: 360,
          link: 'https://player.vimeo.com/external/317887716.sd.mp4?s=15a0a7652fca437e299a82df7e9a43a74d6f2ade&profile_id=164&oauth2_token_id=57447761',
        },
        {
          id: 80283,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 960,
          height: 540,
          link: 'https://player.vimeo.com/external/317887716.sd.mp4?s=15a0a7652fca437e299a82df7e9a43a74d6f2ade&profile_id=165&oauth2_token_id=57447761',
        },
        {
          id: 80284,
          quality: 'hls',
          file_type: 'video/mp4',
          width: null,
          height: null,
          link: 'https://player.vimeo.com/external/317887716.m3u8?s=9ba623ecb9b58065c5af70f2c89b7699ba693c42&oauth2_token_id=57447761',
        },
      ],
      video_pictures: [
        {
          id: 195135,
          nr: 0,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-0.jpg',
        },
        {
          id: 195136,
          nr: 1,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-1.jpg',
        },
        {
          id: 195137,
          nr: 2,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-2.jpg',
        },
        {
          id: 195138,
          nr: 3,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-3.jpg',
        },
        {
          id: 195139,
          nr: 4,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-4.jpg',
        },
        {
          id: 195140,
          nr: 5,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-5.jpg',
        },
        {
          id: 195141,
          nr: 6,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-6.jpg',
        },
        {
          id: 195142,
          nr: 7,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-7.jpg',
        },
        {
          id: 195143,
          nr: 8,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-8.jpg',
        },
        {
          id: 195144,
          nr: 9,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-9.jpg',
        },
        {
          id: 195145,
          nr: 10,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-10.jpg',
        },
        {
          id: 195146,
          nr: 11,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-11.jpg',
        },
        {
          id: 195147,
          nr: 12,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-12.jpg',
        },
        {
          id: 195148,
          nr: 13,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-13.jpg',
        },
        {
          id: 195149,
          nr: 14,
          picture:
            'https://images.pexels.com/videos/1918465/pictures/preview-14.jpg',
        },
      ],
    },
    {
      id: 4065917,
      width: 4096,
      height: 2160,
      duration: 4,
      full_res: null,
      tags: [],
      url: 'https://www.pexels.com/video/man-love-art-faceless-4065917/',
      image:
        'https://images.pexels.com/videos/4065917/pexels-photo-4065917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      avg_color: null,
      user: {
        id: 1437723,
        name: 'cottonbro',
        url: 'https://www.pexels.com/@cottonbro',
      },
      video_files: [
        {
          id: 549166,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2048,
          height: 1080,
          link: 'https://player.vimeo.com/external/403662486.hd.mp4?s=057145729f0fc0e0dab84a10e9cd9b4ffd7cfc22&profile_id=175&oauth2_token_id=57447761',
        },
        {
          id: 549167,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 960,
          height: 506,
          link: 'https://player.vimeo.com/external/403662486.sd.mp4?s=69904b97740e93b837188de1d3aa288980787936&profile_id=165&oauth2_token_id=57447761',
        },
        {
          id: 549168,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 4096,
          height: 2160,
          link: 'https://player.vimeo.com/external/403662486.hd.mp4?s=057145729f0fc0e0dab84a10e9cd9b4ffd7cfc22&profile_id=173&oauth2_token_id=57447761',
        },
        {
          id: 549169,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2048,
          height: 1080,
          link: 'https://player.vimeo.com/external/403662486.hd.mp4?s=057145729f0fc0e0dab84a10e9cd9b4ffd7cfc22&profile_id=169&oauth2_token_id=57447761',
        },
        {
          id: 549170,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1366,
          height: 720,
          link: 'https://player.vimeo.com/external/403662486.hd.mp4?s=057145729f0fc0e0dab84a10e9cd9b4ffd7cfc22&profile_id=174&oauth2_token_id=57447761',
        },
        {
          id: 549171,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2732,
          height: 1440,
          link: 'https://player.vimeo.com/external/403662486.hd.mp4?s=057145729f0fc0e0dab84a10e9cd9b4ffd7cfc22&profile_id=170&oauth2_token_id=57447761',
        },
        {
          id: 549172,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2732,
          height: 1440,
          link: 'https://player.vimeo.com/external/403662486.hd.mp4?s=057145729f0fc0e0dab84a10e9cd9b4ffd7cfc22&profile_id=171&oauth2_token_id=57447761',
        },
        {
          id: 549173,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 640,
          height: 338,
          link: 'https://player.vimeo.com/external/403662486.sd.mp4?s=69904b97740e93b837188de1d3aa288980787936&profile_id=164&oauth2_token_id=57447761',
        },
        {
          id: 549174,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 4096,
          height: 2160,
          link: 'https://player.vimeo.com/external/403662486.hd.mp4?s=057145729f0fc0e0dab84a10e9cd9b4ffd7cfc22&profile_id=172&oauth2_token_id=57447761',
        },
        {
          id: 549175,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 426,
          height: 226,
          link: 'https://player.vimeo.com/external/403662486.sd.mp4?s=69904b97740e93b837188de1d3aa288980787936&profile_id=139&oauth2_token_id=57447761',
        },
        {
          id: 549176,
          quality: 'hls',
          file_type: 'video/mp4',
          width: null,
          height: null,
          link: 'https://player.vimeo.com/external/403662486.m3u8?s=39085c58bccb26d1a2b8eddc92f6a3eb4d8cfd70&oauth2_token_id=57447761',
        },
      ],
      video_pictures: [
        {
          id: 1115945,
          nr: 0,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-0.jpg',
        },
        {
          id: 1115946,
          nr: 1,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-1.jpg',
        },
        {
          id: 1115951,
          nr: 2,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-2.jpg',
        },
        {
          id: 1115957,
          nr: 3,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-3.jpg',
        },
        {
          id: 1115962,
          nr: 4,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-4.jpg',
        },
        {
          id: 1115976,
          nr: 5,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-5.jpg',
        },
        {
          id: 1115982,
          nr: 6,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-6.jpg',
        },
        {
          id: 1115990,
          nr: 7,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-7.jpg',
        },
        {
          id: 1115998,
          nr: 8,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-8.jpg',
        },
        {
          id: 1116005,
          nr: 9,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-9.jpg',
        },
        {
          id: 1116012,
          nr: 10,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-10.jpg',
        },
        {
          id: 1116022,
          nr: 11,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-11.jpg',
        },
        {
          id: 1116036,
          nr: 12,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-12.jpg',
        },
        {
          id: 1116052,
          nr: 13,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-13.jpg',
        },
        {
          id: 1116062,
          nr: 14,
          picture:
            'https://images.pexels.com/videos/4065917/pictures/preview-14.jpg',
        },
      ],
    },
    {
      id: 1110140,
      width: 3840,
      height: 2160,
      duration: 6,
      full_res: null,
      tags: [],
      url: 'https://www.pexels.com/video/time-lapse-of-sunset-1110140/',
      image:
        'https://images.pexels.com/videos/1110140/free-video-1110140.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      avg_color: null,
      user: {
        id: 344572,
        name: 'Felix Mittermeier',
        url: 'https://www.pexels.com/@felixmittermeier',
      },
      video_files: [
        {
          id: 38202,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1280,
          height: 720,
          link: 'https://player.vimeo.com/external/271510997.hd.mp4?s=09438f2556bc75ada9d8b69908d42463e9d12e3a&profile_id=174&oauth2_token_id=57447761',
        },
        {
          id: 38203,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2560,
          height: 1440,
          link: 'https://player.vimeo.com/external/271510997.hd.mp4?s=09438f2556bc75ada9d8b69908d42463e9d12e3a&profile_id=171&oauth2_token_id=57447761',
        },
        {
          id: 38204,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 3840,
          height: 2160,
          link: 'https://player.vimeo.com/external/271510997.hd.mp4?s=09438f2556bc75ada9d8b69908d42463e9d12e3a&profile_id=172&oauth2_token_id=57447761',
        },
        {
          id: 38205,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2560,
          height: 1440,
          link: 'https://player.vimeo.com/external/271510997.hd.mp4?s=09438f2556bc75ada9d8b69908d42463e9d12e3a&profile_id=170&oauth2_token_id=57447761',
        },
        {
          id: 38206,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1920,
          height: 1080,
          link: 'https://player.vimeo.com/external/271510997.hd.mp4?s=09438f2556bc75ada9d8b69908d42463e9d12e3a&profile_id=175&oauth2_token_id=57447761',
        },
        {
          id: 38207,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 960,
          height: 540,
          link: 'https://player.vimeo.com/external/271510997.sd.mp4?s=4cf911b949066ba984a9535427043fc5c8fbef22&profile_id=165&oauth2_token_id=57447761',
        },
        {
          id: 38208,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 640,
          height: 360,
          link: 'https://player.vimeo.com/external/271510997.sd.mp4?s=4cf911b949066ba984a9535427043fc5c8fbef22&profile_id=164&oauth2_token_id=57447761',
        },
        {
          id: 38209,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 3840,
          height: 2160,
          link: 'https://player.vimeo.com/external/271510997.hd.mp4?s=09438f2556bc75ada9d8b69908d42463e9d12e3a&profile_id=173&oauth2_token_id=57447761',
        },
        {
          id: 38210,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1920,
          height: 1080,
          link: 'https://player.vimeo.com/external/271510997.hd.mp4?s=09438f2556bc75ada9d8b69908d42463e9d12e3a&profile_id=169&oauth2_token_id=57447761',
        },
        {
          id: 38211,
          quality: 'hls',
          file_type: 'video/mp4',
          width: null,
          height: null,
          link: 'https://player.vimeo.com/external/271510997.m3u8?s=7261040718a2a51ebd9e792877d10923c3ac6747&oauth2_token_id=57447761',
        },
      ],
      video_pictures: [
        {
          id: 81406,
          nr: 0,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-0.jpg',
        },
        {
          id: 81407,
          nr: 1,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-1.jpg',
        },
        {
          id: 81408,
          nr: 2,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-2.jpg',
        },
        {
          id: 81409,
          nr: 3,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-3.jpg',
        },
        {
          id: 81410,
          nr: 4,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-4.jpg',
        },
        {
          id: 81411,
          nr: 5,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-5.jpg',
        },
        {
          id: 81412,
          nr: 6,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-6.jpg',
        },
        {
          id: 81413,
          nr: 7,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-7.jpg',
        },
        {
          id: 81414,
          nr: 8,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-8.jpg',
        },
        {
          id: 81415,
          nr: 9,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-9.jpg',
        },
        {
          id: 81416,
          nr: 10,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-10.jpg',
        },
        {
          id: 81417,
          nr: 11,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-11.jpg',
        },
        {
          id: 81418,
          nr: 12,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-12.jpg',
        },
        {
          id: 81419,
          nr: 13,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-13.jpg',
        },
        {
          id: 81420,
          nr: 14,
          picture:
            'https://images.pexels.com/videos/1110140/pictures/preview-14.jpg',
        },
      ],
    },
    {
      id: 1911457,
      width: 3840,
      height: 2160,
      duration: 15,
      full_res: null,
      tags: [],
      url: 'https://www.pexels.com/video/a-foggy-landscape-1911457/',
      image:
        'https://images.pexels.com/videos/1911457/free-video-1911457.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      avg_color: null,
      user: {
        id: 574687,
        name: 'Ruvim Miksanskiy',
        url: 'https://www.pexels.com/@digitech',
      },
      video_files: [
        {
          id: 80081,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1920,
          height: 1080,
          link: 'https://player.vimeo.com/external/317623578.hd.mp4?s=a4674c5c71000df2cc7560504a97408df3609e76&profile_id=175&oauth2_token_id=57447761',
        },
        {
          id: 80082,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 3840,
          height: 2160,
          link: 'https://player.vimeo.com/external/317623578.hd.mp4?s=a4674c5c71000df2cc7560504a97408df3609e76&profile_id=172&oauth2_token_id=57447761',
        },
        {
          id: 80083,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 960,
          height: 540,
          link: 'https://player.vimeo.com/external/317623578.sd.mp4?s=af98802d6bb3d75edb6fd92e67c3756ddb1ebfa8&profile_id=165&oauth2_token_id=57447761',
        },
        {
          id: 80084,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2560,
          height: 1440,
          link: 'https://player.vimeo.com/external/317623578.hd.mp4?s=a4674c5c71000df2cc7560504a97408df3609e76&profile_id=170&oauth2_token_id=57447761',
        },
        {
          id: 80085,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 640,
          height: 360,
          link: 'https://player.vimeo.com/external/317623578.sd.mp4?s=af98802d6bb3d75edb6fd92e67c3756ddb1ebfa8&profile_id=164&oauth2_token_id=57447761',
        },
        {
          id: 80086,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1280,
          height: 720,
          link: 'https://player.vimeo.com/external/317623578.hd.mp4?s=a4674c5c71000df2cc7560504a97408df3609e76&profile_id=174&oauth2_token_id=57447761',
        },
        {
          id: 80087,
          quality: 'hls',
          file_type: 'video/mp4',
          width: null,
          height: null,
          link: 'https://player.vimeo.com/external/317623578.m3u8?s=9c20f991305b3e382a365f07950352539e791baf&oauth2_token_id=57447761',
        },
      ],
      video_pictures: [
        {
          id: 194550,
          nr: 0,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-0.jpg',
        },
        {
          id: 194551,
          nr: 1,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-1.jpg',
        },
        {
          id: 194552,
          nr: 2,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-2.jpg',
        },
        {
          id: 194553,
          nr: 3,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-3.jpg',
        },
        {
          id: 194554,
          nr: 4,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-4.jpg',
        },
        {
          id: 194555,
          nr: 5,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-5.jpg',
        },
        {
          id: 194556,
          nr: 6,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-6.jpg',
        },
        {
          id: 194557,
          nr: 7,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-7.jpg',
        },
        {
          id: 194558,
          nr: 8,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-8.jpg',
        },
        {
          id: 194559,
          nr: 9,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-9.jpg',
        },
        {
          id: 194560,
          nr: 10,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-10.jpg',
        },
        {
          id: 194561,
          nr: 11,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-11.jpg',
        },
        {
          id: 194562,
          nr: 12,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-12.jpg',
        },
        {
          id: 194563,
          nr: 13,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-13.jpg',
        },
        {
          id: 194564,
          nr: 14,
          picture:
            'https://images.pexels.com/videos/1911457/pictures/preview-14.jpg',
        },
      ],
    },
    {
      id: 4155513,
      width: 4096,
      height: 2160,
      duration: 14,
      full_res: null,
      tags: [],
      url: 'https://www.pexels.com/video/feet-legs-water-waves-4155513/',
      image:
        'https://images.pexels.com/videos/4155513/pexels-photo-4155513.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      avg_color: null,
      user: {
        id: 1437723,
        name: 'cottonbro',
        url: 'https://www.pexels.com/@cottonbro',
      },
      video_files: [
        {
          id: 594434,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 4096,
          height: 2160,
          link: 'https://player.vimeo.com/external/407671485.hd.mp4?s=31caa3f4bdbd81c0b70150d61b16bfd8a290a04f&profile_id=172&oauth2_token_id=57447761',
        },
        {
          id: 594435,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 426,
          height: 226,
          link: 'https://player.vimeo.com/external/407671485.sd.mp4?s=9a75b0f220057a1fedb4706dad1c3282210179e2&profile_id=139&oauth2_token_id=57447761',
        },
        {
          id: 594436,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2048,
          height: 1080,
          link: 'https://player.vimeo.com/external/407671485.hd.mp4?s=31caa3f4bdbd81c0b70150d61b16bfd8a290a04f&profile_id=175&oauth2_token_id=57447761',
        },
        {
          id: 594437,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 960,
          height: 506,
          link: 'https://player.vimeo.com/external/407671485.sd.mp4?s=9a75b0f220057a1fedb4706dad1c3282210179e2&profile_id=165&oauth2_token_id=57447761',
        },
        {
          id: 594438,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 640,
          height: 338,
          link: 'https://player.vimeo.com/external/407671485.sd.mp4?s=9a75b0f220057a1fedb4706dad1c3282210179e2&profile_id=164&oauth2_token_id=57447761',
        },
        {
          id: 594439,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2048,
          height: 1080,
          link: 'https://player.vimeo.com/external/407671485.hd.mp4?s=31caa3f4bdbd81c0b70150d61b16bfd8a290a04f&profile_id=169&oauth2_token_id=57447761',
        },
        {
          id: 594440,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2732,
          height: 1440,
          link: 'https://player.vimeo.com/external/407671485.hd.mp4?s=31caa3f4bdbd81c0b70150d61b16bfd8a290a04f&profile_id=170&oauth2_token_id=57447761',
        },
        {
          id: 594441,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1366,
          height: 720,
          link: 'https://player.vimeo.com/external/407671485.hd.mp4?s=31caa3f4bdbd81c0b70150d61b16bfd8a290a04f&profile_id=174&oauth2_token_id=57447761',
        },
        {
          id: 594442,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 4096,
          height: 2160,
          link: 'https://player.vimeo.com/external/407671485.hd.mp4?s=31caa3f4bdbd81c0b70150d61b16bfd8a290a04f&profile_id=173&oauth2_token_id=57447761',
        },
        {
          id: 594443,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2732,
          height: 1440,
          link: 'https://player.vimeo.com/external/407671485.hd.mp4?s=31caa3f4bdbd81c0b70150d61b16bfd8a290a04f&profile_id=171&oauth2_token_id=57447761',
        },
        {
          id: 594444,
          quality: 'hls',
          file_type: 'video/mp4',
          width: null,
          height: null,
          link: 'https://player.vimeo.com/external/407671485.m3u8?s=88abd67598ba9885df1a78a9c522a88e1a10b821&oauth2_token_id=57447761',
        },
      ],
      video_pictures: [
        {
          id: 1212012,
          nr: 0,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-0.jpg',
        },
        {
          id: 1212063,
          nr: 1,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-1.jpg',
        },
        {
          id: 1212121,
          nr: 2,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-2.jpg',
        },
        {
          id: 1212165,
          nr: 3,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-3.jpg',
        },
        {
          id: 1212196,
          nr: 4,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-4.jpg',
        },
        {
          id: 1212217,
          nr: 5,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-5.jpg',
        },
        {
          id: 1212236,
          nr: 6,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-6.jpg',
        },
        {
          id: 1212260,
          nr: 7,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-7.jpg',
        },
        {
          id: 1212281,
          nr: 8,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-8.jpg',
        },
        {
          id: 1212305,
          nr: 9,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-9.jpg',
        },
        {
          id: 1212335,
          nr: 10,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-10.jpg',
        },
        {
          id: 1212359,
          nr: 11,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-11.jpg',
        },
        {
          id: 1212373,
          nr: 12,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-12.jpg',
        },
        {
          id: 1212389,
          nr: 13,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-13.jpg',
        },
        {
          id: 1212417,
          nr: 14,
          picture:
            'https://images.pexels.com/videos/4155513/pictures/preview-14.jpg',
        },
      ],
    },
    {
      id: 2335977,
      width: 3840,
      height: 2160,
      duration: 10,
      full_res: null,
      tags: [],
      url: 'https://www.pexels.com/video/soft-waves-lapping-on-sandy-shores-2335977/',
      image:
        'https://images.pexels.com/videos/2335977/free-video-2335977.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      avg_color: null,
      user: {
        id: 574687,
        name: 'Ruvim Miksanskiy',
        url: 'https://www.pexels.com/@digitech',
      },
      video_files: [
        {
          id: 107742,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 960,
          height: 540,
          link: 'https://player.vimeo.com/external/337066883.sd.mp4?s=03a057a42ea293468f495ed4cc239c1c3f70a4fc&profile_id=165&oauth2_token_id=57447761',
        },
        {
          id: 107743,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 426,
          height: 240,
          link: 'https://player.vimeo.com/external/337066883.sd.mp4?s=03a057a42ea293468f495ed4cc239c1c3f70a4fc&profile_id=139&oauth2_token_id=57447761',
        },
        {
          id: 107744,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1280,
          height: 720,
          link: 'https://player.vimeo.com/external/337066883.hd.mp4?s=fe17201190d1d3370a6cd81a57406a3f90691445&profile_id=174&oauth2_token_id=57447761',
        },
        {
          id: 107745,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2560,
          height: 1440,
          link: 'https://player.vimeo.com/external/337066883.hd.mp4?s=fe17201190d1d3370a6cd81a57406a3f90691445&profile_id=170&oauth2_token_id=57447761',
        },
        {
          id: 107746,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 640,
          height: 360,
          link: 'https://player.vimeo.com/external/337066883.sd.mp4?s=03a057a42ea293468f495ed4cc239c1c3f70a4fc&profile_id=164&oauth2_token_id=57447761',
        },
        {
          id: 107747,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 3840,
          height: 2160,
          link: 'https://player.vimeo.com/external/337066883.hd.mp4?s=fe17201190d1d3370a6cd81a57406a3f90691445&profile_id=172&oauth2_token_id=57447761',
        },
        {
          id: 107748,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1920,
          height: 1080,
          link: 'https://player.vimeo.com/external/337066883.hd.mp4?s=fe17201190d1d3370a6cd81a57406a3f90691445&profile_id=175&oauth2_token_id=57447761',
        },
        {
          id: 107749,
          quality: 'hls',
          file_type: 'video/mp4',
          width: null,
          height: null,
          link: 'https://player.vimeo.com/external/337066883.m3u8?s=5800031e2bc5d798ea56d4da063beab2932b3cc5&oauth2_token_id=57447761',
        },
      ],
      video_pictures: [
        {
          id: 268803,
          nr: 0,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-0.jpg',
        },
        {
          id: 268804,
          nr: 1,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-1.jpg',
        },
        {
          id: 268805,
          nr: 2,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-2.jpg',
        },
        {
          id: 268806,
          nr: 3,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-3.jpg',
        },
        {
          id: 268807,
          nr: 4,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-4.jpg',
        },
        {
          id: 268808,
          nr: 5,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-5.jpg',
        },
        {
          id: 268809,
          nr: 6,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-6.jpg',
        },
        {
          id: 268810,
          nr: 7,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-7.jpg',
        },
        {
          id: 268811,
          nr: 8,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-8.jpg',
        },
        {
          id: 268812,
          nr: 9,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-9.jpg',
        },
        {
          id: 268813,
          nr: 10,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-10.jpg',
        },
        {
          id: 268814,
          nr: 11,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-11.jpg',
        },
        {
          id: 268815,
          nr: 12,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-12.jpg',
        },
        {
          id: 268816,
          nr: 13,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-13.jpg',
        },
        {
          id: 268817,
          nr: 14,
          picture:
            'https://images.pexels.com/videos/2335977/pictures/preview-14.jpg',
        },
      ],
    },
    {
      id: 1093652,
      width: 3840,
      height: 2160,
      duration: 10,
      full_res: null,
      tags: [],
      url: 'https://www.pexels.com/video/ocean-waves-video-1093652/',
      image:
        'https://images.pexels.com/videos/1093652/free-video-1093652.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      avg_color: null,
      user: {
        id: 417939,
        name: 'Peter Fowler',
        url: 'https://www.pexels.com/@peter-fowler-417939',
      },
      video_files: [
        {
          id: 37176,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 2560,
          height: 1440,
          link: 'https://player.vimeo.com/external/269977920.hd.mp4?s=d30930a993c326d84b93700cc0d759d4a53dfbb4&profile_id=170&oauth2_token_id=57447761',
        },
        {
          id: 37177,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1920,
          height: 1080,
          link: 'https://player.vimeo.com/external/269977920.hd.mp4?s=d30930a993c326d84b93700cc0d759d4a53dfbb4&profile_id=175&oauth2_token_id=57447761',
        },
        {
          id: 37178,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 640,
          height: 360,
          link: 'https://player.vimeo.com/external/269977920.sd.mp4?s=74aa30219677d2e69e48d43b439f164eef86c84e&profile_id=164&oauth2_token_id=57447761',
        },
        {
          id: 37179,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 1280,
          height: 720,
          link: 'https://player.vimeo.com/external/269977920.hd.mp4?s=d30930a993c326d84b93700cc0d759d4a53dfbb4&profile_id=174&oauth2_token_id=57447761',
        },
        {
          id: 37180,
          quality: 'sd',
          file_type: 'video/mp4',
          width: 960,
          height: 540,
          link: 'https://player.vimeo.com/external/269977920.sd.mp4?s=74aa30219677d2e69e48d43b439f164eef86c84e&profile_id=165&oauth2_token_id=57447761',
        },
        {
          id: 37181,
          quality: 'hd',
          file_type: 'video/mp4',
          width: 3840,
          height: 2160,
          link: 'https://player.vimeo.com/external/269977920.hd.mp4?s=d30930a993c326d84b93700cc0d759d4a53dfbb4&profile_id=172&oauth2_token_id=57447761',
        },
        {
          id: 37182,
          quality: 'hls',
          file_type: 'video/mp4',
          width: null,
          height: null,
          link: 'https://player.vimeo.com/external/269977920.m3u8?s=0dcd10a9a29008f497e6e53e8cb29cd5d65591a1&oauth2_token_id=57447761',
        },
      ],
      video_pictures: [
        {
          id: 79801,
          nr: 0,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-0.jpg',
        },
        {
          id: 79802,
          nr: 1,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-1.jpg',
        },
        {
          id: 79803,
          nr: 2,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-2.jpg',
        },
        {
          id: 79804,
          nr: 3,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-3.jpg',
        },
        {
          id: 79805,
          nr: 4,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-4.jpg',
        },
        {
          id: 79806,
          nr: 5,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-5.jpg',
        },
        {
          id: 79807,
          nr: 6,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-6.jpg',
        },
        {
          id: 79808,
          nr: 7,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-7.jpg',
        },
        {
          id: 79809,
          nr: 8,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-8.jpg',
        },
        {
          id: 79810,
          nr: 9,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-9.jpg',
        },
        {
          id: 79811,
          nr: 10,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-10.jpg',
        },
        {
          id: 79812,
          nr: 11,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-11.jpg',
        },
        {
          id: 79813,
          nr: 12,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-12.jpg',
        },
        {
          id: 79814,
          nr: 13,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-13.jpg',
        },
        {
          id: 79815,
          nr: 14,
          picture:
            'https://images.pexels.com/videos/1093652/pictures/preview-14.jpg',
        },
      ],
    },
  ],
  total_results: 93952,
  next_page:
    'https://api.pexels.com/v1/videos/popular/?max_duration=15&min_height=2000&min_width=900&page=2&per_page=10',
  url: 'https://api-server.pexels.com/videos/',
};
