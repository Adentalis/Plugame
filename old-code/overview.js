/**
 * This feature showed a list with all planetNames and their expo status
 */
let planetNames = [
  'Nakamoto',
  'Buterin',
  'Antonopoulos',
  'Finney',
  'Back',
  'Szabo',
  'Dei',
  'Kolonie',
];

const eventContent = document.getElementsByClassName('eventFleet');
if (eventContent) {
  let allStartPlanets = new Set();
  for (row of eventContent) {
    let originFleet = row.getElementsByClassName('originFleet');
    let startPlanet = originFleet[0].innerText.trim();

    let imgColumn = row.getElementsByClassName('missionFleet');
    let img = imgColumn[0].getElementsByTagName('img');
    let isExpedition = img[0].getAttribute('title').includes('Expedition');

    if (isExpedition) {
      allStartPlanets.add(startPlanet);
    }
  }

  const iterator1 = allStartPlanets.entries();
  for (const entry of iterator1) {
    planetNames = planetNames.filter((planet) => planet !== entry[0]);
  }

  const pageBottom = document.querySelector('.produxtionBoxShips');

  let listContainer = document.createElement('div');
  let listElement = document.createElement('ul');
  let listItem = document.createElement('li');

  listContainer.appendChild(listElement);

  let numberOfListItems = planetNames.length;
  for (let i = 0; i < numberOfListItems; ++i) {
    listItem.textContent = planetNames[i];
    listElement.appendChild(listItem);
    listItem = document.createElement('li');
  }
  pageBottom.insertAdjacentElement('beforeend', listContainer);
}
