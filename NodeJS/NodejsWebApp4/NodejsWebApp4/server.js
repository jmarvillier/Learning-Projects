const express = require('express')
const app = express()
//const ejsEngine = require("ejs-locals");

app.set("view engine", "vash");

app.use(express.static(__dirname + "/public"));
//app.engine("ejs", ejsEngine); //support master pages
//app.set("view engine", "ejs"); //Setup EJS as view engine
//app.set("view engine", "jade"); //Setup Jade as view engine

const controllers = require("./controllers");

//Mat the routes
controllers.init(app);

/*
app.get('/', function (req, res) {
    res.render("index", { title: "Express + Vash" });
    //res.render("ejs/index", { title: "Express + EJS" });
    //res.render("jade/index", { title: "Express + Jade" });
    //res.send('Hello World!');
});

app.get('/api/users', function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Bob", isValid: true, group: "admin" });
});*/

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});