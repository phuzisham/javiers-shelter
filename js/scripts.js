$(document).ready(function() {
  $("#dark").click(function() {
    $('body').toggleClass('dark');
  });
  $('#normal').click(function() {
    $('body').removeClass();
    //$('body').addClass('blue');
  });

  $('p').click(function() {
    $('p').toggleClass('border');
  });
});
