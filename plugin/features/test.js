const sidebar = document.querySelector('#menuTable');

if (sidebar) {
  const testbutton = document.createElement('button');
  testbutton.textContent = 'Plugin Working';
  testbutton.setAttribute('class', 'textlabel');
  testbutton.style.color = 'red';
  testbutton.onclick = on;

  const menu = document.createElement('div');
  menu.appendChild(testbutton);

  sidebar.insertAdjacentElement('beforebegin', menu);
}

function on() {
  const menuItems = sidebar.getElementsByTagName('li');
  const l = menuItems[0].getElementsByClassName('menubutton');
  const toClick = l[0];
  toClick.click();
}
