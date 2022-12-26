const widget = document.querySelector('.chat-widget'),
    input = document.getElementById('chat-widget__input');
let messages = document.getElementById( 'chat-widget__messages' );

widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active');
});

function send(text, addedClass='') {
    const time = new Date(),
        timeStr = time.toLocaleTimeString().substring(0, 5);
    messages.innerHTML += `
    <div class= "message ${addedClass}">
        <div class="message__time">${timeStr}</div>
        <div class="message__text">${text}</div>
    </div>
    `;
    const container = document.querySelector('.chat-widget__messages-container');
    container.scrollTop = container.scrollHeight;
}

function getAnswer() {
    const answers = [
        'У меня есть сердце и душаа',
        'Очки ннадо?',
        'Твоя моя не понимать',
        'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
        'До свидания, наш ласковый мишка!',
        'Нам такие клиенты не нужны!'
    ]; 
    const index = Math.floor(Math.random() * answers.length);
    return answers[index];
}

input.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && input.value) {
        send(input.value, 'message_client');
        input.value = '';
        const answer = getAnswer();
        setTimeout(() => {
            send(answer);
        }, 1000);
    }
});