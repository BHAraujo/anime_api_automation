Projeto API_AUTOMATION
    Cenários básicos de automação da ap, link para download: https://github.com/BHAraujo/ApiAnime

Preparar o ambiente, Links para downloads:
  - Nodejs:
      - https://nodejs.org/en

  - CYPRESS: 
     - https://www.cypress.io/

  - NODE RANDOM NAME: 
     - npm i node-random-name     

  - MOCHA-FOO-REPORTER
    - https://mochajs.org/api/tutorial-custom-reporter.html     

  - VSCODE: 
     - https://code.visualstudio.com/


##### Configuração de Ambiente ##### 
   - Instalar as dependências do projeto 
    - npm install pakage.json --save-dev

###### Command Line ######
### Executando o projeto pelo CMD ###
    Arquivo package.json
 "scripts": {
    "cypress:run": "cypress run",
             },

   - Executar todos os testes 
      - npm run cypress:run - Padrão Ambiente de HML (./environment/hml_cypress.config.js)


   - Executar somente e2e
      - npm run cypress:run --spec "cypress/e2e/Anime/POST.cy.js" - Padrão Ambiente de HML (./environment/hml_cypress.config.js)


   - Executar com arquivo específico de configuração  
       - npx cypress run --config-file ./environment/hml_cypress.config.js
       - npx cypress run --config-file ./environment/prd_cypress.config.js

   - Relátorios
     - Em todas a execuções é gerado o relatório e screensho, localizados na pasta
        - reports -> hml
        - screenshot ->
    

###### Command Line ######
### Executando o projeto pela Interface do Cypress

OBSERVAÇÃO
   **** Command Line "cypress:open" não gera report **** 

    - Executar todos os testes 
      - npm run cypress:open - Padrão Ambiente de HML (./environment/hml_cypress.config.js)

    - Executar somente e2e
      - npm run cypress:open --spec "cypress/e2e/Anime/POST.cy.js" - Padrão Ambiente de HML (./environment/hml_cypress.config.js)

   - Executar com arquivo específico de configuração  
       - npx cypress open --config-file ./environment/hml_cypress.config.js
       - npx cypress open --config-file ./environment/prd_cypress.config.js  

