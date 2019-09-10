var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");




router.get("/index", checkAuthenticated,function(req,res){
    // res.json({"message": "This is Home Page"})
    res.render("../views/admin/index.ejs",  { name: req.user.name });
});
router.get("/table",function(req,res){
    // res.json({"message": "This is Home Page"})
    res.render("../views/admin/table.ejs");
});


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }  
    res.redirect('../outsite/login')
  }

module.exports =router;