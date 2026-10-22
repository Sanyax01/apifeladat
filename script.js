
/*
const API_URL = 'https://retoolapi.dev/K6LmSF/data';

async function init(){
const response = await fetch(API_URL);



const adatok = await response.json();


for (const adat of adatok) {
  const tr = document.createElement("tr");

  const tdszin = document.createElement("td");
  tdszin.textContent = adat.szin;
  if (adat.szin == "fekete") {
    
    
    const tdmodell = document.createElement("td");
    tdmodell.textContent = adat.modell;
    tr.appendChild(tdmodell).style.backgroundColor = 'DarkSlateGray';

    tr.appendChild(tdszin).style.backgroundColor = 'DarkSlateGray';

    const tdevjarat = document.createElement("td");
    tdevjarat.textContent = adat.evjarat;
    tr.appendChild(tdevjarat).style.backgroundColor = 'DarkSlateGray';

  }
  else if (adat.szin == "piros") {
    

    const tdmodell = document.createElement("td");
    tdmodell.textContent = adat.modell;
    tr.appendChild(tdmodell).style.backgroundColor = 'red';

    tr.appendChild(tdszin).style.backgroundColor = 'red';

    const tdevjarat = document.createElement("td");
    tdevjarat.textContent = adat.evjarat;
    tr.appendChild(tdevjarat).style.backgroundColor = 'red';
  }
  else if (adat.szin == "fehér") {
    

    const tdmodell = document.createElement("td");
    tdmodell.textContent = adat.modell;
    tr.appendChild(tdmodell).style.backgroundColor = 'beige';

    tr.appendChild(tdszin).style.backgroundColor = 'beige';

    const tdevjarat = document.createElement("td");
    tdevjarat.textContent = adat.evjarat;
    tr.appendChild(tdevjarat).style.backgroundColor = 'beige';
  }



document.getElementById("data-body").appendChild(tr);
}


}
*/
const API_URL = 'https://retoolapi.dev/K6LmSF/data';

async function init(){
const response = await fetch(API_URL);

const adatok = await response.json();

for (const adat of adatok) {
    const tr = document.createElement("tr");
    tr.classList.add(adat.szin);

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





