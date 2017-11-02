var express = require('express');
var router = express.Router();
var request = require('request')

var jokes = [
  {
    setup: 'What has 4 letters, sometimes 9 letters, but never has 5 letters.',
    punchLine: 'Just a hint: I didn\'t ask a question.'
  },
  {
    setup: 'What do you call a book club that\'s been stuck on one book for years?',
    punchLine: 'Church.'
  },
  {
    setup: 'Three conspiracy theorists walk into a bar',
    punchLine: 'You can\'t tell me that\'s just a coincidence.'
  },
  {
    setup: 'I invited my girlfriend to go to the gym with me and then I didn’t show.',
    punchLine: 'I hope she gets the message that we\'re not working out.'
  },
  {
    setup: 'My girlfriend told me to take the spider out instead of killing it.',
    punchLine: 'We went and had some drinks. Cool guy. Wants to be a web developer.'
  },
  {
    setup: 'What\'s a pirate\'s least favorite letter?',
    punchLine: 'Dear sir,\nYour internet access has been terminated due to illegal usage.\nSincerely, your service provider.'
  },
  {
    setup: 'The Only Thing Flat-Earthers Fear.....',
    punchLine: 'Is Sphere Itself.'
  },
  {
    setup: 'Why is Peter Pan always flying?',
    punchLine: 'He neverlands.'
  }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/joke', function(req, res) {
  console.log("In joke");
  res.send(jokes);
});

module.exports = router;
