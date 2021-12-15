$(document).ready(function(){


// init Isotope
var $grid = $('.g_detail').isotope({
  // options
});
// filter items on button click
$('.g_menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


});