const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios').default;
// const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const path = require('path');

app.use(express.static(path.join(__dirname, '../hexed/dist/hexed')));

app.get('/getscores', (req, res) => {
  // return universal player high scores
  // https://freebee.fun/cgi-bin/scores
  let api_url = "https://freebee.fun/cgi-bin/scores";
  axios.request(api_url).then((scores) => {
    res.status(200).json(scores['data']);
  }).catch((err) => {
    console.log(err);
    res.status(500).send();
  });
});

app.get('/sendscore', (req, res) => {
  // request body (json):
  // {"name": "Yakob", "score": 230204}
  // insert a new score into the high scores
  // https://freebee.fun/cgi-bin/scores?<name>=<score>

  // request body should be valid JSON
  let js = req.body;
  try {
    // make sure it's JSON
    JSON.stringify(js); // may throw error
    if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('score') && Object.keys(req.body).length == 2) {
      let name = String(req.body.name);
      let score= String(req.body.score);
      let api_url = `https://freebee.fun/cgi-bin/scores?${name}=${score}`;
      console.log(api_url);
      axios.request(api_url).then((notif) => {
        notif = notif["data"];
        if (notif.hasOwnProperty("update") && notif.update == "success") {
          res.status(200).json(notif);
          return;
        } else {
          // something wrong on professor's api I believe
          res.status(500).json(notif);
          return;
        }
      }).catch((err) => {
        res.status(500).send();
        return;
      });
    } else {
      // invalid json object in request body
      res.status(400).send();
      return
    }
    
  } catch(e) {
    console.log(e);
    // its not JSON
    res.send(400);
    return;
    // bad request body
  }
  
});

app.listen(port, () => {
	console.log('Listening on *:3000');
});