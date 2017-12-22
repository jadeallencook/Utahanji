const stats = {
  updateHealth: function(num) {
    // dev
    if (enviroment.dev) console.log('STAT: ' + num + ' hearts added to health');
    // computate hearts
    enviroment.player.hearts = enviroment.player.hearts + num;
    if (enviroment.player.hearts > 8) enviroment.player.hearts = 8;
    // reset hearts container
    document.getElementById('stat-hearts').innerHTML = '';
    // append hearts to container
    for (let x = 0; x < enviroment.player.hearts; x++) {
      let html = '<div class="heart-container"></div>';
      document.getElementById('stat-hearts').innerHTML += html;
    }
  },
  updatePoints: function(num) {
    // dev
    if (enviroment.dev) console.log('STAT: ' + num + ' points added to score');
    // computate points
    enviroment.player.points = enviroment.player.points + num;
    // update point html
    document.getElementById('stat-points').innerHTML = enviroment.player.points + " Points";
  }
}
