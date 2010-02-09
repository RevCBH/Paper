jQuery(function () {
  $(window).keypress(function (event) {
    if(event.shiftKey && event.which == 32)
    {      
      showInsertElement();
    }
  });
  
  $('#insert-element-popup').keydown(function(event) {
    if (event.which == 13) {
      event.stopPropagation();
      
      $('#search-box').blur();
      $(this).fadeOut('fast');
    };
  });
});

function showInsertElement () {
  $('#search-box').val("");
  $('#insert-element-popup').fadeIn('fast', function() { $('#search-box').focus(); });  
}