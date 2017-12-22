const mainMenu = {
  newGame: function() {
    if (enviroment.dev) console.log('EVENT: New game started');
    game.resetPlayer();
    enviroment.game.level = 0;
    scene.display(enviroment.game.level);
  },
  init: function() {
    game.hideAllScreens();
    game.resetPlayer();
    document.getElementById('main-menu-container').style.display = 'block';
    document.getElementById('new-game').onclick = mainMenu.newGame;
  }
}
