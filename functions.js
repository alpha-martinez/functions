// functions are "Code on demand"
// Variables and constants created in function "belong" to that function
// Functions CAN take parameters(arguments) and CAN return a value 
// functions can be called multiple times (w/ differnet arguments)
// function can be called directly and indirectly

const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase;
    if(selection !== 'Rock' &&
       selection !== 'Paper' &&
       selection !== 'Scissors'
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

startGameBtn.addEventListener('click', function() {
    console.log('Gamei si starting...')
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
})


// startGameBtn.addEventListener('click', startGame);

// below is called a method: a function attached to an object
// const person = {
//     greet: function() {
//         console.log('hELLO THERE');
//     }
// };

// person.greet();