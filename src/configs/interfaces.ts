interface MusicDataType {
  title: string;
  duration: string;
  releasedDate: string;
  listenedByMe: number;
  genres: Array<string>;
}

interface playlistType {
  [key: string]: Array<MusicDataType>;
}

interface UserDb {
  uuid: string;
  username: string;
  password: string;
  playlist: playlistType;
}

type ExpireInType = number | string;

interface JWTConfig {
  secretKey: string;
  expiresIn: ExpireInType;
}

export { UserDb, JWTConfig, MusicDataType };
