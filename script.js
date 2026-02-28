// Get name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

// Update message
const message = document.getElementById("message");

if (name) {
  message.textContent = `Wishing you a wonderful day, ${name}! 🎂`;
} else {
  message.textContent = "Wishing you a wonderful birthday! 🎂";
}
