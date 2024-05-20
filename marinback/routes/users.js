import express from 'express';
import { getSocios,postSocio } from '../controllers/socioController.js';
var router = express.Router();

/* GET users listing. */
router.get('/', getSocios
);

router.post('/registro',postSocio)
export default router;
