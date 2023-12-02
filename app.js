const gamePlace = {
    game: [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
}

const userOneInfo = {};
const userTwoInfo = {};

function createUsers (name) {
    return {
        name,
    };
}

function addNameInObj() {
    const userOne = document.getElementById('userOne');
    const nameUserOne = createUsers(userOne.value);
    userOneInfo.name = nameUserOne.name;
    
    const userTwo = document.getElementById('userTwo');
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

function fillAnObject(item) {
    // strokeChange();
    let arr = gamePlace.game;
    for (let i = 0; i < arr.length; i++) {
        if (strokeChange() % 2 === 0) {
            arr.splice(item.id, 1, 'O');
            item.textContent = 'O';
        } else {
            arr.splice(item.id, 1, 'x')
            item.textContent = 'X';
        }
    }
}

item.forEach((item) => {
    item.addEventListener('click', () => {
        // console.log('value:',strokeChange());
        fillAnObject(item);
        console.log(gamePlace);
    })
})