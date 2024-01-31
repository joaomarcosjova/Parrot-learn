// Sample list of 500 words
const words = [
    { spanish: "agua", english: "water" },
    { spanish: "puerta", english: "door" },
    { spanish: "coche", english: "car" },
    { spanish: "comida", english: "food" },
    { spanish: "casa", english: "house" },
    { spanish: "calle", english: "street" },
    { spanish: "trabajo", english: "work" },
    { spanish: "tiempo", english: "time" },
    { spanish: "amigo", english: "m friend" },
    { spanish: "amiga", english: "f friend" },
    { spanish: "familia", english: "family" },
    { spanish: "ciudad", english: "city" },
    { spanish: "aire", english: "air" },
    { spanish: "sol", english: "sun" },
    { spanish: "luz", english: "light" },
    { spanish: "lugar", english: "place" },
    { spanish: "mesa", english: "table" },
    { spanish: "silla", english: "chair" },
    { spanish: "ropa", english: "clothes" },
    { spanish: "zapatos", english: "shoes" },
    { spanish: "gato", english: "cat" },
    { spanish: "perro", english: "dog" },
    { spanish: "gente", english: "people" },
    { spanish: "día", english: "day" },
    { spanish: "noche", english: "night" },
    { spanish: "color", english: "color" },
    { spanish: "número", english: "number" },
    { spanish: "dinero", english: "money" },
    { spanish: "mercado", english: "market" },
    { spanish: "fruta", english: "fruit" },
    { spanish: "verdura", english: "vegetable" },
    { spanish: "carne", english: "meat" },
    { spanish: "pescado", english: "fish" },
    { spanish: "pan", english: "bread" },
    { spanish: "leche", english: "milk" },
    { spanish: "queso", english: "cheese" },
    { spanish: "huevos", english: "eggs" },
    { spanish: "cama", english: "bed" },
    { spanish: "baño", english: "bathroom" },
    { spanish: "teléfono", english: "telephone" },
    { spanish: "televisión", english: "television" },
    { spanish: "ordenador", english: "computer" },
    { spanish: "libro", english: "book" },
    { spanish: "música", english: "music" },
    { spanish: "arte", english: "art" },
    { spanish: "ciencia", english: "science" },
    { spanish: "historia", english: "history" },
    { spanish: "naturaleza", english: "nature" },
    { spanish: "fuego", english: "fire" },
    { spanish: "tierra", english: "earth" },
    { spanish: "aire", english: "air" },
    { spanish: "mar", english: "sea" },
    { spanish: "río", english: "river" },
    { spanish: "montaña", english: "mountain" },
    { spanish: "viaje", english: "trip" },
    { spanish: "vacaciones", english: "vacation" },
    { spanish: "trabajo", english: "work" },
    { spanish: "problema", english: "problem" },
    { spanish: "solución", english: "solution" },
    { spanish: "pregunta", english: "question" },
    { spanish: "respuesta", english: "answer" },
    { spanish: "educación", english: "education" },
    { spanish: "escuela", english: "school" },
    { spanish: "universidad", english: "university" },
    { spanish: "clase", english: "class" },
    { spanish: "estudio", english: "study" },
    { spanish: "conocimiento", english: "knowledge" },
    { spanish: "tecnología", english: "technology" },
    { spanish: "internet", english: "internet" },
    { spanish: "correo electrónico", english: "email" },
    { spanish: "noticias", english: "news" },
    { spanish: "información", english: "information" },
    { spanish: "comunicación", english: "communication" },
    { spanish: "amor", english: "love" },
    { spanish: "amistad", english: "friendship" },
    { spanish: "relación", english: "relationship" },
    { spanish: "matrimonio", english: "marriage" },
    { spanish: "divorcio", english: "divorce" },
    { spanish: "salud", english: "health" },
    { spanish: "enfermedad", english: "illness" },
    { spanish: "medicina", english: "medicine" },
    { spanish: "hospital", english: "hospital" },
    { spanish: "doctor", english: "doctor" },
    { spanish: "cuerpo", english: "body" },
    { spanish: "cabeza", english: "head" },
    { spanish: "mano", english: "hand" },
    { spanish: "pierna", english: "leg" },
    { spanish: "ojo", english: "eye" },
    { spanish: "oído", english: "ear" },
    { spanish: "boca", english: "mouth" },
    { spanish: "nariz", english: "nose" },
    { spanish: "corazón", english: "heart" },
    { spanish: "mente", english: "mind" },
    { spanish: "emoción", english: "emotion" },
    { spanish: "felicidad", english: "happiness" },
    { spanish: "tristeza", english: "sadness" },
    { spanish: "miedo", english: "fear" },
    { spanish: "sueño", english: "dream" },
    { spanish: "realidad", english: "reality" }
];


// Function to shuffle the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to generate a set of four cards
function generateCards() {
    // Shuffle the words
    const shuffledWords = shuffle([...words]);

    // Select the first four words
    const selectedWords = shuffledWords.slice(0, 4);

    // Clear the existing cards
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    // Create and append new cards
    selectedWords.forEach((word, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const front = document.createElement("div");
        front.classList.add("front");
        front.textContent = word.spanish;

        const back = document.createElement("div");
        back.classList.add("back");
        back.textContent = word.english;

        // Event listener to flip the card
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        card.appendChild(front);
        card.appendChild(back);
        cardContainer.appendChild(card);
    });
}

// Function to save the current state to local storage
function saveStateToLocalStorage(words) {
    localStorage.setItem("words", JSON.stringify(words));
}

// Function to load the saved state from local storage
function loadStateFromLocalStorage() {
    const savedState = localStorage.getItem("words");
    return savedState ? JSON.parse(savedState) : null;
}

// Initialize the application
function initializeApp() {
    // Check if there is any saved state in local storage
    const savedState = loadStateFromLocalStorage();

    // If there is saved state, load it and update the UI
    if (savedState) {
        words = savedState;
    }

    // Generate the initial set of cards
    generateCards();
}

// Event listener for the reload button
const reloadButton = document.getElementById("reload-button");
reloadButton.addEventListener("click", generateCards);

// Initialize the application when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeApp);
