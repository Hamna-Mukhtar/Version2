// Function to show the modal when the page loads
window.onload = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
};

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Function to handle back-to-top button visibility
var backToTopButton = document.querySelector(".back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hamburger menu toggle for mobile view
var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});
