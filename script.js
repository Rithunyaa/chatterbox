const userInput = document.getElementById('userInput');
    const messagesContainer = document.getElementById('messages');

    function sendMessage() {
        const text = userInput.value.trim();
        
        if (text === '') return;

        messagesContainer.innerHTML += `
            <div class="message user-message">${text}</div>
        `;

        userInput.value = '';

        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        setTimeout(function() {
            let janetReply = "I am Janet! How may I be of assistance?";
            
            const lowerText = text.toLowerCase();
            if (lowerText.includes('robot')) {
                janetReply = "Not a robot!";
            } else if (lowerText.includes('hello') || lowerText.includes('hi')) {
                janetReply = "Hi there! I am a programmed guide, not a person.";
            }


            messagesContainer.innerHTML += `
                <div class="message bot-message">${janetReply}</div>
            `;
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 500);
    }

userInput.addEventListener('keydown', function(event) {
    console.log("Key pressed:", event.key); // This will print in your browser's console
    if (event.key === 'Enter') {
        sendMessage();
    }
});