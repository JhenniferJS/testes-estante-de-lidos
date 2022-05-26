/// <reference types="cypress" />

describe("Testes Estante de Lidos", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/EstanteDeLidos/main?action=Index");
  });

  it("Tela inicial", () => {
    cy.get(".titulo").contains("O que você precisa hoje?").should("be.visible");
    cy.contains("a", "Livro").should("be.visible");
    cy.contains("a", "Material didático").should("be.visible");
  });

  it("Verificar ausencia de livros", () => {
    cy.contains("a", "Livro").click();
    cy.contains("h5", "Não há livros cadastrados").should("be.visible");
  });

  it("Verificar ausencia de materiais didaticos", () => {
    cy.contains("a", "Material didático").click();
    cy.contains("h5", "Não há materiais cadastrados").should("be.visible");
  });

  it("Cadastrar livro", () => {
    cy.contains("a", "ANUNCIAR").click();
    cy.contains("legend", "O que você deseja anunciar?").should("be.visible");

    cy.get("input[value='livro']").click();
    cy.get("input[placeholder='Nome do conteúdo']").type("Dom Quixote");
    cy.get("input[placeholder='Valor']").type("10.0");
    cy.get("input[name='vendedor-nome']").type("Jhennifer Siqueira");
    cy.get("input[placeholder='Telefone']").type("35 992184605");
    cy.get("input[type='submit']").click();
    cy.get(".titulo").contains("O que você precisa hoje?").should("be.visible");

    cy.contains("a", "Livro").click();
    cy.contains("li", "Dom Quixote").should("be.visible");
  });

  it("Cadastrar material didatico", () => {
    cy.contains("a", "ANUNCIAR").click();
    cy.contains("legend", "O que você deseja anunciar?").should("be.visible");

    cy.get("input[value='material']").click();
    cy.get("input[placeholder='Nome do conteúdo']").type("Calculo 1");
    cy.get("#gratis").check();
    cy.get("input[name='vendedor-nome']").type("Jhennifer Siqueira");
    cy.get("input[placeholder='Telefone']").type("35 992184605");
    cy.get("input[type='submit']").click();
    cy.get(".titulo").contains("O que você precisa hoje?").should("be.visible");

    cy.contains("a", "Material didático").click();
    cy.contains("li", "Calculo 1").should("be.visible");
  });
});
