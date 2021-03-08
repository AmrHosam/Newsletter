const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, function(){
    console.log("Server is runnung on port 3000");
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName, lastName, email);

});