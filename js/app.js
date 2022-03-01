const activecube = document.querySelector(".button");
const cube = document.querySelector(".cube");

activecube.addEventListener('click', ()=> {
    cube.classList.toggle("active-cube");
});