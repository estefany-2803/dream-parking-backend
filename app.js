'use strict';

var express = require('express');
var bodyParser = require('body-parser');
const ENV = require('dotenv').load(); // Esto carga el archivo .env con las variables de entorno.
	
/** Seteamos la base de datos */
var Sequelize = require('sequelize');

const VARS = {
	MYSQL_HOST: process.env.MYSQL_HOST,
	MYSQL_USER: process.env.MYSQL_USER,
	MYSQL_PASS: process.env.MYSQL_PASS,
	MYSQL_DB: process.env.MYSQL_DB
};

/**
 *	Inicializamos Sequelize.
 *	Sequelize es un ORM o libreria de mapeo objeto-relacional,
 *	Que permite manipular SQL a un alto nivel, evitando así escribir sentencias SQL puras,
 *	y brinda un API del lenguaje muy sencillo de entender.	
 *	
 *	La declaración GLOBAL.DATABASE hace referencia a una variable global, en el momento de la ejecución.
 *	Lo que traduce a que el objeto de coneccion es accesible desde cualquier parte de la aplicacion, sin
 *	necesidad de estar importando un fichero. 
 *	
 *	@info http://docs.sequelizejs.com/en/latest/docs/getting-started/#setting-up-a-connection
 */
GLOBAL.DATABASE = new Sequelize(VARS.MYSQL_DB, VARS.MYSQL_USER, VARS.MYSQL_PASS {
	host: VARS.MYSQL_HOST,
	dialect: 'mysql'
})

/**
 *	Parametrizamos el servidor.
 *	Express es una libreria/framework minimalista, que facilita el desarrollo
 *	de aplicaciones basadas en el protocolo HTTP.
 *	
 *	@info http://expressjs.com
 */
const app = express();
const rutas = require('./routes.js');

app.use(bodyParser.json());
app.use(rutas);

app.listen(3000, () => {
	console.log("DreamParking is online... ");
});