USE dream_parking;

CREATE TABLE usuarios (
	id INT(30) NOT NULL PRIMARY KEY,
    primer_nombre VARCHAR(30) NOT NULL,
    segundo_nombre VARCHAR(30),
    primer_apellido VARCHAR(30) NOT NULL,
    segundo_apellido VARCHAR(30)
)