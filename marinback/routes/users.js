import express from 'express';
const router = express.Router();

const url = 'http://localhost:3000';

router.get('/', (req, res, next) => {
  res.redirect('/login'); // Redirigir a la página de inicio de sesión
});

router.get('/login', (req, res, next) => {
  res.redirect(`${url}/login`); // Redirigir a la página de inicio de sesión
});

export default router;
