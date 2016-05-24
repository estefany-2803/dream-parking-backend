'use strict';

var express = require('express');
var bodyParser = require('body-parser');

const app = express();
const rutas = require('./routes.js');

app.use(bodyParser.json());
app.use(rutas);

app.listen(3000, () => {
	console.log("DreamParking is online... ");
});