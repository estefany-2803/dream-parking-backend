'use strict';
var usuarios = [
	{ _id: 1, nombre: "Estefany", apellido: "Ortiz" },
	{ _id: 2, nombre: "Nicolas", apellido: "Morales" },
	{ _id: 3, nombre: "Nicolas", apellido: "Morales" },
	{ _id: 4, nombre: "Nicolas", apellido: "Morales" }
];

module.exports = {
	/**
	 *	Se supone que esto debe agregar un usuario
	 */
	'crearUsuario': (peticion, respuesta) => {
		var nuevoUsuario = peticion.body;
		usuarios.push(nuevoUsuario);
		respuesta.json({
			mensaje: "Usuario añadidio correctamente"
		})
	},
	/**
	 *	Aqui deberia consultar la base de datos
	 */
	'consultarUsuarios': (peticion, respuesta) => {
		respuesta.json(usuarios);
	},

	/**
	 *	Aqui deberia consultar un solo usuario deacuerdo a su id
	 */
	'consultarUsuario': (peticion, respuesta) => {
		var id = (peticion.params.usuarioId - 1);
		respuesta.json(usuarios[id]);
	},
	'borrarUsuario': () => {

	}
}