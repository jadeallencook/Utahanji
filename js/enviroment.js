let enviroment = {
  // player stats
  player: {
    hearts: 3,
    points: 0
  },
  // game enviroment
  game: {
    // ex: [1, 6]
    roll: false
  },
  // board tiles
  board: [{
    // scene title
    title: 'Genesis',
    // background image
    img: 'https://placehold.it/250x250',
    // question/msg
    msg: 'You arrive in Zion...',
    // btn options
    options: [{
      title: 'Keep Going',
      msg: 'this is the message...',
      hearts: 0
    }, {
      title: 'Turn Back',
      msg: 'this is the message...',
      img: 'https://placehold.it/250x250',
      // strict outcome
      outcome: [{
        img: 'https://placehold.it/250x250',
        msg: 'this is a good outcome...',
        health: 2
      }]
    }]
  }]
}
