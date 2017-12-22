const gameOver = {
  gameOver: function() {

  },
  init: function() {
    // attach event listeners to btns
    document.getElementById('restart').onclick = mainMenu.newGame;
  }
}
