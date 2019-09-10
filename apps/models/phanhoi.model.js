var Sequelize = require('sequelize');
var db = require("../../helpers/dbconnect");

var phanhoi = db.define("phanhoi",{
   

    noidunghoi: Sequelize.TEXT,    
   
    noidungtraloi : Sequelize.TEXT,
    
    trangthai: Sequelize.BIGINT
       
})

module.exports = phanhoi