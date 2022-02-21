import {filtroGenero, calcularPorcentagem} from './data.js';

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


const selecaoGenero = document.querySelector("#filtro-genero"); 
const texto = document.getElementById("porcentagem-filtro");

function mostrarPorcentagem(dados) {
  texto.innerHTML = `Essa categoria representa ${dados}`
  texto.style.display = 'flex' //tirar essa estilização
}
function imprimirFiltroGenero(e) {
  const resultadoGenero = filtroGenero(dados.results, e.target.value)
  const porcentagemText = `${calcularPorcentagem(dados.results.length, resultadoGenero.length)}% dos personagens`
  mostrarPorcentagem(porcentagemText)
  return printarCards(resultadoGenero);
}
selecaoGenero.addEventListener('change', imprimirFiltroGenero);