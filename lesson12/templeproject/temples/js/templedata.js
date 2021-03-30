window.addEventListener('load', () => {
    const requestURL = "js/templedata.json"
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key, temple]) => {
                buildTempleCard(temple);
            });
        });
});

function buildTempleCard(temple) {
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("templecard");
    
    card.innerHTML = `<h2>${temple.name}</h2>
                          <img src="${temple.imageurl}" alt="${temple.name}">
                          <p>Address:<br><b>${temple.address1}<br>${temple.city}, ${temple.state} ${temple.zip}</b></p>
                          <p>Telephone:<br><b>${temple.phone}</b>
                          <p>Services:<br><b>${temple.services[0]}<br>${temple.services[1]}<br>${temple.services[2]}<br>${temple.services[3]}</p>
                          
                          <h3 class="hero-title">Weather</h3>
                          <img src="" class="frcstimg1" id="current-img${temple.id}"></p>
                          <p>Current Weather: <strong><span id="current-condition${temple.id}"></span></strong></p>
                          <p>Temperature: <strong><span id="current-temp${temple.id}"></span>&#176; F</strong></p>

                          `;
    document.querySelector("#temples").appendChild(card);
}

window.addEventListener('load', () => {

    const newyork = 'https://api.openweathermap.org/data/2.5/forecast?id=5128581&appid=e77db52f2da17d60e264bb2bf0f2fe37&units=imperial';
  
    fetch(newyork)
      .then((response) => response.json())
      .then((jsObject) => {
        document.getElementById('current-img1').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
        document.getElementById('current-img1').setAttribute('alt', jsObject.list[0].weather[0].description);
        document.getElementById('current-condition1').textContent = jsObject.list[0].weather[0].main;
        document.getElementById('current-temp1').textContent = jsObject.list[0].main.temp;
        console.log(jsObject);
    });

    const chicago = 'https://api.openweathermap.org/data/2.5/forecast?id=4887398&appid=e77db52f2da17d60e264bb2bf0f2fe37&units=imperial';
  
    fetch(chicago)
      .then((response) => response.json())
      .then((jsObject) => {
        document.getElementById('current-img2').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
        document.getElementById('current-img2').setAttribute('alt', jsObject.list[0].weather[0].description);
        document.getElementById('current-condition2').textContent = jsObject.list[0].weather[0].main;
        document.getElementById('current-temp2').textContent = jsObject.list[0].main.temp;
        console.log(jsObject);
    });

    const lasvegas = 'https://api.openweathermap.org/data/2.5/forecast?id=5506956&appid=e77db52f2da17d60e264bb2bf0f2fe37&units=imperial';
  
    fetch(lasvegas)
      .then((response) => response.json())
      .then((jsObject) => {
        document.getElementById('current-img3').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
        document.getElementById('current-img3').setAttribute('alt', jsObject.list[0].weather[0].description);
        document.getElementById('current-condition3').textContent = jsObject.list[0].weather[0].main;
        document.getElementById('current-temp3').textContent = jsObject.list[0].main.temp;
        console.log(jsObject);
    });

    const losangeles = 'https://api.openweathermap.org/data/2.5/forecast?id=5368361&appid=e77db52f2da17d60e264bb2bf0f2fe37&units=imperial';
  
    fetch(losangeles)
      .then((response) => response.json())
      .then((jsObject) => {
        document.getElementById('current-img4').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
        document.getElementById('current-img4').setAttribute('alt', jsObject.list[0].weather[0].description);
        document.getElementById('current-condition4').textContent = jsObject.list[0].weather[0].main;
        document.getElementById('current-temp4').textContent = jsObject.list[0].main.temp;
        console.log(jsObject);
    });

});