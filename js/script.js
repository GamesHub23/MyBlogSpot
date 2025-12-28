// Start Menu toggle
const startButton = document.getElementById('start-button');
const startMenu = document.getElementById('start-menu');

startButton.addEventListener('click', () => {
  if(startMenu.style.display === 'block') {
    startMenu.style.display = 'none';
  } else {
    startMenu.style.display = 'block';
  }
});

// Ceas Windows 7
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if(minutes < 10) minutes = '0' + minutes;
  clock.textContent = hours + ':' + minutes;
}
setInterval(updateClock, 1000);
updateClock();
