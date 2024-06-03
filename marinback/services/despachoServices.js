import connection from '../models/config.js';

const con = connection.promise();
const insertDespacho = async (despacho) => {
    const {
        nombreEmbarcacion,
        matriculaEmbarcacion,
        fechaSalida,
        horaSalida,
        pasajerosABordo,
        numeroTelefono,
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
            pasajerosABordo,
            numeroTelefono,
            fechaLlegada,
            horaLlegada,
            observaciones,
            idSocio
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
        nombreEmbarcacion,
        matriculaEmbarcacion,
        fechaSalida,
        horaSalida,
        pasajerosABordo,
        numeroTelefono,
        fechaLlegada,
        horaLlegada,
        observaciones,
        idSocio
    ];

    try {
        await con.execute(sql, params);
    } catch (error) {
        console.error('Error al insertar despacho:', error.message);
        throw error;
    }
};

const selectDespachoSocio = async (idSocio) => {
    const [rows] = await con.execute('SELECT * FROM despacho WHERE idSocio = ?', [idSocio]);
    return rows;
};

async function selectDespacho(){
    const [result] = await con.execute('SELECT * FROM Despacho');
    return result;
}

export { 
    insertDespacho,
    selectDespachoSocio,
    selectDespacho
};
