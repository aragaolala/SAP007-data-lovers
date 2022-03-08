export const filtroGenero = (dados, condition) => {
  const resultadoGenero = dados.filter(
    (character) => character.gender.toLowerCase() === condition.toLowerCase()
  );

  return resultadoGenero;
};

export const calcularPorcentagem = (total, fractionItem) => {
  const porcentagem = Math.round((fractionItem * 100) / total);
  return porcentagem;
};

export const statusFilter = (dados, condition) => {
  const statusResult = dados.filter(
    (character) => character.status.toLowerCase() === condition.toLowerCase()
  );
  return statusResult;
};

export const speciesFilter = (dados, condition) => {
  const speciesResult = dados.filter(
    (character) => character.species.toLowerCase() === condition.toLowerCase()
  );
  return speciesResult;
};

export const orderAlfaFilter = (dados, order) => {
  if (order === "a-z") {
    return dados.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else {
    return dados.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};

export const searchName = (dados, condition) => {
  const resultado = dados.filter((personagem) =>
    personagem.name.toLowerCase().includes(condition.toLowerCase())
  );
  return resultado;
};
