const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e77db52f2da17d60e264bb2bf0f2fe37&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {


        document.getElementById('current-temp').textContent=jsObject.list[0].main.temp;

    console.log(jsObject);

        




  });