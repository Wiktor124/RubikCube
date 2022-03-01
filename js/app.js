const cubeActive = document.querySelector(".button");
const cube = document.querySelector(".cube");

cubeActive.addEventListener('click', () => {
    cube.classList.toggle("active-cube");
});

// Puto el que lo lea jajaja