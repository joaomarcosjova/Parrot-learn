var audio = document.getElementById("myAudio");

function toggleMute() {
    audio.muted = !audio.muted; // Toggle the muted state
}

function togglePlayback() {
    if (audio.paused) {
        audio.play(); // If paused, play the audio
    } else {
        audio.pause(); // If playing, pause the audio
    }
}

function playClickSound() {
    var audio = document.getElementById("clickSound");
    audio.play();
}

function playSoundAndRedirect() {
    var audio = document.getElementById("clickSound");
    audio.play();
    setTimeout(function() {
        window.location.href = "./login.html"; // Replace "your-redirect-url.html" with the URL of the page you want to redirect to
    }, audio.duration * 1000); // Redirect after the duration of the audio in milliseconds
}
