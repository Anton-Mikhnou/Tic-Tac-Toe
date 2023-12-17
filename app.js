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
            changeTurn()
            printActivePlayer();
        } else {
            return;
        }
    }
    pushInArray()

    return {
        gamePlace,
        pushInArray,
        getActivePlayer,
    };
}

const games = gameControl();

function  screenControl() {
    // const gridBoard = document.querySelector('.gridBoard');
    function addToken() {
        for (let i = 0; i < games.gamePlace.length; i++) {
            if (games.gamePlace[i] !== '') {
                // gridBoard.innerHTML = '';
                item.textContent = games.gamePlace[i];
            }
        }   
    }
    addToken()
    return {
        addToken,
    }
}

function createGrid () {
    const gridBoard = document.querySelector('.gridBoard');
    const row = 3;
    const column = 3;

    function createGridElement() {
        for( let i = 0; i < row*column; i++) {
            gridDiv = document.createElement('div');
            gridDiv.classList.add('item');
            gridDiv.id = i;
            gridBoard.appendChild(gridDiv);
        }
    }
    createGridElement();

    return {
        createGridElement,
    }
}
createGrid()


const item = document.querySelectorAll('.item');
item.forEach((item, index) => {
    item.addEventListener('click', () => {
        games.pushInArray(index);
        screenControl()
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


