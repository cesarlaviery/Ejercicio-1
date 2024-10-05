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
const iceCreamList = document.querySelectorAll(".ice-creams-list__item");
const iceCreamListItem = [];

const modalTextContent = (modalTitleText, modalParagraphText) => {
    modalTitle.textContent = modalTitleText;
    modalParagraph.textContent = modalParagraphText;
};

const showOrHideModal = (modalPosition, ClassToAdd) => {
    modalPosition.classList.toggle(ClassToAdd);
};

const cloneAndAddIceCream = (index) => {
    iceCreamModal.appendChild(iceCreamListItem[index].cloneNode(true));
};

priceButton.forEach(boton => {
    boton.addEventListener("mousedown", () => {
        boton.textContent = "Error";
        boton.classList.add("ice-cream__button--active");
    });

    boton.addEventListener("mouseup", () => {
        boton.textContent = "Precio"
        boton.classList.remove("ice-cream__button--active");
        showOrHideModal(firstModal, "mostrar-modal");
        modalTextContent(`¡Error en los precios!`, `Esta opción esta teniendo problemas ultimamente, por favor verifique 
        los precios en la tabla.`);
    });
});

firstCloseButton.addEventListener("click", () => {
    showOrHideModal(firstModal, "mostrar-modal");
});

informationButton.addEventListener("click", () => {
    showOrHideModal(firstModal, "mostrar-modal");
    modalTextContent(`¡Elige tu helado más lujoso!`, `¿Quieres darte un gusto? Indícanos cuánto dinero tienes disponible 
    y te mostraremos el helado más delicioso que puedes comprar con ese presupuesto.`);
});

amountInput.addEventListener("keydown", (event) => {

    if (event.keyCode === 13) {
        if (!SecondModal.classList.contains("mostrar-modal--ice-creams")) {
            validarNumero(amountInput);
        }
    };

});

SecondCloseButton.addEventListener("click", () => {
    showOrHideModal(SecondModal, "mostrar-modal--ice-creams");
    iceCreamModal.innerHTML = " "
});

iceCreamList.forEach((elemento) => {
    iceCreamListItem.push(elemento);
});

function validarNumero(input) {
    const regex = /^[1-9]\d*(\.\d+)?$/;
    const amount = amountInput.value;

    if (!regex.test(input.value)) {

        input.value = input.value.replace(/[^0-9]/g, '');

        showOrHideModal(firstModal, "mostrar-modal");
        modalTextContent(`¡Error!`, `Por favor, ingrese un número válido.`);

    } else {

        if (amount >= 3.5 && amount < 4.5) {
            showOrHideModal(SecondModal, "mostrar-modal--ice-creams");
            cloneAndAddIceCream(2);
            cloneAndAddIceCream(8);
        } else if (amount >= 4.5 && amount < 5) {
            showOrHideModal(SecondModal, "mostrar-modal--ice-creams");
            cloneAndAddIceCream(0);
            cloneAndAddIceCream(3);
            cloneAndAddIceCream(5);
        } else if (amount >= 5 && amount < 6) {
            showOrHideModal(SecondModal, "mostrar-modal--ice-creams");
            cloneAndAddIceCream(7);
        } else if (amount >= 6 && amount < 6.5) {
            showOrHideModal(SecondModal, "mostrar-modal--ice-creams");
            cloneAndAddIceCream(4);
            cloneAndAddIceCream(6);
        } else if (amount >= 6.5) {
            showOrHideModal(SecondModal, "mostrar-modal--ice-creams");
            cloneAndAddIceCream(1);
        } else {
            showOrHideModal(firstModal, "mostrar-modal");
            modalTextContent(`Disculpe.`, `Pero su presupuesto es inferior a nuestro rango de precios.`);
        }

        const iceCreamFigures = iceCreamModal.querySelectorAll(".ice-cream");

        iceCreamFigures.forEach((element) => {
            const removeButton = element.querySelector("button");
            element.removeChild(removeButton);
        })

    };
};