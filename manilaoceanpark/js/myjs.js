$(function () {
  $(document).tooltip();
  $(".date").datepicker();

  $(".accordion").accordion({
    active: 2,
    animate: 1000,
    collapsible: false,
    header: "h3",
    heightStyle: "content",
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
  });

  $(".tabs").tabs();


  $(".gal").sortable({
    cursor: "move",
    opacity: 0.5
  });


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

  $(".map").hide();

  $(".clickmap").click(function(){
    $(".map").fadeToggle(1000);
  });

  $(".drag").draggable({
    containment: "parent"
  });
  
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
});

