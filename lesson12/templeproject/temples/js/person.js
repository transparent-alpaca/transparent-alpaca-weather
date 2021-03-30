const requestURL = "https://www.ahfx.com/person.php";

fetch(requestURL)
  .then(response => { return response.json();})
  .then(jsonObject => {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const person = jsonObject['person'];

      let card = document.createElement('section');

      let h2 = document.createElement('h2');
      h2.textContent = person.personal.name;

      card.appendChild(h2);

      document.querySelector('div.cards').appendChild(card);

  });

const person = jsonObject['person'];