// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJCByGrEn3HVHggDs3k2FaP047opBmNFs",
    authDomain: "auth-parrot-learn.firebaseapp.com",
    databaseURL: "https://auth-parrot-learn-default-rtdb.firebaseio.com",
    projectId: "auth-parrot-learn",
    storageBucket: "auth-parrot-learn.appspot.com",
    messagingSenderId: "934523026078",
    appId: "1:934523026078:web:fc332c39e79a34344f198f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Function to register a new user
function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const full_name = document.getElementById('full_name').value;

    // Validate input fields
    if (!validate_email(email) || !validate_password(password) || !validate_field(full_name)) {
        alert('Invalid input. Please check your email, password, and full name.');
        return;
    }

    // Proceed with user registration
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Declare user variable
        const user = userCredential.user;

        // Add user data to Firebase Database
        const userRef = database.ref('users/' + user.uid);

        // Create user data
        const userData = {
            email: email,
            full_name: full_name,
            last_login: Date.now()
        };

        // Push user data to Firebase Database
        userRef.set(userData);

        // Redirect to account-created.html
        window.location.href = 'account-created.html';
    })
    .catch((error) => {
        alert(error.message);
    });
}

// Function to login existing users
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input fields
    if (!validate_email(email) || !validate_password(password)) {
        alert('Invalid email or password.');
        return;
    }

    // Proceed with user login
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Declare user variable
        const user = userCredential.user;

        // Update last login timestamp in Firebase Database
        const userRef = database.ref('users/' + user.uid);
        userRef.update({ last_login: Date.now() });

        // Redirect to main.html after successful login
        window.location.href = 'main.html';
    })
    .catch((error) => {
        alert(error.message);
    });
}

// Validation functions
function validate_email(email) {
    // Validate email format
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function validate_password(password) {
    // Validate password length (Firebase requires password length >= 6)
    return password.length >= 6;
}

function validate_field(field) {
    // Validate non-empty field
    return field.trim() !== '';
}
