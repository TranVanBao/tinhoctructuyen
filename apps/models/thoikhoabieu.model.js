var Sequelize = require('sequelize');
var db = require("../../helpers/dbconnect");

var thoikhoabieu = db.define("thoikhoabieu",{
    thoigianbatdau: {
        type:  Sequelize.DATE        
    },
    thoigianketthuc: Sequelize.DATE,   
  
    trangthai: Sequelize.BIGINT
       
})

module.exports = thoikhoabieu