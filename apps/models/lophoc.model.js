var Sequelize = require('sequelize');
var db = require("../../helpers/dbconnect");

var lophoc = db.define("lophoc",{
    tenlop: {
        type:  Sequelize.TEXT        
    },

    thoigianbatdau: Sequelize.DATE,
    thoigianketthuc: Sequelize.DATE,     
    soluonghocvien: Sequelize.BIGINT,
    
    trangthai: Sequelize.BIGINT
       
})

module.exports = lophoc