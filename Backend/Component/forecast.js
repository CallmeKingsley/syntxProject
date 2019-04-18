const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');

const retrievewithCityName=(req,res)=>{
  jwt.verify(req.token, 'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{ 
            const CityName = req.body.cityName;
              try{
              var result = fetch("https://www.metaweather.com/api/location/search/?query="+CityName)
              .then(res => res.json()) // expecting a json response
              .then(json => {
                  var woeid = json[0].woeid;
                  return fetch("https://www.metaweather.com/api/location/"+woeid)
              }).then(function(response) {
                  return response.json();
              })
              .catch(function(error) {
                  console.log('Request failed', error)
              })
            
            result.then(function(r){
            res.status(202).json(r.consolidated_weather)
            })
            }catch(err){
                console.log(err)
            }
        }
  }); 
}

const retrievewithZipCode =(req,res)=>{
const ZipCode = req.body.zipCode;
  jwt.verify(req.token, 'secretkey',(err,authData)=>{
    console.log(req.token)
    //console.log(err)
    if(err){
      res.sendStatus(403);
    }else{
        try{
          
          console.log(ZipCode)
          fetch("http://ziptasticapi.com/"+ZipCode).then(res => res.json()).then(response =>{

            var result = fetch("https://www.metaweather.com/api/location/search/?query="+response.city)
            .then(res => res.json()) // expecting a json response
            .then(json => {
                var woeid = json[0].woeid;
                return fetch("https://www.metaweather.com/api/location/"+woeid)
            }).then(function(response) {
                return response.json();
            })
            .catch(function(error) {
                console.log('Request failed', error)
            })
            
            result.then(function(r){
            res.status(202).json(r.consolidated_weather)
            })

          })
      }catch(err){
          console.log(err)
      }
    }
  });
}

module.exports = {retrievewithCityName,retrievewithZipCode}