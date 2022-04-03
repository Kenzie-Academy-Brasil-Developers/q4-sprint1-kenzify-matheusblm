import { Request, Response } from 'express';

import { loginUserService } from '../services';

const loginUser = async (req: Request, res: Response): Promise<Response> => {
  const token = await loginUserService(req.body.password, req.validated);

  if (!token) {
    return res.status(401).json({ message: 'Wrong credentials. Try again!' });
  }

  return res.status(200).json({ token });
};

export default loginUser;
