const planetList = document.querySelector('#planetList');
let eventResult = [];
const eventContent2 = document.getElementsByClassName('eventFleet');
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
      eventResult.push({
        name: startPlanet,
        arrival: millisToMinutesAndSeconds(diff),
      });
    }
  }
}

if (planetList) {
  const planets = planetList.getElementsByTagName('div');

  for (const planet of planets) {
    let planetLink = planet.getElementsByClassName('planetlink');

    if (planetLink.length > 0) {
      planetTitle = planetLink[0].getAttribute('title');
      let resultString = planetTitle.slice(
        planetTitle.indexOf('(') + 1,
        planetTitle.indexOf(')')
      );

      let pName = planet.getElementsByClassName('planet-name')[0].innerHTML;

      let toWrite = '';
      eventResult.forEach((e) => {
        if (e.name === pName) {
          toWrite = 'Returns in ' + e.arrival;
        }
      });

      let fieldSpan = document.createElement('span');
      fieldSpan.textContent = resultString;
      fieldSpan.style.position = 'absolute';
      fieldSpan.style.marginTop = '-18px';
      fieldSpan.style.fontSize = '0.85em';

      let expoSpan = document.createElement('span');
      expoSpan.textContent = toWrite;
      expoSpan.style.position = 'absolute';
      expoSpan.style.marginLeft = '50px';
      expoSpan.style.marginTop = '-18px';
      expoSpan.style.fontSize = '0.85em';

      planet.insertAdjacentElement('afterend', fieldSpan);
      planet.insertAdjacentElement('afterend', expoSpan);
    }
  }
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
