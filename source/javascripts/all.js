//Google analytics click tracking
function clickComprarEntradas(concierto) {
  ga('send', 'event', 'Clicks', 'Comprar Entradas', concierto.getAttribute("data-concierto"));
}

$(document).ready(function(){
  //Botón de ver detalles
  $('.ver-detalles-button').unbind('click').click(function(){
    $(".detalles").toggleClass("open");
    $(this).toggleClass("ocultar");
  });
});
