
const bcrypt = require('bcryptjs')
const saltRounds = 10;
var {taikhoan,khoahoc,dangky,diendan, giangvien,hocvien,khachhang,lophoc,phanhoi,phonghoc,thoikhoabieu} = require("../apps/models/index")
class modelUser {
  async checkTK(tk, done){

    //console.log(tk.tentaikhoan);
    
    let taik =await taikhoan.findOne ({ where: {'tentaikhoan': tk.tentaikhoan} });
        if (tk)
            return done(null, tk);
        else
            return done(null, false,{ message: 'Tai khoan khong ton tai.' });
    }
   async getAccount(username,password,done){
    let tk =await taikhoan.findOne ({ where: {'tentaikhoan': username} });
    if (tk != null ) {
      // tk = { ...tk, password: password };
      // modelUser.method.checkAccount(tk, done);
        bcrypt.genSalt(saltRounds, (err, salt) => {
          bcrypt.compare(password, tk.matkhau, (err, res) => {    
              
              if (res)
                  return done(null, tk);
              else
                  return done(null, false);
          })
  });
      }
  else
      return done(null, false, { message: 'Tai khoan khong ton tai.' });
  }
}
module.exports=modelUser;