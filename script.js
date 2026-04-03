console.log("JS loaded");

// FADE-IN ANIMATION
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

// DARK MODE
function toggleDark() {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("darkBtn");

    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        btn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}

// LOAD SAVED THEME
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        document.getElementById("darkBtn").textContent = "☀️";
    }
}

// TIMER
let timeLeft = 300;

function startTimer() {
    const timer = document.getElementById("timer");

    if (!timer) return;

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

// REPORT
function reportUser() {
    alert("User reported. Thank you for keeping CalmConnect safe 💙");
}
//SOS popup
function showSOS() {
    const popup = document.getElementById("sos-popup");
    if (popup) {
        popup.style.display = "block";
    }
}

function closeSOS() {
    const popup = document.getElementById("sos-popup");
    if (popup) {
        popup.style.display = "none";
    }
}

// TYPING EFFECT
function typingEffect() {
    const typing = document.getElementById("typing");
    if (!typing) return;

    setTimeout(() => {
        typing.style.display = "block";
    }, 2000);

    setTimeout(() => {
        typing.style.display = "none";
    }, 5000);
}

document.addEventListener("DOMContentLoaded", function () {

    const matchBtn = document.getElementById("matchBtn");
    const sosBtn = document.getElementById("sosBtn");
    const closeBtn = document.getElementById("closeSOS");

    if (matchBtn) {
        matchBtn.addEventListener("click", startMatching);
    }

    if (sosBtn) {
        sosBtn.addEventListener("click", showSOS);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeSOS);
    }

});

// RUN EVERYTHING SAFELY
window.addEventListener("load", () => {
    showOnScroll();
    startTimer();
    loadTheme();
    typingEffect();
});

window.addEventListener("scroll", showOnScroll);

document.addEventListener("DOMContentLoaded", function () {

    const matchBtn = document.getElementById("matchBtn");
    const sosBtn = document.getElementById("sosBtn");
    const closeBtn = document.getElementById("closeSOS");

    const loader = document.getElementById("loader");
    const popup = document.getElementById("sos-popup");

    // START MATCHING
   document.addEventListener("DOMContentLoaded", function () {

    const matchBtn = document.getElementById("matchBtn");
    const loader = document.getElementById("loader");

    if (matchBtn && loader) {
        matchBtn.addEventListener("click", function () {

            console.log("Button clicked"); // DEBUG

            loader.style.display = "block";

            setTimeout(() => {
                loader.innerHTML = "Connected 💙";
            }, 3000);
        });
    }

});

    // SOS OPEN
    if (sosBtn) {
        sosBtn.addEventListener("click", function () {
            popup.style.display = "block";
        });
    }

    // SOS CLOSE
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }

});
