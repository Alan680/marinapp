import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { insertSocio, selectSocioByEmail } from '../services/socioService.js'; // Servicio para insertar un nuevo usuario

dotenv.config();

const saltRounds = 10;

const registerUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Errores de validación:', errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const { nombre, apellido, email, password } = req.body;

        const existingUser = await selectSocioByEmail(email);
        if (existingUser.length > 0) {
            console.log('El email ya está registrado:', email);
            return res.status(400).json({ errors: 'El email ya está registrado' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = {
            nombre,
            apellido,
            email,
            password: hashedPassword,
            creationDate: new Date()
        };

        await insertSocio(newUser);

        console.log('Usuario registrado correctamente:', newUser);
        res.status(200).json({ msg: 'Usuario registrado correctamente' });
    } catch (error) {
        console.log('Register Controller falló', error);
        return res.status(500).json({ errors: 'Error en los datos ingresados' });
    }
};

export {
    registerUser
};
