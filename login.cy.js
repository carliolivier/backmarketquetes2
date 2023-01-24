

describe("log in successful", () => {
    it("put log on form", () => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        cy.get('.mt-7 > .flex > ._3jgXaWY4 > .MkLAMntR > ._2GvJDBxS').click();
        cy.get("#signin-email").type("tatatoto59@live.fr");
        cy.get("#signin-password").type("12321Aa*");
        cy.get('[data-test="signin-component"] > form > .mt-7 > ._1xMx-RYw').click();
    });
});