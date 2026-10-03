const userInput = document.getElementById('userInput');
const messagesContainer = document.getElementById('messages');


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

function sendMessage() {
    const text = userInput.value.trim();
    
    if (text === '') return;

    messagesContainer.innerHTML += `
        <div class="message user-message">${text}</div>
    `;

    userInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(function() {
        const reflectedText = reflect(text);
        
        const elizaReply = `I don't understand ${reflectedText}?`;

        messagesContainer.innerHTML += `
            <div class="message bot-message">${elizaReply}</div>
        `;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);
}

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});