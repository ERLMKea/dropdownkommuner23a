
const urlKommune = "http://localhost:8080/kommuner"

function fetchKommuner(any) {
    return fetch(any).then(response => response.json());
}

function unpackKommmune(kom) {
    console.log(kom);
    const el = document.createElement("option");
    el.textContent = kom.navn;
    el.value = kom.kode;
    el.kommune = kom;
    console.log("kommune=" + kom);
    ddKommune.appendChild(el);
}

function actionFetch() {
    const promKommuner = fetchKommuner(urlKommune);
    promKommuner.then(response => {
        response.forEach(unpackKommmune);
    });
    //console.log(kommuner)
}

function selectKommuner(el) {
    console.log(el);
    const ix = ddKommune.selectedIndex;
    const selkom = ddKommune.options[ix];
    console.log(selkom.kommune);
}

pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener('click', actionFetch)
ddKommune = document.getElementById("ddKommuner")
ddKommune.addEventListener("change", selectKommuner)

