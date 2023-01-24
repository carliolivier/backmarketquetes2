// <reference types="cypress" />
import { faker } from "@faker-js/faker";



let last = faker.name.lastName();
let first = faker.name.firstName();
let email =  faker.internet.email();
let mdpunique = newMDP();
function newMDP() {
    let charset ="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let MDPLength = 5;
    let MDP = "";
    for (var i = 0; i <= MDPLength; i++) {
        var randomNumber = Math.floor(Math.random() * charset.length);
        MDP += charset.substring(randomNumber, randomNumber + 1);
    }
    return MDP;
}

describe("Test formulaire", () => {
	it("Scénario formulaire", () => {
		cy.visit("https://preprod.backmarket.fr/fr-fr/register");
		cy.get('.mt-7 > .flex > ._3jgXaWY4 > .MkLAMntR > ._2GvJDBxS').click();
		cy.get('#firstName').type(first);
		cy.get('#lastName').type(last)
		cy.get('#signup-email').type(email);
		cy.get('#signup-password').type(mdpunique);
		cy.get('._2OVE0h6V').click();
		cy.get('[data-test="signup-component"] > form > .justify-end > ._1xMx-RYw').click();
		cy.log("Test reussi");
	});
});