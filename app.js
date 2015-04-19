/**
 * Created by Shivaji on 4/18/2015.
 */
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/newauth');

var User = mongoose.model('User', new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    email: {type: String, unique: true},
    password: String
}));

app.set('view engine','jade');
//Connect to MongoDB
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req, res){
    res.render('signin.jade');
});
app.get('/register',function(req, res){
    res.render('register.jade');
    console.log("entered register")
});

app.get('/dashboard',function(req,res){
    res.render('dashboard.jade');
})

app.post('/login')

app.post('/register',function(req, res){
   console.log("Entered post register");
    console.log(req.body) ;
    var user = new User({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    });

    user.save(function(err){
        if (err){
            if(err.code == 11000){
                var error = "Account with this emailID already exists";
            }
            else {var error = "Could not register user. Try again."}
            res.render('register.jade',{error: error});
        }
        else {
                res.redirect('/dashboard')
            }
    });
});
app.listen(3000);