import { filtroGenero,statusFilter,speciesFilter,orderAlfaFilter,calcularPorcentagem,searchName,} from '../src/data.js';


const Personagens = [
  {
    name: "Bearded Lady",
    status: "Dead",
    species: "Alien",
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

describe('filtroGenero', () => {
  it('Deverá ser uma função', () => {
    expect(typeof filtroGenero).toBe('function'); //typeof retorna uma string indicando o tipo de um operando.
  });

  it('Deverá filtrar pelo gênero Female', () => {
    const genderFemale = "Female"
    const expected = filtroGenero(Personagens, genderFemale)
    expect (expected[0].gender).toEqual(genderFemale)
  });
});



//Teste da Porcentagem

describe('calcularPorcentagem', () => {
  it('Deverá ser uma função', () => {
    expect(typeof calcularPorcentagem).toBe('function'); // A função .toBe verifica não só se os dois valores são iguais, mas também se eles são do mesmo objeto.
  });

  it('Deverá retornar 50% de personagens masculinos', () => {
    const expected = calcularPorcentagem(Personagens.length, 2)
    expect(expected).toEqual(50) //A função .toEqual(valor) verifica se duas coisas são iguais (e não necessariamente o mesmo objeto).
  });
});


// Teste do Status

describe('statusFilter', () => {
  it('Deverá ser uma função', () => {
  expect(typeof statusFilter).toBe('function');
});

it('Deverá filtrar pelo status Alive', () => {
    const statusAlive = "Alive"
    const expected = statusFilter(Personagens, statusAlive)
    expect (expected[0].status).toEqual(statusAlive)
  });

it('Deverá filtrar pelo status Dead', () => {
    const statusDead = "Dead"
    const expected = statusFilter(Personagens, statusDead)
    expect (expected[0].status).toEqual(statusDead)
  });
});



// Teste do Espécie

describe('speciesFilter', () => {
  it('Deverá ser uma função', () => {
    expect(typeof speciesFilter).toBe('function');
  });

  it('Deverá filtrar pela espécie Human', () => {
    const speciesHuman = "Human"
    const expected = speciesFilter(Personagens, speciesHuman)
    expect (expected[0].species).toEqual(speciesHuman)
  }); 
}); 


const Names = [
  {"name": "Bearded Lady"},
  {"name": "Rick Sanchez"},
  {"name": "Morty Smith"},
  {"name": "Boobloosian"},
]


// Teste do ordem alfabética

describe('orderAlfaFilter', () => {
  it('Deverá ser uma função', () => {
    expect(typeof orderAlfaFilter).toBe('function');
  });

  it('Deverá retornar em ordem A-Z', () => {
    expect(orderAlfaFilter(Names)).toEqual(Names);
  });
  it('Deverá retornar em ordem Z-A', () => {
    expect(orderAlfaFilter(Names)).toEqual(Names.reverse());
  });
});



// Teste da função buscar nome do personagem

describe('searchName', () => {
  it('Deverá ser uma função', () => {
    expect(typeof searchName).toBe('function');
  });
  it('Deveverá buscar por um nome', () => {
    const expected = searchName(Names, 'Rick')
    expect (expected).toEqual([{"name": "Rick Sanchez"}])
  });
});
