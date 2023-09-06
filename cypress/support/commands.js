const Anime = require('../support/payloads/animePayload')


Cypress.Commands.add('createAnime', (payload) => {
    cy.request({
        method: 'POST',
        failOnStatusCode : false,
        log: true,
        url: '/animes',
        body: payload
        })
  })


  Cypress.Commands.add('findByLast', () => {
    cy.request({
        method: 'GET', 
        failOnStatusCode : false, 
        log: true,     
        url: '/animelast',
      })
  })  


  Cypress.Commands.add('findById', (idAnime)=>{
    cy.request({
      methood: 'GET',
      failOnStatusCode: false,
      log:true,
      url: '/animes/'+ idAnime
    })
  })



  Cypress.Commands.add('updateAll', (payload)=>{
    cy.request({
           method: 'PUT',
          failOnStatusCode : false,
          url: '/animes',
          body: payload
    })
  })


  Cypress.Commands.add('updateOne', (payload)=>{
    cy.request({
           method: 'PATCH',
          failOnStatusCode : false,
          url: '/animes',
          body: payload
    })
  })