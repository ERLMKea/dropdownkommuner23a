
const urlKommune = "http://localhost:8080/kommuner"

function fetchKommuner(any) {
    return fetch(any).then(response => response.json());
}

function unpackKommmune(kom) {
    console.log(kom);
    const el = document.createElement("option");
    el.textContent = kom.navn;
    el.value = kom;
    ddKommune.appendChild(el);
}

function actionFetch() {
    const promKommuner = fetchKommuner(urlKommune);
    promKommuner.then(response => {
        response.forEach(unpackKommmune);
    });
    //console.log(kommuner)
}

pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener('click', actionFetch)
ddKommune = document.getElementById("ddKommuner")


