CREATE DATABASE usuarios;

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Filipi Enzo",
    "email@teste.com",
    18
);

INSERT INTO usuarios(idade, email, nome) VALUES(
    -1,
    "email@teste1.com",
    "Patrick Miranda"
);

SELECT * FROM usuarios;
SELECT * FROM usuarios WHERE idade >= 18;

DELETE FROM usuarios WHERE nome = "Patrick Miranda";

UPDATE usuarios SET nome = "Nome de teste" WHERE nome = "Filipi Enzo";