import{    
    checkIfSocioExists,
    selectSocio,
    insertSocio,
    selectSocios
} from "../services/socioService.js";

const getSocios = async (req,res) => {
    const socios = await selectSocios();
    return res.json(socios);

}
const postSocio = async (req,res) => {
    const socio = req.body;
    console.log(socio);
    const respuesta = await insertSocio(socio);
    return res.send(respuesta);
    
}


export {getSocios,
    postSocio

};