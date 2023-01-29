const planetList = document.querySelector('#planetList');

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

      let a = document.createElement('span');
      a.textContent = resultString;
      a.style.position = 'absolute';
      a.style.marginTop = '-18px';
      a.style.marginLeft = '46px';
      a.style.fontSize = '0.85em';

      planet.insertAdjacentElement('afterend', a);
    }
  }
}
