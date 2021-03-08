express = require("express");
app = express();
app.listen(3000, function(){
    console.log("Server is runnung on port 3000");
});
app.use(express.static("public"));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
});