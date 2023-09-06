/// <reference types="cypress"/>



import 'cypress-mochawesome-reporter/register';
const Anime = require('../../support/payloads/animePayload')



describe('Cadastrar ANIME e atualizar todos os campos', function(){
    context('Dado o cadastro com os campos (nome protagonista e idade)', function(){
    it('Quando Atualizo o campo NOME e valido o novo valor', function(){
        cy.createAnime(Anime.animeValido).then((anime)=>{
            cy.findByLast().then((anime)=>{
                let id_anime = anime.body.result[0].id 
                let protagonista = anime.body.result[0].protagonista 
                let patch_anime = {
                    "nome": anime.body.result[0].nome + " UP",
                    "id": id_anime    
                }

                cy.updateOne(patch_anime).then((anime)=>{

                    expect(anime.status, 'ASSERT HTTP STATUS CODE').equal(200)

                })
                
                cy.findById(id_anime).then((anime)=>{
                      console.log(anime)
                      expect(anime.status, 'ASSERT HTTP STATUS CODE').equal(200)
                      expect(anime.body.result[0].id, 'ASSERT BODY ID').equal(id_anime)
                      expect(anime.body.result[0].nome, 'ASSERT BODY NOME').equal(patch_anime.nome)
                      expect(anime.body.result[0].protagonista, 'ASSERT BODY PROTAGONISTA').equal(protagonista)
               
                })       
            })
        })

     })
})
      context('Dado o cadastro com os campos (nome protagonista e idade)', function(){
        it('Quando Atualizo o campo PROTAGONISTA e valido o novo valor', function(){
            cy.createAnime(Anime.animeValido).then((anime)=>{
                cy.findByLast().then((anime)=>{
                    let id_anime = anime.body.result[0].id 
                    let nome = anime.body.result[0].nome 
                    let patch_anime = {
                        "protagonista": anime.body.result[0].protagonista + " UP",
                        "id": id_anime    
                    }
    
                    cy.updateOne(patch_anime).then((anime)=>{
    
                        expect(anime.status, 'ASSERT HTTP STATUS CODE').equal(200)
    
                    })
                    
                    cy.findById(id_anime).then((anime)=>{
                          expect(anime.status, 'ASSERT HTTP STATUS CODE').equal(200)
                          expect(anime.body.result[0].id, 'ASSERT BODY ID').equal(id_anime)
                          expect(anime.body.result[0].nome, 'ASSERT BODY NOME').equal(nome)
                          expect(anime.body.result[0].protagonista, 'ASSERT BODY PROTAGONISTA').equal(patch_anime.protagonista)
                   
                    })       
                })
            })
        })
      })  


})