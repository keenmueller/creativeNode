var express = require('express');
var router = express.Router();
var request = require('request')

var pokemon = [
  {
    name: 'What has 4 letters, sometimes 9 letters, but never has 5 letters.',
    avatarUrl: 'Just a hint: I didn\'t ask a question.'
  },
  {
    name: 'What do you call a book club that\'s been stuck on one book for years?',
    avatarUrl: 'Church.'

  },
  {
    name: 'Three conspiracy theorists walk into a bar',
    avatarUrl: 'You can\'t tell me that\'s just a coincidence.'
  },
  {
    name: 'I invited my girlfriend to go to the gym with me and then I didn’t show.',
    avatarUrl: 'I hope she gets the message that we\'re not working out.'
  },
  {
    name: 'The Only Thing Flat-Earthers Fear.....',
    avatarUrl: 'Is Sphere Itself.'
  },
  {
    name: 'Why is Peter Pan always flying?',
    avatarUrl: 'He neverlands.'
  }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/pokemon', function(req, res) {
  console.log("In Pokemon");
  res.send(pokemon);
});

var politics = "https://zlzlap7j50.execute-api.us-east-1.amazonaws.com/prod";
router.get('/politics', function(req,res) {
  console.log("In politics");
  request(politics).pipe(res);
});

router.post('/pokemon', function(req, res) {
    console.log("In Pokemon Post");
    console.log(req.body);
    pokemon.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
