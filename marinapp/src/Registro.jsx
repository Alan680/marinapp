import * as React from 'react';
import { Center, Box, Heading, FormControl, FormLabel, Input } from '@chakra-ui/react';

export function Registro() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.contraseña.value;

        if (email === '' || password === '') {
            alert('Por favor, complete todos los campos.');
            return; // No continuar con el envío si los campos están vacíos
        }

        // Aquí puedes realizar cualquier acción que desees con los datos del formulario
        // Por ejemplo, enviar los datos a tu servidor

        // Limpia los campos después de enviar el formulario
        e.target.email.value = '';
        e.target.contraseña.value = '';

        // También puedes redirigir a otra página después de enviar el formulario si es necesario
    };

    return (
        <>
            <Center>
                <Box m='40px' boxShadow='xl' borderRadius='md' width='40%' id='caja'>
                    <Box textAlign='center'>
                        <Heading>Nuevo Socio</Heading>
                    </Box>
                    <Box p='20px'>
                        <form id='formulario' onSubmit={handleSubmit}>
                            <FormControl mt='3px'>
                                <FormLabel>Email</FormLabel>
                                <Input type="text" name="email" required />
                            </FormControl>
                            <FormControl mt='3px'>
                                <FormLabel>Contraseña</FormLabel>
                                <Input type='password' name='contraseña' required />
                            </FormControl>
                            <FormControl>
                                <Input type="submit" mt='20px' id='editar' borderColor='teal' value='Registrarse' />
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </Center>
        </>
    );
}
