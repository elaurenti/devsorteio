function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-min').value);
    const max = Math.floor(document.querySelector('.input-max').value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modalText");

    modalText.textContent = "Resultado do sorteio: " + result;
    modal.style.display = "block";

    const closeModalButton = document.getElementById("closeModal");
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
