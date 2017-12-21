const mainMenu = {
<<<<<<< HEAD
  build: function() {

  },
  init: function() {
    stats.updatePoints();
    console.log('main menu started!');
=======
  newGame: function() {
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
>>>>>>> 7c06493a7d10fa2029745bb88b4880ee3970e93e
  }
}
