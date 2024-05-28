async function insertDespacho(despachoDTO) {
    // Verificar que los campos requeridos estén definidos
    const {
        nombreEmbarcacion,
        matriculaEmbarcacion,
        fechaSalida,
        horaSalida,
        pasajerosABordo,
        idSocio,
        numeroTelefono,
        fechaLlegada,
        horaLlegada,
        observaciones
    } = despachoDTO;

    if (
        !nombreEmbarcacion ||
        !matriculaEmbarcacion ||
        !fechaSalida ||
        !horaSalida ||
        !pasajerosABordo ||
        idSocio === undefined ||
        !numeroTelefono ||
        !fechaLlegada ||
        !horaLlegada ||
        !observaciones
    ) {
        throw new Error('Todos los campos son obligatorios');
    }

    // Crea una nueva instancia de DespachoDTO
    const despacho = new DespachoDTO(
        nombreEmbarcacion,
        matriculaEmbarcacion,
        fechaSalida,
        horaSalida,
        pasajerosABordo,
        idSocio,
        numeroTelefono,
        fechaLlegada,
        horaLlegada,
        observaciones
    );

    // Inserta el despacho en la base de datos
    const [result] = await con.execute(
        `INSERT INTO despacho (
            nombreEmbarcacion, 
            matriculaEmbarcacion, 
            fechaSalida, 
            horaSalida, 
            pasajerosABordo, 
            idSocio, 
            numeroTelefono, 
            fechaLlegada, 
            horaLlegada, 
            observaciones
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            despacho.nombreEmbarcacion, 
            despacho.matriculaEmbarcacion, 
            despacho.fechaSalida, 
            despacho.horaSalida, 
            despacho.pasajerosABordo, 
            despacho.idSocio, 
            despacho.numeroTelefono, 
            despacho.fechaLlegada, 
            despacho.horaLlegada, 
            despacho.observaciones
        ]
    );
    
    return result;
}
export{
    insertDespacho
}
