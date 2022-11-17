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
    document.getElementById(`planet${planet.id}`)
      .addEventListener("click", () => {
        document.getElementById(
          "planetInfo"
        ).innerHTML = `
        <div id="planetinfo">
         <div id ="randomplanet"></div>
           <div id ="section">
             <h2> ${planet.name}</h2>
             <h3>${planet.latinName}</h3>
             <p>${planet.desc}</p> 
           <hr>
          <div id="innerinfo">
            <div class ="col1">
             <h4>OMKRETS:</h4><p>km: ${planet.circumference}</p>
            </div>
              <div class ="col2">
               <h4>KM FRÅN SOLEN:</h4><p id>km: ${planet.distance}</p>
              </div>
            </div>
            <section id="innerinfo1">
               <div class ="col1">
                <h4>MAX TEMPRATUR:</h4><p id>${planet.temp.day} C</p>
              </div>
              <div class ="col2">
                <h4>MIN TEMPRATUR:</h4><p>${planet.temp.night} C</p>
              </div>
            </section>
           <hr>
           <h4>MÅNAR:</h4><p id ="numbers">${planet.moons} </p>
         </div>
        </div> 
        `;
        document.getElementById('planet0').style.display = 'none';
        document.getElementById('planetcircle').style.display = 'none';
        document.querySelector('.resbtn').style.display = 'block';
        
        
      });
  });
}


function reset(){
  history.go(0)
}




getKey();
getPlanets();

