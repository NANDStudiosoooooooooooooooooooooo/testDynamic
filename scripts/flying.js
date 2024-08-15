document.addEventListener("DOMContentLoaded", function() {
    const scoreElement = document.getElementById('score');
    const imageWidth = 64; // Breite jedes Bildes
    let score = 0;

    // Anzahl der Bilder, die du fliegen lassen möchtest
    const numImages = 10;

    // Pfade zu den Bildern
    const imagePaths = [
        '/media/SupermarketSimulatorIcon.png',
        '/media/bana.png',
        '/media/apple.png',
        '/media/apple2.png',
        '/media/avok.png',
    ];

    // Funktion zum Erstellen und Hinzufügen von Bildern
    function addImage() {
        let left = Math.random() * (document.documentElement.clientWidth - imageWidth); // Zufällige horizontale Position
        let top = window.innerHeight + Math.random() * 100; // Startposition unterhalb des Bildschirms

        const image = document.createElement('div');
        image.classList.add('image');
        image.style.backgroundImage = `url(${imagePaths[Math.floor(Math.random() * imagePaths.length)]})`;
        image.style.left = `${left}px`;
        image.style.top = `${top}px`;
        const animationDuration = Math.random() * 10 + 5;
        image.style.animationDuration = `${animationDuration}s`; // Zufällige Geschwindigkeit

        // Event-Handler für das Anklicken des Bildes hinzufügen
        image.addEventListener('click', function() {
            image.remove(); // Bild entfernen
            score++; // Score erhöhen
            updateScore();
        });

        // Bild nach Ende der Animation entfernen und Score reduzieren
        setTimeout(function() {
            if (document.body.contains(image)) {
                image.remove();
                score = Math.max(score - 10, 0); // Score um 10 verringern, aber nicht unter 0
                updateScore();
            }
        }, animationDuration * 1000); // Zeit in Millisekunden

        document.body.appendChild(image);
    }

    // Funktion zum Aktualisieren des Score-Textes
    function updateScore() {
        if (score === 0) {
            scoreElement.textContent = 'SUPERMARKET';
        } else {
            scoreElement.textContent = `Score: ${score}`;
        }
    }

    // Initialer Score-Text
    updateScore();

    // Bilderpositionen beim Laden der Seite initialisieren
    for (let i = 0; i < numImages; i++) {
        addImage();
    }

    // Funktion zum kontinuierlichen Hinzufügen von Bildern
    setInterval(() => {
        addImage();
    }, 2000); // Alle 2 Sekunden ein neues Bild hinzufügen

    // Event-Handler für Größenänderungen des Fensters hinzufügen
    window.addEventListener('resize', () => {
        const existingImages = document.querySelectorAll('.image');
        existingImages.forEach(image => {
            let left = Math.random() * (document.documentElement.clientWidth - imageWidth); // Zufällige horizontale Position
            image.style.left = `${left}px`;
        });
    });
});
