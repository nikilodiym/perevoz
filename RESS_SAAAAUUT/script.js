const elements = document.querySelectorAll(".element");

function animateElements() {
    elements.forEach((element, index) => {
        const elementOffset = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementOffset < windowHeight) {
            element.style.transform = "translateY(0)";
            element.style.opacity = 1;
            element.style.transitionDelay = `${index * 0.001}s`;
        }
    });
}

window.addEventListener("load", animateElements);
window.addEventListener("scroll", animateElements);
