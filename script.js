window.onload = function() {
    // Setup for `.slideshow img`
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

    setInterval(showNextImage, 3500); // Change image every 3.5 seconds

    // Setup for `.item1 img`
    let currentIndexItem1 = 0;
    const item1Images = document.querySelectorAll('.item img');
    const totalItem1Images = item1Images.length;

    function showNextImageItem1() {
        // Remove 'active' class from the current image
        item1Images[currentIndexItem1].classList.remove('active');

        // Move to the next image, loop back to first if at the end
        currentIndexItem1 = (currentIndexItem1 + 1) % totalItem1Images;

        // Add 'active' class to the new current image
        item1Images[currentIndexItem1].classList.add('active');
    }

    // Initially set the first image as active
    if (item1Images.length > 0) {
        item1Images[0].classList.add('active');
    }

    setInterval(showNextImageItem1, 5000); // Change image every 3.5 seconds
};

// Ensure the rest of your JavaScript code, including the showNextImage and showNextImageItem1 functions, follows this block.


 


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

