/**
 * Khối 1 Input
 * Num1,Num2,Num3,Num4,Num5
 * 
 * Khối 2 Xử lý
 * B1 : Khai báo biến thẻ input,output
 * B2 : Gắn xự kiện click cho Button, gán giá trị cjo biến input
 * B3 : Xây dựng hàm với công thức : Average = (Num1 + Num2 + Num3 + Num4 + Num5)/5
 * 
 * Khối 3 OUTPUT
 * Hiển thị giá trị trung bình tổng 5 số trên UI
 * Average
 */

var Num1,Num2,Num3,Num4,Num5,Average;

document.getElementById("button__HW2").onclick =function(){
    console.log("day");
    Num1 = document.getElementById("Num1").value;
    Num2 = document.getElementById("Num2").value;
    Num3 = document.getElementById("Num3").value;
    Num4 = document.getElementById("Num4").value;
    Num5 = document.getElementById("Num5").value;

    Average = Number(Num1)+Number(Num2)+Number(Num3)+Number(Num4)+Number(Num5);
    console.log(Average);
    document.getElementById("Average__HW2").innerHTML = Average;
    document.getElementById("Average__HW2").style.display = "block";
    document.getElementById("OUTPUT__textHW2").style.display = "block";
}
