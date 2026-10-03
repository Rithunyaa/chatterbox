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
    
    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText === ('what the fork')|| lowerText === ('what are you')|| lowerText === ('who are you')|| lowerText.includes('greetings')) {
        return "Hello! I'm Janet. I'm the informational assistant here in the good place.";
    }

    if (lowerText.includes('bad place')) {
        return "Oh, I'm sorry. That is the one topic I'm not allowed to tell you about.";
    }
    if (lowerText.includes('fun fact')) {
        return "Fun fact, all deceased members of the Portland Trailblazers basketball team are in the bad place!";
    }
    if (lowerText.includes('thank')) {
        return "Fun fact, Janet is me!";
    }
    if (lowerText === ('will you be okay after i leave')) {
        return "Yes! This will not affect me in anyway!";
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