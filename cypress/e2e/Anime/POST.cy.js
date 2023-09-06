/// <reference types="cypress"/>

import 'cypress-mochawesome-reporter/register';

const Anime = require('../../support/payloads/animePayload')

before(()=>{

})


describe('Cadastrar novo Anime com campos válidos', function(){
  context('Dado o cadastro com os campos (nome protagonista e idade)', function(){
    it('Quando valido o status do cadastro', function(){
        cy.createAnime(Anime.animeValido).then((anime)=>{ 
          console.log(anime)
          expect(anime.status, 'ASSERT HTTP STATUS CODE').equal(201)
        })
    });

    it('Então busco o ultimo ANIME cadastro e valido os campos', function(){
      cy.findByLast().then((anime)=>{
          expect(anime.status, 'ASSERT HTTP STATUS CODE').equal(200)
          expect(anime.body.result[0].nome, 'ASSERT nome').equal(Anime.animeValido.nome)
          expect(anime.body.result[0].protagonista, 'ASSERT protagonista').equal(Anime.animeValido.protagonista)
          expect(anime.body.result[0].idade, 'ASSERT idade').equal(Anime.animeValido.idade)
          expect(anime.body.result[0].id, 'ASSERT id').not.to.be.null
      })

    })
  })

  context('Cadastrar ANIME com campo NOME contendo número', function(){
    it('Dado o cadastro com os campos (nome protagonista e idade)', function(){
      cy.createAnime(Anime.animeNomecomNumero).then((anime)=>{
          expect(anime.body.msg, 'ASSERT Body Error field NOME').equal("Field nome Invalid")
          expect(anime.status, 'ASSERT HTTP STATUS CODE 400').equal(400)
      })
    });
    })
})












  
  













