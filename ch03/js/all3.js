$(document).ready(function() {
  $('.start').click(function(event) {
    /* Act on the event */
    $('.box').slideUp(1000).slideDown(1000).slideUp(1000).slideDown(1000);
  });
});