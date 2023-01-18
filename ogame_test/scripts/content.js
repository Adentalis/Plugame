const sidebar = document.querySelector('#left');

if (sidebar) {
  const badge = document.createElement('p');
  badge.textContent = `Hello Ogame`;
  sidebar.insertAdjacentElement('afterend', badge);
}
