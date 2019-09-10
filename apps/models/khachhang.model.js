var Sequelize = require('sequelize');
var db = require("../../helpers/dbconnect");
var khachhang = db.define("khachhang",{
    tenkhachhang: {
        type:  Sequelize.TEXT        
    },

    SDT: Sequelize.BIGINT,    
    email: Sequelize.TEXT,
    diachi : Sequelize.TEXT,   
    trangthai: Sequelize.BIGINT,
   
       
})



  module.exports = khachhang