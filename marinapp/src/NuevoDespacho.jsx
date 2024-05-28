import { useState } from 'react';
import { Header } from './Header';
import * as React from 'react';
import { Center, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export function DespachoNew() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [despacho, setDespacho] = useState({
        nombreEmbarcacion: '',
        matriculaEmbarcacion: '',
        fechaSalida: '',
        horaSalida: '',
        pasajeros: [],
        dniResponsable: '',
        telefono: '',
        fechaLlegada: '',
        horaLlegada: '',
        observaciones: ''
    });

    const handleChange = (event, index) => {
        const { name, value } = event.target;
        if (name === 'nombre' || name === 'apellido') {
            const pasajerosActualizados = [...despacho.pasajeros];
            pasajerosActualizados[index][name] = value;
            setDespacho({ ...despacho, pasajeros: pasajerosActualizados });
        } else {
            setDespacho({ ...despacho, [name]: value });
        }
    };

    const handleAddPasajero = () => {
        setDespacho({ ...despacho, pasajeros: [...despacho.pasajeros, { nombre: '', apellido: '' }] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { nombreEmbarcacion, matriculaEmbarcacion, fechaSalida, horaSalida, pasajeros, dniResponsable, telefono, fechaLlegada, horaLlegada, observaciones } = despacho;

        if (
            nombreEmbarcacion === '' || 
            matriculaEmbarcacion === '' || 
            fechaSalida === '' || 
            horaSalida === '' || 
            pasajeros.length === 0 || 
            pasajeros.some(pasajero => pasajero.nombre === '' || pasajero.apellido === '') || 
            dniResponsable === '' || 
            telefono === '' || 
            fechaLlegada === '' || 
            horaLlegada === '' || 
            observaciones === ''
        ) {
            setError('Por favor, complete todos los campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/despacho', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(despacho),
                credentials: 'include', // Envia cookies con la solicitud
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Despacho creado con éxito');
                setError('');
            } else {
                setError(data.errores || 'Error al crear el despacho');
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            setError('Error de conexión');
        }
    };

    return (
        <>
            <Header />
            <Center>
                <Box m='40px' boxShadow='xl' borderRadius='md' width='40%' id='caja'>
                    <Box textAlign='center'>
                        <Heading>Nuevo despacho</Heading>
                    </Box>
                    <Box p='20px'>
                        {error && <Box color='red'>{error}</Box>}
                        {success && <Box color='green'>{success}</Box>}
                        <form onSubmit={handleSubmit}>
                            <FormControl mt='3px'>
                                <FormLabel>Nombre de la embarcación</FormLabel>
                                <Input name='nombreEmbarcacion' type='text' value={despacho.nombreEmbarcacion} onChange={handleChange} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Matrícula de la embarcación</FormLabel>
                                <Input name='matriculaEmbarcacion' type="text" value={despacho.matriculaEmbarcacion} onChange={handleChange} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Fecha de salida</FormLabel>
                                <Input name='fechaSalida' type="date" value={despacho.fechaSalida} onChange={handleChange} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Hora de salida</FormLabel>
                                <Input name='horaSalida' type="time" value={despacho.horaSalida} onChange={handleChange} required />
                            </FormControl>
                            <Box mt='3px'>
                                <FormLabel>Pasajeros</FormLabel>
                                {despacho.pasajeros.map((pasajero, index) => (
                                    <Box key={index} display='flex' mt='3px'>
                                        <Input name='nombre' placeholder='Nombre' value={pasajero.nombre} onChange={event => handleChange(event, index)} required />
                                        <Input name='apellido' placeholder='Apellido' value={pasajero.apellido} onChange={event => handleChange(event, index)} required />
                                    </Box>
                                ))}
                                <Button mt='10px' onClick={handleAddPasajero}>Agregar pasajero</Button>
                            </Box>
                            <FormControl mt='3px'>
                                <FormLabel>Número de DNI del responsable</FormLabel>
                                <Input name='dniResponsable' type="text" value={despacho.dniResponsable} onChange={handleChange} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Número de teléfono</FormLabel>
                                <Input name='telefono' type="text" value={despacho.telefono} onChange={handleChange} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Fecha de llegada</FormLabel>
                                <Input name='fechaLlegada' type="date" value={despacho.fechaLlegada} onChange={handleChange} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Hora de llegada</FormLabel>
                                <Input name='horaLlegada' type="time" value={despacho.horaLlegada} onChange={handleChange} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Observaciones</FormLabel>
                                <Input name='observaciones' type="text" value={despacho.observaciones} onChange={handleChange} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <Button type="submit">Crear despacho</Button>
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </Center>
        </>
    );
}
