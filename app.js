const express = require('express');
const bodyParser = require('body-parser');


const app = express();



const DesItems = [];
const AmountItems = [];
const PeopleItems = [];
const PerItems = [];



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {



  res.render("list", {


     DesItems : DesItems,
     AmountItems : AmountItems,
     PeopleItems : PeopleItems,
     PerItems : PerItems,

  });


});



app.post("/", function(req, res){

// console.log(req.body.newDescription);
// console.log(req.body.newAmount);
// console.log(req.body.newFreq);
// console.log((req.body.newAmount / req.body.newFreq).toFixed(2));
  DesItems.push(req.body.newDescription);
  AmountItems.push(req.body.newAmount);
  PeopleItems.push(req.body.newFreq);
  PerItems.push((req.body.newAmount / req.body.newFreq).toFixed(2));
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server running on port 3000.");
});
