import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { request, response } from 'express';

dotenv.config();

const verificarToken = (req = request, res = response, next) => {
    const token = req.cookies.token;

    if (!token) {
        console.log('No se proporcionó ningún token');
        return res.status(401).json({ message: 'Acceso no autorizado: No se proporcionó ningún token' });
    }

    try {
        const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.user = payload;
        console.log('Token verificado correctamente');
        next();
    } catch (error) {
        console.log('Error al verificar el token:', error.message);
        return res.status(401).json({ message: 'Acceso no autorizado: Token inválido' });
    }
};

export default verificarToken;

