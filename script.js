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

function getCustomResponse(text) {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('greetings')) {
        return "This is a placeholder for a multi-input response.";
    }

    if (lowerText === 'what are you') {
        return "This is a placeholder for a single exact-match response.";
    }

    return null; 
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
        let botReply = getCustomResponse(text);

        if (botReply === null) {
            const reflectedText = reflect(text);
            botReply = `Why do you say that ${reflectedText}?`;
        }

        messagesContainer.innerHTML += `
            <div class="message bot-message">${botReply}</div>
        `;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);
}

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});