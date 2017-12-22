const game = {
  hideAllScreens: function () {
    document.getElementById('main-menu-container').style.display = 'none';
    document.getElementById('scene-container').style.display = 'none';
    document.getElementById('game-over-container').style.display = 'none';
  },
  resetPlayer: function () {
    enviroment.player.hearts = 3;
    enviroment.player.points = 0;
    stats.updateHealth();
    stats.updatePoints();
  }
}