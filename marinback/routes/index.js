import express from 'express';
const router = express.Router();

const URL = 'http://localhost:3000';
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* Redirect to dashboard. */
router.get('/dashboard', (req, res, next) => {
  res.redirect('${url}/dashboard');
});

router.post('/register', [
  body('nombre').not().isEmpty().withMessage('El nombre es requerido'),
  body('apellido').not().isEmpty().withMessage('El apellido es requerido'),
  body('email').isEmail().withMessage('Introduce un email válido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
], registerUser);



export default router;
