const scene = {
  display: function(num) {
    if (enviroment.dev) console.log('SCENE: Building scene #' + num);
    // cache build data
    const data = enviroment.board[num];
    // update scene content
    document.getElementById('scene-title').innerText = data.title;
    document.getElementById('scene-msg').innerText = data.msg;
    // add each button
    document.getElementById('scene-options').innerHTML = '';
    for (let option of data.options) {
      const html = '<div class="btn">' + option.title + '</div>';
      document.getElementById('scene-options').innerHTML += html;
    }
  }
}