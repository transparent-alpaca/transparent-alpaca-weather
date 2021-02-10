//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var pos = 0; 
   //our box element
   var box = document.getElementById('box');
   var t = setInterval(move, 10);
 
   function move() {
       if(pos >= 150) {
           clearInterval(t);
       }
       else {
           pos += 1;
           box.style.left = pos+'px';
       }
   }
};
/*****************************************************/

window.onload = function() {
    var x = document.getElementById('demo');
    x.onclick = function () {
        document.getElementById('here').innerHTML = Date();
    }
};
/*****************************************************/
function change() {
    var x = document.getElementById('name');
    x.value = x.value.toUpperCase();
}
/*****************************************************/

var images = [
    'http://www.sololearn.com/uploads/slider/1.jpg', 
    'http://www.sololearn.com/uploads/slider/2.jpg', 
    'http://www.sololearn.com/uploads/slider/3.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
/*****************************************************/
function validate() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    if(n1.value != '' && n2.value != '') {
        if(n1.value == n2.value) {
            return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
}