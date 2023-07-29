function RollDice(sides, id) {
    let result = Math.floor(Math.random() * (sides) + 1);
    document.getElementById(id).innerHTML = result;
}
