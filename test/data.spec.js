import {
  genderFilter,
  statusFilter,
  speciesFilter,
  orderAlfaFilter,
  percentCalc,
  searchName,
} from "../src/data.js";

const characters = [
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

describe("genderFilter", () => {
  it("It should be a function", () => {
    expect(typeof genderFilter).toBe("function"); //typeof retorna uma string indicando o tipo de um operando.
  });

  it("It should filter female gender", () => {
    const expected = genderFilter(characters, "Female");
    expect(expected).toEqual([{"gender": "Female", "name": "Summer Smith", "species": "Human", "status": "Alive"}]);
  });
});

//Teste da Porcentagem

describe("percentCalc", () => {
  it("It should be a function", () => {
    expect(typeof percentCalc).toBe("function"); // A função .toBe verifica não só se os dois valores são iguais, mas também se eles são do mesmo objeto.
  });

  it("It should return 50% of male characters", () => {
    const expected = percentCalc(characters.length, 2);
    expect(expected).toEqual(50); //A função .toEqual(valor) verifica se duas coisas são iguais (e não necessariamente o mesmo objeto).
  });
});

// Teste do Status 

describe("statusFilter", () => {
  it("It should be a function", () => {
    expect(typeof statusFilter).toBe("function");
  });

  it("It should filter by 'dead' status", () => {
    const expected = statusFilter(characters, "Dead");
    expect(expected).toEqual([{status: "Dead",name: "Boobloosian",species: "Alien",gender: "unknown"}]);
  });
});

// Teste do Espécie 

describe("speciesFilter", () => {
  it("It should be a function", () => {
    expect(typeof speciesFilter).toBe("function");
  });

  it("It should filter by 'alien' species", () => {
    const expected = speciesFilter(characters, "Alien");
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
  it("It should be a function", () => {
    expect(typeof orderAlfaFilter).toBe("function");
  });

  it("It should return order A-Z", () => {
    expect(orderAlfaFilter(Names, "a-z")).toStrictEqual(NamesorderAZ); // .toStrictEqual : Use para testar que os objetos têm os mesmos tipos, bem como estrutura.
  });
  it("It should return order Z-A", () => {
    expect(orderAlfaFilter(Names, "z-a")).toStrictEqual(NamesorderZA);
  });
});

// Teste da função buscar nome do personagem

describe("searchName", () => {
  it("It should be a function", () => {
    expect(typeof searchName).toBe("function");
  });
  it("It should return 'search by name'", () => {
    const expected = searchName(Names, "Rick");
    expect(expected).toEqual([{ name: "Rick Sanchez" }]);
  });
});
