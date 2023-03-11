const sidebarA = document.querySelector('#menuTable');

if (sidebarA) {
  const testbutton = document.createElement('button');
  testbutton.textContent = 'Storage Test - Store';
  testbutton.setAttribute('class', 'textlabel');
  testbutton.style.color = 'blue';
  testbutton.onclick = onStore;

  const testbutton2 = document.createElement('button');
  testbutton2.textContent = 'Storage Test - Load';
  testbutton2.setAttribute('class', 'textlabel');
  testbutton2.style.color = 'blue';
  testbutton2.onclick = onLoad;

  const menu = document.createElement('div');
  menu.appendChild(testbutton);
  menu.appendChild(testbutton2);

  sidebarA.insertAdjacentElement('beforebegin', menu);
}

function onStore() {
  console.log('on store');
  let key = 'ogametest';
  let value = '23';
  chrome.storage.local.set({ [key]: '23444' }).then(() => {
    console.log('Value is set to ' + '23444');
  });
}

function onLoad() {
  console.log('on load');
  let key = 'ogametest';

  chrome.storage.local.get(key).then((result) => {
    console.log('Value currently is ' + JSON.stringify(result));
  });
}
