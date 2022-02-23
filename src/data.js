//////////FILTRO GÊNERO
export const filtroGenero = (dados, condition) => {
  const resultadoGenero = dados.filter(
    (character) => character.gender.toLowerCase() === condition.toLowerCase()
  );

  return resultadoGenero;
};

/* 
toLowerCase -> transformar todos os valores para letras minusculas, pq no array está
"Male"/ Female e unknown - tá misturado

- Como sabe quem é male e female -> e.target.value no main.js) 
*/
///////////PORCENTAGEM
export const calcularPorcentagem = (total, portion) => {
  const porcentagem = Math.round((portion * 100) / total);
  return porcentagem;
};
///////////FILTRO STATUS DE VIDA
export const statusFilter = (dados, condition) => {
  const statusResult = dados.filter(
    (character) => character.status.toLowerCase() === condition.toLowerCase()
  );
  return statusResult;
};
///////////FILTRO ESPÉCIES
export const speciesFilter = (dados, condition) => {
  const speciesResult = dados.filter(
    (character) => character.species.toLowerCase() === condition.toLowerCase()
  );
  return speciesResult;
};

///////////ORDEM ALFABÉTICA: A - Z & Z - A
export const orderAlfaFilter = (dados, order) => {
  if (order === "a-z") {
    return dados.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else {
    return dados.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};
