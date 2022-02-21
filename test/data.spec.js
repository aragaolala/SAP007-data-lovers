import { filtroGenero, calcularPorcentagem} from '../src/data.js';

const Personagens = [
  {
     "name": "Bearded Lady",
     "status": "Dead",
     "species": "Alien",
     "gender": "Female",
   },
   {
     "name": "Boobloosian",
     "status": "Dead",
     "species": "Alien",
     "gender": "unknown",
   },
   {
     "name": "Rick Sanchez",
     "status": "Alive",
     "species": "Human",
     "gender": "Male",
   },
   {
     "name": "Morty Smith",
     "status": "Alive",
     "species": "Human",
     "gender": "Male",
   }
];

// Teste do Filtro Genero Male

describe('filtroGenero', () => {
  it('Deverá ser uma função', () => {
    expect(typeof filtroGenero).toBe('function');
  });

  it('Deverá filtrar pelo gênero Male', () => {
    const expected = filtroGenero(Personagens.length)
    expect (expected.gender).tobe('Male'); 
  });
});


//Teste da Porcentagem

describe('calcularPorcentagem', () => {
  it('Deverá ser uma função', () => {
    expect(typeof calcularPorcentagem).toBe('function');
  });

  it('Deverá retornar 50% de personagens masculinos', () => {
    const expected = calcularPorcentagem(Personagens.length, 2)
    expect (expected).toEqual(50) //A função .toEqual(valor) testa recursivamente cada valor do objeto ou array.
  });
});


