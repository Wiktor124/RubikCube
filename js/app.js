
function events() {
    const activeCube = document.querySelector(".button");
    const cube = document.querySelector(".cube");

    activeCube.addEventListener('click', () => {
        cube.classList.toggle("active-cube");
    });
};

events();