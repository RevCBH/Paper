jQuery(function () {
  //$(window).keypress(function (event) {
  $(window).bind('keydown', 'shift+space', function(event) {  
    if(event.shiftKey && event.which == 32) {      
      showInsertElement();
    }
  });
  
  $('#palette ul').sortable();
  $('#palette').droppable({
    out: function(event, ui) {
      ui.draggable.data('kill', true);
    },
    drop: function(event, ui) {
      ui.draggable.data('kill', false);
    }
  })
  
  $('#menu-button').mouseover(function() {alert("yay")});
  
  // TODO - bug in autocomplete when hitting esc to cancel
  // 1. Closes entire search-box
  // 2. Next time the search box is used, the inital keystroke won't bring up the autocomplete (only for first letter)
  $('#insert-element-popup').bind('keydown', 'esc', function() {hideInsertElement();})
  $('#insert-element-popup').bind('keydown', 'return', function() {
    var cmd = $('#search-box').val();
    hideInsertElement();
    
    insertElement({
        type: cmd,
        css: {}
      });
  });
  $('#insert-element-popup').bind('keydown', 'tab', function(event) {
    event.preventDefault();
    // TODO - jump to item initialization
    hideInsertElement();
    
  });
  
  $('#search-box').autocomplete("canvas label button".split(" "));
    /*.result(function(e, item) {
      item = item[0]
      o = e;
      insertElement({"type": item});
      hideInsertElement();
    });*/
});

function showInsertElement () {
  $('#search-box').val("");
  $('#insert-element-popup').fadeIn('fast', function() { $('#search-box').focus(); });  
}

function hideInsertElement() {
  $('#search-box').blur();
  $('#insert-element-popup').fadeOut('fast');
  //$('#search-box').val("");
}

function createButton(properties)
{
  var newButton = $(document.createElement('div')).addClass('button').disableSelection();
  newButton.text("Button");
  newButton.data("properties", properties);
  
  newButton.css(properties.css);
  
  return newButton;
}

function insertElement (properties) {
  //TODO - use delegate hash on type property to instantiate various components

  if(properties["type"].toLowerCase() == "button")
  {
    var newElem = createButton(properties);
    
    var liWrapper = $(document.createElement('li')).append(newElem);
    liWrapper.draggable({ 
      revert: 'valid', 
      stop: function(event, ui) {
        if($(this).data('kill'))
        {
          var properties = $(this).find('div').data("properties");
          properties.css = {
            top: ui.offset.top,
            left: ui.offset.left,
            position: "absolute"
          };
          
          var newBtn = createButton(properties);

          $('body').append(newBtn);
          $(this).remove();
          
          newBtn.draggable();
        }
      }
    });
    $('#palette ul').append(liWrapper);
  }
}

function insertIntoPalette(item)
{
  
}