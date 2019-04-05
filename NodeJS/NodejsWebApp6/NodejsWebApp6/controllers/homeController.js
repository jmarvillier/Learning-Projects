(function (homeController) {

    var data = require("../data");
    homeController.init = function (app) {
        app.get('/', function (req, res) {
            data.getNoteCategories(function (err, results) {
                res.render("index", { title: "Express + Hello world with Vash", error: err, categories: results });
                //res.render("ejs/index", { title: "Express + EJS" });
                //res.render("jade/index", { title: "Express + Jade" });
                //res.send('Hello World!');
            });                 
        });
    };

})(module.exports);