

const API_URL = 'https://retoolapi.dev/K6LmSF/data';

async function init(){
const response = await fetch(API_URL);


const adatok = await response.json();


for (const adat of adatok) {
  const tr = document.createElement("tr");

  const tdmodell = document.createElement("td");
  tdmodell.textContent = adat.modell;
  tr.appendChild(tdmodell);

  const tdszin = document.createElement("td");
  tdszin.textContent = adat.szin;
  tr.appendChild(tdszin);

  const tdevjarat = document.createElement("td");
  tdevjarat.textContent = adat.evjarat;
  tr.appendChild(tdevjarat);

document.getElementById("data-body").appendChild(tr);
}


}
init();





