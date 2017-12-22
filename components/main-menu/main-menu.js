const mainMenu = {
  newGame: function() {
    if (enviroment.dev) console.log('EVENT: New game started');
    // reset player
    enviroment.player.hearts = 3;
    enviroment.player.points = 0;
    // hide main menu
    document.getElementById('main-menu-container').style.display = 'none';
    // show first scene
    enviroment.game.level = 0;
    scene.display(enviroment.game.level);
  },
  init: function() {
    document.getElementById('main-menu-container').style.display = 'block';
    // attach event listeners to btns
    document.getElementById('new-game').onclick = this.newGame;
  }
}
