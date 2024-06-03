import socioDTO from "../models/socioDTO.js";
import connection from '../models/config.js';


const con = connection.promise();
async function checkIfSocioExists(socioDTO) {
    const [rows] = await con.execute('SELECT COUNT(*) AS count FROM socio WHERE email = ?', [socioDTO.email]);
    const count = rows[0].count;
    return count > 0;
}


async function selectSocio(idSocio){
    const [result] = await con.execute('SELECT * FROM socio WHERE idSocio = ?', [idSocio]);
    return result;
}
async function selectSocioByEmail(email){
    const [rows] = await con.query('SELECT * FROM socio WHERE email = ?', [email]);
    return rows;
};

async function selectSocios(){
    const [result] = await con.execute('SELECT * FROM socio');
    return result;
}

async function insertSocio(socioDTO) {
    const [result] = await con.execute(
        'INSERT INTO socio SET nombre = ?, apellido = ?, email = ?, password = ?, creationDate = ?',
        [socioDTO.nombre, socioDTO.apellido, socioDTO.email, socioDTO.password, socioDTO.creationDate]
    );
    return result;
}

export {
    selectSocio,
    selectSocios,
    insertSocio,
    checkIfSocioExists,   
    selectSocioByEmail
}