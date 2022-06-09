CREATE DATABASE openhostel;
\l;

\c openhostel;

CREATE TABLE hostal(
    id SERIAL NOT NULL,
    nombre VARCHAR(25)NOT NULL,
    ciudad  VARCHAR(45)NOT NULL,
    sede VARCHAR(45)NOT NULL,
    descripcion  VARCHAR(200)NOT NULL,
    direccion varchar(85)NOT NULL,
    foto VARCHAR (50)NOT NULL,
    geometry1: int NOT NULL,
    geometry2:  int NOT NULL,        

     PRIMARY KEY (id)

);

CREATE TABLE room(
    id SERIAL NOT NULL,
    tipo varchar(30) NULL DEFAULT NULL,
    descripcion VARCHAR(200)NOT NULL,
    foto VARCHAR (50)NOT NULL,
    estado int NOT NULL,
    capacidad INTEGER NOT NULL,
    servicios VARCHAR(100) NOT NULL,
    id_hostal SERIAL NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_hostal) 
    REFERENCES hostal (id) ON DELETE RESTRICT ON UPDATE CASCADE

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
    id_hostal SERIAL NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_hostal)
    REFERENCES hostal (id) ON DELETE RESTRICT ON UPDATE CASCADE
);

   --mostrar las tablas de la base de datos
    \dt ;

  -- describir una tabla 
    \d hostal;
    \d room;
    \d users;
 
ALTER TABLE hotales AUTO_INCREMENT=1;


 INSERT INTO hotales( nombre,ciudad,sede,descripcion,direccion,foto,coordenadas)
 VALUES( 'Selina','Medellín','Selina Medellin & Cowork','Vení a disfrutar de nuestro hotel Selina Medellín. En medio del barrio La Florida. Clases de Yoga, estudio de musica, espacio de cowork y mucho más','Cra.32d #9-17, Medellín, El Poblado','ing1.jpg','-16.2531253896762,28.47492552989593');

INSERT INTO users(nombre,apellido,email,contrasena,celular,tipo_documento,numero_documento,nacionalidad,rol,id_hotales)
VALUES('Wilmara','Ruiz','wilmara_andreina93@hotmail.com','123456','3143678428','CE','642835','VENEZOLANA','admin','1');

INSERT INTO habitacion(tipo,descripcion,foto,estado,capacidad,servicios,id_hotales)
 VALUES('Habitación Estándar','Una estancia clásica:asequible, cómoda y privada. Nuestra habitación Estándar ofrece a dos huéspedes el espacio ideal para relajarse cómodamente en total privacidad.','img1.jpg','disponible','2','Wifi,Baño Privado,Ropa de cama,Toallas,Armario,Agua caliente,Enchufe cerca de la cama','1');