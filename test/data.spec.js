import { saludo, anotherExample } from "../src/data.js";

describe("saludo", () => {
  it("retorna el saludo 'hola, fran' con el argumento 'fran'", () => {
    // AAA
    // 1. Arrange
    const nombrePrueba = "fran";
    const saludoEsperado = "hola, fran";

    // 2. Act
    const saludoReal = saludo(nombrePrueba);

    //3. Assert
    expect(saludoReal).toBe(saludoEsperado); // toBe es un matcher
  });

  it("retorna el string vacío si no se pasan argumentos", () => {
    // Arrange
    const saludoEsperado = "";

    // Act
    const saludoReal = saludo();

    // Assert
    expect(saludoReal).toBe(saludoEsperado);
  });

  it("", () => {
    // Arrange
    const saludoEsperado = "";

    // Act
    const saludoReal = saludo();

    // Assert
    expect(saludoReal).toBe(saludoEsperado);
  });
});

describe("anotherExample", () => {
  it("is a function", () => {
    expect(typeof anotherExample).toBe("function");
  });

  it("returns `anotherExample`", () => {
    expect(anotherExample()).toBe("OMG");
  });
});
