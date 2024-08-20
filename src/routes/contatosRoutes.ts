import express, {Request, Response} from 'express';
import { getContatos, postContato } from '../controllers/contatosController';

const router = express.Router();

router.get('/contatos', getContatos);

router.post('/contatos', postContato)

export default router;
