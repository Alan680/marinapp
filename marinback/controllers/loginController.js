import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import generarJWT from '../middlewares/generarJWT.js';
import dotenv from 'dotenv';
import { selectSocioByEmail } from "../services/socioService.js"; // Actualizamos el servicio para obtener el usuario por email
dotenv.config();

const loginPage = (req, res) => {
    res.render('login', { title: 'Login' });
};

const loginUser = async (req, res) => {
    try {
        const controlError = validationResult(req);

        const email = req.body.email;
        const password = req.body.password;

        if (!controlError.isEmpty()) {
            console.log('Error de datos mal ingresados');
            return res.render('login', {
                errores: 'Datos mal ingresados'
            });
        }

        const userSQL = await selectSocioByEmail(email);

        const count = userSQL.length;

        if (count === 0) {
            console.log('Usuario no está registrado');
            return res.render('login', {
                errores: 'Email no resgistrado, por favor registese'
            });
        } else {
            // USUARIO REGISTRADO
            const userPassword = userSQL[0].password;
            const userId = userSQL[0].idSocio;

            const match = await bcrypt.compare(password, userPassword);

            if (!match) {
                return res.render('login', {
                    errores: 'Email ingresado no es valido'
                });
            } else {
                const token = await generarJWT(userId);

                console.log('token: ', token);

                res.cookie('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production', 
                    maxAge: 3600000 * 4 // 4 horas
                });

                res.redirect('/');
            }
        }

    } catch (error) {
        console.log('Login Controller falló', error);
        return res.render('login', {
            errores: 'Error en los datos ingresados'
        });
    }
};

export {
    loginPage,
    loginUser
};
