let express = require("express"); 
let app = express(); 

app.use(express.static("public")); 
app.set("view engine", "ejs"); 

app.get("/", function(req, res) {
    res.render("home")
}); 

app.get("/fellinlovewith/:thing", function(req, res) {
    let thing = req.params.thing; 
    res.render("love", {thingVar: thing}); 
}); 

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Susy"},
        {title: "Post 3", author: "Susy"},
        ]; 
        res.render("posts", {posts: posts}); 
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server is listening!!!'); 
}); 