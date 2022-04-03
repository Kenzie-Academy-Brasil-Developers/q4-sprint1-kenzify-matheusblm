import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { config } from '../configs';

const validateAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ massage: 'missing header authorization.' });
  }

  jsonwebtoken.verify(token, config.secretKey, (err, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'invalid token.' });
    }

    req.username = decoded.username as string;
    return next();
  });
};

export default validateAuth;
