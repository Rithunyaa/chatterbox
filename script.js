const userInput = document.getElementById('userInput');
const messagesContainer = document.getElementById('messages');

// 1. The ELIZA Reflection function: flips pronouns
function reflect(text) {
    const words = text.toLowerCase().split(' ');
    const swaps = {
        "i": "you",
        "me": "you",
        "my": "your",
        "mine": "yours",
        "am": "are",
        "you": "I",
        "your": "my",
        "yours": "mine",
        "are": "am"
    };

    // Replace each word if it exists in our swaps dictionary
    const reflectedWords = words.map(word => swaps[word] || word);
    return reflectedWords.join(' ');
}

// 2. The core message handling function
function sendMessage() {
    const text = userInput.value.trim();
    
    if (text === '') return;

    // Show user message on screen
    messagesContainer.innerHTML += `
        <div class="message user-message">${text}</div>
    `;

    userInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 3. Generate the ELIZA response after a short delay
    setTimeout(function() {
        const reflectedText = reflect(text);
        
        // Clean ELIZA template (only outputting the reflected question)
        const elizaReply = `Why do you say that ${reflectedText}?`;

        messagesContainer.innerHTML += `
            <div class="message bot-message">${elizaReply}</div>
        `;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);
}

// 4. Enter key listener
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});