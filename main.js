import {
  genderFilter,
  statusFilter,
  speciesFilter,
  orderAlfaFilter,
  percentCalc,
  searchName,
} from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

function showCards(data) {
  document.getElementById("container-dos-cards").innerHTML = data
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

showCards(data.results);

///// PEGANDO OS SELETORES
const selecaoGenero = document.getElementById("gender-filter");
const statusSelect = document.getElementById("status-filter");
const speciesSelect = document.getElementById("species-filter");
const orderSelectAz = document.getElementById("alfa-order-filter");
const texto = document.getElementById("porcentagem-filtro");
const searchCharacterName = document.getElementById("text-search");

function showPercentage(data) {
  texto.innerHTML = `Essa categoria representa ${data}`;
}

function printGenderFilter(e) {
  const genderResult = genderFilter(data.results, e.target.value);

  const percentageText = `${percentCalc(
    data.results.length,
    genderResult.length
  )}% dos personagens`;
  showPercentage(percentageText);
  return showCards(genderResult);
}
selecaoGenero.addEventListener("change", printGenderFilter);

function printStatusFilter(e) {
  const statusResult = statusFilter(data.results, e.target.value);
  const percentageText = `${percentCalc(
    data.results.length,
    statusResult.length
  )}% dos personagens`;
  showPercentage(percentageText);
  return showCards(statusResult);
}
statusSelect.addEventListener("change", printStatusFilter);

function printSpeciesFilter(e) {
  const speciesResult = speciesFilter(data.results, e.target.value);
  const percentageText = `${percentCalc(
    data.results.length,
    speciesResult.length
  )}% dos personagens`;
  showPercentage(percentageText);
  return showCards(speciesResult);
}
speciesSelect.addEventListener("change", printSpeciesFilter);

function printOrderFilterAz(e) {
  const order = orderAlfaFilter(data.results, e.target.value);
  return showCards(order);
}
orderSelectAz.addEventListener("change", printOrderFilterAz);

function searchCharacterNames(e) {
  const charactersName = searchName(data.results, e.target.value);
  return showCards(charactersName);
}
searchCharacterName.addEventListener("keyup", searchCharacterNames);

/*

// Tentando colocar gender, status e species numa única função
function printSelectorsResult(e) {
  const filterResult = dataResult(
    data.results,
    document.getElementsByClassName("filtros"), //o filtro de A_Z tb tem esse nome
    e.target.value
  );
  return showCards(filterResult);
}
*/