const gameBoard = {
    board: [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
}

function createUser () {
    const playerOne = document.getElementById('userOne').value;
    const playerTwo = document.getElementById('userTwo').value;

    const players = [
        {
            name: playerOne,
            token: 'x',
        },
        {
            name: playerTwo,
            token: 'o',
        }
    ];

    return {
        players,
    }
}

const item = document.querySelectorAll('.item');

function gameControl () {

    const user = createUser();

    let activePlayer = user.players[0];

    const changeTurn = () => {
        if (activePlayer === user.players[0]) {
            activePlayer = user.players[1];
        } else {
            activePlayer = user.players[0];
        }
    }

    // changeTurn();
    
    const getActivePlayer = () => activePlayer;

    const playerOneName = document.getElementById('userNameOne');
    const playerTwoName = document.getElementById('userNameTwo');
    playerOneName.textContent = user.players[0].name;
    playerTwoName.textContent = user.players[1].name;

    function printActivePlayer () {
        if (getActivePlayer() === user.players[0]) {
            playerOneName.classList.add('activePlayer');
            playerTwoName.classList.remove('activePlayer');
        } else {
            playerTwoName.classList.add('activePlayer');
            playerOneName.classList.remove('activePlayer');
        }
    }

    const gamePlace = gameBoard.board;
    function pushInArray (index) {
        if (gamePlace[index] === '') {
            gamePlace.splice(index, 1, getActivePlayer().token);
            printActivePlayer();
        } else {
            return;
        }
    }
    pushInArray()

    return {
        gamePlace,
        printActivePlayer,
        pushInArray,
        changeTurn,
        getActivePlayer,
    };
}





const games = gameControl();

// const item = document.querySelectorAll('.item');
item.forEach((item, index) => {
    item.addEventListener('click', () => {
        games.changeTurn();
        games.printActivePlayer();
        games.pushInArray(index);
        console.log(`activePlayer: ${games.getActivePlayer().name}`);
        console.log(`activePlayer: ${games.getActivePlayer().token}`);
        console.log(games.gamePlace);
    })
}) 

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser();
    gameControl();
})
