import { filtroGenero, calcularPorcentagem } from "./data.js";

import dados from "./data/rickandmorty/rickandmorty.js";

function printarCards(dados) {
  document.getElementById("container-dos-cards").innerHTML = dados //innerHTML para escrever o resultado no doc hmtl. Adiciona html (as tags abaixo) e texto.
    .map(
      (item) => ` 
   
      <div class="card-info">
        <img src="${item.image}">
        <div class="info-lista">
            <p><strong>Nome: </strong>${item.name}</p><br>
            <p><strong>Gênero: </strong>${item.gender}</p><br>      
            <p><strong>Status: </strong>${item.status}</p><br>
            <p><strong>Espécie: </strong>${item.species}</p><br>
            <p><strong>Origem: </strong>${item.origin.name}</p><br>
            <p><strong>Localização: </strong>${item.location.name}</p><br>
            <p><strong>Aparece em: </strong>${item.episode.length} episódios</p><br>
        </div> 
     </div>
    
  `
    )
    .join("");
}
printarCards(dados.results);

const selecaoGenero = document.getElementById("gender-filter");
const texto = document.getElementById("porcentagem-filtro");

function mostrarPorcentagem(dados) {
  texto.innerHTML = `Essa categoria representa ${dados}`;
  texto.style.display = "flex"; //tirar essa estilização
}
function imprimirFiltroGenero(e) {
  const resultadoGenero = filtroGenero(dados.results, e.target.value);
  const porcentagemText = `${calcularPorcentagem(
    dados.results.length,
    resultadoGenero.length
  )}% dos personagens`;
  mostrarPorcentagem(porcentagemText);
  return printarCards(resultadoGenero);
}
selecaoGenero.addEventListener("change", imprimirFiltroGenero);

/* esse arquivo é o DOM - está em interação com o htlm

- e.target.value = ele quem vai buscar os valores alvos definidos no selector pelo user
- vai atrás do valor inserido e retorna o próprio elemento que disparou o evento

- addEventListener = O método addEventListener anexa um manipulador de eventos 
(event handler) a um elemento. No caso, ele vai anexar a função “imprimirFiltroGenero” 
à constante “selecaoGenero”, que é um elemento HTML (getElementoById).
- aqui o "escutador / listener" vai chamar a função "imprimirFiltroGenero" sempre que houver
a "seleçãoGenero" (que recebe um valor html - quando o user manipular o filtro do genero)
*/
