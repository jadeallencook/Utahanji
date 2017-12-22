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
    "title": "St. George",
    "msg": "See sign for Mesquite or Zion National Park.",
    "img": "",
    "options": [{
      "title": "Choose Zion.",
      "msg": "Journey continues.",
      "hearts": 1
    }, {
      "title": "Choose Mesquite.",
      "msg": "Sent back into Nevada.",
      "hearts": -1
    }, {
      "title": "Go nowhere.",
      "msg": "You run out of food.",
      "hearts": -1
    }, {
      "title": "Gas station",
      "msg": "Refuel or snacks",
      "hearts": 2
    }]
  }, {
    "title": "Bryce Canyon",
    "msg": "You arrive at Bryce. Should you hike or tour?",
    "img": "",
    "options": [{
      "title": "Hike",
      "msg": "You become fatigued.",
      "hearts": -1
    }, {
      "title": "Tour",
      "msg": "Visit cool locations with a brisk walk.",
      "hearts": 0
    }, {
      "title": "Hike and tour",
      "msg": "A tour and a hike? Your health goes way down.",
      "hearts": -2
    }, {
      "title": "Visitor's center",
      "msg": "Tour visitor's center and refuel.",
      "hearts": 1
    }]
  }, {
    "title": "Manti",
    "msg": "Visit ranch in Manti",
    "img": "",
    "options": [{
      "title": "Open home",
      "msg": "Rancher yells for your to leave.",
      "hearts": -1
    }, {
      "title": "Steal horse",
      "msg": "Police catch you.",
      "hearts": -2
    }, {
      "title": "Knock on door",
      "msg": "Rancher offers you a meal.",
      "hearts": 1
    }, {
      "title": "Skip ranch",
      "msg": "Stay over in town for the night.",
      "hearts": 1
    }]
  }, {
    "title": "Provo",
    "msg": "Your journey brings you to Provo.",
    "img": "",
    "options": [{
      "title": "Visit BYU",
      "msg": "Receive new caffeinated soda",
      "hearts": 2
    }, {
      "title": "Visit Lavell Edwards Stadium",
      "msg": "Catch a game, but get bored.",
      "hearts": -2
    }, {
      "title": "Shop in town center",
      "msg": "Refuel on snacks and drinks.",
      "hearts": 2
    }, {
      "title": "Catch FrontRunner",
      "msg": "FrontRunner breaks down, delaying your journey.",
      "hearts": -2
    }]
  }, {
    "title": "Lehi",
    "msg": "You're finally in Lehi, where there are tons of tech companies. Where do you visit?",
    "img": "",
    "options": [{
      "title": "Adobe office",
      "msg": "You're offered a job, but turn it down.",
      "hearts": 0
    }, {
      "title": "Thanksgiving Point",
      "msg": "Fun festivities help you refuel.",
      "hearts": 2
    }, {
      "title": "Megaplex",
      "msg": "You catch 'Last Jedi' and fall asleep.",
      "hearts": 1
    }, {
      "title": "Younique office",
      "msg": "You receive some makeup.",
      "hearts": 1
    }]
  }, {
    "title": "Rio Tinto Stadium",
    "msg": "Journey brings you to the RSL stadium. Choose RSL's opponent.",
    "img": "",
    "options": [{
      "title": "Sporting KC",
      "msg": "RSL loses, 1-0.",
      "hearts": -1
    }, {
      "title": "Toronto FC",
      "msg": "RSL loses 5-0.",
      "hearts": -2
    }, {
      "title": "DC United",
      "msg": "RSL wins 1-0",
      "hearts": 1
    }, {
      "title": "NYCFC",
      "msg": "RSL ties 2-2",
      "hearts": 0
    }]
  }, {
    "title": "Sugar House",
    "msg": "What restaurant do you eat at?",
    "img": "",
    "options": [{
      "title": "The Dodo",
      "msg": "The meal is delicious.",
      "hearts": 2
    }, {
      "title": "Spitz",
      "msg": "The line is too long.",
      "hearts": -1
    }, {
      "title": "SugarHouse BBQ",
      "msg": "Meat is undercooked.",
      "hearts": -2
    }, {
      "title": "Tsunami",
      "msg": "Food is good, waiter takes too long.",
      "hearts": 0
    }]
  }, {
    "title": "Trax",
    "msg": "Which Trax line do you take?",
    "img": "",
    "options": [{
      "title": "Red",
      "msg": "You're off to Daybreak! Wrong way.",
      "hearts": -2
    }, {
      "title": "Green",
      "msg": "You're headed to SLC.",
      "hearts": 1
    }, {
      "title": "Blue",
      "msg": "Uh-oh! Wrong line. You're back to RSL.",
      "hearts": -1
    }, {
      "title": "S-Line",
      "msg": "Back to Sugar House.",
      "hearts": 1
    }]
  }, {
    "title": "Triad Center",
    "msg": "Which floor do you visit?",
    "img": "",
    "options": [{
      "title": 5,
      "msg": "You meet the Deseret News staff!",
      "hearts": 2
    }, {
      "title": 1,
      "msg": "You meet the KSL and Deseret News staff!",
      "hearts": 1
    }, {
      "title": 4,
      "msg": "You run into DDM employees.",
      "hearts": 0
    }, {
      "title": "Parking",
      "msg": "You refuel at BC Cafe.",
      "hearts": 2
    }]
  }, {
    "title": "Salt Lake City",
    "msg": "Pick a street.",
    "img": "",
    "options": [{
      "title": "West Temple",
      "msg": "Wrong way!",
      "hearts": -1
    }, {
      "title": "North Temple",
      "msg": "You're almost there.",
      "hearts": 1
    }, {
      "title": "400 W",
      "msg": "Totally wrong spot.",
      "hearts": -2
    }, {
      "title": "University Boulevard",
      "msg": "Wrong way!",
      "hearts": -1
    }]
  }, {
    "title": "Salt Lake City Downtown",
    "msg": "Choose your final location.",
    "img": "",
    "options": [{
      "title": "Capitol",
      "msg": "Congrats! You've finished.",
      "hearts": 2
    }, {
      "title": "SLC Airport",
      "msg": "Sorry, but you didn't arrive at the right spot.",
      "hearts": -2
    }, {
      "title": "City Creek Center",
      "msg": "Go bankrupt.",
      "hearts": -2
    }, {
      "title": "State Street",
      "msg": "You're lost now.",
      "hearts": -2
    }]
  }, {
    "title": "Daybreak",
    "msg": "Pick an activity.",
    "img": "",
    "options": [{
      "title": "Take TRAX",
      "msg": "Head back to SLC.",
      "hearts": 2
    }, {
      "title": "Walk around lake.",
      "msg": "Tire yourself out.",
      "hearts": -2
    }, {
      "title": "Visit Megaplex",
      "msg": "See a movie, fall asleep.",
      "hearts": -1
    }, {
      "title": "Drive around",
      "msg": "Keep energy.",
      "hearts": 1
    }]
  }]
}