import jwt from 'jsonwebtoken';

const generarJWT = (idSocio) => {
    return new Promise((resolve, reject) => {
        const payload = { idSocio }; // Asegúrate de que el payload contenga idSocio

        console.log('Payload para JWT:', payload);

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.error('Error al generar el token:', err);
                reject('No se pudo generar el token');
            } else {
                resolve(token);
            }
        });
    });
};

export default generarJWT;
