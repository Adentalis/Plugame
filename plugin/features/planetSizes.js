const planetList = document.querySelector('#planetList');

if (planetList) {
  const planets = planetList.getElementsByTagName('div');

  for (const planet of planets) {
    console.log(planet);
    let a = document.createElement('span');
    a.textContent = 'eu';
    planet.insertAdjacentElement('afterend', a);
  }
}
