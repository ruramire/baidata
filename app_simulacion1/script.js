document.addEventListener('DOMContentLoaded', function() {
    changeContent('home'); // Cargar "home" al inicio
});

function changeContent(page) {
    const content = document.getElementById('content');
    const buttons = document.querySelectorAll('.bottom-bar button');
    
    // Cambiar el contenido en función del botón seleccionado
    switch(page) {
        case 'home':
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
            content.innerHTML = `
                <img src="img/ai/ai_sound.jpg" alt="Imagen estática del AI" id="aiImage" style="width: 95%; height: auto; margin-top: 150px; cursor: pointer;">
                <audio id="aiAudio" src="media/ai_conversation.mp3" preload="auto"></audio>
            `;

            const aiImage = document.getElementById('aiImage');
            const aiAudio = document.getElementById('aiAudio');

            // Al hacer clic en la imagen, cambia a GIF y reproduce el audio
            aiImage.addEventListener('click', function() {
                // Si el audio está pausado o detenido, inicia o reanuda el audio
                if (aiAudio.paused) {
                    if (aiAudio.currentTime === aiAudio.duration) {
                        // Si el audio ya terminó, reinicia desde el principio
                        aiAudio.currentTime = 0;
                    }
                    aiAudio.play();
                    aiImage.src = 'img/ai/ai_sound.gif';  // Cambia la imagen a GIF
                    aiImage.alt = 'Animación de AI';
                } else {
                    // Si el audio está sonando, lo pausa
                    aiAudio.pause();
                    aiImage.src = 'img/ai/ai_sound.jpg';  // Vuelve a la imagen estática
                    aiImage.alt = 'Imagen estática de AI';
                }
            });

            // Cuando el audio termina, cambia el GIF de nuevo a la imagen estática
            aiAudio.addEventListener('ended', function() {
                aiImage.src = 'img/ai/ai_sound.jpg';
                aiImage.alt = 'Imagen estática de AI';
            });
            break;

        case 'documents':
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