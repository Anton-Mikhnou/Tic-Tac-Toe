const gameBoard = {
    board: [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
}

function createUser () {
    const playerOne = document.getElementById('userOne');
    const playerTwo = document.getElementById('userTwo');

    const playerOneValue = playerOne.value;
    const playerTwoValue = playerTwo.value;

    const players = [
        {
            name: playerOneValue,
            token: 'x',
        },
        {
            name: playerTwoValue,
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
    
    const getActivePlayer = () => activePlayer;

    const playerOneName = document.getElementById('userNameOne');
    const playerTwoName = document.getElementById('userNameTwo');
    playerOneName.textContent = user.players[0].name;
    playerTwoName.textContent = user.players[1].name;

    function printActivePlayer () {                          //================================?
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

    return {
        gamePlace,
        printActivePlayer,
        pushInArray,
        getActivePlayer,
        playerOneName,
        playerTwoName,
    };
}

function winnerDetection () {
    const game = gameBoard.board;
    const user = createUser(); 
    let tokenPlayerOne = 'x';
    let tokenPlayerTwo = 'o';
    
    function returnWinner() {
        for (let i = 0; i < game.length; i += 3) {
            if (game[i] === game[i + 1] && game[i] === game[i + 2]) {
                if (game[i] === tokenPlayerOne) {
                    return user.players[0].name;
                } else if (game[i] === tokenPlayerTwo) {
                    return user.players[1].name;
                }
            }
        }
    
        for (let i = 0; i < 3; i++) {
            if (game[i] === game[i + 3] && game[i] === game[i + 6]) {
                if (game[i] === tokenPlayerOne) {
                    return user.players[0].name;
                } else if (game[i] === tokenPlayerTwo) {
                    return user.players[1].name;
                }
            }
        }
    
        if ((game[0] === game[4] && game[0] === game[8]) || (game[2] === game[4] && game[2] === game[6])) {
            if (game[4] === tokenPlayerOne) {
                return user.players[0].name;
            } else if (game[4] === tokenPlayerTwo) {
                return user.players[1].name;
            }
        }

        return 'draw';
    }
    
    return {
       returnWinner,
    }
}

function screen () {
    const controlBoard = gameBoard.board;
    const users = createUser(); //=============================================
    // const user1 = createUser();
    const games = gameControl();

    const gridBoard = document.querySelector('.gridBoard');
    const row = 3;
    const column = 3;

    function createGridElements () {
        for( let i = 0; i < row*column; i++) {
            gridDiv = document.createElement('div');
            gridDiv.classList.add('item');
            gridDiv.id = i;
            gridBoard.appendChild(gridDiv);
        }
    }
    createGridElements();

    function addWinnerStyle () {
        const users = createUser();
        const winnerDet = winnerDetection();
        const winner = winnerDet.returnWinner();
        
        if (winner === users.players[0].name) {
            games.playerOneName.classList.remove('activePlayer');
            games.playerOneName.classList.add('winner');
            games.playerTwoName.classList.remove('activePlayer');
            games.playerTwoName.classList.add('draw');
        } else if (winner === users.players[1].name) {
            games.playerTwoName.classList.remove('activePlayer');
            games.playerTwoName.classList.add('winner');
            games.playerOneName.classList.remove('activePlayer');
            games.playerOneName.classList.add('draw');
        } else {
            games.playerOneName.classList.remove('activePlayer');
            games.playerTwoName.classList.remove('activePlayer');
            games.playerOneName.classList.add('draw');
            games.playerTwoName.classList.add('draw');
        }
    }

    const item = document.querySelectorAll('.item');

    item.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            games.pushInArray(index);
            addTexToItem(event);
            const winnerDet = winnerDetection();
            console.log(winnerDet.returnWinner());
            console.log(`activePlayer: ${games.getActivePlayer().name}`);
            console.log(games.gamePlace);
            console.log(gameBoard.board);
        })
    })

    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        createUser();
        gameControl();
        // console.log(createUser().players)
        // form.reset();
    })

    function addTexToItem (event) {
        const target = event.target;
        const index = target.id;
        target.textContent = controlBoard[index];
    }

    const playAgain = document.querySelector('.reset');

    playAgain.addEventListener('click', () => {
        addWinnerStyle();
        // const winnerDet = winnerDetection();
        // console.log(winnerDet.returnWinner());
        // addWinnerStyle(users);
    })

    return {
        addWinnerStyle,
    }

}

screen();