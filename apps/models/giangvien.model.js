var Sequelize = require('sequelize');
var db = require("../../helpers/dbconnect");

var giangvien = db.define("giangvien",{
    tengiangvien: {
        type:  Sequelize.TEXT        
    },

    SDT: Sequelize.BIGINT,    
    email: Sequelize.TEXT,
    diachi : Sequelize.TEXT,
    gioitinh: Sequelize.TEXT,
    linhvuc : Sequelize.TEXT,    
    trangthai: Sequelize.BIGINT
       
})


module.exports = giangvien