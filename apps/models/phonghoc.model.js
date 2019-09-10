var Sequelize = require('sequelize');
var db = require("../../helpers/dbconnect");


    var phonghoc = db.define("phonghoc",{
    tenphonghoc: {
        type:  Sequelize.TEXT        
    },   
    trangthai: Sequelize.BIGINT
       
});

module.exports = phonghoc