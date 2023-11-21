const GameBord = {
    game: [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
} 

function createUser(name) {
    return{ name }
}

const formOne = document.getElementById('formOne');
const formTwo = document.getElementById('formTwo')



formOne.addEventListener('submit', (e) => {
    e.preventDefault();
    const namePerson = document.getElementById('name1').value;
    createUser(namePerson);
    console.log('1', createUser(namePerson))
    formOne.reset();
})

formTwo.addEventListener('submit', (e) => {
    e.preventDefault();
    const namePerson = document.getElementById('name2').value;
    createUser(namePerson);
    console.log('2',createUser(namePerson));
    formTwo.reset()
})