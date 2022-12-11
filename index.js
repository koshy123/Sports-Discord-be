const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
require("dotenv").config({ path: "./.env" });

const app = express();
const topicController = require('./controllers/topicController')
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/topics', topicController)

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
  console.log('listening on port ' + app.get('port'));
});
