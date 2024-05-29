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
        const pasajerosActualizados = [...despacho.pasajeros];
        pasajerosActualizados[index] = { ...pasajerosActualizados[index], [name]: value };
        setDespacho({ ...despacho, pasajeros: pasajerosActualizados });
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
            console.log(despacho);
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
                                <Input id='nombreEmbarcacion' type='text' required onChange={(event) => setDespacho({...despacho, nombreEmbarcacion: event.target.value})} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Matrícula de la embarcación</FormLabel>
                                <Input id='matriculaEmbarcacion' type="text" onChange={(event)=> setDespacho({...despacho, matriculaEmbarcacion: event.target.value})} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Fecha de salida</FormLabel>
                                <Input id='fechaSalida' type="date"  onChange={(event)=> setDespacho({...despacho, fechaSalida :event.target.value})} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Hora de salida</FormLabel>
                                <Input id='horaSalida' type="time" onChange={(event)=> setDespacho({...despacho, horaSalida:event.target.value})} required />
                            </FormControl>
                            <Box mt='3px'>
                                <FormLabel>Pasajeros</FormLabel>
                                {despacho.pasajeros.map((pasajero, index) => (
                                    <Box key={index} display='flex' mt='3px'>
                                        <Input id={`nombre-${index}`} name='nombre' placeholder='Nombre' value={pasajero.nombre} onChange={event => handleChange(event, index)} required />
                                        <Input id={`apellido-${index}`} name='apellido' placeholder='Apellido' value={pasajero.apellido} onChange={event => handleChange(event, index)} required />
                                    </Box>
                                ))}
                                <Button mt='10px' onClick={handleAddPasajero}>Agregar pasajero</Button>
                            </Box>
                            <FormControl mt='3px'>
                                <FormLabel>Número de DNI del responsable</FormLabel>
                                <Input id='dniResponsable' type="text" onChange={(event) => setDespacho({...despacho, dniResponsable:event.target.value})} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Número de teléfono</FormLabel>
                                <Input id='telefono' type="text" onChange={(event) => setDespacho({...despacho,telefono :event.target.value})} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Fecha de llegada</FormLabel>
                                <Input id='fechaLlegada' type="date" onChange={(event) => setDespacho({...despacho, fechaLlegada:event.target.value})} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Hora de llegada</FormLabel>
                                <Input id='horaLlegada' type="time" onChange={(event) => setDespacho({...despacho, horaLlegada :event.target.value})} required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Observaciones</FormLabel>
                                <Input id='observaciones' type="text" onChange={(event) => setDespacho({...despacho, observaciones:event.target.value})} required />
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
