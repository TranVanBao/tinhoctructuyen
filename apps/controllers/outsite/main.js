var express = require("express");
var bcrypt = require('bcryptjs');
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
const LocalStrategy = require('passport-local').Strategy
var flash = require("express-flash")
var methodOverride = require('method-override')
const modelUS=require('../../../helpers/bcrypt');
var app = express();
app.use(methodOverride('_method'))
app.use(passport.initialize());
app.use(passport.session());
// data 
var {taikhoan,khoahoc,dangky,diendan, giangvien,hocvien,khachhang,lophoc,phanhoi,phonghoc,thoikhoabieu} = require("../../models/index")
var Sequelize = require('sequelize');

// session
var router = express.Router();
const user = [];

router.get("/register",checkNotAuthenticated,function(req,res){
    // res.json({"message": "This is Home Page"})
    res.render("../views/outsite/register.ejs");
});
router.post("/register",checkNotAuthenticated, async function(req,res){
    try {
        const hashedpassword =  await bcrypt.hash(req.body.password, 10);      
         taikhoan.findOrCreate({
         where: {tentaikhoan: req.body.name
        }, 
        defaults: {
                id:'',            
            matkhau: hashedpassword,
            email : req.body.email
        }})
        .then(([user, created]) => {
            console.log(user.get({
            plain: true
            }))
            console.log(created)
        })
      
        res.redirect("../outsite/login")
        
    } catch  {
        res.redirect("outsite/register");
    }
   console.log(user)
});
router.route('/admin')
.get((req,res) => { 
    if(req.isAuthenticated()){
       // console.log(req.user);
        res.render('../views/admin/index.ejs', {name : req.user.tentaikhoan });
    }   
   else
    res.redirect('/login')
})

router.get('/logout',(req,res) => {
    req.logout();
    res.redirect('/login');
})
router.route('/login')

    .get((req, res) => {
        res.render('../views/admin/login.ejs');
    })
    // verify account
    .post(passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/admin' }))
let model =new modelUS();
passport.use('local', new LocalStrategy(model.getAccount));
passport.serializeUser((tk, done) => { 
    done(null, tk);
});
passport.deserializeUser(model.checkTK);

  
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});




router.get("/contact",function(req,res){
    // res.json({"message": "This is Home Page"})
    res.render("../views/outsite/contact.ejs");
});
router.get("/blog",function(req,res){
    // res.json({"message": "This is Home Page"})
    res.render("../views/outsite/blog.ejs");
});

router.get("/khoahoc",function(req,res){
    // res.json({"message": "This is Home Page"})
    res.render("../views/outsite/khoahoc.ejs");
});

router.get("/dangky",function(req,res){
    // res.json({"message": "This is Home Page"})
    res.render("../views/outsite/dangky.ejs");
});





function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('../views/admin/index.ejs')
    }
    next()
  }
  


module.exports = router;