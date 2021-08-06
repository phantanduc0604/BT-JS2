/**
 * Khối 1 Input
 * Số có 2 chữ số
 * 
 * Khối 2 Xử lý
 * B1 : Khai báo biến thẻ input,,output
 * B2 : Gắn xự kiện click cho Button, gán giá trị cho biến input
 * B3 : Xây dựng hàm với công thức : 
 * Sum = Num/10 + Num%10 
 * 
 * Khối 3 OUTPUT
 * Hiển thị tiền lương nhận đc trên UI
 * Sum
 */


 var Num, Sum;
 document.getElementById("button__HW5").onclick =function(){
     Num = document.getElementById("Number").value;
     Sum = Math.floor(Number(Num)/10) + Number(Num)%10 ;
     document.getElementById("Sum__HW5").innerHTML = Sum;
     document.getElementById("Sum__HW5").style.display = "block";
     document.getElementById("OUTPUT__textHW5").style.display = "block";
 }