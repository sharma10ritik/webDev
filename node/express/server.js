const express = require("express");
const app = express();

app.get("/",function(request,response){
    // console.log(request);
    // response.send("Hello this Express Js is working");
    response.send("<h1>Hello this Express Js is working</h1>");
});

app.get("/contact",function(req,res){
    
    res.send("Contact me : sharma1097ritik@gmail.com");
});

app.get("/about",function(req,res){
    
    res.send("<pre>This website is owned by Ritik Sharma </pre>");
});

app.get("/hobbies",function(req,res){
    
    res.send("Ritik sharma this is what i love to do love to play badminton and also watching football and also cricke jbjbcmnsc mt");
});


app.listen(3000,function(){
    console.log("server started on port 3000")
});