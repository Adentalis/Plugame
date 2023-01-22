const sidebar = document.querySelector('#menuTable');

if (sidebar) {
  const testbutton = document.createElement('button');
  testbutton.textContent = 'Plugin Working';
  testbutton.setAttribute('class', 'textlabel');
  testbutton.style.color = 'red';

  const menu = document.createElement('div');
  menu.appendChild(testbutton);

  sidebar.insertAdjacentElement('beforebegin', menu);
}
