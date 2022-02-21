/* estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

*/
export const  filtroGenero = (dados, condition) => {
  const resultadoGenero = dados.filter((personagem) => personagem.gender.toLowerCase() === condition);
  return resultadoGenero;
};

export const calcularPorcentagem = (total, portion) => {
  const porcentagem = Math.round((portion * 100) / total);
  return porcentagem;
};
