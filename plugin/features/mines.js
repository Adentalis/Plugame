const minesView = document.querySelector('#technologies');

if (minesView) {
  let a = document.createElement('span');
  a.textContent = 'mines';
  minesView.insertAdjacentElement('beforebegin', a);
}
