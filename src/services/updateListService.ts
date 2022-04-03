import { Request } from 'express';

import { UserDb, USERS, MusicDataType } from '../configs';

const updateListService = (req: Request): MusicDataType | undefined => {
  const { username } = req;
  let { artist, song } = req.query;
  const user: UserDb | undefined = USERS.find((u) => u.username === username);
  if (!user || !artist || !song) {
    return undefined;
  }
  song = song as string;
  artist = artist as string;
  song = song
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const songUpdate = user.playlist[artist].find((_) => _.title === song);
  if (!songUpdate) {
    return undefined;
  }
  songUpdate.listenedByMe += 1;
  return songUpdate;
};

export default updateListService;
