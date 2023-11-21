const GameBord = {
    game: [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
} 

const namePlayerOne = document.querySelector('#playerOne');
const namePlayerTwo = document.querySelector('#playerTwo');

function usersCreate (name, shose) {
    return {name, shose}
}

const buttonZero = document.querySelectorAll('.zero');
buttonZero.forEach((button) => {
    button.addEventListener('click', () => {
        const shose1 = button.textContent;
        usersCreate(name, shose1);
        console.log(usersCreate(name, shose1))
    })
})

const buttonX = document.querySelectorAll('.cross');
buttonX.forEach((button) => {
    button.addEventListener('click', () => {
        // const shose1 = button.textContent;
        // usersCreate(name, shose1);
        // console.log(usersCreate(name, shose1))
    })
})

const formOne = document.getElementById('formOne');

function addValueToUser() {
    
}

formOne.addEventListener('submit', (e) => {
    e.preventDefault();
    // const nameOne = namePlayerOne.Value;
    // let chose1 = 1;
    usersCreate(nameOne, shose1)
    console.log(usersCreate(nameOne, shose1))
})



// usersCreate.getFromDom('.zero')


// let person1 = users('Jhon', 'x');
// let person2 = users('Jhon2', '0');
// person1.info();
// person2.info();