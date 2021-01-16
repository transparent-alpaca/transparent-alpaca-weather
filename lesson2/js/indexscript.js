function getYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
}

function getLastModified() {
    var lm = document.lastModified    
    document.getElementById("lastupdated").innerHTML = lm;
}

function start() {
    getYear();
    getLastModified();
}