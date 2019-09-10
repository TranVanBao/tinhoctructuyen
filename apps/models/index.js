var Sequelize = require('sequelize');

var khoahoc = require("./khoahoc.model")
var dangky = require("./dangky.model")
 var taikhoan = require("./taikhoan.model")
 var diendan = require("./diendan.model")
 var giangvien = require("./giangvien.model")
 var hocvien = require("./hocvien.model")
var khachhang = require("./khachhang.model")
 var lophoc = require("./lophoc.model")
 var phanhoi = require("./phanhoi.model")
 var phonghoc = require("./phonghoc.model")
 var thoikhoabieu = require("./thoikhoabieu.model") 
// dang ky  
khoahoc.hasOne(dangky, {
   foreignKey: 'id_khoahoc',
   });

khachhang.hasOne(dangky, {
  foreignKey: 'id_khachhang',
});

// giang vien 
taikhoan.hasOne(giangvien, {
  foreignKey: 'id_taikhoan',
});

// // khach hang

taikhoan.hasOne(khachhang, {
  foreignKey: 'id_taikhoan',
});


// dien dan 

khoahoc.hasOne(diendan, {
  foreignKey: 'id_khoahoc',
});

// thoi khoa bieu 
lophoc.hasOne(thoikhoabieu, {
  foreignKey: 'id_lop',
});
phonghoc.hasOne(thoikhoabieu, {
  foreignKey: 'id_phong',
});


//phan hoi

taikhoan.hasOne(phanhoi, {
  foreignKey: 'id_hoi',
});
taikhoan.hasOne(phanhoi, {
  foreignKey: 'id_traloi',
});
diendan.hasOne(phanhoi, {
  foreignKey: 'id_diendan',
});

// lop hoc

hocvien.hasOne(lophoc, {
  foreignKey: 'id_hocvien',
});
giangvien.hasOne(lophoc, {
  foreignKey: 'id_giangvien',
});

khoahoc.hasOne(lophoc, {
  foreignKey: 'id_khoahoc',
});


module.exports = {taikhoan,khoahoc,dangky,diendan, giangvien,hocvien,khachhang,lophoc,phanhoi,phonghoc,thoikhoabieu }