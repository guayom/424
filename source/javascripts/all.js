$(document).ready(function(){
  $('.ver-detalles-button').unbind('click').click(function(){
    $(".detalles").toggleClass("open");
    $(this).toggleClass("ocultar");
  });
});
