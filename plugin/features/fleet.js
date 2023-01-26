const fleet = document.querySelector('#fleet1');

if (fleet) {
  let a = document.createElement('span');
  a.textContent = 'fleet';
  fleet.insertAdjacentElement('beforebegin', a);
}

/*** Link to attack this coordinates with 40 large transport ships
 * //https://s189-de.ogame.gameforge.com/game/index.php?page=ingame
 * &component=fleetdispatch
 * &galaxy=6
 * &system=430
 * &position=6
 * &type=1
 * &mission=1
 * &am203=40

 */
