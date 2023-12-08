const gameBoard = {
    game: [
        '', '', '',
        '', '', '',
        '', '', '',
    ]
}



function gameControl () {
    const item = document.querySelectorAll('item');
    const playerNameOne = document.getElementById('userOne');
    const playerNameTwo = document.getElementById('userTwo');
    const players = [
        {
            name: playerNameOne.value,
            token: '1',
        },
        {
            name: playerNameTwo.value,
            token: '2',
        }
    ]

    let activePlayer = players[0];

    function indentifyTurn () {
        if (activePlayer === players[0]) {
            return players[1];
        } else {
            return players[0];
        }
    }

    const userNameOne = document.getElementById('userNameOne');
    const userNameTwo = document.getElementById('userNameTwo');

    userNameOne.textContent = players[0].name;
    userNameTwo.textContent = players[1].name;

    const getActivePlayer = () => activePlayer;
    
    const addMarker = () => {
        if(getActivePlayer === players[0]){
            userNameTwo.classList.remove('activePlayer');
            userNameOne.classList.add('activePlayer');
        } else {
            userNameOne.classList.remove('activePlayer');
            userNameTwo.classList.add('activePlayer');
        }
    }

    
    function pushInObject (item) {
        const place = gameBoard.game;
        for (let i = 0; i < place.length; i++) {
            if (place[i] === item.id) {
                place.splice(1, 1, activePlayer.token);
            }
        }
    }

    item.forEach((item) => {{
        item.addEventListener('click', () => {
            gameControl();
            pushInObject();
        })
    }})

    return {
        indentifyTurn,
        pushInObject,
        addMarker,
    }

}

// const item = document.querySelectorAll('item');
// item.forEach((item) => {{
//     item.addEventListener('click', () => {
//         gameControl();
//         pushInObject();
//     })
// }})

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(gameControl());
})