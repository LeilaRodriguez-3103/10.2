document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");

    buttonText.addEventListener("click", () => {
        localStorage.setItem("userInput", inputText.value);
        inputText.value = '';
    });
});