const stats = {
  updateHealth: function(num) {
    if (enviroment.dev) console.log('STAT: ' + num + ' hearts added to health');
    enviroment.player.hearts = enviroment.player.hearts + num;
  },
  updatePoints: function() {
    if (enviroment.dev) console.log('STAT: ' + num + ' points added to score');
    document.getElementById('stat-points').innerHTML = enviroment.player.points + " Points";
  }
}
