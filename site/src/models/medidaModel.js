var database = require("../database/config");

function Personagens() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(usuario.fkPersonagem) AS votos, personagem.personagemPreferido AS Personagem FROM usuario JOIN personagem ON idPersonagem = usuario.fkPersonagem GROUP BY usuario.fkPersonagem;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(usuario.fkPersonagem) AS votos, personagem.personagemPreferido AS Personagem FROM usuario JOIN personagem ON idPersonagem = usuario.fkPersonagem GROUP BY usuario.fkPersonagem;
        `;
        console.log(instrucaoSql);
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function Temporadas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(usuario.fkTemporada) AS votos, temporada.temporadaPreferido AS Temporada FROM usuario JOIN temporada ON idTemporada = usuario.fkTemporada GROUP BY temporadaPreferido;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(usuario.fkTemporada) AS votos, temporada.temporadaPreferido AS Temporada FROM usuario JOIN temporada ON idTemporada = usuario.fkTemporada GROUP BY temporadaPreferido;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    Personagens,
    Temporadas
}
