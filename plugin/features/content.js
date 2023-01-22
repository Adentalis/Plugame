const sidebar = document.querySelector('#menuTable');

if (sidebar) {
  const menu = document.createElement('div');

  const testbutton = document.createElement('button');
  testbutton.textContent = 'Testiiiii';
  testbutton.setAttribute('class', 'textlabel');
  testbutton.style.color = 'red';
  menu.appendChild(testbutton);

  sidebar.insertAdjacentElement('afterend', menu);
}

/* <li>
  <span class='menu_icon'>
    <a
      href='https://s189-de.ogame.gameforge.com/game/index.php?page=rewards'
      class='tooltipRight js_hideTipOnMobile tpd-hideOnClickOutside'
      target='_self'
      title=''
    >
      <div
        class='menuImage overview active 
                                '
      ></div>
    </a>
  </span>
  <a
    class='menubutton  selected'
    href='https://s189-de.ogame.gameforge.com/game/index.php?page=ingame&amp;component=overview'
    accesskey=''
    target='_self'
  >
    <span class='textlabel'>Übersicht</span>
  </a>
</li>; */
