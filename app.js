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

    return {
        gamePlace,
        printActivePlayer,
        pushInArray,
        getActivePlayer,
    };
}

function winnerDetection () {
    const game = gameBoard.board;
    const user = createUser(); 
    let tokenPlayerOne = 'x';
    let tokenPlayerTwo = 'o';
    
    // function returnWinner () {
    //     for (let i = 0; i < game.length; i += 3) {
    //         const newGame = game.slice(i, i + 3);
    //         if (newGame[i] === newGame[i+1] && newGame[i] === newGame[i+2]) {
    //             if ( game[i] === tokenPlayerOne) { 
    //                 return user.players[0].name;
    //             } else if (game[i] === tokenPlayerTwo) {
    //                 return user.players[1].name;
    //             }
    //         }
    //     }

    //     for (let i = 0; i < game.length; i++) {
    //         if (game[i] === game[i+3] && game[i] === game[i+6]) {
    //             if ( game[i] === tokenPlayerOne) {
    //                 return user.players[0].name;
    //             } else if ( game[i] === tokenPlayerTwo) {
    //                 return user.players[1].name;
    //             }
    //         } 
    //     }

    //     if ((game[0] === game[4] && game[0] === game[8]) || (game[2] === game[4] && game[2] === game[6])) {
    //         if ( (game[0] === tokenPlayerOne && game[4] === tokenPlayerOne && game[8] === tokenPlayerOne)  || (game[2] === tokenPlayerOne &&  game[4] === tokenPlayerOne &&  game[6] === tokenPlayerOne)) {
    //             return user.players[0].name;
    //         } else if ((game[0] === tokenPlayerTwo && game[4] === tokenPlayerTwo && game[8] === tokenPlayerTwo)  || (game[2] === tokenPlayerTwo &&  game[4] === tokenPlayerTwo &&  game[6] === tokenPlayerTwo)) {
    //             return user.players[1].name;
    //         }
    //     } 
    //     return 'draw';
    // }
    function returnWinner() {
        // Проверка по горизонтали
        for (let i = 0; i < game.length; i += 3) {
            if (game[i] === game[i + 1] && game[i] === game[i + 2]) {
                if (game[i] === tokenPlayerOne) {
                    return user.players[0].name;
                } else if (game[i] === tokenPlayerTwo) {
                    return user.players[1].name;
                }
            }
        }
    
        // Проверка по вертикали
        for (let i = 0; i < 3; i++) {
            if (game[i] === game[i + 3] && game[i] === game[i + 6]) {
                if (game[i] === tokenPlayerOne) {
                    return user.players[0].name;
                } else if (game[i] === tokenPlayerTwo) {
                    return user.players[1].name;
                }
            }
        }
    
        // Проверка по диагоналям
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

// function addWinnerSyle () {
//     const winnerDet = winnerDetection()
//     const game = gameControl();
//     const playerOne = game.playerOneName;
//     const playerTwo = game.playerTwoName;
//     if (winnerDet.returnWinner === 'Nobody') {
//         playerOne.classList.remove('activePlayer');
//         playerTwo.classList.remove('activePlayer');
//         playerOne.classList.add('draw');
//         playerTwo.classList.add('draw');
//     }
// }



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
        const winnerDet = winnerDetection();
        const game = gameControl();
        const playerOne = game.playerOneName;
        const playerTwo = game.playerTwoName;
        const winner = winnerDet.returnWinner();

        if (winner !== undefined) {
            if (winner === users.players[0].name) {
                playerOne.classList.remove('activePlayer');
                playerOne.classList.add('winner');
            } else if (winner === users.players[1].name) {
                playerTwo.classList.remove('activePlayer');
                playerTwo.classList.add('winner');
            }
        } else {
            playerOne.classList.remove('activePlayer');
            playerTwo.classList.remove('activePlayer');
            playerOne.classList.add('draw');
            playerTwo.classList.add('draw');
        }
    }

    const item = document.querySelectorAll('.item');

    item.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            games.pushInArray(index);
            addTexToItem(event);
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
        const winnerDet = winnerDetection();
        console.log(winnerDet.returnWinner());
        addWinnerStyle(users);
    })

    return {
        addWinnerStyle,
    }

}

screen();