/// <reference types="cypress"/>

import 'cypress-mochawesome-reporter/register';
const Anime = require('../../support/payloads/animePayload')

describe('Cadastrar ANIME e atualizar todos os campos', function(){
    context('Dado o cadastro com os campos (nome protagonista e idade)', function(){
        it('Quando Atualizo os campos e valido os novos valores', function(){
            cy.createAnime(Anime.animeValido)
            cy.findByLast().then((anime)=>{
               
                let id_anime = anime.body.result[0].id 
                let put_anime = {
                    "nome": anime.body.result[0].nome + " UP",
                    "protagonista": anime.body.result[0].protagonista + " UP",
                    "idade": 30,
                    "id": id_anime
                }
                
                cy.updateAll(put_anime).then((anime)=>{
                    
                    expect(anime.status, 'ASSERT HTTP STATUS CODE').equal(200)

                cy.findById(id_anime).then((anime)=>{

                    expect(anime.status, 'ASSERT HTTP STATUS CODE').equal(200)
                    expect(anime.body.result[0].id, 'ASSERT BODY ID').equal(id_anime)
                    expect(anime.body.result[0].nome, 'ASSERT BODY NOME').equal(put_anime.nome)
                    expect(anime.body.result[0].protagonista, 'ASSERT BODY PROTAGONISTA').equal(put_anime.protagonista)
                    expect(anime.body.result[0].idade, 'ASSERT BODY IDADE').equal(put_anime.idade)
                    
                })
                })
            })
        })
    })
})