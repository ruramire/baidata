// API Key de OpenAI (reemplazar con tu clave real)
const OPENAI_API_KEY = '';

// Función para cambiar el contenido mostrado
function changeContent(page) {
    const content = document.getElementById('content');
    const buttons = document.querySelectorAll('.bottom-bar button');
    
    // Cambiar el contenido en función del botón seleccionado
    switch(page) {
        case 'home':
            content.textContent = 'Inicio';
            break;
        case 'search':
            content.textContent = 'Buscar';
            break;
        case 'notifications':
            content.textContent = 'Notificaciones';
            break;
        case 'messages':
            content.textContent = 'Mensajes';
            break;
        case 'settings':
            content.textContent = 'Ajustes';
            break;
    }

    // Cambiar la clase activa en los botones
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="changeContent('${page}')"]`).classList.add('active');
}

// Función para empezar la conversación por voz
function startVoiceChat() {
    // Inicia el reconocimiento de voz
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'es-ES'; // Configura el idioma de la voz

    recognition.start();

    recognition.onresult = async (event) => {
        const userSpeech = event.results[0][0].transcript; // Transcripción del habla
        console.log('Usuario dijo:', userSpeech);
        const chatGptResponse = await getChatGptResponse(userSpeech);
        speakText(chatGptResponse);
    };

    recognition.onerror = (event) => {
        console.error('Error en el reconocimiento de voz:', event.error);
    };
}

// Función para obtener la respuesta de ChatGPT
async function getChatGptResponse(userMessage) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [{ role: 'user', content: userMessage }],
        }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

// Función para convertir texto a voz
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'es-ES';
    window.speechSynthesis.speak(speech);
}
