
// // baitap1:
// let a = "program";
// let b = "data";

// a = "margorp";
// b = "atad";

// console.log(a);
// console.log(b);


// baitap2:


// let a = "this is A Test";
// let b = "hello rikkei academy";

// let newa = a.charAt(0).toUpperCase() + a.slice(1);
// let newb = b.charAt(0).toUpperCase() + b.slice(1);

// console.log(newa);
// console.log(newb);


// baitap3:


// let a =["one","two","three","one","one","four","five","four","five","five"];

// let newa = a.reduce(function (key, value) {
//   if (key.indexOf(value) === -1) {
//     key.push(value)
//   }
//   return key
// }, [])

// console.log(newa);


// baitap4:


// let a =[5, 2, 3, 4, 1];
// a.reverse();
// a[1] =  2
// a[3] = 4
// console.log(a);
// // bai5:




//a. CREAT
// let rikkei = ["Hoang","Long","Hai"];
// rikkei[3] = prompt("nguoiNhap");
// let a = rikkei
// console.log("list",a);
// // b.READ
// console.log(a.length);
// for(let index = 0; index < a.length; index++){
//     console.log(a[index]);
// }

// // c.UPDATE

// let hoiNguoiDung = +prompt("vị trí nhân viên muốn update là gì ?");
// if( !hoiNguoiDung ){
//     hoiNguoiDung = false;
// }else{
//     let noiDungMuonUpdate = prompt("nhân viên muốn cập nhật lại:");
//     rikkei[hoiNguoiDung] = noiDungMuonUpdate;
  
// }

// let b = rikkei ;
// console.log("list",b);

// // // d.DELELTE
 
// let hoiNguoiDung1 = +prompt("vị trí nhân viên muốn delete là gì ?");

// rikkei.splice([hoiNguoiDung1],1);
// let c = rikkei
//     console.log(c);

// bai6:


// var ngay  = +prompt("Nhập ngày vào");
// var thang = +prompt("Nhập tháng vào");
// var nam = +prompt("Nhập năm vào");

//   console.log(ngay+"/"+thang+"/"+nam);

// let a = ngay+"/"+thang+"/"+nam

// function hopLe(){
//     let ngayMax = [0,31,28,31,30,31,30,31,31,30,31,30,31];
//     if(nam<0){
//         return false;
//     }
//     if (thang > 13 && thang < 0) {
//         return false;
//     }
//     if(nam % 4 == 0){
//         ngayMax[2] = 29;
//     }
//     if(ngay>ngayMax[thang]){
//         return false

//     }
//     return true

// }

// if (!hopLe()) {
//     console.log(a + " la ngay khong hop le");
    
// }
// else{
//     console.log(a + " là ngày hợp lệ")
// }



// baitap7:
// const bookStore  = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];

// alert (`Cửa hàng sách đang có những cuốn sách: ${bookStore}`)

// let index=0;
// const cart = ['',index];
// let banMuonMuaGi= prompt("Mời bạn nhập cuốn sách muốn mua");
// if( bookStore.indexOf(banMuonMuaGi) !== -1){
//     cart[0] = banMuonMuaGi;
//     cart[1]= ++index;
//     alert("Bạn đã thêm thành công 1 cuốn sách vào giỏ hàng");
//     alert(cart);
// }else{
//     alert( "We don't have that item");    
// }
// let trangchu = prompt("1. Cap nhat gio hang \n 3.quay lai");
// switch(trangchu){
//     case "1":
//        alert(`Gio hang ban dang co ${cart}`)
//           let noiDungMuonUpdate = prompt("cuốn sách bạn muốn thay thay đổi:");

//           if( bookStore.indexOf(noiDungMuonUpdate) !== -1){
//               cart[0] = noiDungMuonUpdate;
//               alert("Bạn đã thêm thành công 1 cuốn sách vào giỏ hàng");
//               alert(cart);
//           }else{
//               alert( "We don't have that item");    
//           }
//       prompt("2. Xoa don hang \n 3.quay lai");

//     case "2":
//         alert(`Gio hang ban dang co ${cart}`)
//         let noiDungBanMuonDelete = prompt("cuốn sách bạn muốn xóa:");
//         if( cart.indexOf(noiDungBanMuonDelete) !== -1){
//             cart.splice([noiDungBanMuonDelete],1);
//             let sauKhiXoa = cart
//                 alert("Gio hang hien tai cua ban:",sauKhiXoa);
//         }else{
//             alert( "We don't have that item");    
//         }

//         prompt(" 3.Thoat"); 
//     case "3":
//         alert( "Cam on ban da su dung dich vu !");
//         break;
//     }





    // prompt("1. Update don hang \n 2.Xoa don hang \n 3.quay lai");
        
//     case"2":
//     let banMuonMuaGi= prompt("Mời bạn nhập món muốn mua");
    

//     if(cart.indexOf(banMuonMuaGi)!== 0 ){
//       let index1=0;
//       const cart1 = ['',index1];
//     for(i = 0; i < 50; i++){
     
//         if(banMuonMuaGi== "chocolate"){
//         cart1[0,2] = banMuonMuaGi;      
//         cart1[1]= +index1; 

//     }
        
//         alert("Mua thêm:"+cart,cart1);
        
//       break;
//     }       
//     let a = prompt("Bạn có muốn tiếp tục mua hàng hay không(Yes/No)");
//     if( a == "yes" ){
//       moiBanNhapVaoLanNua = prompt ("Mời bạn nhập cuốn sách muốn mua");
//      for(i = 0; i < 50; i++){
//         cart1[3]= ++index1;
//         alert(cart);
//         let b = prompt("Bạn có muốn tiếp tục mua hàng hay không(Yes/No)");
//         if(b == "no"){
//             alert("Thank you for buying");
//             break;
//         }
//         let= moiBanNhapVaoLanNua1 =  prompt ("Mời bạn nhập món muốn mua");
//      }  
//     }
//     else {
//         alert("Thank you for buying");
//     }      
//   }
//     let trangchu1 = prompt("1. Kiem tra don hang \n 2.Thoat");
//     if(trangchu1 =="1"){
//       prompt(`${cart} (Bấm 2 để thoat)`);
//     }
//     break;
//   case"3":
//   alert("Hẹn gặp lại !"); 
//   break;
// }
