const triviaQuestions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Rome"], answer: "Paris" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Michelangelo"], answer: "Leonardo da Vinci" },
    { question: "What is the largest mammal?", options: ["Elephant", "Giraffe", "Horse"], answer: "Whale" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Mercury"], answer: "Mars" },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Stephen King", "Charles Dickens"], answer: "Harper Lee" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2"], answer: "H2O" },
    { question: "What is the tallest mammal?", options: ["Elephant", "Horse", "Kangaroo"], answer: "Giraffe" },
    { question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Pacific"], answer: "Pacific" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo"], answer: "Tokyo" },
    { question: "What is the tallest mountain in the world?", options: ["Mount Kilimanjaro", "Mount Fuji", "K2"], answer: "Mount Everest" },
    { question: "Which bird is known for its ability to mimic human speech?", options: ["Parrot", "Eagle", "Penguin"], answer: "Parrot" },
    { question: "Who is credited with inventing the lightbulb?", options: ["Thomas Edison", "Nikola Tesla", "Albert Einstein"], answer: "Thomas Edison" },
    { question: "What is the capital of Australia?", options: ["Melbourne", "Sydney", "Canberra"], answer: "Canberra" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter"], answer: "Jupiter" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Korea", "Vietnam"], answer: "Japan" },
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Fe", "Pb"], answer: "Au" },
    { question: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "Jane Austen", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "Sao Paulo", "Salvador"], answer: "Brasilia" },
    { question: "What is the largest organ in the human body?", options: ["Liver", "Heart", "Lungs"], answer: "Skin" },
    { question: "What is the smallest country in the world?", options: ["Monaco", "Maldives", "San Marino"], answer: "Vatican City" },
    { question: "Who is known as the Father of Geometry?", options: ["Pythagoras", "Archimedes", "Aristotle"], answer: "Euclid" },
    { question: "Which gas do plants use for photosynthesis?", options: ["Carbon Dioxide", "Oxygen", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "What is the chemical symbol for oxygen?", options: ["O", "CO2", "O2"], answer: "O2" },
    { question: "What is the capital of Angola?", options: ["Cabinda", "Luanda", "Malanje"], answer: "Luanda" },
    { question: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Raphael", "Donatello"], answer: "Michelangelo" },
    { question: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctic"], answer: "Sahara" },
    { question: "Which planet is known as the Blue Planet?", options: ["Mars", "Venus", "Uranus"], answer: "Earth" },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur"], answer: "Alexander Fleming" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal"], answer: "Ottawa" },
    { question: "What is the chemical symbol for iron?", options: ["Au", "Ag", "Pb"], answer: "Fe" },
    { question: "Who wrote '1984'?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury"], answer: "George Orwell" },
    { question: "What is the longest river in the world?", options: ["Nile", "Amazon", "Mississippi"], answer: "Nile" },
    { question: "Which country is known as the Land of the Midnight Sun?", options: ["Sweden", "Finland", "Iceland"], answer: "Norway" },
    { question: "What is the chemical symbol for silver?", options: ["Au", "Fe", "Pb"], answer: "Ag" },
    { question: "Who wrote 'War and Peace'?", options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov"], answer: "Leo Tolstoy" },
    { question: "What is the largest island in the world?", options: ["Greenland", "Australia", "Madagascar"], answer: "Greenland" },
    { question: "Which country is known as the Land of the Free?", options: ["Canada", "Australia", "United Kingdom"], answer: "United States" },
    { question: "What is the chemical symbol for potassium?", options: ["P", "Pt", "Kr"], answer: "K" },
    { question: "Who discovered gravity when an apple fell on his head?", options: ["Galileo Galilei", "Albert Einstein", "Stephen Hawking"], answer: "Isaac Newton" },
    { question: "What is the largest country in the world by land area?", options: ["United States", "China", "Canada"], answer: "Russia" },
    { question: "What is the chemical symbol for lead?", options: ["L", "Li", "P"], answer: "Pb" },
    { question: "Who painted 'The Starry Night'?", options: ["Claude Monet", "Pablo Picasso", "Salvador Dali"], answer: "Vincent van Gogh" },
    { question: "What is the deepest ocean in the world?", options: ["Atlantic", "Indian", "Arctic"], answer: "Pacific" },
    { question: "Which planet is known as the Morning Star or Evening Star?", options: ["Mercury", "Mars", "Jupiter"], answer: "Venus" },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Rosalind Franklin", "Dorothy Hodgkin", "Ada Lovelace"], answer: "Marie Curie" },
    { question: "What is the capital of Italy?", options: ["Milan", "Florence", "Venice"], answer: "Rome" },
    { question: "What is the chemical symbol for helium?", options: ["H", "Ho", "Hu"], answer: "He" },
    { question: "Who wrote 'The Catcher in the Rye'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"], answer: "J.D. Salinger" },
    { question: "What is the largest volcano in the solar system?", options: ["Mount Everest", "Mauna Loa", "Mount Fuji"], answer: "Olympus Mons" },
    { question: "Which country is known as the Emerald Isle?", options: ["Scotland", "Wales", "England"], answer: "Ireland" },
    { question: "Who invented the telephone?", options: ["Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], answer: "Alexander Graham Bell" },
    { question: "What is the highest mountain in North America?", options: ["Mount Everest", "K2", "Mount Kilimanjaro"], answer: "Denali" },
    { question: "What is the chemical symbol for mercury?", options: ["Me", "Mg", "He"], answer: "Hg" },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Charlotte Bronte", "Emily Bronte", "Louisa May Alcott"], answer: "Jane Austen" },
    { question: "What is the largest fish in the ocean?", options: ["Blue Whale", "Great White Shark", "Manta Ray"], answer: "Whale Shark" },
    { question: "What is the currency of the United Kingdom?", options: ["Euro", "Dollar", "Yen"], answer: "Pound" },
    { question: "Who is known as the Father of Biology?", options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur"], answer: "Aristotle" },
    { question: "What is the fastest animal in the world?", options: ["Lion", "Leopard", "Gazelle"], answer: "Cheetah" },
    { question: "What is the currency of South Africa?", options: ["Pound", "Dollar", "Rand"], answer: "Rand" },
    { question: "What is the chemical symbol for sodium?", options: ["Na", "Ne", "Ni"], answer: "Na" },
    { question: "Who wrote 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"], answer: "F. Scott Fitzgerald" },
    { question: "What is the capital of China?", options: ["Beijing", "Shanghai", "Hong Kong"], answer: "Beijing" },
    { question: "Who discovered the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"], answer: "Albert Einstein" },
    { question: "What is the chemical symbol for carbon?", options: ["C", "Ca", "Co"], answer: "C" },
    { question: "Who wrote 'The Odyssey'?", options: ["Homer", "Virgil", "Plato"], answer: "Homer" },
    { question: "What is the fastest land animal?", options: ["Lion", "Leopard", "Cheetah"], answer: "Cheetah" },
    { question: "What is the capital of Spain?", options: ["Madrid", "Barcelona", "Valencia"], answer: "Madrid" },
    { question: "Who developed the theory of evolution by natural selection?", options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur"], answer: "Charles Darwin" },
    { question: "What is the chemical symbol for silver?", options: ["Si", "Sr", "Ag"], answer: "Ag" },
    { question: "Who wrote 'The Canterbury Tales'?", options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton"], answer: "Geoffrey Chaucer" },
    { question: "What is the largest moon of Jupiter?", options: ["Ganymede", "Europa", "Callisto"], answer: "Ganymede" },
    { question: "What is the capital of Russia?", options: ["Moscow", "Saint Petersburg", "Novosibirsk"], answer: "Moscow" },
    { question: "Who painted 'The Persistence of Memory'?", options: ["Pablo Picasso", "Salvador Dali", "Claude Monet"], answer: "Salvador Dali" },
    { question: "What is the chemical symbol for nitrogen?", options: ["N", "Ni", "Ne"], answer: "N" },
    { question: "Who wrote 'Moby-Dick'?", options: ["Herman Melville", "Mark Twain", "Jules Verne"], answer: "Herman Melville" },
    { question: "What is the largest bird in the world?", options: ["Ostrich", "Eagle", "Albatross"], answer: "Ostrich" },
    { question: "What is the currency of China?", options: ["Dollar", "Euro", "Yuan"], answer: "Yuan" },
    { question: "Who discovered America?", options: ["Christopher Columbus", "Vasco da Gama", "Amerigo Vespucci"], answer: "Christopher Columbus" },
    { question: "Who created this Game?", options: ["Joao Marcos Jova", "Ontlametse Kealeboga", "Lyson Munthali"], answer: "Ca" },
    { question: "Who wrote 'The Iliad'?", options: ["Homer", "Virgil", "Plato"], answer: "Homer" },
    { question: "What is the tallest tree in the world?", options: ["Redwood", "Eucalyptus", "Sequoia"], answer: "Redwood" },
    { question: "What is the capital of South Korea?", options: ["Seoul", "Busan", "Incheon"], answer: "Seoul" },
    { question: "Who painted 'The Last Supper'?", options: ["Michelangelo", "Leonardo da Vinci", "Raphael"], answer: "Leonardo da Vinci" },
    { question: "What is the chemical symbol for uranium?", options: ["Ur", "U", "Um"], answer: "U" },
    { question: "Who wrote 'The Grapes of Wrath'?", options: ["John Steinbeck", "Ernest Hemingway", "F. Scott Fitzgerald"], answer: "John Steinbeck" },
    { question: "What is the largest lizard in the world?", options: ["Komodo Dragon", "Iguana", "Monitor Lizard"], answer: "Komodo Dragon" },
    { question: "What is the currency of Mexico?", options: ["Peso", "Dollar", "Euro"], answer: "Peso" },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur"], answer: "Alexander Fleming" },
    { question: "What is the chemical symbol for potassium?", options: ["K", "Ka", "P"], answer: "K" },
    { question: "Who wrote 'The Lord of the Rings'?", options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling"], answer: "J.R.R. Tolkien" },
    { question: "What is the smallest bone in the human body?", options: ["Stapes", "Femur", "Tibia"], answer: "Stapes" },
    { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Bangalore"], answer: "Delhi" },
    { question: "Who was the first woman to fly solo across the Atlantic?", options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby"], answer: "Amelia Earhart" },
    { question: "What is the chemical symbol for tin?", options: ["Ti", "Sn", "Tn"], answer: "Sn" },
    { question: "Who wrote 'The Adventures of Huckleberry Finn'?", options: ["Mark Twain", "Harper Lee", "Charles Dickens"], answer: "Mark Twain" },
    { question: "What is the largest butterfly in the world?", options: ["Monarch Butterfly", "Queen Alexandra's Birdwing", "Swallowtail Butterfly"], answer: "Queen Alexandra's Birdwing" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Euro", "Dollar"], answer: "Yen" },
    { question: "Who discovered electricity?", options: ["Thomas Edison", "Benjamin Franklin", "Nikola Tesla"], answer: "Benjamin Franklin" },
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Fe", "Pb"], answer: "Au" },
    { question: "Who wrote 'The Scarlet Letter'?", options: ["Nathaniel Hawthorne", "Herman Melville", "Emily Dickinson"], answer: "Nathaniel Hawthorne" },
    { question: "What is the largest desert in Asia?", options: ["Gobi", "Sahara", "Thar"], answer: "Gobi" },
    { question: "What is the capital of Australia?", options: ["Melbourne", "Sydney", "Canberra"], answer: "Canberra" },
    { question: "Who discovered the theory of general relativity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei"], answer: "Albert Einstein" },
    { question: "What is the chemical symbol for lead?", options: ["L", "Li", "Pb"], answer: "Pb" },
    { question: "Who wrote 'Frankenstein'?", options: ["Mary Shelley", "Bram Stoker", "Edgar Allan Poe"], answer: "Mary Shelley" },
    { question: "What is the largest volcano in Europe?", options: ["Mount Etna", "Mount Vesuvius", "Mount Teide"], answer: "Mount Etna" },
    { question: "What is the chemical symbol for iron?", options: ["Au", "Ag", "Fe"], answer: "Fe" },
    { question: "Who wrote 'Alice's Adventures in Wonderland'?", options: ["Lewis Carroll", "J.M. Barrie", "Roald Dahl"], answer: "Lewis Carroll" },
    { question: "What is the largest peninsula in the world?", options: ["Arabian Peninsula", "Iberian Peninsula", "Scandinavian Peninsula"], answer: "Arabian Peninsula" },
    { question: "What is the capital of Argentina?", options: ["Buenos Aires", "Santiago", "Lima"], answer: "Buenos Aires" },
    { question: "Who invented the World Wide Web?", options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs"], answer: "Tim Berners-Lee" },
    { question: "What is the chemical symbol for silver?", options: ["Au", "Fe", "Pb"], answer: "Ag" },
    { question: "Who wrote 'The Picture of Dorian Gray'?", options: ["Oscar Wilde", "Virginia Woolf", "James Joyce"], answer: "Oscar Wilde" },
    { question: "What is the highest waterfall in the world?", options: ["Angel Falls", "Niagara Falls", "Victoria Falls"], answer: "Angel Falls" },
    { question: "What is the currency of Brazil?", options: ["Peso", "Real", "Euro"], answer: "Real" },
    { question: "Who discovered the circulation of blood?", options: ["William Harvey", "Edward Jenner", "Joseph Lister"], answer: "William Harvey" },
    { question: "What is the chemical symbol for oxygen?", options: ["O", "CO2", "O2"], answer: "O2" },
    { question: "Who wrote 'A Tale of Two Cities'?", options: ["Charles Dickens", "Jane Austen", "Mark Twain"], answer: "Charles Dickens" },
    { question: "What is the largest lake in Africa?", options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi"], answer: "Lake Victoria" },
];

// Set initial time to 100 seconds
let timeLeft = 100;
let timerInterval;
let points = 0;

// Retrieve points from localStorage if available
if (localStorage.getItem('points')) {
    points = parseInt(localStorage.getItem('points'));
    document.getElementById('pointValue').textContent = points;
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--; // Decrease time by 1 second
            document.getElementById('time').textContent = timeLeft;
        } else {
            clearInterval(timerInterval); // Stop the timer when time is up
            window.location.href = "gameover.html";
        }
    }, 2000);
}

// Function to check the answer
function checkAnswer(isCorrect) {
    if (isCorrect) {
        document.getElementById('question').textContent = "Correct!";
        points += 10; // Add 10 points for correct answer
        localStorage.setItem('points', points); // Save points to localStorage
        if (timeLeft + 20 <= 100) {
            timeLeft += 20; // Add 10 seconds for correct answer if time allows
        } else {
            timeLeft = 100; // Set time to maximum (100 seconds) if adding 20 seconds would exceed 100
        }
    } else {
        document.getElementById('question').textContent = "Wrong!";
    }
    document.getElementById('time').textContent = timeLeft;
    document.getElementById('pointValue').textContent = points;
    // Reload a new set of questions after delay
    setTimeout(() => {
        initializeQuiz();
    }, 1500);
}


// Function to enable answer buttons after displaying the "Wrong!" message
function enableButtons() {
    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].disabled = false;
        cards[i].style.pointerEvents = 'auto'; // Enable click events
    }
}

// Function to shuffle the options
function shuffleOptions(options) {
    return options.sort(() => Math.random() - 0.5);
}

// Function to generate a set of three cards for a question (2 wrong, 1 right)
function generateCards(question) {
    const options = [question.answer, ...question.options.filter(option => option !== question.answer)];
    const shuffledOptions = shuffleOptions(options).slice(0, 3); // Select only first 3 options
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear existing cards

    shuffledOptions.forEach(option => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = option;
        card.addEventListener("click", handleCardClick);
        cardContainer.appendChild(card);
    });
}

// Function to handle click event on a card
function handleCardClick(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = getCurrentQuestion(); // Retrieve current question
    const isCorrect = selectedAnswer === currentQuestion.answer;
    checkAnswer(isCorrect);
    if (isCorrect) {
        resetCardColors(); // Reset card colors before generating new cards
        event.target.style.backgroundColor = "#58cc02"; // Change card color to green for correct answer
        // Play correct sound
        const correctSound = new Audio("assets/audio/correct-answer.mp3");
        correctSound.play();
    } else {
        event.target.style.backgroundColor = "red"; // Change card color to red for wrong answer
        // Play incorrect sound
        const wrongSound = new Audio("assets/audio/wrong-answer.wav");
        wrongSound.play();
        enableButtons(); // Enable buttons again after wrong answer
    }
}

// Function to reset card colors to default
function resetCardColors() {
    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = ''; // Reset card color
    }
}

// Function to retrieve the current question
function getCurrentQuestion() {
    const currentQuestionText = document.getElementById('question').textContent;
    return triviaQuestions.find(question => question.question === currentQuestionText);
}

// Function to display the question and generate cards
function displayQuestion(question) {
    const questionDiv = document.getElementById("question");
    questionDiv.textContent = question.question;
    generateCards(question);
}

// Function to initialize the quiz
function initializeQuiz() {
    const randomQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
    displayQuestion(randomQuestion);
    document.getElementById('time').textContent = timeLeft;
    startTimer(); // Start the timer
}

// Initialize the quiz when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeQuiz);


////////////////////

