import { useState } from 'react';
import { Header } from './Header';
import * as React from 'react';
import { Center, Box, Heading, FormControl, FormLabel, Input, Select, Button } from '@chakra-ui/react';

export function DespachoNew() {
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

    function handleChange(event, index) {
        const { name, value } = event.target;
        const pasajerosActualizados = [...despacho.pasajeros];
        pasajerosActualizados[index][name] = value;
        setDespacho({ ...despacho, pasajeros: pasajerosActualizados });
    }

    function handleAddPasajero() {
        setDespacho({ ...despacho, pasajeros: [...despacho.pasajeros, { nombre: '', apellido: '' }] });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/despacho', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombreEmbarcacion: despacho.nombreEmbarcacion,
                    matriculaEmbarcacion: despacho.matriculaEmbarcacion,
                    fechaSalida: despacho.fechaSalida,
                    horaSalida: despacho.horaSalida,
                    pasajeros: despacho.pasajeros,
                    dniResponsable: despacho.dniResponsable,
                    telefono: despacho.telefono,
                    fechaLlegada: despacho.fechaLlegada,
                    horaLlegada: despacho.horaLlegada,
                    observaciones: despacho.observaciones
                }),
                credentials: 'include', // Envia cookies con la solicitud
            });

            const data = await response.json();

            if (response.ok) {
                // Si la autenticación es exitosa, guarda el token 
                sessionStorage.setItem('usuario', socio.email);
                navigate('/dashboard');
            } else {
                // Manejar errores de autenticación
                setError(data.errores || 'Error de autenticación');
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            setError('Error de conexión');
        }
    }
    return (
        <>
            <Header />
            <Center>
                <Box m='40px' boxShadow='xl' borderRadius='md' width='40%' id='caja'>
                    <Box textAlign='center'>
                        <Heading>Nuevo despacho</Heading>
                    </Box>
                    <Box p='20px'>
                        <form onSubmit={handleSubmit}>
                            <FormControl mt='3px'>
                                <FormLabel>Nombre de la embarcación</FormLabel>
                                <Input type='text' required onChange={event => setDespacho({ ...despacho, nombreEmbarcacion: event.target.value })} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Matrícula de la embarcación</FormLabel>
                                <Input type="text" required onChange={event => setDespacho({ ...despacho, matriculaEmbarcacion: event.target.value })} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Fecha de salida</FormLabel>
                                <Input type="date" required onChange={event => setDespacho({ ...despacho, fechaSalida: event.target.value })} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Hora de salida</FormLabel>
                                <Input type="time" required onChange={event => setDespacho({ ...despacho, horaSalida: event.target.value })} />
                            </FormControl>
                            <Box mt='3px'>
                                <FormLabel>Pasajeros</FormLabel>
                                {despacho.pasajeros.map((pasajero, index) => (
                                    <Box key={index} display='flex' mt='3px'>
                                        <Input type='text' name='nombre' placeholder='Nombre' value={pasajero.nombre} onChange={event => handleChange(event, index)} />
                                        <Input type='text' name='apellido' placeholder='Apellido' value={pasajero.apellido} onChange={event => handleChange(event, index)} />
                                    </Box>
                                ))}
                                <Button mt='10px' onClick={handleAddPasajero}>Agregar pasajero</Button>
                            </Box>
                            <FormControl mt='3px'>
                                <FormLabel>Número de DNI del responsable</FormLabel>
                                <Input type="text" required onChange={event => setDespacho({ ...despacho, dniResponsable: event.target.value })} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Número de teléfono</FormLabel>
                                <Input type="text" required onChange={event => setDespacho({ ...despacho, telefono: event.target.value })} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Fecha de llegada</FormLabel>
                                <Input type="date" required onChange={event => setDespacho({ ...despacho, fechaLlegada: event.target.value })} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Hora de llegada</FormLabel>
                                <Input type="time" required onChange={event => setDespacho({ ...despacho, horaLlegada: event.target.value })} />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Observaciones</FormLabel>
                                <Input type="text" required onChange={event => setDespacho({ ...despacho, observaciones: event.target.value })} />
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
