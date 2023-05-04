let maximum = parseInt(prompt('Enter the maximum number!'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!'));
}

const targetNum = Math.floor(Math.random * maximum) + 1;

let guess = promt("Enter your first guess!(Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess.Please enter a number or 'q' to quit")
    }
}
if (guess === 'q') {
    console.log("okay!You quit")
} else {
    console.log("Congrats You Win!")
    console.log(`You Got It! It took you ${attempts}guesses`);
}