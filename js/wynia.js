//COOKIES
// menu config button
$('#wynia').on('click', function () {
    $('.wynia-options').fadeToggle();
});


//config default values
var $font = 15;
var $interlineado='';
var $letterspacing='';
var $fontfamily='sans-serif';
var $color= 'claro';


//control cookies data

if (Cookies.get('fontsize')!=''){
    $cook=Cookies.get('fontsize')+'px';
    $('body').css( 'font-size', $cook );
}
if (Cookies.get('lineheight')!=''){
    $cook=Cookies.get('lineheight')+'px';
    $('body').css( 'line-height', $cook );
}
if (Cookies.get('letterspacing')!=''){
    $cook=Cookies.get('letterspacing')+'px';
    $('body').css( 'letter-spacing', $cook );
}
if (Cookies.get('fontfamily')!=''){
    $('body').css( 'font-family', Cookies.get('fontfamily'));
}

if (Cookies.get('color')=='claro'){
    $('link[rel=stylesheet][href="./css/oscuro.css"]').remove();
}
if (Cookies.get('color')=='oscuro'){
    $('head').append('<link rel="stylesheet" href="./css/oscuro.css" type="text/css" />');
}



//CAMBIAR TAMAÑO DE TIPOGRAFÍA #aumentar-tipo, #achicar-tipo
var size = $('body').css('font-size');
size = parseInt(size, 10);
var interlineado = $('body').css('line-height');
var interletrado = $('body').css('letter-spacing');
var ninterlineado = $('body').css('line-height');
interlineado = parseInt(interlineado, 10);
interletrado = parseInt(interletrado, 10);
ninterlineado = parseInt(interlineado, 10);
$('#aumentar-tipo').on('click', function () {
    size += 2;
    interlineado += 2;
    ninterlineado += 2;
    if (size > 45){
        alert ('No se puede aumentar más la tipografía');
    }else{
        $('body').css( 'font-size', size + 'px' );
        Cookies.set('fontsize', size, { expires: 30 }, { sameSite: 'strict' }, { secure: true });
        $('body').css( 'line-height', interlineado + 'px' );
        Cookies.set('lineheight', interlineado, { expires: 30 }, { sameSite: 'strict' }, { secure: true });
    }
});
$('#achicar-tipo').on('click', function () {
    size -= 2;
    interlineado -= 2;
    ninterlineado -= 2;
    if (size < 15){
        alert ('No se puede reducir más la tipografía');
    }else{
        $('body').css( 'font-size', size + 'px' );
        Cookies.set('fontsize', size, { expires: 30 }, { sameSite: 'strict' }, { secure: true });
        $('body').css( 'line-height', interlineado + 'px' );
        Cookies.set('lineheight', interlineado, { expires: 30 }, { sameSite: 'strict' }, { secure: true });
    }
});
//CAMBIAR INTERLINEADO #aumentar-interlineado, #achicar-interlineado
$('#aumentar-interlineado').on('click', function () {
    ninterlineado += 2;
    $('body').css( 'line-height', ninterlineado + 'px' );
    Cookies.set('lineheight', ninterlineado, { expires: 30 }, { sameSite: 'strict' }, { secure: true });
});
$('#achicar-interlineado').on('click', function () {
    ninterlineado -= 2;
    if (ninterlineado < interlineado){
        alert ('No se puede reducir más el interlineado');
    }else{
        $('body').css( 'line-height', ninterlineado + 'px' );
        Cookies.set('lineheight', ninterlineado, { expires: 30 }, { sameSite: 'strict' }, { secure: true });
    }
});

//CAMBIAR INTERLETRADO #aumentar-interletrado, #achicar-interletrado
$('#aumentar-interletrado').on('click', function(){
    interletrado += 0.2;
    $('body').css('letter-spacing', interletrado + 'em');
    Cookies.set('letterspacing', interletrado, { expires: 30 }, { sameSite: 'strict' }, { secure: true });
});
$('#achicar-interletrado').on('click', function(){
    interletrado -= 0.2;
    if (interletrado < 0) {
        alert ('No se puede reducir más el interletrado');
    }else{
        $('body').css('letter-spacing', interletrado + 'em');
        Cookies.set('letterspacing', interletrado, { expires: 30 }, { sameSite: 'strict' }, { secure: true });
    }
});
//CAMBIAR TIPOGRAFÍA #dislexia, #sans, #serif
$('#dislexia').on('click', function(){
    $('body').css('font-family', 'OpenDyslexic');
    Cookies.set('fontfamily', 'OpenDyslexic', { expires: 30 }, { sameSite: 'strict' }, { secure: true });
});
$('#sans').on('click', function(){
    $('body').css('font-family', 'sans-serif');
    Cookies.set('fontfamily', 'sans-serif', { expires: 30 }, { sameSite: 'strict' }, { secure: true });
});
$('#serif').on('click', function(){
    $('body').css('font-family', 'serif');
    Cookies.set('fontfamily', 'serif', { expires: 30 }, { sameSite: 'strict' }, { secure: true });
});
//CAMBIAR COLORES #fondo-claro, #fondo-oscuro
$('#fondo-claro').on('click', function(){
    $('link[rel=stylesheet][href="./css/oscuro.css"]').remove();
    Cookies.set('color', 'claro', { expires: 30 }, { sameSite: 'strict' }, { secure: true });
});
$('#fondo-oscuro').on('click', function(){
    $('head').append('<link rel="stylesheet" href="./css/oscuro.css" type="text/css" />');
    Cookies.set('color', 'oscuro', { expires: 30 }, { sameSite: 'strict' }, { secure: true });
});

$('#reset').on('click', function(){
    Cookies.remove('fontsize');
    Cookies.remove('lineheight');
    Cookies.remove('letterspacing');
    Cookies.remove('fontfamily');
    Cookies.remove('color');
    Cookies.remove('audio');
    location.reload(true);
});
//AUDIO
//Cookies.set('audio', 'value', { expires: 30 }, { sameSite: 'strict' }, { secure: true });

//ACOMODAMOS EL CONTENIDO DESPUES DEL MENU EN EL VISUALIZADOR

$(window).on('load', function () {
    $('.container ').css('margin-top', $('#mprincipal').outerHeight());
    $('font').removeAttr('style');
    $('font').removeAttr('face');
    $('font').removeAttr('size');
    $('font').removeAttr('color');
    $('.visualizador > .container').css('margin-top', $('.hvisualizador').outerHeight());
});
