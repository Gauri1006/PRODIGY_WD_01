// Custom cute cursor
document.body.style.cursor = "url('images/cute-cursor.png'), auto";

// Countdown Timer
const countdownElement = document.getElementById("countdown");
const workshopDate = new Date("2025-07-24T16:30:00+05:30");

function updateCountdown() {
  const now = new Date();
  const diff = workshopDate - now;

  if (diff <= 0) {
    countdownElement.textContent = "Workshop has started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdownElement.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Form submission with thank-you popup (no emoji rain or confetti effects)
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("🎉 Thank you for registering!");
});
