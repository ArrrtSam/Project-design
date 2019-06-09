$("#hamburger-btn").click(function() {
  $("#menu").toggleClass("menu--active");
  $(this).toggleClass("is-active");
});

// init Isotope
var $grid = $(".posts").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:8
  });
});

new WOW().init();