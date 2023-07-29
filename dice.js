function RollDice(sides) {
    return Math.floor(Math.random() * (sides + 1));
}

console.log(RollDice(6))