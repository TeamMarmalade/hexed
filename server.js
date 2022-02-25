const { fstat } = require('fs');
const path = require('path');

// server init + mods
var app = require('express')();
var http = require('http').Server(app);
const axios = require('axios').default;
var express = require('express');

app.use(express.static(path.join(__dirname, 'hexed/dist/hexed')));

// server route handler
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/getscores', function(req, res) {
  let api_url = "https://freebee.fun/cgi-bin/scores";

  axios.request(api_url).then((res2) => {
    res.send(res2["data"]);
  }).catch((err) => {
    console.error(err);
  });
});

app.get('/sendscore', function(req, res) {
  let name = req.query.name;
  let score = req.query.score;

  let api_url = "https://freebee.fun/cgi-bin/scores?" + name + "=" + score;

  axios.request(api_url).then((res2) => {
    res.json(res2["data"]);
  }).catch((err) => {
    console.error(err);
  });
});

// start server
http.listen(3000, function(){
  console.log('Server up on *:3000');
});