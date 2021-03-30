function getYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
}

function getLastModified() {
    var lm = document.lastModified
    document.getElementById("lastupdated").innerHTML = lm;
}

function getCurrentDay() {
  let dayname = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nomberber",
    "December",
];
let d = new Date();
let dName = dayname[d.getDay()];
let dMonth = months[d.getMonth()];
let fulldate = dName + ", " + d.getDate() + " " + dMonth + " " + d.getFullYear();
document.getElementById("currentdate").innerHTML = fulldate;

/*if (dName == 'Friday'){
  document.getElementById('pancake').style.display = "block";
} else {
  document.getElementById('pancake').style.display = "none";
}*/

}

function start() {
    getYear();    
    getCurrentDay();
}

