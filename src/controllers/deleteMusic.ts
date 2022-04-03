import { Response, Request } from 'express';

import { UserDb, USERS } from '../configs';

const deleteMusic = (req: Request, res: Response): Response => {
  const { username } = req;
  let { artist, song } = req.query;
  const user: UserDb | undefined = USERS.find((u) => u.username === username);
  if (!user || !artist || !song) {
    return res.status(404).json({ message: 'user or song not found' });
  }

  artist = artist as string;
  song = song as string;

  song = song
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const songDeleteIndex: number = user.playlist[artist].findIndex(
    (_) => _.title === song
  );
  if (songDeleteIndex === -1) {
    return res.status(404).json({ message: 'user or song not found' });
  }

  user.playlist[artist].splice(songDeleteIndex, 1);
  if (user.playlist[artist].length === 0) {
    delete user.playlist[artist];
  }
  return res.status(204).json();
};

export default deleteMusic;
