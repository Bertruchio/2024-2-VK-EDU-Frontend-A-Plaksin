import './index.css';

mocks = `
        <div class="chat__message chat__message--received">
            <p class="chat__message-text">Я тут кое-что нарисовала. Посмотри как будет время.</p>
            <div class="chat__message-time">
                10:53
                <div class="chat__message-status">
                    <img src="src/images/check-icon.svg" alt="checked" class="chat__message-status">
                </div>
            </div>
        </div>
        <div class="chat__message chat__message--image">
            <div class="chat__message-photo">
                <img src="src/images/j-drawing.jpg" alt="Image message">
                <div class="chat__message-time">
                    10:53
                    <div class="chat__message-status">
                        <img src="src/images/check-icon.svg" alt="checked" class="chat__message-status">
                    </div>
                </div>
            </div>
        </div>
        <div class="chat__message chat__message--received">
            <p class="chat__message-text">Тебе нравится как я нарисовала?</p>
            <div class="chat__message-time">
                10:53
                <div class="chat__message-status">
                    <img src="src/images/check-icon.svg" alt="checked" class="chat__message-status">
                </div>
            </div>
        </div>
        <div class="chat__message chat__message--sent">
            <p class="chat__message-text">Горжусь тобой! Ты крутая!</p>
            <div class="chat__message-time">
                10:53
                <div class="chat__message-status">
                    <img src="src/images/check-icon.svg" alt="checked" class="chat__message-status">
                </div>
            </div>
        </div>
        <div class="chat__message chat__message--sent">
            <p class="chat__message-text">Джен, ты молодец!</p>
            <div class="chat__message-time">
                10:53
                <div class="chat__message-status">
                    <img src="src/images/check-icon.svg" alt="checked" class="chat__message-status">
                </div>
            </div>
        </div>
        `

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.chat__message-form');
    const input = document.querySelector('.chat__form-input');
    const chatWindow = document.querySelector('.chat__window');

    // Проверка наличия элементов
    if (!form || !input || !chatWindow) {
        console.error("Не удалось найти необходимые элементы!");
        return;
    }

    form.addEventListener('submit', handleSubmit);
    form.addEventListener('keypress', handleKeyPress);

    function handleSubmit(event) {
        event.preventDefault();
        const messageText = input.value.trim();

        if (messageText) {
            addMessageToChat(messageText);
            saveMessage(messageText);
            input.value = '';
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            form.dispatchEvent(new Event('submit'));
        }
    }

    function saveMessage(message) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
    }

    function addMessageToChat(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat__message', 'chat__message--sent');

        const messageTextElement = document.createElement('p');
        messageTextElement.classList.add('chat__message-text');
        messageTextElement.innerText = message;
        messageElement.appendChild(messageTextElement);

        const messageTimeElement = document.createElement('div');
        messageTimeElement.classList.add('chat__message-time');
        messageTimeElement.innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const messageStatusElement = document.createElement('div');
        messageStatusElement.classList.add('chat__message-status');
        const statusIcon = document.createElement('img');
        statusIcon.src = 'src/images/check-icon.svg';
        statusIcon.alt = 'checked';
        statusIcon.classList.add('chat__message-status');
        messageStatusElement.appendChild(statusIcon);
        messageTimeElement.appendChild(messageStatusElement);

        messageElement.appendChild(messageTimeElement);

        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        
        // Удаляем все сообщения перед загрузкой
        chatWindow.innerHTML = ''; 

        const template = document.createElement('template');
        template.innerHTML = mocks.trim();
        chatWindow.appendChild(template.content);
        
        // Загружаем сообщения при первой загрузке
        messages.forEach(message => addMessageToChat(message));
    }

    loadMessages();
});
