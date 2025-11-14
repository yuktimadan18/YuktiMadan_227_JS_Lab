// ui.js — handles dynamic UI and responsive design behavior

// Function to change background color based on screen size
export function handleViewportChange() {
    // If screen width < 600px, apply a light blue background
    if (window.innerWidth < 600) {
        document.body.style.background = '#f0f8ff';
    } else {
    // For larger screens, use white background
        document.body.style.background = 'white';
    }
}

// Function to add dynamic behavior (event delegation)
export function addDynamicSessions() {
    const sessionsDiv = document.getElementById('sessions');
    // Add event listener to parent container (event delegation)
    sessionsDiv.addEventListener('click', (e) => {
        // Check if clicked element has class "session"
        if (e.target.classList.contains('session')) {
            alert("You selected: " + e.target.textContent);
        }
    });
}