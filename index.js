function hamburger() {
    var x = document.getElementById("nav-links");
    if (window.matchMedia(x.style.display === "none")) {
        x.style.display = "flex";
        console.log("True");
    } else {
        console.log("Error");
    }
}

function vis_none() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "flex") {
        x.style.display = "none";
        console.log("True");
    } else {
        console.log("Error");
    }
}

// Main Section1 Image Slider
let slides = document.querySelectorAll(".slide");
let counter = 0;
console.log(slides);
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}

// Function for buttons 
function goPrev() {
    if (counter != 0) {
        counter--;
        slideImage();
    }
}
function goNext() {
    if (counter <= slides.length-1) {
        counter++;
        slideImage();
    }
}