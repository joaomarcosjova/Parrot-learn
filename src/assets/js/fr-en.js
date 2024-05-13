// Sample list of 100 words
const words = [
    { french: "l'eau", english: "water" },
    { french: "porte", english: "door" },
    { french: "voiture", english: "car" },
    { french: "nourriture", english: "food" },
    { french: "maison", english: "house" },
    { french: "chat", english: "cat" },
    { french: "chien", english: "dog" },
    { french: "temps", english: "weather" },
    { french: "soleil", english: "sun" },
    { french: "fleur", english: "flower" },
    { french: "arbre", english: "tree" },
    { french: "ciel", english: "sky" },
    { french: "mer", english: "sea" },
    { french: "rivière", english: "river" },
    { french: "montagne", english: "mountain" },
    { french: "route", english: "road" },
    { french: "vent", english: "wind" },
    { french: "pluie", english: "rain" },
    { french: "neige", english: "snow" },
    { french: "glace", english: "ice" },
    { french: "feu", english: "fire" },
    { french: "terre", english: "earth" },
    { french: "étoile", english: "star" },
    { french: "lune", english: "moon" },
    { french: "homme", english: "man" },
    { french: "femme", english: "woman" },
    { french: "enfant", english: "child" },
    { french: "famille", english: "family" },
    { french: "ami", english: "friend" },
    { french: "amour", english: "love" },
    { french: "travail", english: "work" },
    { french: "école", english: "school" },
    { french: "livre", english: "book" },
    { french: "musique", english: "music" },
    { french: "film", english: "movie" },
    { french: "temps", english: "time" },
    { french: "jour", english: "day" },
    { french: "nuit", english: "night" },
    { french: "heure", english: "hour" },
    { french: "minute", english: "minute" },
    { french: "seconde", english: "second" },
    { french: "année", english: "year" },
    { french: "mois", english: "month" },
    { french: "date", english: "date" },
    { french: "heure", english: "clock" },
    { french: "calendrier", english: "calendar" },
    { french: "argent", english: "money" },
    { french: "prix", english: "price" },
    { french: "acheter", english: "buy" },
    { french: "vendre", english: "sell" },
    { french: "payer", english: "pay" },
    { french: "chercher", english: "search" },
    { french: "trouver", english: "find" },
    { french: "perdre", english: "lose" },
    { french: "gagner", english: "win" },
    { french: "besoin", english: "need" },
    { french: "donner", english: "give" },
    { french: "prendre", english: "take" },
    { french: "voir", english: "see" },
    { french: "regarder", english: "watch" },
    { french: "lire", english: "read" },
    { french: "écrire", english: "write" },
    { french: "parler", english: "speak" },
    { french: "écouter", english: "listen" },
    { french: "comprendre", english: "understand" },
    { french: "apprendre", english: "learn" },
    { french: "savoir", english: "know" },
    { french: "oublier", english: "forget" },
    { french: "penser", english: "think" },
    { french: "souvenir", english: "remember" },
    { french: "imaginer", english: "imagine" },
    { french: "voir", english: "see" },
    { french: "regarder", english: "watch" },
    { french: "lire", english: "read" },
    { french: "écrire", english: "write" },
    { french: "parler", english: "speak" },
    { french: "écouter", english: "listen" },
    { french: "comprendre", english: "understand" },
    { french: "apprendre", english: "learn" },
    { french: "savoir", english: "know" },
    { french: "oublier", english: "forget" },
    { french: "penser", english: "think" },
    { french: "souvenir", english: "remember" },
    { french: "imaginer", english: "imagine" },
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
        front.textContent = word.french;

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
