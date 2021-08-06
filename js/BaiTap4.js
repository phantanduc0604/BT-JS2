/**
 * Khối 1 Input
 * Chiều dài,Chiều rộng
 * 
 * Khối 2 Xử lý
 * B1 : Khai báo biến thẻ input,,output
 * B2 : Gắn xự kiện click cho Button, gán giá trị cho biến input
 * B3 : Xây dựng hàm với công thức : 
 *  Chu vi : (Chiều dài + Chiều rộng) * 2
 *  Diện tích : Chiều dài * Chiều rộng
 * Khối 3 OUTPUT
 * Hiển thị tiền lương nhận đc trên UI
 * Chu vi, Diện tích
 */


 var Long, Short, CV, DT;
 document.getElementById("button__HW4").onclick =function(){
    Long = document.getElementById("Long__HW4").value;
    Short = document.getElementById("Short__HW4").value;
     CV = (Number(Long) + Number(Short)) * 2;
     DT = Number(Long) * Number(Short);
     document.getElementById("CV__HW4").innerHTML = CV;
     document.getElementById("DT__HW4").innerHTML = DT;
     document.getElementById("CV__HW4").style.display = "block";
     document.getElementById("DT__HW4").style.display = "block";
     document.getElementById("OUTPUT__textHW4").style.display = "block";
 }