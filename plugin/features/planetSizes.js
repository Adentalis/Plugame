/*
 Here is a setIntval for updating the return expo time. 
 Only in the first run I have to create the additional span th show the result.
 In all the other iterations only update the innerHTML
*/
let firstIteration = true;
let planetIndex = 0;

async function test() {
  planetIndex = 0;
  const planetList = document.querySelector('#planetList');

  let eventResult = checkForEachPlanetExpoArrivalTime();

  const planets = planetList.getElementsByTagName('div');

  for (const planet of planets) {
    planetIndex++;
    let planetLink = planet.getElementsByClassName('planetlink');

    planetTitle = planetLink[0].getAttribute('title');

    const pName = planet.getElementsByClassName('planet-name')[0].innerHTML;
    const expo = eventResult.find((e) => e.name === pName);
    const toWrite = expo ? `Returns in ${expo.arrival}` : 'no expo';
    const color = expo ? 'green' : 'red';

    if (firstIteration) {
      chrome.storage.local.get(`${pName}-construction`).then((result) => {
        let data = result[`${pName}-construction`];

        // span to display the fieldsUsed/totalFields f.eg '103/267'
        const fieldSpan = document.createElement('span');
        fieldSpan.textContent = planetTitle.slice(
          planetTitle.indexOf('(') + 1,
          planetTitle.indexOf(')')
        );
        fieldSpan.style.position = 'absolute';
        fieldSpan.style.marginTop = '-18px';
        fieldSpan.style.fontSize = '0.85em';

        // span to display the expo information on each planet
        const expoSpan = document.createElement('span');
        expoSpan.setAttribute('id', 'planetFields' + planetIndex);
        expoSpan.textContent = toWrite;
        expoSpan.style.position = 'absolute';
        expoSpan.style.marginLeft = '50px';
        expoSpan.style.marginTop = '-18px';
        expoSpan.style.fontSize = '0.85em';
        expoSpan.style.color = color;
        expoSpan.style.whiteSpace = 'nowrap';

        // span to display the expo information on each planet
        const constructionSpan = document.createElement('span');
        constructionSpan.textContent = `${data.building}(${data.level}) ${data.finishTime}`;
        constructionSpan.style.position = 'absolute';
        constructionSpan.style.marginLeft = '40px';
        // constructionSpan.style.marginTop = '-18px';
        constructionSpan.style.fontSize = '0.85em';

        planet.insertAdjacentElement('afterend', fieldSpan);
        planet.insertAdjacentElement('afterend', expoSpan);
        planet.insertAdjacentElement('afterbegin', constructionSpan);
      });
    } else {
      // only update values = textContent
      //spanToChange = document.querySelector('#planetFields' + planetIndex);
      // console.log(spanToChange);
      //spanToChange.textContent = toWrite;
      //spanToChange.style.color = color;
    }
  }
  firstIteration = false;
}

function inter() {
  setInterval(() => {
    test();
  }, 1000);
}
inter();
/**

 * Goes through all fleet events and check if there is an arrival expedition
 * for each planet
 * @returns array of {name: planetName, arrivalTime: time as mm:ss}
 */
function checkForEachPlanetExpoArrivalTime() {
  const eventContent2 = document.getElementsByClassName('eventFleet');
  let res = [];
  if (eventContent2) {
    for (row of eventContent2) {
      let originFleet = row.getElementsByClassName('originFleet');
      let startPlanet = originFleet[0].innerText.trim();

      let imgColumn = row.getElementsByClassName('missionFleet');
      let img = imgColumn[0].getElementsByTagName('img');
      let isExpedition = img[0].getAttribute('title').includes('Expedition');
      let isReturningFleet = row.getAttribute('data-return-flight') === 'true';

      if (isExpedition && isReturningFleet) {
        let t = row.getAttribute('data-arrival-time');
        let date = new Date(parseInt(t * 1000));
        let now = new Date();
        let diff = date - now;
        res.push({
          name: startPlanet,
          arrival: millisToMinutesAndSeconds(diff),
        });
      }
    }
  }
  return res;
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
