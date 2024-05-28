import { validationResult } from 'express-validator';
import { insertDespacho } from '../services/despachoServices.js';



const nuevoDespacho = async (req,res) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log('Errores de validacion',errors.array());
            return res.status(400).json({errors: errors.array()});
        }

        const {
            nombreEmbarcacion, 
            matriculaEmbarcacion,
            fechaSalida,
            horaSalida,
            pasajeros,
            dniResponsable,
            telefono,
            fechaLlegada,
            horaLlegada,
            observaciones,
            idSocio
        } = req.body;

        const newDespacho = {
            nombreEmbarcacion, 
            matriculaEmbarcacion,
            fechaSalida,
            horaSalida,
            pasajeros,
            dniResponsable,
            telefono,
            fechaLlegada,
            horaLlegada,
            observaciones,
            idSocio
        };

        await insertDespacho(newDespacho);
        console.log('Despacho registrado con exito',newDespacho);
        res.status(200).json({ msg: 'Despacho registrado correctamente' });
    } catch (error) {
        console.log('Despacho controller falló', error);
        return res.status(500).json({ errors: 'Error en los datos ingresados' });
    }
};

export {
    nuevoDespacho
};
