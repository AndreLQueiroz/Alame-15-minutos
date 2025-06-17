let interval;
let timeLeft = 15 * 60; // 15 minutos em segundos

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function startCountdown() {
  clearInterval(interval); // Reinicia se já estiver rodando
  timeLeft = 15 * 60;

  interval = setInterval(() => {
    document.getElementById('clock').textContent = formatTime(timeLeft);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      document.getElementById('clock').textContent = "00:00";
      alert("Tempo esgotado!");
    }
  }, 1000);
}

// Mostra o tempo inicial ao carregar
document.getElementById('clock').textContent = formatTime(timeLeft);
