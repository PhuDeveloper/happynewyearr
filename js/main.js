// var ngay = document.querySelector('.item__ngay')




var ngay = document.querySelector('.item__ngay');
var gio = document.querySelector('.item__gio')
var phut = document.querySelector('.item__phut')
var giay = document.querySelector('.item__giay')
var ngayD = document.querySelectorAll('.content__item');
var overTime = document.querySelector('.overTime');

var list = document.querySelector('.listItem')
var tet = new Date("Jan 31,2022 24:00:00").getTime();
//Tổng số giây 
var countDown = setInterval(run, 1000);
function run() {

    var now = new Date().getTime();
    //Số s đến thời gian hiện tại
    var timeRest = tet - now;
    //Số s còn lại để đến tết;
    var day = Math.floor(timeRest / (1000 * 60 * 60 * 24));
    //Số ngày còn lại
    var hours = Math.floor(timeRest % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // Số giờ còn lại
    var minute = Math.floor(timeRest % (1000 * 60 * 60) / (1000 * 60));
    // Số phút còn lại
    var sec = Math.floor(timeRest % (1000 * 60) / (1000));
    // Số giây còn lại
    ngay.innerHTML = day
    gio.innerHTML = hours
    phut.innerHTML = minute
    giay.innerHTML = sec
   
    console.log(timeRest)
    
    if (timeRest <= 0) {
        clearInterval(countDown);
        overTime.style.display="block"
        ngayD[0].style.display = "none";
        ngayD[1].style.display = "none";
        ngayD[2].style.display = "none";
        ngayD[3].style.display = "none";
       
    }
}
