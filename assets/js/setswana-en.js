// Sample list of 100 words
const words = [
        { setswana: "metsi", english: "water" },
        { setswana: "door", english: "door" },
        { setswana: "karolo", english: "car" },
        { setswana: "bua", english: "speak" },
        { setswana: "tse", english: "food" },
        { setswana: "tlhôla", english: "come" },
        { setswana: "dira", english: "do" },
        { setswana: "rata", english: "love" },
        { setswana: "nako", english: "time" },
        { setswana: "dinao", english: "day" },
        { setswana: "bonya", english: "night" },
        { setswana: "tsatsi", english: "sun" },
        { setswana: "leleme", english: "moon" },
        { setswana: "dikgobe", english: "sky" },
        { setswana: "tshukudu", english: "star" },
        { setswana: "lentswe", english: "earth" },
        { setswana: "lentswe", english: "land" },
        { setswana: "supa", english: "sea" },
        { setswana: "lentswe", english: "land" },
        { setswana: "fatshe", english: "land" },
        { setswana: "meloko", english: "river" },
        { setswana: "lentswe", english: "land" },
        { setswana: "letsoku", english: "river" },
        { setswana: "kgoro", english: "forest" },
        { setswana: "lentswe", english: "land" },
        { setswana: "moriri", english: "village" },
        { setswana: "kgoro", english: "forest" },
        { setswana: "tona", english: "village" },
        { setswana: "motse", english: "city" },
        { setswana: "lentswe", english: "land" },
        { setswana: "masego", english: "world" },
        { setswana: "bokone", english: "north" },
        { setswana: "le", english: "and" },
        { setswana: "setšhaba", english: "nation" },
        { setswana: "tumelo", english: "belief" },
        { setswana: "lekgetho", english: "name" },
        { setswana: "lebelo", english: "name" },
        { setswana: "ntšha", english: "belief" },
        { setswana: "bonatla", english: "north" },
        { setswana: "ditirelo", english: "service" },
        { setswana: "tshireletso", english: "service" },
        { setswana: "tirelo", english: "service" },
        { setswana: "batho", english: "people" },
        { setswana: "di tiro", english: "jobs" },
        { setswana: "letsholo", english: "south" },
        { setswana: "ko", english: "there" },
        { setswana: "lefatshe", english: "world" },
        { setswana: "tlhokomelo", english: "care" },
        { setswana: "tlhokomela", english: "care" },
        { setswana: "tlhokomelang", english: "care" },
        { setswana: "fatshe", english: "world" },
        { setswana: "go nna", english: "be" },
        { setswana: "go", english: "go" },
        { setswana: "diphatlalatša", english: "men" },
        { setswana: "bagolo", english: "men" },
        { setswana: "banna", english: "men" },
        { setswana: "diphatlalatša", english: "men" },
        { setswana: "batho", english: "people" },
        { setswana: "lentswe", english: "land" },
        { setswana: "wa", english: "and" },
        { setswana: "go", english: "go" },
        { setswana: "lentswe", english: "land" },
        { setswana: "tše", english: "door" },
        { setswana: "le", english: "and" },
        { setswana: "bone", english: "to see" },
        { setswana: "lokisa", english: "to read" },
        { setswana: "ela", english: "to give" },
        { setswana: "foka", english: "to take" },
        { setswana: "humana", english: "to open" },
        { setswana: "ye", english: "to come" },
        { setswana: "abuti", english: "older brother" },
        { setswana: "goromente", english: "government" },
        { setswana: "tiro", english: "job" },
        { setswana: "leina", english: "name" },
        { setswana: "mme", english: "mother" },
        { setswana: "bana", english: "children" },
        { setswana: "setšhaba", english: "community" },
        { setswana: "kgoro", english: "village" },
        { setswana: "boitšhoko", english: "problem" },
        { setswana: "go kgalemela", english: "to improve" },
        { setswana: "dikgwebo", english: "website" },
        { setswana: "sepolotiki", english: "politics" },
        { setswana: "sepolotiki", english: "political" },
        { setswana: "bokamoso", english: "future" },
        { setswana: "fetola", english: "to change" },
        { setswana: "ditshwanelo", english: "rights" },
        { setswana: "lebaka", english: "reason" },
        { setswana: "tlhompho", english: "gift" },
        { setswana: "boeteledipele", english: "global" },
        { setswana: "ditokelo", english: "rights" },
        { setswana: "tsotlhe", english: "all" },
        { setswana: "go ithutela", english: "to learn" },
        { setswana: "go kgaola", english: "to change" },
        { setswana: "motshameko", english: "evidence" },
        { setswana: "diphetogo", english: "results" },
        { setswana: "tswelopele", english: "development" },
        { setswana: "lefoko", english: "word" },
        { setswana: "go tsamaya", english: "to leave" },
        { setswana: "khansele", english: "council" },
        { setswana: "ditšhaba", english: "community" },
        { setswana: "tswelopele", english: "development" },
        { setswana: "tlhopho", english: "protection" },
        { setswana: "tirelo", english: "work" },
        { setswana: "lefatsheng", english: "abroad" },
        { setswana: "mmušo", english: "government" },
        { setswana: "moruo", english: "program" },
        { setswana: "lekgotla", english: "council" },
        { setswana: "legae", english: "home" },
        { setswana: "sejo", english: "company" },
        { setswana: "palamente", english: "parliament" },
        { setswana: "metsi", english: "water" },
        { setswana: "tlhaselo", english: "change" },
        { setswana: "gola", english: "to try" },
        { setswana: "phapang", english: "care" },
        { setswana: "thuto", english: "education" },
        { setswana: "kgwebo", english: "website" },
        { setswana: "moporesidente", english: "president" },
        { setswana: "senatla", english: "centre" },
        { setswana: "tšwelela", english: "manager" },
        { setswana: "kgotso", english: "peace" },
        { setswana: "motlakase", english: "economy" },
        { setswana: "tlhagiso", english: "development" },
        { setswana: "golagano", english: "meeting" },
        { setswana: "kgotlatshekelo", english: "organization" },
        { setswana: "dirisiwa", english: "used" },
        { setswana: "setswana", english: "setswana" },
        { setswana: "le", english: "and" },
        { setswana: "se", english: "this" },
        { setswana: "wa", english: "with" },
        { setswana: "wa", english: "to" },
        { setswana: "kwa", english: "from" },
        { setswana: "re", english: "said" },
        { setswana: "ba", english: "have" },
        { setswana: "e", english: "is" },
        { setswana: "ga", english: "not" },
        { setswana: "go", english: "go" },
        { setswana: "go", english: "go" },
        { setswana: "ka", english: "by" },
        { setswana: "ditiro", english: "work" },
        { setswana: "le", english: "and" },
        { setswana: "le", english: "and" },
        { setswana: "go", english: "go" },
        { setswana: "ga", english: "not" },
        { setswana: "tsa", english: "of" },
        { setswana: "gore", english: "that" },
        { setswana: "setswana", english: "setswana" },
        { setswana: "le", english: "and" },
        { setswana: "e", english: "is" },
        { setswana: "fela", english: "only" },
        { setswana: "e", english: "is" },
        { setswana: "ba", english: "have" },
        { setswana: "ka", english: "by" },
        { setswana: "mo", english: "in" },
        { setswana: "ga", english: "not" },
        { setswana: "mo", english: "in" },
        { setswana: "le", english: "and" },
        { setswana: "le", english: "and" },
        { setswana: "e", english: "is" },
        { setswana: "wa", english: "with" },
        { setswana: "le", english: "and" },
        { setswana: "wa", english: "with" },
        { setswana: "mo", english: "in" },
        { setswana: "go", english: "go" },
        { setswana: "e", english: "is" },
        { setswana: "le", english: "and" },
        { setswana: "ka", english: "by" },
        { setswana: "go", english: "go" },
        { setswana: "go", english: "go" },
        { setswana: "go", english: "go" },
        { setswana: "mme", english: "mother" },
        { setswana: "tlhopho", english: "protection" },
        { setswana: "tirelo", english: "work" },
        { setswana: "fatshe", english: "world" },
        { setswana: "mme", english: "mother" },
        { setswana: "fatshe", english: "world" },
        { setswana: "tlhopho", english: "protection" },
        { setswana: "le", english: "and" },
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
        front.textContent = word.setswana;

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
