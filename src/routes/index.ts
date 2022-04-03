import { Router } from 'express';

import {
  registerUser,
  loginUser,
  updatePlaylist,
  deleteMusic,
  getUsers,
} from '../controllers';
import { createUserShape, loginUserShape } from '../shapes';
import { validateAuth, validate } from '../middlewares';

const router = Router();

router.post('/register', validate(createUserShape), registerUser);
router.get('', validateAuth, getUsers);
router.post('/login', validate(loginUserShape), loginUser);
router.put('/playlist', validateAuth, updatePlaylist);
router.delete('/playlist', validateAuth, deleteMusic);

export default router;
