/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    const url = "https://test.something.com/api/v1/users";
    cy.intercept(`${url}*`, "something")
      .as("foo")
      .then(() => {
        Cypress.$.get(url);
      })
      .wait("@foo");
  });

  it("works with exact url", () => {
    const url = "https://test.something.com/api/v1/users";
    cy.intercept(url, "something")
      .as("foo")
      .then(() => {
        Cypress.$.get(url);
      })
      .wait("@foo");
  });

  it("works with brackets in url", () => {
    const url = "https://test.something.com/api/v1/users?sort=email[i]";

    cy.intercept(`${url}*`, "something")
      .as("foo")
      .then(() => {
        Cypress.$.get(url);
      })
      .wait("@foo");
  });

  it("works with brackets encoded in intercept only", () => {
    const url = "https://test.something.com/api/v1/users?sort=email%5Bi%5D";

    cy.intercept(`${url}*`, "something")
      .as("foo")
      .then(() => {
        Cypress.$.get("https://test.something.com/api/v1/users?sort=email[i]");
      })
      .wait("@foo");
  });

  it("works with brackets encoded", () => {
    const url = "https://test.something.com/api/v1/users?sort=email%5Bi%5D";

    cy.intercept(`${url}*`, "something")
      .as("foo")
      .then(() => {
        Cypress.$.get(url);
      })
      .wait("@foo");
  });

  it("works with single quotes encoded in intercept only", () => {
    const url =
      "https://test.something.com/api/v1/users?filter=%27f68c1653-d88a-43c9-903d-dafaa18a8f0f%27";

    cy.intercept(`${url}*`, "something")
      .as("foo")
      .then(() => {
        Cypress.$.get(
          "https://test.something.com/api/v1/users?filter='f68c1653-d88a-43c9-903d-dafaa18a8f0f'"
        );
      })
      .wait("@foo");
  });

  it("works with encoded single quotes", () => {
    const url =
      "https://test.something.com/api/v1/users?filter=%27f68c1653-d88a-43c9-903d-dafaa18a8f0f%27";

    cy.intercept(`${url}*`, "something")
      .as("foo")
      .then(() => {
        Cypress.$.get(url);
      })
      .wait("@foo");
  });
});
