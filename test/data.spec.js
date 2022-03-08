import {
  filtroGenero,
  statusFilter,
  speciesFilter,
  orderAlfaFilter,
  calcularPorcentagem,
  searchName,
} from "../src/data.js";

const Personagens = [
  {
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
  },
  {
    name: "Boobloosian",
    status: "Dead",
    species: "Alien",
    gender: "unknown",
  },
  {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
  },
  {
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
  },
];

// Teste do Filtro Genero Male

describe("filtroGenero", () => {
  it("Deverá ser uma função", () => {
    expect(typeof filtroGenero).toBe("function"); //typeof retorna uma string indicando o tipo de um operando.
  });

  it("Deverá filtrar pelo gênero Female", () => {
    const expected = filtroGenero(Personagens, "Female");
    expect(expected).toEqual([{"gender": "Female", "name": "Summer Smith", "species": "Human", "status": "Alive"}]);
  });
});

//Teste da Porcentagem

describe("calcularPorcentagem", () => {
  it("Deverá ser uma função", () => {
    expect(typeof calcularPorcentagem).toBe("function"); // A função .toBe verifica não só se os dois valores são iguais, mas também se eles são do mesmo objeto.
  });

  it("Deverá retornar 50% de personagens masculinos", () => {
    const expected = calcularPorcentagem(Personagens.length, 2);
    expect(expected).toEqual(50); //A função .toEqual(valor) verifica se duas coisas são iguais (e não necessariamente o mesmo objeto).
  });
});

// Teste do Status

describe("statusFilter", () => {
  it("Deverá ser uma função", () => {
    expect(typeof statusFilter).toBe("function");
  });

  it("Deverá filtrar pelo status Dead", () => {
    const expected = statusFilter(Personagens, "Dead");
    expect(expected).toEqual([{status: "Dead",name: "Boobloosian",species: "Alien",gender: "unknown"}]);
  });
});

// Teste do Espécie

describe("speciesFilter", () => {
  it("Deverá ser uma função", () => {
    expect(typeof speciesFilter).toBe("function");
  });

  it("Deverá filtrar pela espécie Alien", () => {
    const expected = speciesFilter(Personagens, "Alien");
    expect(expected).toEqual([{status: "Dead",name: "Boobloosian",species: "Alien",gender: "unknown"}]);
  });
});

const Names = [
  { name: "Bearded Lady" },
  { name: "Rick Sanchez" },
  { name: "Morty Smith" },
  { name: "Boobloosian" },
];

const NamesorderAZ = [
  { name: "Bearded Lady" },
  { name: "Boobloosian" },
  { name: "Morty Smith" },
  { name: "Rick Sanchez" },
];

const NamesorderZA = [
  { name: "Rick Sanchez" },
  { name: "Morty Smith" },
  { name: "Boobloosian" },
  { name: "Bearded Lady" },
];

// Teste do ordem alfabética

describe("orderAlfaFilter", () => {
  it("Deverá ser uma função", () => {
    expect(typeof orderAlfaFilter).toBe("function");
  });

  it("Deverá retornar em ordem A-Z", () => {
    expect(orderAlfaFilter(Names, "a-z")).toStrictEqual(NamesorderAZ); // .toStrictEqual : Use para testar que os objetos têm os mesmos tipos, bem como estrutura.
  });
  it("Deverá retornar em ordem Z-A", () => {
    expect(orderAlfaFilter(Names, "z-a")).toStrictEqual(NamesorderZA);
  });
});

// Teste da função buscar nome do personagem

describe("searchName", () => {
  it("Deverá ser uma função", () => {
    expect(typeof searchName).toBe("function");
  });
  it("Deverá buscar por um nome", () => {
    const expected = searchName(Names, "Rick");
    expect(expected).toEqual([{ name: "Rick Sanchez" }]);
  });
});
