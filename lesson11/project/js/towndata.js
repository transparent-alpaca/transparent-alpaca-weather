const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        /**************************************************************/
        let prestoncard = document.createElement('section');
        prestoncard.classList.add('classprestontext');

        let prestonname = document.createElement('h2');
        let prestonmotto = document.createElement('h3');
        let prestonyear = document.createElement('p');
        let prestonpop = document.createElement('p');
        let prestonrain = document.createElement('p');

        prestonname.textContent = towns[6].name;
        prestonmotto.textContent = towns[6].motto;
        prestonyear.textContent = "Founded in: " + towns[6].yearFounded;
        prestonpop.textContent = "Population: " + towns[6].currentPopulation;
        prestonrain.textContent = "AVG Annual Rain Fall: " + towns[6].averageRainfall;
        
        prestoncard.appendChild(prestonname);
        prestoncard.appendChild(prestonmotto);
        prestoncard.appendChild(prestonyear);
        prestoncard.appendChild(prestonpop);
        prestoncard.appendChild(prestonrain);

        document.querySelector('div.prestoncard').appendChild(prestoncard);

        let prestonphotosection = document.createElement('section');
        prestonphotosection.classList.add('classprestonphoto');

        let prestonphoto = document.createElement('img');
        prestonphoto.setAttribute('src', 'images/' + towns[6].photo);
        prestonphotosection.appendChild(prestonphoto);
        document.querySelector('div.prestoncard').appendChild(prestonphotosection);

        /**************************************************************/
        let sodaspringscard = document.createElement('section');
        sodaspringscard.classList.add('classsodaspringstext');

        let sodaspringsname = document.createElement('h2');
        let sodaspringsmotto = document.createElement('h3');
        let sodaspringsyear = document.createElement('p');
        let sodaspringspop = document.createElement('p');
        let sodaspringsrain = document.createElement('p');

        sodaspringsname.textContent = towns[0].name;
        sodaspringsmotto.textContent = towns[0].motto;
        sodaspringsyear.textContent = "Founded in: " + towns[0].yearFounded;
        sodaspringspop.textContent = "Population: " + towns[0].currentPopulation;
        sodaspringsrain.textContent = "AVG Annual Rain Fall: " + towns[0].averageRainfall;
        
        sodaspringscard.appendChild(sodaspringsname);
        sodaspringscard.appendChild(sodaspringsmotto);
        sodaspringscard.appendChild(sodaspringsyear);
        sodaspringscard.appendChild(sodaspringspop);
        sodaspringscard.appendChild(sodaspringsrain);

        document.querySelector('div.sodaspringscard').appendChild(sodaspringscard);

        let sodaspringsphotosection = document.createElement('section');
        sodaspringsphotosection.classList.add('classsodaspringsphoto');

        let sodaspringsphoto = document.createElement('img');
        sodaspringsphoto.setAttribute('src', 'images/' + towns[0].photo);
        sodaspringsphotosection.appendChild(sodaspringsphoto);
        document.querySelector('div.sodaspringscard').appendChild(sodaspringsphotosection);

        /**************************************************************/
        let fishhavencard = document.createElement('section');
        fishhavencard.classList.add('classfishhaventext');

        let fishhavenname = document.createElement('h2');
        let fishhavenmotto = document.createElement('h3');
        let fishhavenyear = document.createElement('p');
        let fishhavenpop = document.createElement('p');
        let fishhavenrain = document.createElement('p');

        fishhavenname.textContent = towns[2].name;
        fishhavenmotto.textContent = towns[2].motto;
        fishhavenyear.textContent = "Founded in: " + towns[2].yearFounded;
        fishhavenpop.textContent = "Population: " + towns[2].currentPopulation;
        fishhavenrain.textContent = "AVG Annual Rain Fall: " + towns[2].averageRainfall;
        
        fishhavencard.appendChild(fishhavenname);
        fishhavencard.appendChild(fishhavenmotto);
        fishhavencard.appendChild(fishhavenyear);
        fishhavencard.appendChild(fishhavenpop);
        fishhavencard.appendChild(fishhavenrain);

        document.querySelector('div.fishhavencard').appendChild(fishhavencard);

        let fishhavenphotosection = document.createElement('section');
        fishhavenphotosection.classList.add('classfishhavenphoto');

        let fishhavenphoto = document.createElement('img');
        fishhavenphoto.setAttribute('src', 'images/' + towns[2].photo);
        fishhavenphotosection.appendChild(fishhavenphoto);
        document.querySelector('div.fishhavencard').appendChild(fishhavenphotosection);
    });