import type { AttrList } from '../utils/attr-list';
import type { LevelDetails } from '../loader/level-details';
import type { VideoRange } from './level';

export type AudioPlaylistType = 'AUDIO';

export type MainPlaylistType = AudioPlaylistType | 'VIDEO';

export type SubtitlePlaylistType = 'SUBTITLES' | 'CLOSED-CAPTIONS';

export type MediaPlaylistType = MainPlaylistType | SubtitlePlaylistType;

export type VideoSelectionOption = {
  preferHDR?: boolean;
  allowedVideoRanges?: Array<VideoRange>;
};

export type AudioSelectionOption = {
  lang?: string;
  assocLang?: string;
  characteristics?: string;
  channels?: string;
  name?: string;
  audioCodec?: string;
  groupId?: string;
};

export type SubtitleSelectionOption = {
  lang?: string;
  assocLang?: string;
  characteristics?: string;
  name?: string;
  groupId?: string;
};

// audioTracks, captions and subtitles returned by `M3U8Parser.parseMasterPlaylistMedia`
export interface MediaPlaylist {
  attrs: MediaAttributes;
  audioCodec?: string;
  autoselect: boolean; // implicit false if not present
  bitrate: number;
  channels?: string;
  characteristics?: string;
  details?: LevelDetails;
  height?: number;
  default: boolean; // implicit false if not present
  forced: boolean; // implicit false if not present
  groupId: string; // required in HLS playlists
  id: number; // incrementing number to track media playlists
  instreamId?: string;
  lang?: string;
  assocLang?: string;
  name: string;
  textCodec?: string;
  unknownCodecs?: string[];
  // 'main' is a custom type added to signal a audioCodec in main track?; see playlist-loader~L310
  type: MediaPlaylistType | 'main';
  url: string;
  videoCodec?: string;
  width?: number;
}

export interface MediaAttributes extends AttrList {
  'ASSOC-LANGUAGE'?: string;
  AUTOSELECT?: 'YES' | 'NO';
  CHANNELS?: string;
  CHARACTERISTICS?: string;
  DEFAULT?: 'YES' | 'NO';
  FORCED?: 'YES' | 'NO';
  'GROUP-ID': string;
  'INSTREAM-ID'?: string;
  LANGUAGE?: string;
  NAME: string;
  'PATHWAY-ID'?: string;
  'STABLE-RENDITION-ID'?: string;
  TYPE?: 'AUDIO' | 'VIDEO' | 'SUBTITLES' | 'CLOSED-CAPTIONS';
  URI?: string;
}
