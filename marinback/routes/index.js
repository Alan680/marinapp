import express from 'express';
import { loginUser } from '../controllers/loginController.js';
import {nuevoDespacho, getDespachos} from '../controllers/nuevoDespachoController.js';
import verificarToken from '../middlewares/verificarJWT.js';
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('/login'); // Redirige a la página de inicio de sesión
});

router.post('/login', loginUser
);
router.get('/despachos', getDespachos);

router.post('/despacho', verificarToken, nuevoDespacho);


export default router;
