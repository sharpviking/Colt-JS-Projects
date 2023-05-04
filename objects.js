const testScores = {
    Keenan: 80,
    damon: 75,
    lakshman: 99,
    rampraksh: 83,
    vedprakash: 91,
    rudrapratap: 97,
    Abhishek: 99,
}

let total = 0;

let scores = objects.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.legth)