'use strict';
var express = require('express');
const Router = express.Router();

const Usuarios = require('./controladores/Usuarios');

Router.get('/', (req, res, next) => {
	res.json({
		message: 'Hello from Dream Parking Server'
	});
});

Router.get('/usuarios', Usuarios.consultarUsuarios)
Router.post('/usuarios', Usuarios.crearUsuario)
Router.get('/usuarios/:usuarioId', Usuarios.consultarUsuario)

module.exports = Router;
