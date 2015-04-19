/**
 * Created by Shivaji on 4/18/2015.
 */


var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.set('view engine','jade');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req, res){
    res.render('signin.jade');
});
app.get('/register',function(req, res){
    res.render('register.jade');
    console.log("entered register");
});
app.post('/register',function(req, res){
   console.log("Entered post register");
    console.log(req.body) ;
});
app.listen(3000);