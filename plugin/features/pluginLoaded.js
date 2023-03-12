const sidebar = document.querySelector('#menuTable');

if (sidebar) {
  const testbutton = document.createElement('button');
  testbutton.textContent = 'Plugin Loaded!';
  testbutton.setAttribute('class', 'textlabel');
  testbutton.style.color = 'red';
  testbutton.onclick = goDashboard;

  const menu = document.createElement('div');
  menu.appendChild(testbutton);
  sidebar.insertAdjacentElement('beforebegin', menu);
}

function goDashboard() {
  const menuItems = sidebar.getElementsByTagName('li');
  const menubutton = menuItems[0].getElementsByClassName('menubutton');
  menubutton[0].click();
}
