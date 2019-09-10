var Sequelize = require("sequelize"); 
var db = require("../../helpers/dbconnect");
 
    var khoahoc =  db.define('khoahoc', {
        tenkhoahoc: {
            type:  Sequelize.TEXT        
        },
       
        dieukien: Sequelize.BIGINT,    
        loaikhoahoc: Sequelize.TEXT,
        phidichvu : Sequelize.BIGINT,
        soluongmua: Sequelize.BIGINT,    
        trangthai: Sequelize.BIGINT   
    });
  
    // khoahoc.associate = (models) => {
    //   // 1:M
    //   dangky.hasOne(models.khoahoc, {
    //     foreignKey: 'id_khoahoc',
    //   });
    // };
  
 module.exports = khoahoc

  