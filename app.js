const gameBoard = {
    game: [
        '', '', '',
        '', '', '',
        '', '', '',
    ]
}

function setPlayerName () {
    const playerNameOne = document.getElementById('userOne').value;
    const playerNameTwo = document.getElementById('userTwo').value;
    return {
        playerNameOne,
        playerNameTwo,
    }
}

function createPlayers () {
    const playerNameOne = document.getElementById('userOne');
    const playerNameTwo = document.getElementById('userTwo');
    return players = [
        {
            name: playerNameOne.value,
            token: '1',
        },
        {
            name: playerNameTwo.value,
            token: '2',
        }
    ]

}

let activePlayer = players[0];

function indentifyTurn () {
    if (activePlayer === players[0]) {
        return players[1];
    } else {
        return players[0];
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

const item = document.querySelectorAll('item');
item.forEach((item) => {{
    item.addEventListener('click', () => {
        indentifyTurn();
        pushInObject();
    })
}})

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(createPlayers());
})