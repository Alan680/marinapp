import express from 'express';
import { loginUser } from '../controllers/loginController.js';
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('/login'); // Redirige a la página de inicio de sesión
});

router.post('/login', loginUser
);
/* Redirect to dashboard. */
router.get('/dashboard', (req, res, next) => {
  res.redirect('dashboard');
});




export default router;
