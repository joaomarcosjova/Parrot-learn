// Define a variable to store the deferredPrompt event object
let deferredPrompt;

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt
  event.preventDefault();
  // Store the event object for later use
  deferredPrompt = event;
  // Show the custom "Add to Home Screen" notification
  showAddToHomeScreen();
});

// Function to display the "Add to Home Screen" notification
function showAddToHomeScreen() {
  // Find or create the element to display the notification
  const notificationElement = document.getElementById('add-to-home-notification');
  if (!notificationElement) {
    // Create a new element for the notification
    const newNotificationElement = document.createElement('div');
    newNotificationElement.id = 'add-to-home-notification';
    newNotificationElement.textContent = 'Add this app to your home screen for quick access!';
    newNotificationElement.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #007bff;
      color: #ffffff;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    `;
    // Add a click event listener to trigger the installation prompt
    newNotificationElement.addEventListener('click', addToHomeScreen);
    // Append the notification element to the document body
    document.body.appendChild(newNotificationElement);
  }
}

// Function to trigger the installation prompt
function addToHomeScreen() {
  // Ensure that the deferredPrompt object is available
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      // Reset the deferredPrompt variable
      deferredPrompt = null;
      // Handle the user's choice
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
        // Remove the notification if the user accepts the prompt
        removeAddToHomeScreenNotification();
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
  }
}

// Function to remove the "Add to Home Screen" notification
function removeAddToHomeScreenNotification() {
  const notificationElement = document.getElementById('add-to-home-notification');
  if (notificationElement) {
    // Remove the notification element from the document body
    document.body.removeChild(notificationElement);
  }
}
