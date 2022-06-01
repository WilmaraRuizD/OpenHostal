CREATE DATABASE openhostel;
ENCODING = 'UTF8' 

\l;

\c openhostel;

CREATE TABLE hotales(
    id SERIAL NOT NULL,
    nombre VARCHAR(25)NOT NULL,
    ciudad  VARCHAR(45)NOT NULL,
    sede VARCHAR(45)NOT NULL,
    descripcion VARCHAR(200)NOT NULL,
    direccion varchar(85)NOT NULL,
    foto VARCHAR (50)NOT NULL,
    coordenadas VARCHAR(100) NOT NULL,
     PRIMARY KEY (id)

);

CREATE TABLE habitacion(
    id SERIAL NOT NULL,
    tipo varchar(30) NULL DEFAULT NULL,
    descripción VARCHAR(100)NOT NULL,
    foto VARCHAR (50)NOT NULL,
    estado varchar(30) NULL DEFAULT NULL,
    capacidad INTEGER NOT NULL,
    servicios VARCHAR(50) NOT NULL,
    id_hotales SERIAL NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_hotales) 
    REFERENCES hotales (id) ON DELETE RESTRICT ON UPDATE CASCADE

);


CREATE TABLE users(
   id SERIAL NOT NULL,
    nombre  VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    contrasena VARCHAR(30) NOT NULL,
    celular VARCHAR(10) NOT NULL,
    tipo_documento VARCHAR(16) NOT NULL,
    numero_documento int NOT NULL,
    nacionalidad VARCHAR(15) NOT NULL,
    rol VARCHAR(10),
    id_hotales SERIAL NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_hotales)
    REFERENCES hotales (id) ON DELETE RESTRICT ON UPDATE CASCADE
);

   --mostrar las tablas de la base de datos
    \dt ;

  -- describir una tabla 
    \d hotales;
    \d habitacion;
    \d users;
 

 INSERT INTO hotales( nombre,ciudad,sede,descripcion,direccion,foto,coordenadas)
 VALUES( 'Selina','Medellín','Selina Medellin & Cowork','Vení a disfrutar de nuestro hotel Selina Medellín. En medio del barrio La Florida. Clases de Yoga, estudio de musica, espacio de cowork y mucho más','Cra.32d #9-17, Medellín, El Poblado','ing1.jpg','-16.2531253896762,28.47492552989593');

INSERT INTO users(nombre,apellido,email,contrasena,celular,tipo_documento,numero_documento,nacionalidad,rol,id_hotales)
VALUES('Wilmara','Ruiz','wilmara_andreina93@hotmail.com','123456','3143678428','CE','642835','VENEZOLANA','admin','1');
