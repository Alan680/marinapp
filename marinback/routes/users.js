import express from 'express';
import { registerUser } from '../controllers/registroController.js';
const router = express.Router();



router.post('/registro', registerUser);

export default router;
