const stats = {
  updateHealth: function(num) {
    enviroment.player.hearts = enviroment.player.hearts + num;
  },
  updatePoints: function() {
    document.getElementById('stat-points').innerHTML = enviroment.player.points + " Points";
  }
}
