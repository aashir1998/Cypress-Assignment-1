/// <reference types="cypress" />

describe('Actions', () => {
  
    it('test case 1', () => {
      cy.visit("/login")
      cy.get('#username').type("tomsmith")
      cy.get('#password').type("SuperSecretPassword!")
      cy.get('.fa').click()
      cy.get('#flash').contains("You logged into a secure area!")
    })
  
    it('test case 2', () =>{
      cy.visit("/login")
      cy.get('#username').as('Aashir')
      cy.get('#password').as('Ahmed')
      cy.get('@Aashir').type('abcde')
      cy.get('@Ahmed').type('1234')
      cy.get('.fa').click()
      cy.get('#flash').contains("Your username is invalid!")
    })
    it('test case 3', () =>{
        cy.visit("/add_remove_elements/")
        let i=0;
        for(i=0;i<3;i++){
            cy.get('[onclick="addElement()"]').click()
        }
        cy.get('#elements').find('.added-manually').should('have.length', 3)
        
      })
      it('test case 4', () =>{
        cy.visit("/dropdown")
        cy.get('#dropdown').select("Option 2").contains("Option 2") 
      })
      it('test case 5', () =>{
        cy.visit("/broken_images")
        

          cy.get('.example').each(($el,index) => {
            const sources = ['asdf.jpg','hjkl.jpg','src="img/avatar-blank.jpg']
            cy.get($el).find('img').should('have.attr', 'src', sources[index]) 
               
       })


        
      })

    
  
    
  
    
  })