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

function fillAnObject() {
    let arr = gamePlace.game;
    for (let i = 0; i < arr.length -1; i++) {
        // if (arr[i] == item.id){
        //     arr.splice(1, 1, '1');
        // }
        arr.splice(arr[i], 1, '1')
    }
    // for( let i = 0; i<)
}

item.forEach((item) => {
    item.addEventListener('click', () => {
        console.log('value:',strokeChange());
        fillAnObject();
        console.log(gamePlace);
    })
})