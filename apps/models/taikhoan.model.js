var Sequelize = require('sequelize');
var db = require("../../helpers/dbconnect");

var taikhoan = db.define("taikhoan",{
  // id:{
  //   type: Sequelize.BIGINT,
  //   primaryKey: true  ,
  //   autoIncrement: true
  // }
  // ,
    tentaikhoan: {
        type:  Sequelize.TEXT, 
        unique: true 
    },
    matkhau: {
      type: Sequelize.TEXT, 
      validate: {        
        min: 6, 
      }
    },
    quyen:{ 
     type: Sequelize.BIGINT,
     defaultValue : 1,
     validate: {        
      isNumeric: true, 
    }
    },
    trangthai :{ 
      type: Sequelize.BIGINT,
      defaultValue : 1,
      validate: {        
        isNumeric: true, 
      }
     },
    email: {
     type: Sequelize.TEXT,
     validate: {
      isEmail: true, 
    }
    }
       
})


module.exports = taikhoan