var Sequelize = require('sequelize');
var db = require("../../helpers/dbconnect");

var hocvien = db.define("hocvien",{
    hoten: {
        type:  Sequelize.TEXT        
    },

    SDT: Sequelize.BIGINT,    
    email: Sequelize.TEXT,
    diachi : Sequelize.TEXT,
    gioitinh: Sequelize.TEXT,    
    trangthai: Sequelize.BIGINT
       
})

module.exports = hocvien