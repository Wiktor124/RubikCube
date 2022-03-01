// No funciona el cubo por el momento, pero ya va funcionar con lo que voy hacer

const activeCube = document.querySelector(".button");
const cube = document.querySelector(".cube");

activeCube.addEventListener('click', ()=> {
    cube.classList.toggle("active-cube");
});