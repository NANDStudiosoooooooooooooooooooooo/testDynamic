var logo = document.getElementById("logo");
        var backgroundImage = new Image();
        backgroundImage.src = '';

        backgroundImage.onerror = function() {
            logo.style.backgroundImage = 'none';
            logo.style.color = '#000';
        }

        backgroundImage.onload = function() {
            logo.style.backgroundImage = 'url(backg1no.jpg)';
        }

        function resizeLogo() {
            var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var fontSize = (screenWidth / 1080) * (12 * 0.65) + 'em';
            logo.style.fontSize = fontSize;
            const introVideo = document.getElementById('introVideo');
            const body = document.body;
            
                // Überprüfe die Bildschirmbreite
                if (window.innerWidth >= 1200) {
                    // Starte das Video
                    const video = document.getElementById('introVideo');
                    video.addEventListener('ended', function () {
                        // Entferne das Video-Div nach Abschluss des Videos
                        introVideo.parentNode.removeChild(introVideo);
                        // Erlaube das Scrollen nach Abschluss des Videos
                        body.style.overflow = 'auto';
                    });
            
                    // Verhindere das Scrollen, solange das Video spielt
                    body.style.overflow = 'hidden';
                } else {
                    // Verstecke das Video-Div, wenn die Bildschirmbreite kleiner als 1200 ist
                    introVideo.style.display = 'none';
                    body.style.overflow = 'auto';
                }
        }

        window.onload = resizeLogo;
        window.onresize = resizeLogo;   

        const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        let prevScrollPos = window.pageYOffset;
        
if (isMobileDevice) {
    const serviceLinks = document.querySelectorAll('.services');

    // Schließe das Dropdown-Menü, wenn auf einen anderen Bereich geklickt wird
    document.addEventListener('click', function(event) {
        serviceLinks.forEach(link => {
            const dropdown = link.querySelector('.drop-down');
            const dropdownIcon = link.querySelector('.dropdown-icon');

            if (!link.contains(event.target)) {
                dropdown.style.display = 'none';
                dropdownIcon.style.transform = 'rotate(0deg)';
            }
        });
    });

    serviceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.stopPropagation();
            
            const dropdown = this.querySelector('.drop-down');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

            // Füge die Pfeilanimation hinzu
            const dropdownIcon = this.querySelector('.dropdown-icon');
            dropdownIcon.style.transform = dropdown.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
} 

document.addEventListener('DOMContentLoaded', function () {
    // Überprüfe, ob es sich um einen Seitenneuladen handelt (nicht durch Linkklick)
    if (performance.navigation.type === 1) {
        // Scrolle die Seite nach oben
        window.scrollTo(0, 0);
    }
});