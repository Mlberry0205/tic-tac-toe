const tiles = document.querySelectorAll('.tile')
const PLAYER_X = 'X'
const PLAYER_O = 'O'
let turn = PLAYER_X

//fill() method changes all elements in an array to a 
//static value, from a start index to an end index

const boardState = Array(tiles.length).fill(null)

//Elements
const strike = document.getElementById('strike')
const box = document.getElementById('box')
const winnerText = document.getElementById('winner-text')
const playAgainButton = document.getElementById('play-again')

tiles.forEach((tile) => tile.addEventListener('click', tileClick))

function tileClick(event) {
  if (box.classList.contains('visible')) {
    return;
  }

  const tile = event.target
  const tileNumber = tile.dataset.index
  if(tile.innerText != '') {
    return
  }
  if(turn === PLAYER_X) {
    tile.innerText = PLAYER_X
    boardState[tileNumber-1] = PLAYER_X
    turn = PLAYER_O
  } else {
    tile.innerText = PLAYER_O
    boardState[tileNumber-1] = PLAYER_O
    turn = PLAYER_X
  }
}
