const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const pintas = ["♦", "♥", "♠", "♣"];

function generateRandomValue(array) {
  return array[Math.floor(Math.random() * array.length)]
}

let randomValores = generateRandomValue(cardValues);
let randomPintas = generateRandomValue(pintas);
let container = document.querySelector(".card-container")
let card = document.getElementById("card");
let addButton = document.getElementById("generarCarta")

  /*addButton.addEventListener("click", () => {
  randomValores = generateRandomValue(cardValues);
  randomPintas = generateRandomValue(pintas);
});*/



// Aplicamos estilos al card
card.style.padding = "3vw";
card.style.borderRadius = "10px";
card.style.border = "1px solid black";
card.style.height = "250px";
card.style.width = "350px"; // View Width
card.style.backgroundColor = "white";
card.style.position = "relative";

// Aplicamos estilos al container
container.style.backgroundColor = "green";
container.style.height = "550px";
container.style.width = "250px";
container.style.borderRadius = "10px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.padding = "0 500px 5px 500px";


let cardValue = document.createElement("h1");
cardValue.innerHTML = randomValores;

cardValue.style.textAlign = 'center';
cardValue.style.justifyContent = 'center';
cardValue.style.alignItems = 'center';
cardValue.style.fontSize = '100px';

// Este va arriba
let cardUp = document.createElement("h2");
cardUp.innerHTML = randomPintas;

cardUp.style.position = 'absolute';
cardUp.style.top = '0';
cardUp.style.left = '5';
cardUp.style.fontSize = '50px';


if (randomPintas === "♦" || randomPintas === "♥") {
  cardUp.style.color = "red";
  cardValue.style.color = "red"
}
// Este va abajo
let cardDown = document.createElement("h2");
if (randomPintas === "♦" || randomPintas === "♥") {
  cardDown.style.color = "red";
}
cardDown.innerHTML = randomPintas;

cardDown.style.transform = "rotate(180deg)";
cardDown.style.position = 'absolute';
cardDown.style.bottom = '0';
cardDown.style.right = '40px';
cardDown.style.fontSize = '50px';




// Icono superior
card.appendChild(cardUp);

// Anexamos la imagen
card.appendChild(cardValue);

// Icono inferior
card.appendChild(cardDown);
