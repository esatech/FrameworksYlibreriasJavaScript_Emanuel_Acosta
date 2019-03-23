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
