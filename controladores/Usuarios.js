'use strict';

module.exports = {
	/**
	 *	Se supone que esto debe agregar un usuario
	 */
	'crearUsuario': (peticion, respuesta) => {
		respuesta.json({
			mensaje: "Usuario añadidio correctamente"
		})
	},
	/**
	 *	Aqui deberia consultar la base de datos
	 */
	'consultarUsuarios': (peticion, respuesta) => {
		respuesta.json({
			mensaje: 'Aqui va el listado de usuarios'
		});
		console.log(DATABASE)
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