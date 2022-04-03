import { Request, Response } from 'express';

import { USERS } from '../configs';

const getUsers = (req: Request, res: Response): Response => {
  const result = USERS.map((user) => {
    return {
      uuid: user.uuid,
      username: user.username,
      playlist: user.playlist,
    };
  });

  return res.status(200).json(result);
};

export default getUsers;
