async function storeCurrentBuildingTime() {
  let productionBuilding = document.querySelector(
    '#productionboxbuildingcomponent'
  );
  if (!productionBuilding) {
    console.log('Keine Gebäude Ansicht');
    return;
  }

  let remainingTime = productionBuilding.querySelector('#buildingCountdown');

  if (!remainingTime) {
    //Todo doesn't trigger
    console.log('Keine Gebäude in Bau');
  }

  console.log('Ein Gebäude in Bau');

  // I must save
  let data = {
    planetName: '', // Done
    building: '', // Done
    level: '', // Done
    finishTime: '',
  };

  // get the planet name either from the overview or supplies page
  if (document.URL.includes('component=overview')) {
    console.log('on overview page');
    let currentPlanet = document.querySelector('#planetNameHeader');
    data.planetName = currentPlanet.innerHTML.trim();
  }

  if (document.URL.includes('component=supplies')) {
    console.log('on supply page');
    //TODO from supplier view
    let currentPlanet = document.querySelector('#planetNameHeader');
    data.planetName = currentPlanet.innerHTML.trim();
  }

  // get the building name
  let productionBuildingRows = productionBuilding.getElementsByTagName('tr');
  data.building = productionBuildingRows[0].innerText;

  // get the building level
  data.level = productionBuildingRows[1]
    .querySelector('.level')
    .innerText.replace('Stufe ', '');

  // get the finish time
  let ago_construction_building = productionBuilding.querySelector(
    '#ago_construction_building'
  );
  data.finishTime = ago_construction_building.innerHTML;
  let key = `${data.planetName}-construction`;
  chrome.storage.local.set({ [key]: data }).then(() => {
    console.log(`${key} is set`);
  });
}

storeCurrentBuildingTime();
