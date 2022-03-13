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
  axios.request(api_url).then((res) => {
    console.log(res["data"]);
    let js = JSON.parse(res['data'][0]);
    console.log(js);
    res.status(200).json(js);
  }).catch((err) => {
    console.log(err);
    res.status(500).send();
  });
});

app.get('/sendscore', (req, res) => {
  // insert a new score into the high scores
  // https://freebee.fun/cgi-bin/scores?<name>=<score>
  axios.request(api_url).then((res) => {

  }).catch((err) => {

  });
});

app.listen(port, () => {
	console.log('Listening on *:3000');
});