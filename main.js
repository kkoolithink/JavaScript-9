const output = document.querySelector("#output")

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(7.8));
console.log(Math.ceil(2.1));
console.log(Math.floor(Math.random() * 6));
console.log(Math.ceil(Math.random() * 5));

let random = Math.random() * 5;
console.log("Random:", random);
console.log("Floor:", Math.floor(random));
console.log("Ceil:", Math.ceil(random));

console.log(Math.floor(Math.random() * 6) + 1);

function show_random() {
    output.textContent = Math.random();
}

function show_floor() {
    output.textContent = Math.floor(7.9);
}

function show_ceil() {
    output.textContent = Math.ceil(2.2);
}

function roll_dice() {
    output.textContent = `Dice roll: ${Math.floor(Math.random() * 6) + 1}`;
}

function pick_random() {
    let names = ["Joshua", "Kenneth", "Eric", "Landon"];
    output.textContent = "Chosen: " + names[Math.floor(Math.random() * names.length)];
}