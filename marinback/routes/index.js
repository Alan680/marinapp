import express from 'express';
const router = express.Router();

const URL = 'http://localhost:5173';
/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('/login'); // Redirige a la página de inicio de sesión
});

router.get('/', (req, res, next) => {
  res.render('${URL}/login'); // Renderiza la plantilla de la página de inicio de sesión
});
/* Redirect to dashboard. */
router.get('/dashboard', (req, res, next) => {
  res.redirect('${URL}/dashboard');
});




export default router;
