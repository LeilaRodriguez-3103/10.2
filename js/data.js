document.addEventListener("DOMContentLoaded", () => {
    const dataSpan = document.getElementById("data");

    
    const userInput = localStorage.getItem("userInput");


    if (userInput) {
        dataSpan.textContent = userInput;
    } else {
        dataSpan.textContent = "No hay datos disponibles.";
    }
});