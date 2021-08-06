/**
 * Khối 1 Input
 * USD
 * 
 * Khối 2 Xử lý
 * B1 : Khai báo biến thẻ input,,output
 * B2 : Gắn xự kiện click cho Button, gán giá trị cho biến input
 * B3 : Xây dựng hàm với công thức : VND = USD * 23.500
 * 
 * Khối 3 OUTPUT
 * Hiển thị tiền lương nhận đc trên UI
 * VND
 */


 var USD,VND;
 document.getElementById("button__HW3").onclick =function(){
     USD = document.getElementById("USD__HW3").value;
     VND = Number(USD) *23500;
     document.getElementById("VND__HW3").innerHTML = VND + "đ";
     document.getElementById("VND__HW3").style.display = "block";
     document.getElementById("OUTPUT__textHW3").style.display = "block";
 }