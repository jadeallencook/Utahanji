let enviroment = {
  dev: true,
  // player stats
  player: {
    hearts: 3,
    points: 0
  },
  // game enviroment
  game: {
    // ex: [1, 6]
    roll: false,
    level: 0
  },
  // board tiles
  board: [{
    // scene title
    title: 'Zion',
    // background image
    img: 'assets/zion.jpg',
    // question/msg
    msg: 'You\'re in a southwest Utah nature preserve distinguished by steep red cliffs, heading north from Vegas. What is your next move?',
    // btn options
    options: [{
      title: 'Keep Going',
      msg: 'this is the message...',
      hearts: 1
    }, {
      title: 'Turn Back',
      msg: 'this is the message...',
      img: 'https://placehold.it/250x250',
      hearts: -2
    }]
  }, {
    title: 'Salt Lake',
    img: 'assets/zion.jpg',
    msg: 'You\'ve arrived to Salt Lake City!',
    options: [{
      title: 'Keep Going',
      msg: 'this is the message...',
      hearts: 1
    }, {
      title: 'Turn Back',
      msg: 'this is the message...',
      img: 'https://placehold.it/250x250',
      hearts: -2
    }]
  }]
}
