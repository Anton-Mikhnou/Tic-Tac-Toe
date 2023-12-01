const gamePlace = {
    game: [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
}

const userOneInfo = {}
const userTwoInfo = {}

function createUsers (name) {
    return {
        name,
    };
}

function addNameInObj(){
    const userOne = document.getElementById('userOne');
    const nameUserOne = createUsers(userOne.value);

    userOneInfo.name = nameUserOne.name;

    const userNameOne = document.getElementById('userNameOne');
    userNameOne.textContent = nameUserOne.name;

    const userTwo = document.getElementById('userTwo');
    const nameUserTwo = createUsers(userTwo.value);

    userTwoInfo.name = nameUserTwo.name;

    const userNameTwo = document.getElementById('userNameTwo');
    userNameTwo.textContent = nameUserTwo.name;
}

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addNameInObj();
    console.log(userOneInfo)
    console.log(userTwoInfo)
})
