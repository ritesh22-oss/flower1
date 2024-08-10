// Function to add a butterfly to a specific flower
document.addEventListener("DOMContentLoaded", function () {
    const butterfly = document.getElementById("butterfly");
    const flower4 = document.querySelector(".flower--4");

    // Position the butterfly near the 4th flower
    const flowerRect = flower4.getBoundingClientRect();
    butterfly.style.left = `${flowerRect.left + flowerRect.width / 2 - 25}px`; // Center the butterfly horizontally
    butterfly.style.top = `${flowerRect.top - 50}px`; // Position the butterfly above the flower
});

window.onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};
