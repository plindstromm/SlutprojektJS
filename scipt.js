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
        ).innerHTML = `
        <div id="planetinfo">
        <div id ="section">
        <h2> ${planet.name}</h2>
        <h3>${planet.latinName}</h3>
        <p>${planet.desc}</p> 
        <hr>
        <h4>OMKRETS</h4><p>km: ${planet.circumference}</p>
        <h4>TEMPRATUR</h4><p>${planet.temp}</p>
        </div>
        </div> 
        `;
      });
  });
}





getKey();
getPlanets();

