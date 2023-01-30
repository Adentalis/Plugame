let firstIteration = true;
let planetIndex = 0;

function test() {
  planetIndex = 0;
  const planetList = document.querySelector('#planetList');

  let eventResult = checkForEachPlanetExpoArrivalTime();

  const planets = planetList.getElementsByTagName('div');

  for (const planet of planets) {
    planetIndex++;
    let planetLink = planet.getElementsByClassName('planetlink');

    planetTitle = planetLink[0].getAttribute('title');
    let resultString = planetTitle.slice(
      planetTitle.indexOf('(') + 1,
      planetTitle.indexOf(')')
    );

    const pName = planet.getElementsByClassName('planet-name')[0].innerHTML;
    const expo = eventResult.find((e) => e.name === pName);
    const toWrite = expo ? `Returns in ${expo.arrival}` : 'no expo';
    const color = expo ? 'green' : 'red';

    if (firstIteration) {
      const fieldSpan = document.createElement('span');
      fieldSpan.textContent = resultString;
      fieldSpan.style.position = 'absolute';
      fieldSpan.style.marginTop = '-18px';
      fieldSpan.style.fontSize = '0.85em';

      const expoSpan = document.createElement('span');
      expoSpan.setAttribute('id', 'planetFields' + planetIndex);
      expoSpan.textContent = toWrite;
      expoSpan.style.position = 'absolute';
      expoSpan.style.marginLeft = '50px';
      expoSpan.style.marginTop = '-18px';
      expoSpan.style.fontSize = '0.85em';
      expoSpan.style.color = color;

      planet.insertAdjacentElement('afterend', fieldSpan);
      planet.insertAdjacentElement('afterend', expoSpan);
    } else {
      spanToChange = document.querySelector('#planetFields' + planetIndex);
      spanToChange.textContent = toWrite;
      spanToChange.style.color = color;
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
function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

async function sayHi() {
  console.log('htt');

  chrome.storage.local.set({ t: 'value' }).then(() => {
    console.log('Value is set to ' + 'value');
  });

  chrome.storage.local.get('t').then((result) => {
    console.log('Value currently is ' + JSON.stringify(result));
  });
}

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

sayHi();
