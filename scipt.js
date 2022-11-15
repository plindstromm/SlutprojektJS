const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
let Planets = []
// API nyckel att använda ifall man enbart siktar på godkänt: solaris-vKkkQHqQboi7c6JF


async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
    const data = await response.json();
    console.log(data);
}

async function getPlanets() {
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': 'solaris-vKkkQHqQboi7c6JF'
        }
    });
    const data = await response.json();
    console.log(data);

    Planets = data.bodies;

  Planets.map((planet) => {
    document.getElementById(
      "planeter"
    ).innerHTML += `<div id="planet${planet.id}"></div>`;
  });

  //get more info when clicking on a planet
  Planets.map((planet) => {
    document
      .getElementById(`planet${planet.id}`)
      .addEventListener("click", () => {
        document.getElementById(
          "planetInfo"
        ).innerHTML = `${planet.name} is a ${planet.type} and has a latin name of ${planet.latinName} Beskrivning av himlakroppen ${planet.desc} km: ${planet.rotation} km från solen: ${planet.distance}`;
      });
  });
}





getKey();
getPlanets();