/* estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

*/

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

export const calcularPorcentagem = (total, portion) => {
  const porcentagem = Math.round((portion * 100) / total);
  return porcentagem;
};

export const statusFilter = (dados, condition) => {
  const statusResult = dados.filter(
    (character) => character.status.toLowerCase() === condition.toLowerCase()
  );
  return statusResult;
};

export const statusSpecies = (dados, condition) => {
  const speciesResult = dados.filter(
    (character) => character.species.toLowerCase() === condition.toLowerCase()
  );
  return speciesResult;
};
