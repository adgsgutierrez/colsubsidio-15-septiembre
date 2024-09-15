const express = require('express');
const path = require('path');
require('dotenv').config();

const get = require('./controllers/get');
const post = require('./controllers/post');
const put = require('./controllers/put');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/v1/item/list', (req, res) => { get(req, res); });

app.post('/v1/item/create', (req, res) => { post(req, res); });

app.put('/v1/item/update', (req, res) => { put(req, res); });

app.use('/' ,  express.static(path.join(__dirname, './' , 'views')));

app.listen(port, () => {
  console.log(`Example app on port ${port}`);
});