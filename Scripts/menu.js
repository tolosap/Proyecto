$(document).ready(function(){
  // Fomateamos el boton activo y activamos al que clickemos
  $('.nav a').click(function () {

    toggleTab($(this));
  })


  $('.slide-section').click(function(e) {
    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - 50
    },1000);
    e.preventDefault();
  });
});

function toggleTab (hrefObjetivo) {
  $(hrefObjetivo).tab('show');
}
