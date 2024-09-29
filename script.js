const buttonPrice = document.querySelectorAll(".ice-cream__button");
const modal = document.querySelector(".modal-container");
const buttonClose = document.querySelector(".modal__close-button");

buttonPrice.forEach(boton => {
    boton.addEventListener("mousedown", () => {
        boton.textContent = "Error"
        boton.classList.add("ice-cream__button--active");
    });

    boton.addEventListener("mouseup", () => {
        boton.textContent = "Precio"
        boton.classList.remove("ice-cream__button--active");
        modal.classList.add("mostrar-modal");
    });
});

buttonClose.addEventListener("click", () => {
    modal.classList.remove("mostrar-modal")
});