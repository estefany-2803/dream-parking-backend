"use strict";
var Sequelize = require('Sequelize');

const Usuario = DATABASE.define('usuario', {
	primerNombre: Sequelize.STRING,
	segundoNombre: Sequelize.STRING,
	primerApellido: Sequelize.STRING,
	segundoApellido: Sequelize.STRING
});

module.exports = Usuario;