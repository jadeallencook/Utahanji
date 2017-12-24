const stats = {
  updateHealth: function(num) {
    // dev
    if (enviroment.dev) console.log('STAT: ' + num + ' hearts added to health');
    // computate hearts
    if (num) enviroment.player.hearts = enviroment.player.hearts + num;
    if (enviroment.player.hearts > 8) num = 0;
    // remove animations
    const hearts = document.getElementsByClassName('heart-container');
    for (var x = 0, max = hearts.length; x < max; x++) {
      hearts[x].className = 'heart-container';
    }
    // append hearts to container
    if (num < 0) {
      num = num * -1;
      for (let x = 0; x < num; x++) {
        hearts[x].remove();
      }
    } else {
      let html = '';
      for (let x = 0; x < num; x++) {
        html += '<div class="heart-container animated rollIn"></div>';
      } 
      document.getElementById('stat-hearts').innerHTML = html + document.getElementById('stat-hearts').innerHTML;
    }
  },
  updatePoints: function(num) {
    // dev
    if (enviroment.dev) console.log('STAT: ' + num + ' points added to score');
    // computate points
    if (num) enviroment.player.points = enviroment.player.points + num;
    // update point html
    // document.getElementById('stat-points').innerHTML = enviroment.player.points + " Points";
  }
}
