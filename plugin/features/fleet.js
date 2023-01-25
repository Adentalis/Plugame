const fleet = document.querySelector('#fleet1');

if (fleet) {
  let a = document.createElement('span');
  a.textContent = 'fleet';
  fleet.insertAdjacentElement('beforebegin', a);
}
