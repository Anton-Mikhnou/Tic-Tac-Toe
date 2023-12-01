gamePlace = {
    game: [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
}

// const userOne = document.getElementById('userOne');
// let userNameOne = document.getElementById('userNameOne');


function createUsers (name) {
    return {
        name,
    };
}

const submit = document.getElementById('formOne');

function addUserNameToBoard(){
    // const userOne = document.getElementById('userOne');
    const userOne = document.getElementById('userOne').value;
    const userTwo = document.getElementById('userTwo').value

    let userNameOne = document.getElementById('userNameOne');
    // userNameOne.textContent = nameOne;
    let userNameTwo = document.getElementById('userNmaetWO')
    // userNameTwo = nameTwo;
    const add = createUsers(`${userOne}`)
    const add2 = createUsers(`${userTwo}`)
    userNameOne = add;
    userNameTwo = add2;
}


submit.addEventListener('click', (e) => {
    e.preventDefault();
    addUserNameToBoard()
    // createUsers(e)
    console.log('user:', createUsers(e));
    console.log('name:', addUserNameToBoard(e));
})

// const add = createUsers("Anton")
// console.log(add)
