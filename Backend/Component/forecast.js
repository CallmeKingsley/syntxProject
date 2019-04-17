const request = require('request');
const fetch = require('node-fetch');

const retrievewithZipCode=(req,res)=>{
  const ZipCode = req.body.zipCode;

  try{
      fetch("https://www.metaweather.com/api/location/search/?query=london")
      .then(res => res.json()) // expecting a json response
      .then(json => {
        var woeid = json[0].woeid
        
        res.status(202).json(woeid)
      })
    }catch(err){
        console.log(err)
    }
}

const retrievewithName =(req,res)=>{
    const CityName = req.body.cityName;

    try{


    }catch(err){
      console.log(err)
    }

}

function retrieveWoeid(CityName){
   var test;
  const result  = request.get("https://www.metaweather.com/api/location/search/?query=london",{},(err,respnose,body)=>{
       console.log("body"+body);
       test = body.replace(/\\+/g),'';
       return body
  })
   console.log("result "+json(result));
}


module.exports = {retrievewithZipCode,retrievewithName}