// Sample list of 100 words
const words = [
    { portuguese: "água", english: "water" },
    { portuguese: "porta", english: "door" },
    { portuguese: "carro", english: "car" },
    { portuguese: "comida", english: "food" },
    { portuguese: "casa", english: "house" },
    { portuguese: "amigo", english: "friend" },
    { portuguese: "família", english: "family" },
    { portuguese: "amor", english: "love" },
    { portuguese: "tempo", english: "time" },
    { portuguese: "dia", english: "day" },
    { portuguese: "noite", english: "night" },
    { portuguese: "sol", english: "sun" },
    { portuguese: "lua", english: "moon" },
    { portuguese: "céu", english: "sky" },
    { portuguese: "estrela", english: "star" },
    { portuguese: "terra", english: "earth" },
    { portuguese: "mar", english: "sea" },
    { portuguese: "rio", english: "river" },
    { portuguese: "montanha", english: "mountain" },
    { portuguese: "floresta", english: "forest" },
    { portuguese: "cidade", english: "city" },
    { portuguese: "país", english: "country" },
    { portuguese: "mundo", english: "world" },
    { portuguese: "ar", english: "air" },
    { portuguese: "fogo", english: "fire" },
    { portuguese: "terra", english: "earth" },
    { portuguese: "metal", english: "metal" },
    { portuguese: "pedra", english: "stone" },
    { portuguese: "areia", english: "sand" },
    { portuguese: "sol", english: "sun" },
    { portuguese: "chuva", english: "rain" },
    { portuguese: "vento", english: "wind" },
    { portuguese: "neve", english: "snow" },
    { portuguese: "gelo", english: "ice" },
    { portuguese: "calor", english: "heat" },
    { portuguese: "frio", english: "cold" },
    { portuguese: "verão", english: "summer" },
    { portuguese: "inverno", english: "winter" },
    { portuguese: "primavera", english: "spring" },
    { portuguese: "outono", english: "autumn" },
    { portuguese: "felicidade", english: "happiness" },
    { portuguese: "tristeza", english: "sadness" },
    { portuguese: "raiva", english: "anger" },
    { portuguese: "medo", english: "fear" },
    { portuguese: "amor", english: "love" },
    { portuguese: "ódio", english: "hate" },
    { portuguese: "alegria", english: "joy" },
    { portuguese: "paz", english: "peace" },
    { portuguese: "guerra", english: "war" },
    { portuguese: "saúde", english: "health" },
    { portuguese: "doença", english: "illness" },
    { portuguese: "vida", english: "life" },
    { portuguese: "morte", english: "death" },
    { portuguese: "nascimento", english: "birth" },
    { portuguese: "criança", english: "child" },
    { portuguese: "adulto", english: "adult" },
    { portuguese: "homem", english: "man" },
    { portuguese: "mulher", english: "woman" },
    { portuguese: "pai", english: "father" },
    { portuguese: "mãe", english: "mother" },
    { portuguese: "filho", english: "son" },
    { portuguese: "filha", english: "daughter" },
    { portuguese: "irmão", english: "brother" },
    { portuguese: "irmã", english: "sister" },
    { portuguese: "avô", english: "grandfather" },
    { portuguese: "avó", english: "grandmother" },
    { portuguese: "neto", english: "grandson" },
    { portuguese: "neta", english: "granddaughter" },
    { portuguese: "tio", english: "uncle" },
    { portuguese: "tia", english: "aunt" },
    { portuguese: "primo", english: "cousin" },
    { portuguese: "prima", english: "cousin" },
    { portuguese: "amigo", english: "friend" },
    { portuguese: "amiga", english: "friend" },
    { portuguese: "colega", english: "colleague" },
    { portuguese: "vizinho", english: "neighbor" },
    { portuguese: "professor", english: "teacher" },
    { portuguese: "professora", english: "teacher" },
    { portuguese: "aluno", english: "student" },
    { portuguese: "aluna", english: "student" },
    { portuguese: "trabalho", english: "work" },
    { portuguese: "estudo", english: "study" },
    { portuguese: "escola", english: "school" },
    { portuguese: "casa", english: "home" },
    { portuguese: "festa", english: "party" },
    { portuguese: "praia", english: "beach" },
    { portuguese: "viagem", english: "trip" },
    { portuguese: "férias", english: "vacation" },
    { portuguese: "jogo", english: "game" },
    { portuguese: "filme", english: "movie" },
    { portuguese: "livro", english: "book" },
    { portuguese: "música", english: "music" },
    { portuguese: "arte", english: "art" },
    { portuguese: "cultura", english: "culture" },
    { portuguese: "história", english: "history" },
    { portuguese: "ciência", english: "science" },
    { portuguese: "tecnologia", english: "technology" },
    { portuguese: "internet", english: "internet" },
    { portuguese: "telefone", english: "phone" },
    { portuguese: "computador", english: "computer" },
    { portuguese: "celular", english: "cell phone" },
    { portuguese: "mensagem", english: "message" },
    { portuguese: "email", english: "email" },
    { portuguese: "carta", english: "letter" },
    { portuguese: "notícia", english: "news" },
    { portuguese: "informação", english: "information" },
    { portuguese: "pergunta", english: "question" },
    { portuguese: "resposta", english: "answer" },
    { portuguese: "problema", english: "problem" },
    { portuguese: "solução", english: "solution" },
    { portuguese: "dúvida", english: "doubt" },
    { portuguese: "certeza", english: "certainty" },
    { portuguese: "ideia", english: "idea" },
    { portuguese: "pensamento", english: "thought" },
    { portuguese: "sentimento", english: "feeling" },
    { portuguese: "emoção", english: "emotion" },
    { portuguese: "sensação", english: "sensation" },
    { portuguese: "alegria", english: "joy" },
    { portuguese: "tristeza", english: "sadness" },
    { portuguese: "raiva", english: "anger" },
    { portuguese: "medo", english: "fear" },
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
        front.textContent = word.portuguese;

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
