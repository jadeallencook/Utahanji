const gameOver = {
  init: function() {
    if (enviroment.dev) console.log('EVENT: Game over...');
    document.getElementById('game-over-container').style.display = 'block';
    // attach event listeners to btns
    document.getElementById('restart-btn').onclick = mainMenu.newGame;
  }
}
