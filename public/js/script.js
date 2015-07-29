var colores=["E65F5F","E65FC7","BC5FE6","7F5FE6","5F9CE6","5FDBE6","5FE6A3","7AE65F","CBE65F","E6A55F","E65F5F"];

$(document).ready(function() {
  $("body").css("background","#"+colores[aleatorio(0,10)]);

  //Bajar al final de la pagina
    var altura = $(document).height();
    $('a.finalPagina').on("click",function(){
      $("html, body").animate({ scrollTop:altura+"px" }, 600);
      return false;
    });

    $('a#inicioPagina').on("click",function(){
      $("html, body").animate({ scrollTop:0 }, 600);
      return false;
    });
});

function aleatorio(min, max){ 
  var num= Math.floor(Math.random()*(max-min+1))+min; 
  return num; 
} 