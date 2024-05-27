import express from 'express';
import { registerUser } from '../controllers/registroController.js';
const router = express.Router();
import { check } from 'express-validator';

router.post('/registro', [
    check('email').isEmail().withMessage('The email format is not valid'),
    check('password').isLength({min: 8}).withMessage('The password has to contain at least 8 caracters')
], registerUser);

export default router;
