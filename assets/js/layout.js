//INITIALIZE HEADER & FOOTER CONTENT -------------------------------------------
$(document).ready(function() {
    var includes = $('[data-include]');
    jQuery.each(includes, function() {
        var file = 'layout/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});
//------------------------------------------------------------------------------