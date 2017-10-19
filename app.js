let express = require("express"); 
let app = express(); 

app.get("/", function(req, res) {
    res.render("home.ejs")
}); 

app.get("/fellinlovewith/:thing", function(req, res) {
    let thing = req.params.thing; 
    res.render("love.ejs", {thingVar: thing}); 
}); 

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server is listening!!!'); 
}); 