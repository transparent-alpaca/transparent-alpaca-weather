window.addEventListener('load', () => {

  const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=e77db52f2da17d60e264bb2bf0f2fe37&units=imperial';

  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      document.getElementById('current-img').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
      document.getElementById('current-img').setAttribute('alt', jsObject.list[0].weather[0].description);
      document.getElementById('current-condition').textContent = jsObject.list[0].weather[0].main;
      document.getElementById('current-humidity').textContent = jsObject.list[0].main.humidity;
      document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;
      document.getElementById('current-windspeed').textContent = jsObject.list[0].wind.speed;

      const today = new Date()
      var todplus1 = new Date(today)
      todplus1.setDate(todplus1.getDate() + 1);
      var todplus2 = new Date(today)
      todplus2.setDate(todplus2.getDate() + 2);
      var todplus3 = new Date(today)
      todplus3.setDate(todplus3.getDate() + 3);
      var todplus4 = new Date(today)
      todplus4.setDate(todplus4.getDate() + 4);
      var todplus5 = new Date(today)
      todplus5.setDate(todplus5.getDate() + 5);

      for (var i = 0; i < jsObject.list.length; i++) {
        if (jsObject.list[i].dt_txt.includes((todplus1.toLocaleString("en-CA").substring(0, 10)) + " 18:00:00")) {
          document.getElementById('todayplus1condition').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
          document.getElementById('todayplus1temp').textContent = jsObject.list[i].main.temp;
        } else if (jsObject.list[i].dt_txt.includes((todplus2.toLocaleString("en-CA").substring(0, 10)) + " 18:00:00")) {
          document.getElementById('todayplus2condition').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
          document.getElementById('todayplus2temp').textContent = jsObject.list[i].main.temp;
        } else if (jsObject.list[i].dt_txt.includes((todplus3.toLocaleString("en-CA").substring(0, 10)) + " 18:00:00")) {
          document.getElementById('todayplus3condition').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
          document.getElementById('todayplus3temp').textContent = jsObject.list[i].main.temp;
        } else if (jsObject.list[i].dt_txt.includes((todplus4.toLocaleString("en-CA").substring(0, 10)) + " 18:00:00")) {
          document.getElementById('todayplus4condition').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
          document.getElementById('todayplus4temp').textContent = jsObject.list[i].main.temp;
        } else if (jsObject.list[i].dt_txt.includes((todplus5.toLocaleString("en-CA").substring(0, 10)) + " 18:00:00")) {
          document.getElementById('todayplus5condition').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
          document.getElementById('todayplus5temp').textContent = jsObject.list[i].main.temp;
        } else {}
      }

      console.log(jsObject);
    });

  let dayname = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  let d = new Date();
  if (d.getDay() == 0) {
    var todayplus1 = dayname[1];
    var todayplus2 = dayname[2];
    var todayplus3 = dayname[3];
    var todayplus4 = dayname[4];
    var todayplus5 = dayname[5];
  } else if (d.getDay() == 1) {
    var todayplus1 = dayname[2];
    var todayplus2 = dayname[3];
    var todayplus3 = dayname[4];
    var todayplus4 = dayname[5];
    var todayplus5 = dayname[6];
  } else if (d.getDay() == 2) {
    var todayplus1 = dayname[3];
    var todayplus2 = dayname[4];
    var todayplus3 = dayname[5];
    var todayplus4 = dayname[6];
    var todayplus5 = dayname[0];
  } else if (d.getDay() == 3) {
    var todayplus1 = dayname[4];
    var todayplus2 = dayname[5];
    var todayplus3 = dayname[6];
    var todayplus4 = dayname[0];
    var todayplus5 = dayname[1];
  } else if (d.getDay() == 4) {
    var todayplus1 = dayname[5];
    var todayplus2 = dayname[6];
    var todayplus3 = dayname[0];
    var todayplus4 = dayname[1];
    var todayplus5 = dayname[2];
  } else if (d.getDay() == 5) {
    var todayplus1 = dayname[6];
    var todayplus2 = dayname[0];
    var todayplus3 = dayname[1];
    var todayplus4 = dayname[2];
    var todayplus5 = dayname[3];
  } else if (d.getDay() == 6) {
    var todayplus1 = dayname[0];
    var todayplus2 = dayname[1];
    var todayplus3 = dayname[2];
    var todayplus4 = dayname[3];
    var todayplus5 = dayname[4];
  };
  document.getElementById('todayplus1').innerHTML = todayplus1;
  document.getElementById('todayplus2').innerHTML = todayplus2;
  document.getElementById('todayplus3').innerHTML = todayplus3;
  document.getElementById('todayplus4').innerHTML = todayplus4;
  document.getElementById('todayplus5').innerHTML = todayplus5;

  /**************************************************************/

  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const towns = jsonObject['towns'];

      let sodaspringsevents = document.createElement('section');
      sodaspringsevents.classList.add('classsodaspringsevents');

      let sodaspringsevent1 = document.createElement('p');
      sodaspringsevent1.textContent = towns[0].events[0];
      let sodaspringsevent2 = document.createElement('p');
      sodaspringsevent2.textContent = towns[0].events[1];
      let sodaspringsevent3 = document.createElement('p');
      sodaspringsevent3.textContent = towns[0].events[2];

      sodaspringsevents.appendChild(sodaspringsevent1);
      sodaspringsevents.appendChild(sodaspringsevent2);
      sodaspringsevents.appendChild(sodaspringsevent3);
      document.querySelector('div.sodaspringsevents').appendChild(sodaspringsevents);

    });

});