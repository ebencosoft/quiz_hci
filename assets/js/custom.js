// next prev function
$(document).ready(function() {
    var divs = $('.show-section>.steps-inner');
    var now = 0; // currently shown div
    divs.hide().first().show(); // hide all divs except first
    $(".next").click(function() {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $(".prev").click(function() {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // show previous
    });
});

// label active on input check
$(document).ready(function()
{
    $('.form-input input').on("change", function()
    {

            $(".form-input").removeClass("active-input");
            $(this).parent().addClass("active-input");
    })
})

// timer





// disable on enter
$('form').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) { 
    e.preventDefault();
    return false;
  }
});

