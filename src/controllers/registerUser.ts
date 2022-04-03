import { Request, Response } from 'express';

import { USERS } from '../configs';

const registerUser = (req: Request, res: Response): Response => {
  const user = { ...req.validated, playlist: {} };
  if (USERS.find((u) => u.username === user.username)) {
    return res.status(422).json({ error: 'username already exists' });
  }

  USERS.push(user);

  return res.status(201).json({
    uuid: user.uuid,
    username: user.username,
    playlist: user.playlist,
  });
};

export default registerUser;
