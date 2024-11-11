// API Key de OpenAI (reemplazar con tu clave real)
const OPENAI_API_KEY = '';

// Función para cambiar el contenido mostrado
function changeContent(page) {
    const content = document.getElementById('content');
    const result = document.getElementById('result');    
    const buttons = document.querySelectorAll('.bottom-bar button');
    const stick = document.getElementById('stick');  
    
    // Cambiar el contenido en función del botón seleccionado
    switch(page) {
        case 'home':
            result.innerHTML = `
                <div id="conversation">
                    <div id="userMessage" style="display: none;">
                        <img src="img/microphone.gif" alt="User" style="width:100px; height: 100px;">
                        <p id="userText"></p>
                    </div>
                    <div id="botMessage" style="display: none;">
                        <img src="img/speaking.gif" alt="Bot" style="width:100px; height: 100px;">
                        <p id="botText"></p>
                    </div>
                </div>
            `;

            // Simulate conversation with a timer
            setTimeout(() => {
                document.getElementById('botMessage').style.display = 'none';
                document.getElementById('botText').style.display = 'none'
                document.getElementById('userMessage').style.display = 'block';
                document.getElementById('userText').style.display = 'block';
                document.getElementById('stick').style.display = 'block';
                document.getElementById('stick').innerHTML = 'tengo que aprender sobre ids';
                const audio = new Audio('audios/u1.mp3');
                audio.play();
                // Detener el audio cuando se cambie de página
                buttons.forEach(button => {
                    button.addEventListener('click', () => {
                        audio.pause();
                        audio.currentTime = 0;
                    });
                });                         
            }, 1000); // 3 seconds
 

            setTimeout(() => {
                document.getElementById('userMessage').style.display = 'none';
                document.getElementById('userText').style.display = 'none';
                document.getElementById('botMessage').style.display = 'block';
                document.getElementById('botText').style.display = 'block';
                document.getElementById('stick').style.display = 'block';
                document.getElementById('stick').innerHTML = `
                
            <p class="assistant">¡Claro! Me alegra ayudarte a entender mejor los conceptos de IDS (International Data Spaces).</p>
            <p class="assistant"><br>Para empezar, <br>¿qué conocimientos tienes previos sobre la digitalización y el ámbito académico? <br>¿Has oído hablar de la reindustrialización de la economía nacional y el papel de la industria española en sectores clave?</p>
            <p class="assistant"><br>También me gustaría saber: <br>¿Qué entiendes por "espacios de datos" (Data Spaces)? <br>¿Crees que es algo relacionado con la seguridad, la privacidad o la interoperabilidad de datos?</p>
            `;
            const audio = new Audio('audios/u2.mp3');
            audio.play();
            // Detener el audio cuando se cambie de página
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    audio.pause();
                    audio.currentTime = 0;
                });
            });            
            }, 4000); // 3 seconds + 33 seconds


            // Simulate conversation with a timer
            setTimeout(() => {
                document.getElementById('botMessage').style.display = 'none';
                document.getElementById('botText').style.display = 'none'
                document.getElementById('userMessage').style.display = 'block';
                document.getElementById('userText').style.display = 'block';
                document.getElementById('stick').style.display = 'block';
                document.getElementById('stick').innerHTML = 'pues la verdad es que no se nada, se sobre la digitalización de datos, pero tampoco es que sea un experto. el resto de cosas no las se';
                const audio = new Audio('audios/u3.mp3');
                audio.play();
                // Detener el audio cuando se cambie de página
                buttons.forEach(button => {
                    button.addEventListener('click', () => {
                        audio.pause();
                        audio.currentTime = 0;
                    });
                });                         
            }, 35000); // 36 seconds + 11 seconds
 
            setTimeout(() => {
                document.getElementById('userMessage').style.display = 'none';
                document.getElementById('userText').style.display = 'none';
                document.getElementById('botMessage').style.display = 'block';
                document.getElementById('botText').style.display = 'block';
                document.getElementById('stick').style.display = 'block';
                document.getElementById('stick').innerHTML = `
            <p class="assistant">¡No hay problema! La digitalización de datos es un tema en constante evolución y puede ser complejo. Empecemos desde cero.</p>
            <p class="assistant">Un espacio de datos (Data Space) es una plataforma que permite la interconexión y el intercambio de datos entre diferentes entidades, como empresas, instituciones públicas y organizaciones. El objetivo principal es facilitar la colaboración y la innovación a través del uso compartido de datos.</p>
            <p class="assistant">Imagina un mercado de datos donde las empresas pueden compartir sus datos con otras, pero también pueden establecer políticas de uso para controlar cómo se utilizan esos datos. Esto permite una mayor eficiencia y seguridad en la gestión de los datos.</p>
             `;
            const audio = new Audio('audios/u4.mp3');
            audio.play();
            // Detener el audio cuando se cambie de página
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    audio.pause();
                    audio.currentTime = 0;
                });
            });            
            }, 46000); // 47 seconds + 41 seconds

            setTimeout(() => {
                document.getElementById('userMessage').style.display = 'none';
                document.getElementById('userText').style.display = 'none';
                document.getElementById('botMessage').style.display = 'block';
                document.getElementById('botText').style.display = 'block';
                document.getElementById('stick').style.display = 'block';
                document.getElementById('stick').innerHTML = `
            <p class="assistant">En el ámbito empresarial, los espacios de datos pueden ayudar a:</p>
            <ul class="assistant">
                <li>Fomentar la colaboración entre empresas.</li>
                <li>Apoyar la innovación y la generación de valor a través del uso compartido de datos.</li>
                <li>Mejorar la toma de decisiones estratégicas con base en datos precisos.</li>
            </ul>
            <p class="assistant">En cuanto al gobierno, los espacios de datos pueden ayudar a:</p>
            <ul class="assistant">
                <li>Facilitar el acceso a grandes volúmenes de datos públicos.</li>
                <li>Incentivar la publicación de datos abiertos y transparentes.</li>
                <li>Suministrar información valiosa para la toma de decisiones políticas.</li>
            </ul>
            <p class="assistant">¿Te gustaría saber más sobre cómo funcionan los espacios de datos o cómo pueden ser utilizados en diferentes contextos?</p>
           `;
            const audio = new Audio('audios/u5.mp3');
            audio.play();
            // Detener el audio cuando se cambie de página
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    audio.pause();
                    audio.currentTime = 0;
                });
            });            
            }, 85000); // 88 seconds + 40 seconds


            

            content.textContent = '';
/*             result.innerHTML = '<br>' +
            '<h1>Waiting</h1><p><img src="img/speak.png" alt="Home" style="width:250px; height: 250px;">.</p>';
 */            content.appendChild(result);

            break;
        case 'podcast':
            document.getElementById('stick').style.display = 'none';

            content.textContent = '';
            result.innerHTML = '<br>' +
            '<h1>Podcast</h1>';
            const audio = new Audio('src/podcast.mp3');
            audio.play();
            // Detener el audio cuando se cambie de página
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    audio.pause();
                    audio.currentTime = 0;
                });
            });
            content.appendChild(result);

            break;            
        case 'search':
            document.getElementById('stick').style.display = 'none';
            content.textContent = 'Buscar';
            result.innerHTML = '<br>';
            content.appendChild(result);
            break;
        case 'notifications':
            document.getElementById('stick').style.display = 'none';
            content.textContent = 'Notificaciones';
            result.innerHTML = '<br>';
            content.appendChild(result);
            break;
        case 'messages':
            document.getElementById('stick').style.display = 'none';
            content.textContent = 'Mensajes';
            result.innerHTML = '<br>';
            content.appendChild(result);
            break;
        case 'settings':
            document.getElementById('stick').style.display = 'none';
            content.textContent = 'Ajustes';
            result.innerHTML = '<br>';
            content.appendChild(result);
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
