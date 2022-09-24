const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res)
 {
    res.sendFile(__dirname +"/index.html");
   
   });

   app.post("/",function (req,res)
    {
        //console.log(req.body.city);

          const query = req.body.city
  const appkey = "f29f67212c5342fbac577ef70a83d5df"
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&appid="+ appkey+"&units=metric";
  https.get(url ,function(response){
      console.log(response.statusCode);

      response.on("data",function (data)
       {
          const weatherData = JSON.parse(data);
          console.log(weatherData);

          const temp = weatherData.main.temp;
          console.log(temp);
          const description  = weatherData.weather[0].description;
          console.log(description);

          const city = weatherData.name;
          console.log(city);


          const icon= weatherData.weather[0].icon

          const imageUrl ="http://openweathermap.org/img/wn/"+icon+"@2x.png";


          res.write("<p> The Weather is Currently "+description + "</p>")
          res.write("<h1>The temperature of " + city +" is " + temp + " Degree  </h1>");

          res.write("<img src="+ imageUrl+">");

          res.send()
         });
  });


        //console.log("Post received");
      })



app.listen(3000,function (req,res) 
{
    console.log("Server is running on Port 3000")
  })



//   // res.send("server is up and running")