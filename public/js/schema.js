let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
    window.location.href = "index.html";
});

// fetch het json bestand dus als iemand via de admiun het reset krijg hij dat te zien
let getItemJSON;
async function fetchJSONProducten() {
    // net als admin verander gewoon de localstorage
    try {
        getItemJSON = JSON.parse(localStorage.getItem("opslaanJSON"));
        let fetchJSON = await fetch("https://school-project-git-main-yasins-projects-b82e3aad.vercel.app/json/schema.json");
        let makeJSON = await fetchJSON.json();
        if (getItemJSON == null) {
            getItemJSON = makeJSON;
            localStorage.setItem("opslaanJSON", JSON.stringify(getItemJSON));
        } else {
            console.log(getItemJSON);
        }
    } catch (error) {
        console.log(error.message);
    }
}
// producten ophalen beneden


async function productenOphalen() {
    const HTMLdynamish = document.getElementById("deel");
    for (let i = 0; i < getItemJSON.length; i++) {
        let imageURL = getItemJSON[i].url || "../imagess/schema.png";
        const card = document.createElement("div");
        card.classList.add("col-md-3");
        card.innerHTML = `
          <div class="card">
              <div class="row g-3">
                  <div class="col-md-12">
                      <h3 class="text-center">${getItemJSON[i].name}</h3>
                        <div class="col-md-12">
                           <img src="${imageURL}" alt="${getItemJSON[i].name}" class="img-fluid">
                        </div>
                      <p class="text-center">Prijs: € ${getItemJSON[i].prijs}</p>
                      <p class="text-center">✔️${getItemJSON[i].vink1}</p>
                      <p class="text-center">✔️${getItemJSON[i].vink2}</p>
                     <div class="d-flex justify-content-center">
                      <button type="button" class="btn btn-warning buttonVanWinkelmandje
                       text-center col-md-8" data-index="${i}">
                      In winkelmandje</button></div>
                  </div>
              </div>
          </div>
      `;
        HTMLdynamish.appendChild(card);
    }
}
//? winkelmandje benden 
// items opgehaald nu de winkelmandje
async function winkelmandje() {
    let winkelmandjeButton = document.querySelectorAll(".buttonVanWinkelmandje");
    winkelmandjeButton.forEach(button => {
        button.addEventListener("click", (event) => {
            let index = event.target.getAttribute("data-index");
            let product = getItemJSON[index];
            let winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
            let productIndex = winkelwagen.findIndex(item => item.name == product.name);
            console.log(productIndex);
            if (productIndex !== -1) {
                winkelwagen[productIndex].aantal++;
            } else {
                product.aantal = 1;
                winkelwagen.push(product);
            }
            localStorage.setItem("winkelwagen", JSON.stringify(winkelwagen));
            alert(`${product.name} toegevoegd man`);
        });
    });
    let winkelwagenKnop = document.getElementById("winkelwagenKnop");
    let modalBODY = document.getElementById("modalBODY");
    winkelwagenKnop.addEventListener("click", () => {
        let winkelwagen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
        modalBODY.innerHTML = "<h5 class='text-center'>Winkelwagen</h5>";
        if (winkelwagen.length === 0) {
            modalBODY.innerHTML += "<p>Je winkelwagen is leeg</p>";
        } else {
            winkelwagen.forEach(item => {
                modalBODY.innerHTML += `
                    <div class="product-in-winkelwagen">
                        <h6>${item.name} (x${item.aantal})</h6>
                        <p>prijs: ${item.prijs}</p>
                        <p>totaal prijs: € ${item.prijs * item.aantal}</p>
                        <hr>
                    </div>
                `;
            });
            modalBODY.innerHTML += `<button class="btn btn-danger" id="leegWinkelwagen">leeg winkelwagen</button>`;
            let leegWinkelwagen = document.getElementById("leegWinkelwagen");
            leegWinkelwagen.addEventListener("click", () => {
                localStorage.removeItem("winkelwagen");
                window.location.reload();
            });
        }
    });
}
window.addEventListener('DOMContentLoaded', async function () {
    await fetchJSONProducten();
    await productenOphalen();
    await winkelmandje();
});
function opslaanLOCAL(opslaan) {
    localStorage.setItem("opslaanJSON", JSON.stringify(opslaan));
    console.log(JSON.parse(localStorage.getItem("opslaanJSON")));
}
