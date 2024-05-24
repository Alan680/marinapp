import { useState } from 'react';
import imagen from './assets/logo.png';
import { useNavigate, Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { Box, FormControl, Heading, Input, FormLabel, Center, Image } from "@chakra-ui/react";
import * as React from 'react';

export function Login() {
  const [socio, setSocio] = useState({ usuario:'', password:'' });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Simulación de autenticación (sin llamar a la API)
    if (socio.usuario === 'usuario' && socio.password === 'contraseña') {
      sessionStorage.setItem("usuario", socio.usuario);
      navigate('/dashboard');
    } else {
      alert('Credenciales inválidas');
    }
  }
  
  function registroSubmit(e) {
    navigate('/registro');
  }

  return (
    <>
      <Box mt='30px'>
        <Center>
          <Image mt='3px' src={imagen} width='150px' height='150px'/>
        </Center>
        <Center>
         <Box m='2%' boxShadow='xl' borderRadius='md' width='40%' id='caja'>
           <Box textAlign='center'>
             <Heading>Iniciar Sesión</Heading>
           </Box>  
           <Box p='20px'>
            <form id='formulario' onSubmit={handleSubmit}>
             <FormControl mt='3px'>
               <FormLabel>Usuario</FormLabel>
               <Input required type='text' id='usuario' onChange={(event) => setSocio({ ...socio, usuario:event.target.value })}/>
             </FormControl>
             <FormControl mt='3px'>
               <FormLabel>Contraseña</FormLabel>
               <Input required type='password' id='pass' onChange={(event) => setSocio({...socio, password:event.target.value })}/>
             </FormControl>
             <FormControl mt='3px'>
               <Input type='submit' mt='3px' id='enviar' borderColor='teal' value='Iniciar Sesión' />
             </FormControl>
            </form>
            {/* Cambia el FormControl por un Link */}
            <Link to="/registro">
              <FormControl mt='3px'>
                <Input type='submit' mt='3px' id='enviar' borderColor='teal' value='Registrarse'/>
              </FormControl>
            </Link>
           </Box>
         </Box>
        </Center>
      </Box>
    </>
  );
}
