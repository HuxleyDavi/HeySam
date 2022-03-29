const overlay = document.querySelector(".chama");

// Quando a página for totalmente carregada, o overlay será desabilitado e a página
// irá aparecer.

window.addEventListener("load", function () {
    overlay.style.display = "none";
})