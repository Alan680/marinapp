import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import generarJWT from '../middlewares/generarJWT.js';
import dotenv from 'dotenv';
import { selectSocioByEmail } from "../services/socioService.js";
dotenv.config();

const loginUser = async (req, res) => {
  try {
    const controlError = validationResult(req);

    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body)
    if (!controlError.isEmpty()) {
      console.log('Error de datos mal ingresados');
      return res.status(400).json({ errores: 'Datos mal ingresados' });
    }

    const userSQL = await selectSocioByEmail(email);

    if (userSQL.length === 0) {
      console.log('Usuario no está registrado');
      return res.status(404).json({ errores: 'Email no registrado, por favor regístrese' });
    } else {
      const userPassword = userSQL[0].password;
      const userId = userSQL[0].idSocio;

      const match = await bcrypt.compare(password, userPassword);

      if (!match) {
        return res.status(400).json({ errores: 'Email o contraseña incorrectos' });
      } else {
        const token = await generarJWT(userId);

        console.log('token: ', token);

        res.cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 3600000 * 4 // 4 horas
        });

        return res.status(200).json({ mensaje: 'Autenticación exitosa' });
      }
    }

  } catch (error) {
    console.log('Login Controller falló', error);
    return res.status(500).json({ errores: 'Error en los datos ingresados' });
  }
};

export {
  loginUser
};
