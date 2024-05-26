import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:3000', // Poner url del frontEnd
    credentials: true 
}));

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;

