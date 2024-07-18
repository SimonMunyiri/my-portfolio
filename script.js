// Get the floating action button
const fabButton = document.getElementById('fab');

// Function to toggle the visibility of the floating action button
function toggleFabVisibility() {
    if (window.scrollY > 100) {
        fabButton.classList.add('visible');
        fabButton.classList.remove('hidden');
    } else {
        fabButton.classList.add('hidden');
        fabButton.classList.remove('visible');
    }
}

// Function to scroll to the top of the page when FAB is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll event listener to toggle FAB visibility
window.addEventListener('scroll', toggleFabVisibility);
