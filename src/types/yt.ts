export interface VideoData {
    id: string;
    title: string;
    category: 'manufacturing' | 'research' | 'other';
    youtubeId: string;
    featured?: boolean;
  }