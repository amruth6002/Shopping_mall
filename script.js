
window.onload = function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.slideshow img');
    const totalImages = images.length;

    // Initially set the first image as active
    if (images.length > 0) {
        images[0].classList.add('active');
    }

    function showNextImage() {
        // Remove 'active' class from the current image
        images[currentIndex].classList.remove('active');

        // Move to the next image, loop back to first if at the end
        currentIndex = (currentIndex + 1) % totalImages;

        // Add 'active' class to the new current image
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3500); // Change image every 3 seconds
};


window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) { // Adjust the value based on when you want the nav to shrink
        nav.style.height = '50px'; // New smaller height
        nav.style.padding = '0px 0px 0px 79px'; // Adjust padding as needed
    } else {
        nav.style.height = '70px'; // Original height
        nav.style.padding = '5px 0px 13px 79px'; // Original padding
    }
};