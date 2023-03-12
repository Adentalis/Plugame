/**
 * This feature shows the ranks of the players in the galaxy view
 */
const galaxy = document.querySelector('#galaxyContent');

if (galaxy) {
  let galaxyRows = galaxy.getElementsByClassName('ctContentRow');
  for (row of galaxyRows) {
    if (!row.classList.contains('empty_filter')) {
      let rank = getRank(row);
      let targetSpan = getTargetSpan(row);
      let a = document.createElement('span');
      a.textContent = '  ' + rank;
      targetSpan.insertAdjacentElement('beforeend', a);
    }
  }
}

function getRank(row) {
  let player = row.getElementsByClassName('cellPlayerName');
  if (player.length === 1) {
    let rank = player[0].getElementsByClassName('rank');
    if (rank.length === 1) {
      return rank[0].innerText.replace(/\D/g, '');
    } else {
      return '';
    }
  }
}

function getTargetSpan(row) {
  let player = row.getElementsByClassName('cellPlayerName');
  if (player.length === 1) {
    let allSpans = player[0].getElementsByTagName('span');
    return allSpans[0];
  }
}

/**
 *
 * Bugs:
 * - my own rank is buggy
 * - update after system is changed
 *
 *
 * Todo:
 *  - refactor
 *  - show ally information
 */
