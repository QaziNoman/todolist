const express = require("express");
var bodyParser = require('body-parser');
const date=require(__dirname+"/date.js");
const app = express();
var items = ["Eat Food", "Cook Food", "Made cook"];
var Workitems = [];
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
   let day=date.GetDate();
   
    res.render("list", { ListTitle: day, NewlistItems: items });
 
});


app.get("/work", function (req, res) {
    
    res.render("list", { ListTitle: "Work", NewlistItems: Workitems });
})

app.post("/", function (req, res) {
    var item = req.body.InputItem;
    
    if (req.body.List==="Work"){
    
        Workitems.push(item);
        res.redirect("/work");
         }
        else{
    
            items.push(item);
            res.redirect("/");}
        

});
app.get("/about",function(req, res){
    res.render("about");
})






app.listen(3000, function () {

    console.log("listening on port 30000")
});
