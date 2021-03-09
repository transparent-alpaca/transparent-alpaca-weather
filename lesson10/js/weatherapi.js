const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e77db52f2da17d60e264bb2bf0f2fe37&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);


        document.getElementById('current-temp').textContent=jsObject.main.temp;

    console.log(jsObject);

        




  });