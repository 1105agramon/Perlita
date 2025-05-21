document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Inicializar el primer elemento visible
    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 10000); // Cambiar cada 3 segundos
});

function detenerCancion() {
    var audio = document.getElementById("miAudio");
    audio.pause();
    audio.currentTime = 0;
}
