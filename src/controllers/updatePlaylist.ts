import { Request, Response } from 'express';

import { updateListService, updatePlaylistService } from '../services';

const updatePlaylist = (req: Request, res: Response): Response => {
  const { username } = req;
  const addPlaylist = req.body;
  const { artist, song } = req.query;

  if (artist && song) {
    const songUpdated = updateListService(req);
    if (!songUpdated) {
      return res.status(404).json({ message: 'user or song not found' });
    }
    return res.status(200).json(songUpdated);
  }

  const user = updatePlaylistService(username, addPlaylist);

  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  return res.status(200).json({
    uuid: user.uuid,
    username: user.username,
    playlist: user.playlist,
  });
};

export default updatePlaylist;
