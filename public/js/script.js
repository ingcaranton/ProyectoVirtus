var colores=["E65F5F","E65FC7","BC5FE6","7F5FE6","5F9CE6","5FDBE6","5FE6A3","7AE65F","CBE65F","E65F5F"];

$(document).ready(function() {
  $("body").css("background","#"+colores[aleatorio(0,9)]);
  //Pagina completa para juega.jade
    if(window.location.pathname=="/juega"){
      $("#menu").css("display","none");
      $("#redesSociales").css("display","none");
      $("#flecha").css("display","none");
      $("#novedades").css("display","none");
      $(".home").css("display","inherit");
      $("#contenido").css("width","90%");
      $("#contenido").css("margin","3% 5%");
    }
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
    if(window.location.pathname=="/aprende/institucionesSociales"){
      cambioImagenHover("administracionGobiernoComercio");
      cambioImagenHover("entornoEducativo");
      cambioImagenHover("religion");
      cambioImagenHover("sancionesSocialesVicios");
      cambioImagenHover("utilesEscolares");
    } 
    if(window.location.pathname=="/aprende/lenguajeComunicacion"){
      cambioImagenHover("calificar");
      cambioImagenHover("comunicacionAfines");
      cambioImagenHover("culturaSorda");
      cambioImagenHover("formulasCortesia");
      cambioImagenHover("interrogar");
    } 
  //Flecha Atras presentaciones
    if(direccionAbsoluta(window.location.pathname,1)!="aprende" && window.location.pathname!="/" 
      && window.location.pathname!="/informate" && window.location.pathname!="/juega"
      && window.location.pathname!="/contactanos") {
      var url=direccionAbsoluta(window.location.pathname,1);
      $('.flechaAtras a').attr("href","/aprende/"+url);
      var id = direccionAbsoluta(window.location.pathname,2);
      var contador=$("#contenido .imagen #"+id).attr("numero");
      var imagen = $("#contenido .imagen #"+id);
      var contador2 = 1;
      imagen.on("click",function(){
        contador2++;
        if(contador2>contador){
          contador2=1;
        }
        imagen.attr('src', '/images/aprende/serHumano/serHumano/presentacion/'+contador2+'.PNG');
      });
    }
});

function aleatorio(min, max){ 
  var num= Math.floor(Math.random()*(max-min+1))+min; 
  return num; 
} 

function token(cadena,separador,posicion){
  return cadena.split(separador,posicion);
}

function cambioImagenHover(id){
  var enlace = $('#contenido .cambioImagen a#'+id+' img').attr("src");
  var res=token(enlace,".","1");
  $('#contenido .cambioImagen a#'+id+' img').mouseenter(function(){
    $(this).attr("src",res+"Hover.png");
  });
  $('#contenido .cambioImagen a#'+id+' img').mouseleave(function(){
    $(this).attr("src",enlace);
  });
}

function direccionAbsoluta(direccion,posicion) {
  var arreglo = direccion.split("/");
  return arreglo[posicion];
}