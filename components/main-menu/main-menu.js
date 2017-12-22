const mainMenu = {
  newGame: function() {
    if (enviroment.dev) console.log('EVENT: New game started');
    // reset player
    enviroment.player.hearts = 3;
    enviroment.player.pointers = 0;
    // hide main menu
    document.getElementById('main-menu-container').style.display = 'none';
    // show first scene
    scene.display(0);
  },
  init: function() {
    // attach event listeners to btns
    document.getElementById('new-game').onclick = this.newGame;
  }
}
