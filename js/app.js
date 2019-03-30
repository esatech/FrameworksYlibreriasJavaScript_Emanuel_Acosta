var i=0;
var intervalo=0;
var tiempo=0;
var min=2;
var seg=0;


$( document ).ready(function() {
  //Funcion para cambiar color de titulo
  function tituloRojo(){
    $(".main-titulo").animate(
      {
        color: "red"
      }, 1000, function(){
        tituloAzul()
      }
    )
  }

  function tituloAzul(){
    $(".main-titulo").animate(
      {
        color: "blue"
      }, 1000, function(){
        tituloRojo()
      }
    )
  }

  tituloAzul()

  //inicia el juego y agrega caramelos aleatoreos
  $(".btn-reinicio").click(function(){
    intervalo=setInterval(function(){
      desplazamiento()
    },600);
    $(this).html("Reiniciar")
    tiempo=setInterval(function(){
  		timer()
  	},1000);

  });

  function desplazamiento(){
    i=i+1
    var numero=0;
    var imagen=0;
    if (i<8) {
      for (var j = 1; j < 8; j++) {
        numero=Math.floor(Math.random()*4)+1;
        imagen="image/"+numero+".png";
        $(".col-"+j).prepend("<img src="+imagen+" class='elemento'>").css("justify-content","flex-start")
      }
    }
    if (i==8) {
      clearInterval(intervalo);
    }
  }

  // temporizador hacia atrás
  function timer(){
  	if(seg!=0){
  		seg=seg-1;}
  	if(seg==0){
  		if(min==0){
  			//clearInterval(eliminar);
  			//clearInterval(nuevosDulces);
  			clearInterval(intervalo);
  			clearInterval(tiempo);
  			$(".panel-tablero").hide("drop","slow",funcioncita);
  			$(".time").hide();}
  		seg=59;
  		min=min-1;}
  	$("#timer").html("0"+min+":"+seg);
  };

});
