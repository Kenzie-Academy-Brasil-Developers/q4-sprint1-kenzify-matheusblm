import { UserDb, JWTConfig, MusicDataType } from './interfaces';

const USERS: Array<UserDb> = [];

const config: JWTConfig = {
  secretKey: 'secreKey',
  expiresIn: '1h',
};

export { USERS, config, UserDb, MusicDataType, JWTConfig };
