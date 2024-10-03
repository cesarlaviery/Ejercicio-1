const priceButton = document.querySelectorAll(".ice-cream__button");
const firstModal = document.querySelector("#modal-1");
const modalTitle = document.querySelector(".modal__title");
const modalParagraph = document.querySelector(".modal__paragraph");
const firstCloseButton = document.querySelector("#close-button-1");
const informationButton = document.querySelector(".ice-cream-input__icon");
const amountInput = document.querySelector(".ice-cream-input__input");
const SecondModal = document.querySelector("#modal-2");
const SecondCloseButton = document.querySelector("#close-button-2");
const iceCreamModal = document.querySelector("#ice-cream-list-modal");
const listItemFirts = document.querySelector("#ice-creams-list__item-1");
const listItemSecond = document.querySelector("#ice-creams-list__item-2");

priceButton.forEach(boton => {
    boton.addEventListener("mousedown", () => {
        boton.textContent = "Error";
        boton.classList.add("ice-cream__button--active");
    });

    boton.addEventListener("mouseup", () => {
        boton.textContent = "Precio"
        boton.classList.remove("ice-cream__button--active");
        firstModal.classList.add("mostrar-modal");

        modalTitle.textContent = "¡Error en los precios!";
        modalParagraph.textContent = `Esta opción esta teniendo problemas ultimamente, por favor verifique los precios 
        en la tabla.`;
    });
});

firstCloseButton.addEventListener("click", () => {
    firstModal.classList.remove("mostrar-modal");
});

informationButton.addEventListener("click", () => {
    firstModal.classList.add("mostrar-modal");

    modalTitle.textContent = "¡Elige tu helado más lujoso!";
    modalParagraph.textContent = `¿Quieres darte un gusto? Indícanos cuánto dinero tienes disponible y te mostraremos el 
                                helado más delicioso que puedes comprar con ese presupuesto.`;
});

amountInput.addEventListener("keydown", (event) => {

    if (event.keyCode === 13) {
        validarNumero(amountInput);
    };

});

SecondCloseButton.addEventListener("click", () => {
    SecondModal.classList.remove("mostrar-modal");
    iceCreamModal.innerHTML= " "
});

function validarNumero(input) {
    const regex = /^[1-9]\d*(\.\d+)?$/;
    const amount = amountInput.value;

    if (!regex.test(input.value)) {

        input.value = input.value.replace(/[^0-9]/g, '');

        firstModal.classList.add("mostrar-modal");

        modalTitle.textContent = "¡Error!";
        modalParagraph.textContent = `Por favor, ingrese un número válido.`;

    } else {
    
        if(amount >= 3.5 && amount < 4.5) {
            SecondModal.classList.add("mostrar-modal");
            iceCreamModal.appendChild(listItemFirts.cloneNode(true));
            iceCreamModal.appendChild(listItemSecond.cloneNode(true));
        } else if (amount >= 4.5 && amount < 5) {
        } else if (amount >= 5 && amount < 6) {

        } else if (amount >= 6 && amount < 6.5) {
            
        } else if (amount >= 6.5) {
            
        };

    };
};