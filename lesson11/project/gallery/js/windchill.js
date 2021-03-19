function calculateWC(){
      
    var tempF = parseFloat(document.getElementById('tempF').innerHTML);
    var speed = parseFloat(document.getElementById('speed').innerHTML);
    var wc1 = windChill(tempF, speed);

    if (tempF <= 50 && speed >= 3){        
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
  }
