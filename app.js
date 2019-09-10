if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

var express = require("express");
var bodyParser = require("body-parser"); 
var session = require("express-session");
var passport = require("passport");
var flash = require("connect-flash");
var validator = require("express-validator");
var bcrypt = require('bcryptjs');
 var flash = require("express-flash")


// database
const db = require("./helpers/dbconnect");
const Sequelize = require("sequelize");

const models = require('./apps/models/index');

////test ket noi database



  const user = []
var app = express();
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());


// session

app.use(session({
    secret : "settings.secured_key",
    resave : false,
    saveUninitialized : false

}))


// ket noi database
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// duong dan tuyet doi
app.set("views", __dirname+"/apps/views");
app.set("view engine","ejs");

app.use( express.static(__dirname+"/public"));

var controllers = require(__dirname+"/apps/controllers");
app.use(controllers);

const port = process.env.port || 3000 

app.listen(port, console.log(`Server start on port ${port}!`))

