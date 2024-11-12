document.addEventListener('DOMContentLoaded', function() {
    changeContent('home'); // Cargar "home" al inicio
});

function changeContent(page) {
    const content = document.getElementById('content');
    const buttons = document.querySelectorAll('.bottom-bar button');
    const result = document.getElementById('result');    
    const stick = document.getElementById('stick');  


    // Cambiar el contenido en función del botón seleccionado
    switch(page) {
        case 'home':
            document.getElementById('stick').style.display = 'none';
            content.innerHTML = `
                <div id="imageContainer">
                    <img src="img/home/image1.png" alt="Imagen 1">
                    <img src="img/home/image2.png" alt="Imagen 2">
                    <img src="img/home/image3.png" alt="Imagen 3">
                    <img src="img/home/image4.png" alt="Imagen 4">
                    <img src="img/home/image5.png" alt="Imagen 5">
                    <img src="img/home/image6.png" alt="Imagen 6">
                    <img src="img/home/image7.png" alt="Imagen 7">
                    <img src="img/home/image8.png" alt="Imagen 8">
                    <img src="img/home/image9.png" alt="Imagen 9">
                    <img src="img/home/image10.png" alt="Imagen 10">
                    <img src="img/home/image11.png" alt="Imagen 11">
                    <img src="img/home/image12.png" alt="Imagen 12">
                    <img src="img/home/image13.png" alt="Imagen 13">
                    <img src="img/home/image14.png" alt="Imagen 14">
                </div>
            `;
            break;
            
        case 'stadistics':
            document.getElementById('stick').style.display = 'none';
            content.innerHTML = `
                <div id="imageContainer">
                    <img src="img/stadistics/stadistic1.png" alt="Image 1">
                    <img src="img/stadistics/stadistic2.png" alt="Image 2">
                    <img src="img/stadistics/stadistic3.png" alt="Image 3">
                    <img src="img/stadistics/stadistic4.png" alt="Image 4">
                </div>
            `;
            break;
            
        case 'ai':
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
            }, 89000); // 88 seconds + 40 seconds


            

            content.textContent = '';
            content.appendChild(result);

            break;

        case 'documents':
            document.getElementById('stick').style.display = 'none';
            content.innerHTML = `
                <h2>Documentos</h2>
                <ul id="documentList">
                    <li><a href="#" onclick="showDocument('docs/document1.pdf')">Documento 1</a></li>
                    <li><a href="#" onclick="showDocument('docs/document2.pdf')">Documento 2</a></li>
                    <li><a href="#" onclick="showDocument('docs/document3.pdf')">Documento 3</a></li>
                </ul>
                <div id="pdfViewer"></div>
            `;
            break;
            
        case 'podcast':
            document.getElementById('stick').style.display = 'none';
            content.innerHTML = `
                <img src="img/podcast/podcast.jpg" alt="Imagen estática del podcast" id="podcastImage" style="width: 95%; height: auto; margin-top: 150px; cursor: pointer;">
                <audio id="podcastAudio" src="media/podcast.mp3" preload="auto"></audio>
            `;

            const podcastImage = document.getElementById('podcastImage');
            const podcastAudio = document.getElementById('podcastAudio');

            // Al hacer clic en la imagen, cambia a GIF y reproduce el audio
            podcastImage.addEventListener('click', function() {
                // Si el audio está pausado o detenido, inicia o reanuda el audio
                if (podcastAudio.paused) {
                    if (podcastAudio.currentTime === podcastAudio.duration) {
                        // Si el audio ya terminó, reinicia desde el principio
                        podcastAudio.currentTime = 0;
                    }
                    podcastAudio.play();
                    podcastImage.src = 'img/podcast/podcast.gif';  // Cambia la imagen a GIF
                    podcastImage.alt = 'Animación del podcast';
                } else {
                    // Si el audio está sonando, lo pausa
                    podcastAudio.pause();
                    podcastImage.src = 'img/podcast/podcast.jpg';  // Vuelve a la imagen estática
                    podcastImage.alt = 'Imagen estática del podcast';
                }
            });

            // Cuando el audio termina, cambia el GIF de nuevo a la imagen estática
            podcastAudio.addEventListener('ended', function() {
                podcastImage.src = 'img/podcast/podcast.jpg';
                podcastImage.alt = 'Imagen estática del podcast';
            });
            break;
    }

    // Cambiar la clase activa en los botones
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="changeContent('${page}')"]`).classList.add('active');
}

// Función para mostrar el documento PDF en el visor
function showDocument(pdfUrl) {
    document.getElementById('stick').style.display = 'none';
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.innerHTML = `
        <iframe src="${pdfUrl}" style="width: 100%; height: 600px;" frameborder="0"></iframe>
    `;

    // Obtener todos los elementos li
    const listItems = document.querySelectorAll('#documentList li');
    
    // Eliminar la clase active de todos los elementos li
    listItems.forEach(item => item.classList.remove('active'));
    
    // Añadir la clase active al elemento que fue clicado
    const clickedItem = [...listItems].find(item => item.querySelector('a').href === pdfUrl);
    clickedItem.classList.add('active');
}