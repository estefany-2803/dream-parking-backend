### Como Configurar

#### 1. Primero
En la carpeta del proyecto crear un archivo llamado `.env` y dentro de este definir las siguientes variables:

```bash
MYSQL_USER='' # Definir Usuario de MySQL
MYSQL_PASS='' # Definir Password a la base de datos
MYSQL_DB='' # Definir a que base de datos se va a conectar la aplicación
```

#### 2. Crear la base de datos y crear tablas
En el directorio `models` estan las definiciones SQL de todas las tablas. Es necesario validar que la base de datos está correctamente parametrizada.

#### 3. Poner en marcha.
En la carpeta del proyecto ejecutar:

```bash
[Dream_Park] $ npm start
```