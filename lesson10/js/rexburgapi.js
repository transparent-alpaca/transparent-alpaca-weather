const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5605242&appid=e77db52f2da17d60e264bb2bf0f2fe37&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

        document.getElementById('city').textContent=jsObject.city.name;

        document.getElementById('current-img').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
        document.getElementById('current-img').setAttribute('alt', jsObject.list[0].weather[0].description);
        document.getElementById('current-weather').textContent=jsObject.list[0].weather[0].main;
        document.getElementById('current-temp').textContent=jsObject.list[0].main.temp;

        document.getElementById('tomorrow-img').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[7].weather[0].icon + '.png');
        document.getElementById('tomorrow-img').setAttribute('alt', jsObject.list[7].weather[0].description);
        document.getElementById('tomorrow-temp').textContent=jsObject.list[7].main.temp;
        document.getElementById('tomorrow-weather').textContent=jsObject.list[7].weather[0].main;

        document.getElementById('dayafter-tomorrow-img').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[15].weather[0].icon + '.png');
        document.getElementById('dayafter-tomorrow-img').setAttribute('alt', jsObject.list[15].weather[0].description);
        document.getElementById('dayafter-tomorrow-temp').textContent=jsObject.list[15].main.temp;
        document.getElementById('dayafter-tomorrow-weather').textContent=jsObject.list[15].weather[0].main;
        
        

    console.log(jsObject);
     

  });