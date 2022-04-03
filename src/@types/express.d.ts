import { User } from '../config';

declare global {
  namespace Express {
    interface Request {
      validated: User;
      username: string;
    }
  }
}
