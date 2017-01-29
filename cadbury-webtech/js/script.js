$(function () {
  $(document).tooltip();
  $("#date").datepicker();

  $("#accordion").accordion({
    active: 2,
    animate: 1000,
    collapsible: false,
    header: "h3",
    heightStyle: "content",
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
  });

  $(".tabs").tabs();

  $(".progressbar").progressbar({
    value: 50
  });

  $(".register-form").validate({
    rules: {
      name: "required",
      email: "required",
      date: "required",
      contact: {
        required: true,
        phoneUS: true
      }

    },
    messages: {
      name: "Please enter your Name",
      contact: "This field is required"
    }
  });

  $(".sorts").sortable({
    axis: "y",
    cursor: "move",
    opacity: 0.5
  });

  $(".progressbar").progressbar({
    value: false
  });

  $(".slider").slider();

  $(".resizable").resizable({
    alsoResize: "#head",
    animate: true,
    animateEasing: "easeOutBounce",
    distance: 5,
    ghost: true,
    maxHeight: 500,
    maxWidth: 500,
    minHeight: 50,
    minWidth: 50
  });

  $(".hide-choc").click(function(){
    $(".the-choc").slideToggle(1000);
  });

  $(".drag").draggable();

});

