let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
    window.location.href  = "index.html";
});
let buttonHome = document.getElementById("buttonHome");
buttonHome.addEventListener("click", () => {
window.location.href = "index.html";
});

// const oneRepMax = gewicht * (1 + herhalingen / 30);
let gewicht = document.getElementById("gewicht");
let herhalingen = document.getElementById("herhalingen");
let buttonBerekenen = document.getElementById("buttonBerekenen");
buttonBerekenen.addEventListener("click", () => {
    if (gewicht.value > 0 && herhalingen.value > 0) {
        let RMFormule = gewicht.value * (1 + herhalingen.value / 30);
        let RMFormuleDecimaal = RMFormule.toFixed(0);
        let uitslagRMhtml = document.getElementById("uitslagRM");
        uitslagRMhtml.classList.add("visibleVanUitslag");
        uitslagRMhtml.innerHTML = `jouw 1RM(max kracht) == ${RMFormuleDecimaal}kg`;
    } else {
        alert("controleer of je alles hebt ingevuld");
    }
});
