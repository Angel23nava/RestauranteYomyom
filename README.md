# RestauranteYomyom
App en React,Node.js, Express,Mysql

El proyecto se basa en 2 carpetas, donde en la carpeta Node se configura como el servidor, las conexiones a la base de datos,la tabla de datos, las consultas para los CRUD y las rutas de llamado por lo que hay que inicializar el servidor en consola con comando.

Nodemon app

*dentro de la carpeta de Node.

A continuacion para ver la interfaz de la app esta sobre la carpeta de interfaz, la cual da un index de intro donde se selecciona que usuario entrara si administrador o cliente, esto se coloca de forma para dos vistas, no como un login, despues encontramos en dos interfaces, la del cliente  muestra el menu solo la categoria asi como el nombre y descripcion del platillo, el cual cambia de acuerdo a las horas en tiempo real del menu. 

Para la interfaz del administrador es donde se encuentra la vista de la tabla, como primera imagen tenemos la tabla que se utilizo en nuestra base de datos, al lateral encontramos dos botones 

edit: el cual nos manda a un formulario el cual hace la edicion del platillo.
delete: elimina el registro que se utilizo

en la parte posterior encontramos el boton de agregar platillo el cual manda a un formulario en el cual se agrega el platillo a la tabla.

este arranca en consola de igual forma

npm start

*dentro de la carpeta de interfaz.

se manejo sin validaciones de contexto en los formularios, sin embargo se colocan not null para que el registro no entre en caso de falta de un dato, se utiliza de modo local en la base de datos.

tomando en cuenta el horario en turno 1, 2 y 3

tomando en cuenta categoria 1,2,3,4 o 5 tenedores

Se utilizo:

React, Node.js, Express, MySQL, Bootstrapp, API axios, Lib Routes y JS