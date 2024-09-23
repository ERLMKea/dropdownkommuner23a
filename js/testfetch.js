const urlKommune = "http://localhost:8080/kommuner"

function fetchUrl(url) {
    return fetch(url).then(response => response.json());
}

async function actionFetchAwait() {
    const promKommuner = await fetchUrl(urlKommune);
    console.log(promKommuner);
    return promKommuner;
}
function actionFetch() {
    fetchUrl(urlKommune).then(jsn => {
        console.log(jsn); //jsn er json
    });
}

async function actionFetch() {
    const komArr = await fetchUrl(urlKommune).then(jsn => jsn);
    console.log("udpak json");
    console.log(komArr);
    komArr.forEach(kom => console.log(kom.navn));
}

const kom = actionFetch();

async function actionMain() {
    const kom = await actionFetch ();
    console.log("main slutter");
}

actionMain();
console.log("programmet slutter");
console.log(kom);

