var http = require("http");
var express = require("express");
var app = express();

try {
    app.get("/", function (req, res) {
        res.send("<html><body><h1>Express<h1><body><html>");
    });

    var server = http.createServer(app());

    server.listen(3000);
}
catch {
    console.log("msg");
}