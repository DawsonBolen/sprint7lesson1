const url = 'https://jsonfakery.com/games/random/500';
const games = document.getElementById('games')

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();

    })
    .then(data => {



        data.forEach(game => {
            //important. I am going to make a new activity altogether at this point soon but there are innaporptiate games so include this if statement please
            if (game.esrb_rating === "Everyone") {
                let gameCard = document.createElement('div');
                gameCard.classList.add('game-card')
                gameCard.classList.add('card');

                gameCard.innerHTML = `

<div class='gc-img'>
  <img src="${game.background_image}" class="card-img-top" alt="...">
  </div
  <div class="card-body gc-body p-3">
    <h5 class="card-title">${game.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

`

                games.appendChild(gameCard)

            }

        })
    })
    .catch(err => {
        console.log(err)
    })

//     <div class='game-card-inner'>
// <div class='gc-img'>
// <img src='${game.background_image}'>
// </div>
// <h3>${game.name}</h3>
// </div>