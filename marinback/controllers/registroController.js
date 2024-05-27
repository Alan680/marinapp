import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { insertSocio } from '../services/socioService.js'; // Servicio para insertar un nuevo usuario

dotenv.config();

const saltRounds = 10;

const registerUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { nombre, apellido, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = {
            nombre,
            apellido,
            email,
            password: hashedPassword,
            creationDate: new Date()
        };

        await insertSocio(newUser);

        res.status(200).json({ msg: 'Usuario Registrado correctamente' });
    } catch (error) {
        console.log('Register Controller falló', error);
        return res.status(500).json({ errores: 'Error en los datos ingresados' });
    }
};

export {
    registerUser
};
