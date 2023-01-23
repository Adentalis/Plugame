const planetList = document.querySelector('#planetList');

if (planetList) {
  const planets = planetList.getElementsByTagName('div');

  for (const planet of planets) {
    let planetLink = planet.getElementsByClassName('planetlink');

    if (planetLink.length > 0) {
      planetTitle = planetLink[0].getAttribute('title');
      let a = document.createElement('span');
      a.textContent = planetTitle.slice(
        planetTitle.indexOf('(') + 1,
        planetTitle.indexOf(')')
      );
      planet.insertAdjacentElement('afterend', a);
    }
  }
}
