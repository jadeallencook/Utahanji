const scene = {
  display: function (num) {
    game.hideAllScreens();
    if (enviroment.dev) console.log('SCENE: Building scene #' + num);
    // cache build data
    const data = enviroment.board[num];
    // update scene content
    document.getElementById('scene-title').innerText = data.title;
    document.getElementById('scene-msg').innerText = data.msg;
    document.getElementById('scene-container').style.backgroundImage = 'url(' + data.img + ')';
    document.getElementById('scene-container').style.display = 'block';
    // add each button
    document.getElementById('scene-options').innerHTML = '';
    for (let x = 0, max = data.options.length; x < max; x++) {
      const option = data.options[x];
      const html = '<div class="btn" id="option-' + x + '">' + option.title + '</div>';
      document.getElementById('scene-options').innerHTML += html;
    }
    // attach event listeners
    for (let x = 0, max = data.options.length; x < max; x++) {
      document.getElementById('option-' + x).onclick = function () {
        const choice = parseInt(this.id.replace('option-', ''));
        // apply results
        stats.updateHealth(data.options[choice].hearts);
        if (enviroment.player.hearts <= 0) {
          // player died
          game.hideAllScreens();
          gameOver.init();
        }
        // show results
        scene.result(num, choice);
      }
    }
  },
  result: function (num, choice) {
    if (enviroment.dev) console.log('SCENE: Showing result for scene #' + num);
    // update scene content
    const data = enviroment.board[num];
    document.getElementById('scene-title').innerText = 'Continue...';
    document.getElementById('scene-msg').innerText = data.options[choice].msg;
    document.getElementById('scene-options').innerHTML = '<div id="continue" class="btn">Continue</div>';
    document.getElementById('continue').onclick = function () {
      // go to next level
      enviroment.game.level++;
      if (enviroment.game.level < enviroment.board.length) {
        scene.display(enviroment.game.level);
      } else {
        //  game complete
      }
    }
  }
}