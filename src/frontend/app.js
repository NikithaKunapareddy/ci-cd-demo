// API endpoints
const API = {
    health: '/api/health',
    message: '/api/message',
    echo: '/api/echo'
};

// DOM elements
const healthStatus = document.getElementById('health-status');
const messageDiv = document.getElementById('message');
const echoForm = document.getElementById('echo-form');
const echoInput = document.getElementById('echo-input');
const echoResponse = document.getElementById('echo-response');

// Check API health
async function checkHealth() {
    try {
        const response = await fetch(API.health);
        const data = await response.json();
        healthStatus.innerHTML = `
            <strong>Status:</strong> ${data.status}<br>
            <strong>Time:</strong> ${new Date(data.timestamp).toLocaleString()}
        `;
    } catch (error) {
        healthStatus.innerHTML = '<span style="color: red;">API is not responding</span>';
    }
}

// Get message from server
async function getMessage() {
    try {
        const response = await fetch(API.message);
        const data = await response.json();
        messageDiv.textContent = data.message;
    } catch (error) {
        messageDiv.textContent = 'Failed to load message';
    }
}

// Handle echo form submission
echoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = echoInput.value.trim();
    
    if (!message) return;

    try {
        const response = await fetch(API.echo, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        
        const data = await response.json();
        echoResponse.innerHTML = `
            <strong>Received:</strong> ${data.received.message}<br>
            <strong>Time:</strong> ${new Date(data.timestamp).toLocaleString()}
        `;
        echoInput.value = '';
    } catch (error) {
        echoResponse.textContent = 'Failed to send message';
    }
});

// Initialize
checkHealth();
getMessage();

// Refresh health status every 30 seconds
setInterval(checkHealth, 30000); 