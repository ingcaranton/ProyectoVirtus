var colores=["E65F5F","E65FC7","BC5FE6","7F5FE6","5F9CE6","5FDBE6","5FE6A3","7AE65F","CBE65F","E65F5F"];

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
  //cambio de imagen enlaces
    if(window.location.pathname=="/aprende/serHumano"){
      cambioImagenHover("serHumano");
      cambioImagenHover("cuerpoHumano");
      cambioImagenHover("fisiologia");
      cambioImagenHover("frutasVerduras");
      cambioImagenHover("comidasBebidas");
      cambioImagenHover("vestuario");
      cambioImagenHover("aseoPersonal");
      cambioImagenHover("salud");
    }    
    if(window.location.pathname=="/aprende/inteligencia"){
      cambioImagenHover("diasSemana");
      cambioImagenHover("espacio");
      cambioImagenHover("expresionesCantidad");
      cambioImagenHover("expresionesTiempo");
      cambioImagenHover("inteligencia");
      cambioImagenHover("meses");
      cambioImagenHover("numeros");
    }  
    if(window.location.pathname=="/aprende/caracteristicasSentimientos"){
      cambioImagenHover("caracteristicas");
      cambioImagenHover("sentimientos");
    }  
    if(window.location.pathname=="/aprende/familiaRelaciones"){
      cambioImagenHover("familia");
      cambioImagenHover("relaciones");
    } 
    if(window.location.pathname=="/aprende/actividades"){
      cambioImagenHover("accionesDistracciones");
      cambioImagenHover("deportes");
      cambioImagenHover("musica");
      cambioImagenHover("profesionesOficios");
    } 
    if(window.location.pathname=="/aprende/entornoNatural"){
      cambioImagenHover("animales");
      cambioImagenHover("cualidadesObjetos");
      cambioImagenHover("geografia");
      cambioImagenHover("naturaleza");
    } 
    if(window.location.pathname=="/aprende/entornoUrbano"){
      cambioImagenHover("ciudad");
      cambioImagenHover("hogarVivienda");
      cambioImagenHover("tecnologia");
      cambioImagenHover("transporte");
    } 
});

function aleatorio(min, max){ 
  var num= Math.floor(Math.random()*(max-min+1))+min; 
  return num; 
} 

function token(cadena,separador){
  return cadena.split(separador,"1");
}

function cambioImagenHover(id){
  var enlace = $('#contenido .cambioImagen a#'+id+' img').attr("src");
  var res=token(enlace,".");
  $('#contenido .cambioImagen a#'+id+' img').mouseenter(function(){
    $(this).attr("src",res+"Hover.png");
  });
  $('#contenido .cambioImagen a#'+id+' img').mouseleave(function(){
    $(this).attr("src",enlace);
  });
}