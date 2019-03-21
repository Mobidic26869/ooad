const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:ooad1234@ds217976.mlab.com:17976/manageexam');

const Manage_build = require('./routes/Manage_build');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/build', Manage_build);

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html')); //index.html
});

app.listen(port, function(){
  console.log('Node js Express js Tutorial at port', port);
});