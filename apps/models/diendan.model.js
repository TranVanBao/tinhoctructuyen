var Sequelize = require('sequelize');
var db = require("../../helpers/dbconnect");
var khoahoc = require("./khoahoc.model")
var giangvien = require("./giangvien.model")

var diendan = db.define("diendan",{
    tendiendan: {
        type:  Sequelize.TEXT        
    }, 
   
       
})


module.exports =  diendan 