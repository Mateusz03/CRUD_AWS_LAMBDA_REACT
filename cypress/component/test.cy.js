import App from "../../src/App";
describe("ComponentName.cy.js", () => {
  it("playground", () => {
    cy.viewport(800, 1250);
    cy.mount(<App />);
    cy.intercept("POST", "http://localhost:2137/read").as("readRequest");
    cy.wait("@readRequest");
    cy.get(".sc-kEjaJL > :nth-child(1)").click();
    cy.get(".swal2-input").type("cypressTest");
    cy.intercept("POST", "http://localhost:2137/create").as("createRequest");
    cy.get(".swal2-confirm").click();
    cy.wait("@createRequest");
    cy.get(".sc-bdfCkl")
      .children()
      .then((children) => {
        const numberOfChildren = children.length;
        cy.get(`:nth-child(${numberOfChildren}) > .sc-eCstFB`).click();
      });
    cy.get(".sc-kEjaJL > :nth-child(3)").click();
    cy.get(".swal2-input").type("cypressUpdate");
    cy.intercept("POST", "http://localhost:2137/update").as("updateRequest");
    cy.get(".swal2-confirm").click();
    cy.wait("@updateRequest");
    cy.get(".sc-bdfCkl")
      .children()
      .then((children) => {
        const numberOfChildren = children.length;

        cy.get(`:nth-child(${numberOfChildren}) > .sc-eCstFB`).click();
        cy.get(`:nth-child(${numberOfChildren}) > .sc-eCstFB`).click();
      });
    cy.get(".sc-kEjaJL > :nth-child(2)").click();
    cy.intercept("POST", "http://localhost:2137/delete").as("deleteRequest");
    cy.get(".swal2-confirm").click();
    cy.wait("@deleteRequest");
    cy.get(".sc-pGawl").click();
    cy.get(".sc-kEjaJL > :nth-child(2)").click();
    cy.get(".swal2-cancel").click();
    cy.get(".sc-kEjaJL > :nth-child(3)").click();
    cy.get(".swal2-confirm").click();
    cy.get(".sc-pGawl").click();
  });
});
