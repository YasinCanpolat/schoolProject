let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
   window.location.href  = "index.html";
});
let buttonHome = document.getElementById("buttonVanHome");
buttonHome.addEventListener("click", () => {
window.location.href = "index.html";
});
const button = document.getElementById("buttonVanKCAL");
const buttonMan = document.getElementById("man");
const gewicht = document.getElementById("gewicht");
const buttonVrouw = document.getElementById("vrouw");
const leeftijd = document.getElementById("leeftijd");
const lengte = document.getElementById("lengte");
const doel = document.getElementById("doelPersoon");
const actief = document.getElementById("actief");
const LeegKCALUitkomst = document.getElementById("LeegKCALUitkomst");

button.addEventListener("click", () => {
    const dagelijksKalorieMAN = 10 * gewicht.value + 6.25 * lengte.value - 5 * leeftijd.value + 5;
    const dagelijksKalorieVrouw = 10 * gewicht.value + 6.25 * lengte.value - 5 * leeftijd.value - 161;
    if (gewicht.value > 0 && leeftijd.value > 8 && lengte.value > 0) {
        // kalorie mannen berekenen
        if (buttonMan.checked) {
            if (actief.value == "heel actief") {
                const actiefPersoonMan = dagelijksKalorieMAN * 1.725;
                if (doel.value == "aankomen") {
                    const uitslagManActief = actiefPersoonMan + 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is ${uitslagManActief.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "gewichtBlijven") {
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is ${actiefPersoonMan.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "afvallen") {
                    const uitlsagManNietActief = actiefPersoonMan - 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is ${uitlsagManNietActief.toFixed(0)}KCAL</div>`;
                }
            } else if (actief.value == "normaal") {
                const normaalPersoonMan = dagelijksKalorieMAN * 1.55;
                if (doel.value == "gewichtBlijven") {
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is ${normaalPersoonMan.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "afvallen") {
                    const uitslagManGewichtBlijvenNormaal = normaalPersoonMan - 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is 
                        ${uitslagManGewichtBlijvenNormaal.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "aankomen") {
                    const uislagManAankomenNormaal = normaalPersoonMan + 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                         ${uislagManAankomenNormaal.toFixed(0)}KCAL</div>`;
                }
            } else if (actief.value == "niet actief") {
                const nietActiefMan = dagelijksKalorieMAN * 1.2;
                if (doel.value == "gewichtBlijven") {
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is ${nietActiefMan.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "afvallen") {
                    const uitslagManNietActiefAfvallen = nietActiefMan - 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                         ${uitslagManNietActiefAfvallen.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "aankomen") {
                    const uislagManNietActiefAankomen = nietActiefMan + 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                         ${uislagManNietActiefAankomen.toFixed(0)}KCAL</div>`;
                }
            } else {
                alert("heb je wel geslacht gekozen?");
            }
            // mannen kal berekenen eind
            // vrouwen kal berekenen begin
        } if (buttonVrouw.checked) {
            if (actief.value == "heel actief") {
                const actiefPersoonVrouw = dagelijksKalorieVrouw * 1.725;
                if (doel.value == "aankomen") {
                    const uitslagAankomenVrouwActief = actiefPersoonVrouw + 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                         ${uitslagAankomenVrouwActief.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "gewichtBlijven") {
                    LeegKCALUitkomst.innerHTML = `<div class="card">jouw dagelijkse inname is
                     ${actiefPersoonVrouw.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "afvallen") {
                    const uitslagAfvallenVrouwActief = actiefPersoonVrouw - 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                         ${uitslagAfvallenVrouwActief.toFixed(0)}KCAL</div>`;
                }
            } else if (actief.value == "normaal") { // normaal persoon vrouw begin
                const normaalPersoonVrouw = dagelijksKalorieVrouw * 1.55;
                if (doel.value == "aankomen") {
                    const uitslagNormaalVrouwAankomen = normaalPersoonVrouw + 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                         ${uitslagNormaalVrouwAankomen.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "afvallen") {
                    const uitslagNormaalVrouwAfvallen = normaalPersoonVrouw - 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                         ${uitslagNormaalVrouwAfvallen.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "gewichtBlijven") {
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                         ${normaalPersoonVrouw.toFixed(0)}KCAL</div>`;
                }
            } else if (actief.value == "niet actief") {
                const nietActiefVrouw = dagelijksKalorieVrouw * 1.2;
                if (doel.value == "aankomen") {
                    const uitslagVrouwNietActiefAankomen = nietActiefVrouw + 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                         ${uitslagVrouwNietActiefAankomen.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "gewichtBlijven") {
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                        ${nietActiefVrouw.toFixed(0)}KCAL</div>`;
                } else if (doel.value == "afvallen") {
                    const uitslagVrouwNietActiefAfvallen = nietActiefVrouw - 500;
                    LeegKCALUitkomst.innerHTML
                        = `<div class="card">jouw dagelijkse inname is
                         ${uitslagVrouwNietActiefAfvallen.toFixed(0)}KCAL</div>`;
                }
            }
        } if (!buttonMan.checked && !buttonVrouw.checked) {
            alert("heb je wel je geslacht gekozen?");
        }
    } else {
        alert("heb je wel alles ingevuld");
    }
});
// vrouwen kal berekenen eind
