const express = require('express');
const app = express();
const port = 3000;
// const axios = require('axios').default;
// const fs = require('fs');
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
const path = require('path');

app.use(express.static(path.join(__dirname, '../hexed/dist/hexed')));

app.listen(port, () => {
	console.log('Listening on *:3000');
});