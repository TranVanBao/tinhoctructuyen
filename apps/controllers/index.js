var express = require("express");
var router = express.Router();
const routerAD=require('./outsite/main');


router.use(routerAD);
router.use("/admin",require(__dirname+"/admin/admin"));


router.get("/",function(req,res){
    // res.json({"message": "This is Home Page"})
    res.render("../views/outsite/index.ejs");
});



module.exports =router;