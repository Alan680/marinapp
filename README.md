###
Marinapp
App para un Proyecto Final del Curso Fullstack.

El mismo es una página web donde podemos realizar despachos para una marina.

Deploy en Vercel:
https://marinapp-front.vercel.app/


Instalación Local
- Realizamos un git clone del repositorio en el directorio que deseemos
- Realizamos npm install para instalar las dependencias del proyecto
- Creamos un archivo .env dentro de la carptea marinback del proyecto, donde tendremos las siguientes variables de entorno

.env

```

PORT= // Acá va nuestro puerto de desarrollo

PORTSQL= // Acá va el puerto de nuestro servidor de MySQL

USERSQL= // Acá va el usuario de nuestro servidor de MySQL

PASSWORDSQL= // Acá va la contraseña de nuestro servidor de MySQL

HOSTSQL= // Acá va el HOST de nuestro servidor de MySQL

DATASQL= marinapp // Acá va el nombre de nuestra base de datos.

SECRETORPRIVATEKEY= 'secreto123' // Acá va un string aleatorio que se utiliza para la encriptación de contraseñas.  

NODE_ENV = 'production' // Acá va 'production' para el manejo de cookies.

Ejecución del código de MySQL
Necesitamos crear la base de datos, para ello, deben ir a models/Database.sql, ahí tenemos el código de creación para nuestra base de datos, que está compuesta por 2 tablas.

Ejecución del código de MySQL
Necesitamos crear la base de datos, para ello, deben ir a models/Database.sql, ahí tenemos el código de creación para nuestra base de datos, que está compuesta por 2 tablas.
```
```
CREATE database marinapp; 

use marinapp;

CREATE TABLE socio (
 idSocio int not null AUTO_INCREMENT primary key,
 nombre varchar(50) not null,
 apellido varchar(50) not null,
 email varchar(255) not null,
 password varchar(60) not null,
 creationDate Date not null
);

CREATE TABLE despacho (
    idDespacho INT AUTO_INCREMENT PRIMARY KEY,
    nombreEmbarcacion VARCHAR(255),
    matriculaEmbarcacion VARCHAR(20),
    fechaSalida DATE,
    horaSalida TIME,
    pasajerosABordo varchar(255),
    idSocio int,
    numeroTelefono VARCHAR(20),
    fechaLlegada DATE,
    horaLlegada TIME,
    observaciones varchar(255),
 FOREIGN KEY (idSocio) REFERENCES socio(idSocio)
);
```

### Ejecutar la app
Abrimos dos terminales, una para el front:
```
Front: .../marinapp/marinapp
```
Otra para el back:
```
Back: .../marinapp/marinback
```
Ejecutamos
```
npm run dev
```
En ambas terminales.

