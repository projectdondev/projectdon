//INITIALIZE MODEL-SLIDERS CONTENT -------------------------------------------
$(document).ready(function() {
    var includes = $('[data-include]');
    jQuery.each(includes, function() {
        var file = $(this).data('include') + '.html';
        $(this).load(file);
    });
});

$("#modelNavbarClick").click(function() {
    if ($("#modelsPageNavbar").hasClass('collapse')) {
        $("#modelsPageNavbar").removeClass('collapse');
    } else {
        $("#modelsPageNavbar").addClass('collapse');
    }
});
//------------------------------------------------------------------------------