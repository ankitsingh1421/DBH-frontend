export interface Video {
  id: string;
  title: string;
  url: string;
}

export interface Chapter {
  id: number;
  title: string;
  videos: Video[];
}

export interface Course {
  price: unknown;
  id: string;
  title: string;
  idNAme: string;
  description: string;
  image: string;
  demoVideo: string;
  chapters: Chapter[];
  highlights: string[];
}
export interface Video {
  id: string;
  title: string;
  url: string;
}

export interface Chapter {
  id: number;
  title: string;
  videos: Video[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  demoVideo: string;
  highlights: string[];
  chapters: Chapter[];
}
