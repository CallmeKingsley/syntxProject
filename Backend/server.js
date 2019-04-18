var forcastRoute = require('./Routes/forecastroute');
var bodyParser = require('body-parser')
var express = require('express');
var morgan = require('morgan')
var cors = require('cors')
const jwt = require('jsonwebtoken');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/syntx',verify,forcastRoute);


app.use('/createToken',(req,res)=>{
  const user = {
    guid: 1,
    username: 'syntx'
  }
   
  jwt.sign({user},'secretkey',(err,token)=>{
     res.json({token})
  });

})

app.use('/', (req, res)=>{
    res.send("everything else")
});

function verify(req,res,next){
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }else{
    res.sendStatus(401)
  }

}
  
  //listener on port 3000
  app.listen(5000);