$(document).ready(function(){
     $('.materialboxed').materialbox();
      
 var objeto =$(".icono").click(function(){
  $("#contenedormenusegundo").toggleClass("mostrar");
  })
$(".bxslider").bxSlider({
adaptiveHeight:true,
mode:"fade",
infiniteLoop:true,
auto:true,
captions:true,
nextSelector:"#siguiente",
prevSelector:"#anterior",
	nextText:"Siguiente-->",
	prevText:"<--Anterior",
speed:500
});
})