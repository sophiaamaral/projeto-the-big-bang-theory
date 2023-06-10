CREATE DATABASE thebigbang;
USE thebigbang;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(60),
dtNasc DATE,
email VARCHAR(45),
senha VARCHAR(60),
fkPersonagem INT,
fkTemporada INT,
CONSTRAINT fkPers FOREIGN KEY (fkPersonagem) 
	REFERENCES personagem(idPersonagem),
CONSTRAINT fkTemp FOREIGN KEY (fkTemporada) 
	REFERENCES temporada(idTemporada)
);
CREATE TABLE pontuacao_quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
acertos VARCHAR(45),
fkUsuario INT,
CONSTRAINT fkUsuar FOREIGN KEY (fkUsuario) 
	REFERENCES usuario(idUsuario)
);

SELECT * FROM pontuacao_quiz;

CREATE TABLE personagem (
idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
personagemPreferido VARCHAR(45)
);
INSERT INTO personagem VALUES
(NULL,'Sheldon Cooper'),
(NULL,'Leonard Hofstadter'),
(NULL,'Penny'),
(NULL,'Howard Wolowitz'),
(NULL,'Amy Farrah Fowler'),
(NULL,'Rajesh Koothrappali'),
(NULL,'Bernadette Maryann'),
(NULL,'Stuart Bloom');
SELECT * FROM usuario;

CREATE TABLE temporada (
idTemporada INT PRIMARY KEY AUTO_INCREMENT,
temporadaPreferido VARCHAR(45)
);
DROP TABLE temporada;

INSERT INTO temporada VALUES
(NULL,'1° Temporada'),
(NULL,'2° Temporada'),
(NULL,'3° Temporada'),
(NULL,'4° Temporada'),
(NULL,'5° Temporada'),
(NULL,'6° Temporada'),
(NULL,'7° Temporada'),
(NULL,'8° Temporada'),
(NULL,'9° Temporada'),
(NULL,'10° Temporada'),
(NULL,'11° Temporada'),
(NULL,'12° Temporada');

SELECT * FROM temporada;
SELECT * FROM personagem;
SELECT * FROM usuario;

SELECT COUNT(usuario.fkPersonagem) AS votos, personagem.personagemPreferido AS Personagem FROM usuario JOIN personagem
ON idPersonagem = usuario.fkPersonagem GROUP BY usuario.fkPersonagem;

SELECT COUNT(usuario.fkTemporada) AS votos, temporada.temporadaPreferido AS Temporada FROM usuario JOIN temporada
        ON idTemporada = usuario.fkTemporada GROUP BY temporadaPreferido;
        
	desc personagem;