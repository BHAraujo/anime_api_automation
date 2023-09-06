
const random_name = require('node-random-name');

const animeValido = {
    "nome": random_name({ last: true }),
    "protagonista": random_name({ last: true }),
    "idade": Math.floor(Math.random() * 50)
}

const animeNomecomNumero = {
  "nome": random_name({ last: true }) + " "+ 2,
  "protagonista": random_name({ last: true }),
  "idade": Math.floor(Math.random() * 50)
}

module.exports= {
  animeValido: animeValido,
  animeNomecomNumero: animeNomecomNumero
}