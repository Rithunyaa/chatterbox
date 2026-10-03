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

    const reflectedWords = words.map(word => swaps[word] || word);
    return reflectedWords.join(' ');
}

// 2. Custom Response Framework
function getCustomResponse(text) {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('greetings')) {
        return "This is a placeholder for a multi-input response.";
    }

    if (lowerText === 'what are you') {
        return "This is a placeholder for a single exact-match response.";
    }

    return null; // Returns null if no custom rule matches
}

// 3. The core message handling function
function sendMessage() {
    const text = userInput.value.trim();
    
    if (text === '') return;

    // Show user message on screen
    messagesContainer.innerHTML += `
        <div class="message user-message">${text}</div>
    `;

    userInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 4. Generate response after a short delay
    setTimeout(function() {
        // FIRST: Check if there is a custom response
        let botReply = getCustomResponse(text);

        // SECOND: If no custom response matched (it's null), use ELIZA reflection
        if (botReply === null) {
            const reflectedText = reflect(text);
            botReply = `Why do you say that ${reflectedText}?`;
        }

        // Show the bot's response on screen
        messagesContainer.innerHTML += `
            <div class="message bot-message">${botReply}</div>
        `;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);
}

// 5. Enter key listener
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});