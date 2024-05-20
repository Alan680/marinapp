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
 FOREIGN KEY idSocio REFERENCES socio(idSocio)
);