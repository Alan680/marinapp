import  connection  from '../models/config.js';

const insertDespacho = async (despacho) => {
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
    } = despacho;

    const sql = `
        INSERT INTO despacho (
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
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
        nombreEmbarcacion,
        matriculaEmbarcacion,
        fechaSalida,
        horaSalida,
        JSON.stringify(pasajeros), // Convertimos el array de pasajeros a una cadena JSON
        dniResponsable,
        telefono,
        fechaLlegada,
        horaLlegada,
        observaciones,
        idSocio
    ];

    try {
        await connection.execute(sql, params);
    } catch (error) {
        console.error('Error al insertar despacho:', error.message);
        throw error;
    }
};

async function selectDespachoSocio(){
    const[result] = await connection.execute('Select * from despacho where idSocio = ?', [idSocio]);
    return result;
};


export { 
    insertDespacho,
    selectDespachoSocio
};


