import { Router } from 'express';
import validateShape from '../middlewares/validate';
import { userSchema } from '../shapes/user';

const router = Router();

router.post('/register', validateShape(userSchema));
router.post('/register', validateShape(userSchema));
router.get('');

export { router };

// POST	/users/register	Criação de usuários
// GET	/users	Listar usuários (necessita de token)
// POST	/users/login	Gera um token JWT recebendo username e password no corpo da requisição como JSON.
// PUT	/users/playlist	Atualizar playlist do usuário logado (necessita de token)
// PUT	/users/playlist?artist=name&song=title	Atualizar propriedade "listenedByMe" da música solicitada (necessita de token)
// DELETE	/users/playlist?artist=name&song=title	Remove a música da playlist (necessita de token)
