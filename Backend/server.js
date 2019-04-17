var forcastRoute = require('./Routes/forecastroute');
var bodyParser = require('body-parser')
var express = require('express');
var morgan = require('morgan')
var cors = require('cors')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/syntx',forcastRoute);
app.use('/', (req, res)=>{
    res.send("everything else")
  });
  
  //listener on port 3000
  app.listen(5000);