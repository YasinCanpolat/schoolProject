// let haalitemsOp = JSON.parse(localStorage.getItem("opslaanJSON"));

// let voegProducten = document.getElementById("voegProducten");
// let modalShowProducten = document.querySelector(".modal-body");
// modalShowProducten.innerHTML = `
// <h1>voeg product gegevens toe om het gevoegd te worden</h1>
// <input id="nameProduct" class="col-12 form-control" type="text" placeholder="voeg hier de naam toe">
// <input id="urlFoto" class="col-12 form-control" type="text" placeholder="url van foto of leeg automatish afb">
// <input id="prijsProduct" 
// class="col-12 form-control" type="text" placeholder="prijs van de product alleen in getallen geen Euro teken">
// <input id="vink1Product" class="col-12 form-control" type="text" placeholder="informatie over je product">
// <input id="vink2Product" class="col-12 form-control" type="text" placeholder="informatie over je product">

// `;
// console.log(JSON.parse(localStorage.getItem("opslaanJSON")));
// let buttonSaveNewProduct = document.getElementById("buttonSaveNewProduct");
// buttonSaveNewProduct.addEventListener("click", () => {
//     let nameProduct = document.getElementById("nameProduct");
//     let urlFoto = document.getElementById("urlFoto");
//     let prijsProduct = document.getElementById("prijsProduct");
//     let vink1Product = document.getElementById("vink1Product");
//     let vink2Product = document.getElementById("vink2Product");
//     let pushNewProduct = {
//         name: nameProduct.value,
//         url: urlFoto.value,
//         prijs: prijsProduct.value,
//         vink1: vink1Product.value,
//         vink2: vink2Product.value,
//         aantal: 0,
//     };
//     opslaanLOCAL(pushNewProduct);
// });
// // producten nu wijzigen verwijderen
// let producteDieAanwezigZijn = document.getElementById("producten");


// let rowContainer = document.createElement("div");
// rowContainer.classList.add("row");

// for (let i = 0; i < haalitemsOp.length; i++) {
//     let card = document.createElement("div");
//     card.classList.add("col-md-4");
//     card.innerHTML = `
//     <div class="card">
//         <div class="row g-3 p-3">
//             <div class="col-md-12">
//                 <h2>naam: ${haalitemsOp[i].name}</h2>
//                 <p>prijs: €${haalitemsOp[i].prijs}</p>
//                 <p>vink1: ${haalitemsOp[i].vink1}</p>
//                 <p>vink2: ${haalitemsOp[i].vink2}</p>
//             <button type="button" class="btn btn-success wijzigProducten"
//              data-index="${i}" data-bs-target="#wijzigProduct" data-bs-toggle="modal">  Wijzig het</button>
//               <button type="button" class="btn btn-danger verwijderProducten"
//                  data-index="${i}"  data-bs-toggle="modal" data-bs-target="#bevestigd">verwijder het</button>
//             </div>
//         </div>
//     </div>
//     `;

//     rowContainer.appendChild(card);
// }
// producteDieAanwezigZijn.appendChild(rowContainer);
// // nu producten wordne verwijderd als je daarvoor kiest
// let verwijderProducten = document.querySelectorAll(".verwijderProducten");
// verwijderProducten.forEach(button => {
//     button.addEventListener("click", (event) => {
//         let bevstigVERWIJDER = document.getElementById("bevstigVERWIJDER");
//         bevstigVERWIJDER.addEventListener("click", () => {
//             let index = event.target.getAttribute("data-index");
//             haalitemsOp.splice(index, 1);
//             localStorage.setItem("opslaanJSON", JSON.stringify(haalitemsOp));
//             window.location.reload();
//         });
//     });
// });
// // nu producten wijzigem als het lukt
// let wijzigProducten = document.querySelectorAll(".wijzigProducten");
// wijzigProducten.forEach(button => {
//     button.addEventListener("click", (event) => {
//         let index = event.target.getAttribute("data-index");
//         let bodyModal = document.querySelector(".bodyModal");
//         bodyModal.innerHTML = `
//         <div class="">
//         <h6>wat je wilt wijzigen druk er op en typ wat je wilt wijzigen en sla het op</h6>
//         <input id="naamProductWijzig" type="text" class="form-control" placeholder="naam:
//          ${haalitemsOp[index].name}">
//         <input id="prijsProductWijzig" type="text" class="form-control" placeholder="prijs:
//          ${haalitemsOp[index].prijs}">
//         <input id="vink1ProductWijzig" type="text" class="form-control" placeholder="vink1:
//          ${haalitemsOp[index].vink1}">
//          <input id="vink2ProductWijzig" type="text" class="form-control" placeholder="vink2:
//           ${haalitemsOp[index].vink2}">
//         </div>
//         `;
//         let saveProductWijzig = document.getElementById("saveProductWijzig");
//         if (saveProductWijzig) {
//             saveProductWijzig.addEventListener("click", () => {
//                 let nieuweNaam = document.getElementById("naamProductWijzig").value;
//                 let nieuwePrijs = document.getElementById("prijsProductWijzig").value;
//                 let nieuweVink1 = document.getElementById("vink1ProductWijzig").value;
//                 let nieuweVink2 = document.getElementById("vink2ProductWijzig").value;
//                 let gewijzigdeProduct = {
//                     name: nieuweNaam || haalitemsOp[index].name,
//                     prijs: nieuwePrijs || haalitemsOp[index].prijs,
//                     vink1: nieuweVink1 || haalitemsOp[index].vink1,
//                     vink2: nieuweVink2 || haalitemsOp[index].vink2,
//                     aantal: haalitemsOp[index].aantal,
//                 };
//                 opslaanLOCAL(gewijzigdeProduct, index);
//             });
//         }
//     });
// });
// // hier word het opgeslagen
// function opslaanLOCAL(opslaanNewProduct, index = null) {
//     let producten = JSON.parse(localStorage.getItem("opslaanJSON")) || [];
//     if (index == null) {
//         producten.push(opslaanNewProduct);
//     } else {
//         producten[index] = opslaanNewProduct;
//     }
//     localStorage.setItem("opslaanJSON", JSON.stringify(producten));
//     console.log(JSON.parse(localStorage.getItem("opslaanJSON")));
//     window.location.reload();
// }
// let winkelwagenBestellingen = document.getElementById("winkelwagenBestellingen");
// let getWinkelwagenBestellingen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
// console.log(getWinkelwagenBestellingen);
// getWinkelwagenBestellingen.forEach(element => {
//     winkelwagenBestellingen.innerHTML += `
//   <div class="card col-md-4"> 
//   <p>naam: ${element.name}</p>
//    <p>aantal:${element.aantal}</p>
//    <hr> 
//    </div> `;
// });

let haalitemsOp = JSON.parse(localStorage.getItem("opslaanJSON")) || [];

let voegProducten = document.getElementById("voegProducten");
let modalShowProducten = document.querySelector(".modal-body");
modalShowProducten.innerHTML = `
<h1>voeg product gegevens toe om het gevoegd te worden</h1>
<input id="nameProduct" class="col-12 form-control" type="text" placeholder="voeg hier de naam toe">
<input id="urlFoto" class="col-12 form-control" type="text" placeholder="url van foto of leeg automatish afb">
<input id="prijsProduct" class="col-12 form-control" type="text" placeholder="prijs van de product alleen in getallen geen Euro teken">
<input id="vink1Product" class="col-12 form-control" type="text" placeholder="informatie over je product">
<input id="vink2Product" class="col-12 form-control" type="text" placeholder="informatie over je product">
`;

console.log(haalitemsOp);

let buttonSaveNewProduct = document.getElementById("buttonSaveNewProduct");
buttonSaveNewProduct.addEventListener("click", () => {
    let nameProduct = document.getElementById("nameProduct");
    let urlFoto = document.getElementById("urlFoto");
    let prijsProduct = document.getElementById("prijsProduct");
    let vink1Product = document.getElementById("vink1Product");
    let vink2Product = document.getElementById("vink2Product");

    let pushNewProduct = {
        name: nameProduct.value,
        url: urlFoto.value,
        prijs: prijsProduct.value,
        vink1: vink1Product.value,
        vink2: vink2Product.value,
        aantal: 0,
    };
    opslaanLOCAL(pushNewProduct);
});

// Producten nu wijzigen en verwijderen
let producteDieAanwezigZijn = document.getElementById("producten");

let rowContainer = document.createElement("div");
rowContainer.classList.add("row");

for (let i = 0; i < haalitemsOp.length; i++) {
    let card = document.createElement("div");
    card.classList.add("col-md-4");
    card.innerHTML = `
    <div class="card">
        <div class="row g-3 p-3">
            <div class="col-md-12">
                <h2>naam: ${haalitemsOp[i].name}</h2>
                <p>prijs: €${haalitemsOp[i].prijs}</p>
                <p>vink1: ${haalitemsOp[i].vink1}</p>
                <p>vink2: ${haalitemsOp[i].vink2}</p>
                <button type="button" class="btn btn-success wijzigProducten"
                 data-index="${i}" data-bs-target="#wijzigProduct" data-bs-toggle="modal">  Wijzig het</button>
                <button type="button" class="btn btn-danger verwijderProducten"
                 data-index="${i}"  data-bs-toggle="modal" data-bs-target="#bevestigd">verwijder het</button>
            </div>
        </div>
    </div>
    `;

    rowContainer.appendChild(card);
}
producteDieAanwezigZijn.appendChild(rowContainer);

// Nu producten worden verwijderd als je daarvoor kiest
let verwijderProducten = document.querySelectorAll(".verwijderProducten");
verwijderProducten.forEach(button => {
    button.addEventListener("click", (event) => {
        let bevstigVERWIJDER = document.getElementById("bevstigVERWIJDER");
        bevstigVERWIJDER.addEventListener("click", () => {
            let index = event.target.getAttribute("data-index");
            haalitemsOp.splice(index, 1);
            localStorage.setItem("opslaanJSON", JSON.stringify(haalitemsOp));
            window.location.reload();
        });
    });
});

// Nu producten wijzigen als het lukt
let wijzigProducten = document.querySelectorAll(".wijzigProducten");
wijzigProducten.forEach(button => {
    button.addEventListener("click", (event) => {
        let index = event.target.getAttribute("data-index");
        let bodyModal = document.querySelector(".bodyModal");
        bodyModal.innerHTML = `
        <div class="">
        <h6>wat je wilt wijzigen druk er op en typ wat je wilt wijzigen en sla het op</h6>
        <input id="naamProductWijzig" type="text" class="form-control" placeholder="naam: ${haalitemsOp[index].name}">
        <input id="prijsProductWijzig" type="text" class="form-control" placeholder="prijs: ${haalitemsOp[index].prijs}">
        <input id="vink1ProductWijzig" type="text" class="form-control" placeholder="vink1: ${haalitemsOp[index].vink1}">
        <input id="vink2ProductWijzig" type="text" class="form-control" placeholder="vink2: ${haalitemsOp[index].vink2}">
        </div>
        `;
        let saveProductWijzig = document.getElementById("saveProductWijzig");
        if (saveProductWijzig) {
            saveProductWijzig.addEventListener("click", () => {
                let nieuweNaam = document.getElementById("naamProductWijzig").value;
                let nieuwePrijs = document.getElementById("prijsProductWijzig").value;
                let nieuweVink1 = document.getElementById("vink1ProductWijzig").value;
                let nieuweVink2 = document.getElementById("vink2ProductWijzig").value;
                let gewijzigdeProduct = {
                    name: nieuweNaam || haalitemsOp[index].name,
                    prijs: nieuwePrijs || haalitemsOp[index].prijs,
                    vink1: nieuweVink1 || haalitemsOp[index].vink1,
                    vink2: nieuweVink2 || haalitemsOp[index].vink2,
                    aantal: haalitemsOp[index].aantal,
                };
                opslaanLOCAL(gewijzigdeProduct, index);
            });
        }
    });
});

// Hier wordt het opgeslagen
function opslaanLOCAL(opslaanNewProduct, index = null) {
    let producten = JSON.parse(localStorage.getItem("opslaanJSON")) || [];
    if (index == null) {
        producten.push(opslaanNewProduct);
    } else {
        producten[index] = opslaanNewProduct;
    }
    localStorage.setItem("opslaanJSON", JSON.stringify(producten));
    console.log(JSON.parse(localStorage.getItem("opslaanJSON")));
    window.location.reload();
}

let winkelwagenBestellingen = document.getElementById("winkelwagenBestellingen");
let getWinkelwagenBestellingen = JSON.parse(localStorage.getItem("winkelwagen")) || [];
console.log(getWinkelwagenBestellingen);

getWinkelwagenBestellingen.forEach(element => {
    winkelwagenBestellingen.innerHTML += `
  <div class="card col-md-4"> 
  <p>naam: ${element.name}</p>
   <p>aantal:${element.aantal}</p>
   <hr> 
   </div> `;
});
