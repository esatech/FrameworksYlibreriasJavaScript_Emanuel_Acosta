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
    $(".col-1").append("<img src='image/1.png' class='elemento'>").setInterval(500);
    $(".col-1").append("<img src='image/2.png' class='elemento'>").setInterval(500);
    $(".col-1").append("<img src='image/3.png' class='elemento'>").setInterval(500);
    $(".col-1").append("<img src='image/4.png' class='elemento'>").setInterval(1000);
    $(".col-1").append("<img src='image/1.png' class='elemento'>").setInterval(1000);
    $(".col-1").append("<img src='image/3.png' class='elemento'>").setInterval(1000);

  });


});
