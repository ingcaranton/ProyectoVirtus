var colores=["E65F5F","E65FC7","BC5FE6","7F5FE6","5F9CE6","5FDBE6","5FE6A3","7AE65F","CBE65F","E6A55F","E65F5F"];

$(document).ready(function() {
  $("body").css("background","#"+colores[aleatorio(0,10)]);

  //Bajar al final e inicio de la pagina
    var altura = $(document).height();
    $('a.finalPagina').on("click",function(){
      $("html, body").animate({ scrollTop:altura+"px" }, 600);
      return false;
    });

    $('a#inicioPagina').on("click",function(){
      $("html, body").animate({ scrollTop:0 }, 600);
      return false;
    });
  //desplegar submenu
    $('a#guia').on("click",function(){
      //alert("reconoce");
      if($("ul#submenuGuia").css("display")=="none"){
        desplegar("inherit","650","45","-26.8");
      }else{
        desplegar("none","50","1","3");
      }      
    });  
  //cambio de imagen enlaces
    if(window.location.pathname=="/aprenda/serHumano"){
      cambioImagenHover("serHumano");
      cambioImagenHover("cuerpoHumano");
      cambioImagenHover("fisiologia");
      cambioImagenHover("frutasVerduras");
      cambioImagenHover("comidasBebidas");
      cambioImagenHover("vestuario");
      cambioImagenHover("aseoPersonal");
      cambioImagenHover("salud");
    }      
});

function aleatorio(min, max){ 
  var num= Math.floor(Math.random()*(max-min+1))+min; 
  return num; 
} 

function mostrar(valor,top,left){
  $("ul#submenuGuia").css("display",valor);
  if($(window).width() > 800){
    $("#novedades").css("margin-top",top+"%");
    $("#novedades").css("margin-left",left+"%");
  }
}

function desplegar(valor, tamaño, top, left){
  $("ul li.desplegar").animate({
    height: tamaño+"px"
  }, 600, mostrar(valor,top, left));
  return false;
}

function token(cadena,separador){
  return cadena.split(separador,"1");
}

function cambioImagenHover(id){
  var enlace = $('#contenido #serHumano a#'+id+' img').attr("src");
  var res=token(enlace,".");
  $('#contenido #serHumano a#'+id+' img').mouseenter(function(){
    $(this).attr("src",res+"Hover.png");
  });
  $('#contenido #serHumano a#'+id+' img').mouseleave(function(){
    $(this).attr("src",enlace);
  });
}