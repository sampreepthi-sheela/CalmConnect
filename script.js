const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add('show');
        }
    });
}

// Run once when page loads
window.addEventListener('load', showOnScroll);

// Run on scroll
window.addEventListener('scroll', showOnScroll);

let timeLeft = 300; // 5 minutes

function startTimer() {
    const timer = document.getElementById("timer");

    const interval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timer.textContent = 
            `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(interval);
            alert("Session ended. Take a moment to reflect 💙");
        }
    }, 1000);
}

window.onload = startTimer;

function reportUser() {
    alert("User reported. Thank you for keeping CalmConnect safe 💙");
}

function showSOS() {
    document.getElementById("sos-popup").style.display = "block";
}

function closeSOS() {
    document.getElementById("sos-popup").style.display = "none";
}