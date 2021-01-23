CREATE DATABASE projectNodeJS;

USE projectNodeJS;

-- tabla usuarios
CREATE TABLE usuarios(
    id INT(11) NOT NULL,
    usuario VARCHAR(16) NOT NULL,
    contrasena VARCHAR (60) NOT NULL,
    nombre VARCHAR (100) NOT NULL,
);

ALTER TABLE usuarios
    ADD PRIMARY KEY (id);

ALTER TABLE usuarios
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

-- tabla links
CREATE TABLE links (
    id INT(11) NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    url VARCHAR (255) NOT NULL,
    descripcion TEXT,
    id_usuario INT(11),
    creado TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

ALTER TABLE links
    ADD PRIMARY KEY (id);

ALTER TABLE links
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;