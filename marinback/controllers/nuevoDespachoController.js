import { validationResult } from 'express-validator';
import { insertDespacho } from '../services/despachoServices.js';

const nuevoDespacho = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Errores de validacion', errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            nombreEmbarcacion,
            matriculaEmbarcacion,
            fechaSalida,
            horaSalida,
            pasajerosABordo,
            dniResponsable,
            numeroTelefono,
            fechaLlegada,
            horaLlegada,
            observaciones
        } = req.body;

        if (!req.user || !req.user.idSocio) {
            throw new Error('Usuario no autenticado');
        }

        const idSocio = req.user.idSocio;

        const newDespacho = {
            nombreEmbarcacion,
            matriculaEmbarcacion,
            fechaSalida,
            horaSalida,
            pasajerosABordo,
            dniResponsable,
            numeroTelefono,
            fechaLlegada,
            horaLlegada,
            observaciones,
            idSocio
        };

        console.log('Nuevo despacho a insertar:', newDespacho); // Agrega un console.log para verificar el objeto

        await insertDespacho(newDespacho);
        console.log('Despacho registrado con éxito', newDespacho);
        res.status(200).json({ msg: 'Despacho registrado correctamente' });
    } catch (error) {
        console.log('Despacho controller falló', error.message);
        return res.status(500).json({ errors: 'Error en los datos ingresados' });
    }
};

export { nuevoDespacho };


