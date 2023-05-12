CREATE DATABASE thebigbang;
USE thebigbang;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome_completo VARCHAR(60),
dtNasc DATE,
email VARCHAR(45),
senha VARCHAR(60)
);

DROP DATABASE thebigbang;