/*function calculateWC(){
      
    var tempF = parseFloat(document.getElementById('current-temp').innerHTML);
    var speed = parseFloat(document.getElementById('current-windspeed').innerHTML);
    var wc1 = windChill(tempF, speed);

    if (tempF != 0 || speed != 0){//(tempF <= 50 && speed >= 3){        
        document.getElementById('output1').innerHTML = (wc1.toFixed(2) + "&#176; F");
    } else {
        document.getElementById('output1').innerHTML = "N/A";
    }
  }
  
  function windChill(tempF, speed){
  
      var wc = 35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed,0.16))) + (0.4275 * tempF * Math.pow(speed,0.16))
      return wc;
  }
  
  function displayWC() {
      calculateWC();
      windChill(tempF, speed);
  }*/

function windChill(){

    /*var tempF = parseFloat(document.getElementById('current-temp').innerHTML);
    var speed = parseFloat(document.getElementById('current-windspeed').innerHTML);*/

    var tempF = document.getElementById('current-temp').innerHTML;
    var speed = document.getElementById('current-windspeed').innerHTML;

    var tempF1 = parseFloat(tempF);
    var speed1 = parseFloat(speed);

    if (tempF1 <= 50 && speed1 >= 3){

        var wc = (35.74 + (0.6215 * tempF1) - (35.75 * (Math.pow(speed1, 0.16))) + (0.4275 * tempF1 * Math.pow(speed1, 0.16)));

        document.getElementById('output1').innerHTML = (wc.toFixed(2) + "&#176; F");

    } else {
        document.getElementById('output1').innerHTML = "N/A";
    }

    console.log("Temperature is: " + tempF);
    console.log("Windspeed is: " + speed);

    console.log("PARSED Temperature is: " + tempF1);
    console.log("PARSED Windspeed is: " + speed1);
    
    console.log("Wind Chill SHOULD BE : " + wc);
}