const mainMenu = {
  newGame: function() {
    // reset player
    enviroment.player.hearts = 5;
    enviroment.player.pointers = 0;
    // hide main menu
    document.getElementById('main-menu-container').style.display = 'none';
  },
  init: function() {
    // attach event listeners
    document.getElementById('new-game').onclick = this.newGame;
  }
}
