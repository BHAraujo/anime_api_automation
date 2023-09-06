/// <reference types="cypress"/>

import 'cypress-mochawesome-reporter/register';

describe('Buscar ANIME pelo ID', ()=>{
    it('Pesquiso o ANIME com ID 382', ()=>{
        cy.findById(382).then((anime)=>{    
            expect(anime.status, 'ASSERT HTTP STATUS CODE').equal(200)   
            expect(anime.body.result[0].nome, 'Assert nome').equal("novo opa")
            expect(anime.body.result[0].protagonista, 'Assert protagonista').equal("novo opa")
            expect(anime.body.result[0].idade, 'Assert idade').equal(23)
            expect(anime.body.result[0].id, 'Assert id').equal(382)
        })
    })
})