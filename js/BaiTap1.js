/**
 * Khối 1 Input
 * Day
 * 
 * Khối 2 Xử lý
 * B1 : Khai báo biến thẻ input,,output
 * B2 : Gắn xự kiện click cho Button, gán giá trị cjo biến input
 * B3 : Xây dựng hàm với công thức : Monney = Day * 100.000 
 * 
 * Khối 3 OUTPUT
 * Hiển thị tiền lương nhận đc trên UI
 * Monney
 */


var Monney,Day;
document.getElementById("button__HW1").onclick =function(){
    Day = document.getElementById("Day__HW1").value;
    Monney = Number(Day) *100000;
    document.getElementById("Monney__HW1").innerHTML = Monney + "đ";
    document.getElementById("Monney__HW1").style.display = "block";
    document.getElementById("OUTPUT__textHW1").style.display = "block";
}