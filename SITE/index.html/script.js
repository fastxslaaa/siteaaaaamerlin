document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('2024-12-31T23:59:59'); // Ajuste para a data e hora desejadas
    const countdown = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            countdown.textContent = 'O tempo acabou!';
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdown.textContent = `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }

    setInterval(updateCountdown, 1000);
});
