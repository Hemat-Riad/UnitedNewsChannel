
// Select all images inside div4
const images = document.querySelectorAll("#div4 img");
let current = 0;

// Function to show only the image at the given index
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}

// Show next image in slider
function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

// Show previous image in slider
function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

// Show the first image when the page loads
showImage(current);



