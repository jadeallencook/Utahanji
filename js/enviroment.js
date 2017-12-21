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
    title: 'Test 1',
    // background image
    img: 'https://placehold.it/250x250',
    // question/msg
    msg: 'Another test',
    // btn options
    options: [{
      // btn txt
      title: 'test 1',
      msg: 'this is the message...',
      outcome: [{
        img: 'https://placehold.it/250x250',
        msg: 'this is a good outcome...',
        health: 2
      }, {
        img: 'https://placehold.it/250x250',
        msg: 'this is a bad outcome...',
        health: -2
      }]
    }, {
      title: 'test 1',
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