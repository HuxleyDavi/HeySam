const overlay = document.querySelector(".chama");

// Quando a página for totalmente carregada, o overlay será desabilitado e a página
// irá aparecer.

window.addEventListener("load", function () {
    overlay.style.display = "none";
});

$(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll > 1415) {
        $('.menu').addClass('menu-auxiliar');
    } else {
        $('.menu').removeClass('menu-auxiliar');
    };

    /*if (scroll > 1100) {
        $('.menu').addClass('transparent');
    } else {
        $('.menu').removeClass('transparent');
    };*/

});