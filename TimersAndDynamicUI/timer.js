// timer.js — contains countdown and session highlight logic
// Function to start a countdown timer
export function startCountdown(duration, display) {
    let time = duration; // time in seconds
    // setInterval() runs the code every 1 second
    const timer = setInterval(() => {
        const minutes = Math.floor(time / 60); // convert seconds to minutes
        const seconds = time % 60; // remaining seconds
        // Update countdown message on the page

        display.textContent = `Next session starts in ${minutes}:${seconds < 10 ? '0' + seconds
        : seconds}`;
        time--; // decrease the timer each second
        // Stop timer when it reaches 0
        if (time < 0) {
            clearInterval(timer);
            display.textContent = "Session Started!";
        }
    }, 1000); // executes every 1000 milliseconds (1 second)
}

// Function to highlight the currently active session
export function highlightActiveSession() {
    const sessions = document.querySelectorAll('.session'); // get all session elements
    const now = new Date(); // get current date/time
    const currentHour = now.getHours(); // extract current hour (24-hour format)
    // Loop through all session divs
    sessions.forEach(session => {
        const hour = parseInt(session.dataset.time.split(':')[0]); // extract hour from data-time
        // If current hour matches session time → highlight
        if (hour === currentHour) {
            session.classList.add('active');
        } else {
            session.classList.remove('active');
        }
    });
}