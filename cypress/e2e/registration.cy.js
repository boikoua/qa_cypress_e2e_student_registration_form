/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should be success registration', () => {
    cy.get('#firstName').type('John');

    cy.get('#lastName').type('Johnson');

    cy.get('#userEmail').type('johnjohnson@gmail.com');

    cy.get('.custom-control-label').contains('Male').click();

    cy.get('#userNumber').type('53459854335');

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__day--001').contains('1').click();

    cy.get('#subjectsInput').type('Maths{enter}');

    cy.get('.custom-control-label').contains('Sports').click();

    cy.get('#currentAddress').type('6200 Winner street, New-York, USA');

    cy.get('#state').click();
    cy.contains('div', 'NCR').click();

    cy.get('#city').click();
    cy.contains('div', 'Delhi').click();

    cy.get('#submit').click();

    cy.get('.modal-title').should(
      'contain.text',
      'Thanks for submitting the form'
    );
  });
});
