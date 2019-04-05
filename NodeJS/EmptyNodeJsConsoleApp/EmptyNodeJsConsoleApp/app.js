console.log('Hello world');

var x = 10;
var y = 20;

console.log(x * 20);

var msgs = require("./msgs");
var msg = new msgs();
//console.log(msgs.first);
//console.log(msgs.second);
//console.log(msgs.third);

console.log(msg.first);

var logger = require("./logger");
logger.log("this is the message from the logger");

var _ = require("underscore");