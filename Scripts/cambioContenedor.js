$(document).ready(function() {
  //asociamos una función al click del menú
  $('.enlaceMenu').on('click', function(e){
    //evitamos que el enlace funcione:
    e.preventDefault();
    //obtenemos de href las variables url y title
    // var url = "Paginas/" + $(e.target).attr("href") + ".html";
    var url = $(e.target).attr("href") + ".html";
    var	title = $(e.target).text();
    //cambiamos el historial subiendo el estado correspondiente a la url que hemos obtenido en el enlace
    history.pushState({
      url: url,
      title: title
    }, title, url);
    document.title = title;

    //hacemos una petición Ajax del contenido
    console.log(url);
    $("#contenedor").load(url);
    //cambiamos los estilos del menu
    //quitamos los enlaces pulsados
    $('.nav a').click(function () {
    toggleTab($(this));
  });
    $(".pulsado").removeClass("pulsado");
    //dejamos pulsado el enlace seleccionado
    var enlace = url.slice(0,-5);//quitamos ".html"
    $("li:has(a[href='" + enlace + "'])").addClass("pulsado");
  });
  $(window).on('popstate', function (e) {
    //obtenemos el valor de state del evento
    var state = e.originalEvent.state;

    if (state == null) {
      document.title = 'BNear';
      $("#contenedor").empty();
      //quitamos los enlaces pulsados
      $(".pulsado").removeClass("pulsado");
    } else {
      document.title = state.title;
      var url = state.url;
      $("#contenedor").load(url);
      var enlace = url.slice(0,-5);//quitamos ".html"
      //Cambiamos los estilos:
      //quitamos los enlaces pulsados
      $(".pulsado").removeClass("pulsado");
      //ponemos el estilo del enlace pulsado
      $("li:has(a[href='" + enlace + "'])").addClass("pulsado");
    }
  });
});

function toggleTab (hrefObjetivo) {
  $(hrefObjetivo).tab('show');
}
