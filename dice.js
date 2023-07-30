function Roll(sides, id) {
    document.getElementById(id).innerHTML = Math.floor(Math.random() * (sides) + 1);
}

function RollDice(sides, id) {
    for (let frame = 1; frame <= 24; frame++) {
        setTimeout(function(){Roll(sides, id);}, frame * 80)
    }
}
