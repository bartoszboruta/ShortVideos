
export type RootStackParamList = {
  Home: undefined;
  Shorts: undefined;
  Video: {id: number | string}
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

export type Video = {
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

export type VideosData = {
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  videos: Video[];
  next_page: string;
};
