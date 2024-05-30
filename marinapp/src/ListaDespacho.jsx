import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Box, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { BsFillInfoCircleFill } from "react-icons/bs";


export function ListaDespachos() {
    const [despachos, setDespachos] = useState([]);

    useEffect(() => {
        const mockDespachos = [
            { id: 1, nombreEmbarcacion: "Marina A", matriculaEmbarcacion: "ABC123", fechaSalida: "2024-05-20", horaSalida: "08:00", pasajeros: 5, dniResponsable: "12345678A", telefono: "123456789", fechaLlegada: "2024-05-20", horaLlegada: "12:00", observaciones: "Sin observaciones" },
            { id: 2, nombreEmbarcacion: "Marina B", matriculaEmbarcacion: "DEF456", fechaSalida: "2024-05-21", horaSalida: "09:00", pasajeros: 8, dniResponsable: "87654321B", telefono: "987654321", fechaLlegada: "2024-05-21", horaLlegada: "13:00", observaciones: "Necesita mantenimiento" },
        ];

        setDespachos(mockDespachos);
    }, []);

    return (
        <Box m='50px'>
            <TableContainer>
                <Table size='md' variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>Nombre de la embarcación</Th>
                            <Th>Matrícula de la embarcación</Th>
                            <Th>Fecha de salida</Th>
                            <Th>Hora de salida</Th>
                            <Th>Fecha de llegada</Th>
                            <Th>Hora de llegada</Th>
                            <Th>Observaciones</Th>
                            <Th>Info. Despacho</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {despachos.map(despacho => (
                            <Tr key={despacho.id}>
                                <Td>{despacho.nombreEmbarcacion}</Td>
                                <Td>{despacho.matriculaEmbarcacion}</Td>
                                <Td>{despacho.fechaSalida}</Td>
                                <Td>{despacho.horaSalida}</Td>
                                <Td>{despacho.fechaLlegada}</Td>
                                <Td>{despacho.horaLlegada}</Td>
                                <Td>{despacho.observaciones}</Td>
                                <Td>
                                    <Link to={`/detalledespacho/${despacho.id}`}><BsFillInfoCircleFill /></Link>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}
