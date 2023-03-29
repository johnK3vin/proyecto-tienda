// codigo para filtro de la pagina productos

const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menu.classList.add("notvisible");
})
