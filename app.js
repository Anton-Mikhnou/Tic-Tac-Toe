const GameBord = {
    game: [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
} 

// function usersCreate (name, chose) {
//     return {
//         name: name,
//         chose: chose,
//         info: function getInfo() {
//             console.log(`${name} im chose: ${chose}`)
//             return `${name} im chose: ${chose}` 
//         }
//     }
// }

const usersCreate = (function (doc,) {
    // let choses;
    // let name;
    const getFromDom = (selector) => {
        if(!!doc && "querySelector" in doc){ 
            let shoses = doc.querySelector(selector).textContent;
            player1.shose = shoses;
            console.log(player1.shose)
            return player1.shose;
        }
    }

    const player1 = {
        name: name,
        chose: chose,
    }

    const player2 = {
        name: name,
        chose: chose,
    }

    return {
        getFromDom,
        player1,
        player2,
    }
})(document);

const button = document.querySelector('.zero');
button.addEventListener('click', () => {
    usersCreate.getFromDom('.zero')
})




// usersCreate.getFromDom('.zero')


// let person1 = users('Jhon', 'x');
// let person2 = users('Jhon2', '0');
// person1.info();
// person2.info();