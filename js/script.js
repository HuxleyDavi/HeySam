/*//--------------------------By HS Corp-------------------------------//*/
/*//---------------------------@hs.corp-------------------------------//*/
/*--//-----------------------hscorpp@gmail.com-------------------------------//*/

//Pre-loader de carregamento -------

// Quando a página for totalmente carregada, o overlay será desabilitado e a página irá aparecer.
const overlay = document.querySelector(".chama");

window.addEventListener("load", function () {
    overlay.style.display = "none";
});


/*//--------------------------By HS Corp-------------------------------//*/
/*//---------------------------@hs.corp-------------------------------//*/
/*--//-----------------------hscorpp@gmail.com-------------------------------//*/

//Função backgroun conforme a scroll descer -------

/*
$(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll > 1415) {
        $('.menu').addClass('menu-auxiliar');
    } else {
        $('.menu').removeClass('menu-auxiliar');
    }
});

*/

/*//--------------------------By HS Corp-------------------------------//*/
/*//---------------------------@hs.corp-------------------------------//*/
/*--//-----------------------hscorpp@gmail.com-------------------------------//*/

//Mascara do telefone no contato -------

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
};


/*//--------------------------By HS Corp-------------------------------//*/
/*//---------------------------@hs.corp-------------------------------//*/
/*--//-----------------------hscorpp@gmail.com-------------------------------//*/

//Menu responsivo -------

$('.mobile > i').click(function(){
	$(this).parent().find('ul').slideToggle();
})