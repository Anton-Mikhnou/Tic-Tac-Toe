const gamePlace = {
    game: [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
}

const userOneInfo = {};
const userTwoInfo = {};

function createUsers (name, token) {
    return {
        name,
        token,
    };
}

function addNameInObj() {
    const userOne = document.getElementById('userOne');
    const nameUserOne = createUsers(userOne.value, '1');
    userOneInfo.name = nameUserOne.name;
    
    const userTwo = document.getElementById('userTwo', '2');
    const nameUserTwo = createUsers(userTwo.value);
    userTwoInfo.name = nameUserTwo.name;
}

function addNameToPage() {
    const userNameOne = document.getElementById('userNameOne');
    userNameOne.textContent = userOneInfo.name;

    const userNameTwo = document.getElementById('userNameTwo');
    userNameTwo.textContent = userTwoInfo.name;
}

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addNameInObj();
    addNameToPage();
    console.log(userOneInfo)
    console.log(userTwoInfo)
})

let Counter = (function () {
    let count = 0;

    function changBy(val) {
        count += val;
    }

    return {
        add: function() {
            changBy(1);
        },

        value: function() {
           return count;
        },
    };
})();

function strokeChange() {
    Counter.add();
    return Counter.value();
} 

const item = document.querySelectorAll('.item');

function fillAnObject (item) {
    const arr = gamePlace.game;
    // const newArr = arr.filter((arri) => arri === '');
    for (let i = 0; i < arr.length; i++) {
        // if (strokeChange() % 2 === 0) {
        //     newArr.splice(item.id, 1, 'o');
        //     newArr.addSign()
        // } else {
        //     newArr.splice(item.id, 1, 'x');
        // }
        if (strokeChange() % 2 === 0) {
            arr.splice(item.id, 1, 'o');
            // arr.addSign()
        } else {
            arr.splice(item.id, 1, 'x');
        }
    }
}

const players = [

]

// function addToDom() {
//     const gemeBoard = gamePlace.game;
//     const newGameBoard = gameBoard.map()
// }

function addZeroOrCross (item) {
    const arr = gamePlace.game;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x'){
            item.textContent = 'x';
        } else if (arr[i] === 'o') {
            item.textContent = 'o';
        }
    }
}

item.forEach((item) => {
    item.addEventListener('click', () => {
        // console.log('value:',strokeChange());
        fillAnObject(item);
        console.log(gamePlace);
        addZeroOrCross(item);
    })
})
