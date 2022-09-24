const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//For Index html
app.get("/",function (req,res)
{
  
    res.sendFile(__dirname + "/index.html");

  });

  app.post("/",function(req , res){
   // console.log(req,body.num1);
   var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
        res.send("The Result of the calculation is " + result);
  });

/////////////////////////////////////////////////////////////


app.get("/bmicalculator",function (req,res)
{
  
    res.sendFile(__dirname + "/bmiCalculator.html");

  });

  app.post("/bmicalculator",function(req , res)
  {
   // console.log(req,body.num1);
   var num1 = parseFloat(req.body.weight);
    var num2 = parseFloat(req.body.height);

    var result = num1 / (num2*num2);
        res.send("The Result of the calculation is " + result);
  });

  app.listen(3000,function(){
    console.log("server started on port 3000");
});


/////////////////////////////////////////////////////////////

 //For BMI Calculator
//  app.get("/bmicalculator",function(req,res){
//   res.sendFile(__dirname + "/bmiCalculator.html");
// });


// app.post("/bmicalculator",function(req,res) {

//     //console.log(req.body.weight);

//     var weight = parseFloat(req.body.weight);
//     var height = parseFloat(req.body.height);
//     var bmi = weight / (height * height);
//     res.send("Your BMI is = " + bmi);
//   });

//******************************************************************************************************************** */

// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/bmicalculator", function (req, res) {
//   res.sendFile(__dirname + "/bmiCalculator.html");
// });

// app.post("/", function (req, res) {
//   var num1 = Number(req.body.num1);
//   var num2 = Number(req.body.num2);
//   var result = num1 + num2;

//   res.send(num1 + " + " + num2 + " = " + result);
// });

// app.post("/bmicalculator", function (req, res) {
//   var weight = parseFloat(req.body.weight);
//   var height = parseFloat(req.body.height);
//   var bmi = weight / (height * height);
//   var interpretation = "";

//   if (bmi < 18.5) {
//     interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
//   } else if (bmi > 24.9) {
//     interpretation = "Your BMI is " + bmi + ", so you are overweight.";
//   } else {
//     interpretation = "Invalid";
//   }

//   res.send(interpretation);
// });

// app.listen(port, function () {
//   console.log("Server started on port " + port);
// });










