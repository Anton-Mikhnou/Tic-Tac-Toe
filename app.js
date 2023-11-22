const GameBord = {
    game: [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
} 

function createUser(id, html) {
    const namePerson = document.getElementById(id);
    const nameValue = namePerson.value;
    const htmlName = document.getElementById(html);
    htmlName.innerHTML = nameValue;
    return{ 
        nameValue,
        htmlName,
    }
}

const formOne = document.getElementById('formOne');
const formTwo = document.getElementById('formTwo');

formOne.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser('name1', 'per1');
    console.log('1', createUser('name1', 'per1'))
    formOne.reset();
})

formTwo.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser('name2', 'per2');
    console.log('2',createUser('name2', 'per2'));
    formTwo.reset()
})