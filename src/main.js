import {
  filtroGenero,
  statusFilter,
  speciesFilter,
  orderAlfaFilter,
  calcularPorcentagem,
  searchName,
} from "./data.js";

import dados from "./data/rickandmorty/rickandmorty.js";

function printarCards(dados) {
  document.getElementById("container-dos-cards").innerHTML = dados
    .map(
      (item) => ` 
      <div class="card-info">
        <img src="${item.image}">
        <div class="info-lista">
            <p class="p-lista"><strong>Nome: </strong>${item.name}</p><br>
            <p class="p-lista"><strong>Gênero: </strong>${item.gender}</p><br>      
            <p class="p-lista"><strong>Status: </strong>${item.status}</p><br>
            <p class="p-lista"><strong>Espécie: </strong>${item.species}</p><br>
            <p class="p-lista"><strong>Origem: </strong>${item.origin.name}</p><br>
            <p class="p-lista"><strong>Localização: </strong>${item.location.name}</p><br>
            <p class="p-lista"><strong>Aparece em: </strong>${item.episode.length} episódios</p><br>
        </div> 
     </div>  
  `
    )
    .join("");
}

printarCards(dados.results);

///// PEGANDO OS SELETORES
const selecaoGenero = document.getElementById("gender-filter");
const statusSelect = document.getElementById("status-filter");
const speciesSelect = document.getElementById("species-filter");
const orderSelectAz = document.getElementById("alfa-order-filter");
const texto = document.getElementById("porcentagem-filtro");
const buscaNomePersonagem = document.getElementById("text-search");

function mostrarPorcentagem(dados) {
  texto.innerHTML = `Essa categoria representa ${dados}`;
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

function printStatusFilter(e) {
  const statusResult = statusFilter(dados.results, e.target.value);
  const porcentagemText = `${calcularPorcentagem(
    dados.results.length,
    statusResult.length
  )}% dos personagens`;
  mostrarPorcentagem(porcentagemText);
  return printarCards(statusResult);
}
statusSelect.addEventListener("change", printStatusFilter);

function printSpeciesFilter(e) {
  const speciesResult = speciesFilter(dados.results, e.target.value);
  const porcentagemText = `${calcularPorcentagem(
    dados.results.length,
    speciesResult.length
  )}% dos personagens`;
  mostrarPorcentagem(porcentagemText);
  return printarCards(speciesResult);
}
speciesSelect.addEventListener("change", printSpeciesFilter);

function printOrderFilterAz(e) {
  const order = orderAlfaFilter(dados.results, e.target.value);
  return printarCards(order);
}
orderSelectAz.addEventListener("change", printOrderFilterAz);

function buscarNomePersonagens(e) {
  const nomePersonagens = searchName(dados.results, e.target.value);
  return printarCards(nomePersonagens);
}
buscaNomePersonagem.addEventListener("keyup", buscarNomePersonagens);
