document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-slider img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Automatically change images every 3 seconds
    setInterval(nextImage, 3000);

    // Initial display
    showImage(currentIndex);
});
