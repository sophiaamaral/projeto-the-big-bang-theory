var medidaModel = require("../models/medidaModel");

function Personagens(req, res) {

    var idPersonagem = req.params.idPersonagem;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.Personagens(idPersonagem).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function Temporadas(req, res) {

    var idTemporada = req.params.idTemporada;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.Temporadas(idTemporada).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    Personagens,
    Temporadas

}