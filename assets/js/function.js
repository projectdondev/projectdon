var url = window.location.pathname;
var arr = url.split(".html");
$("#modelNavbarClick").click(function() {
    if ($("#modelsPageNavbar").hasClass('collapse')) {
        $("#modelsPageNavbar").removeClass('collapse');
    } else {
        $("#modelsPageNavbar").addClass('collapse');
    }
});
// var url = window.location.toString();
// window.location = url.replace(".html", "");
// var mainUrl = arr[0].lastIndexOf('/');
// console.log(mainUrl);

// function getAbsolutePath() {
//     var loc = window.location;
//     var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
//     return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
// }
// if (arr[6] = "index") {
//     return "";
// }


// var link = 'www.example.com/training/product.html';
// link.split('.html')[0];
// window.history.replaceState(null, null, link);

//Contact Us - Form Validator ------------------------------------------------------------------
// $("#myform").validate({
//     rules: {
//         name: {
//             required: true,
//             minlength: 2
//         }
//     },
//     messages: {
//         name: {
//             required: "We need your email address to contact you",
//             minlength: jQuery.validator.format("At least {0} characters required!")
//         }
//     }
// });
// $("#myform").validate({
//     success: function(label) {
//         label.addClass("valid").text("Ok!")
//     },
//     submitHandler: function(form) {
//         // do other things for a valid form
//         form.submit();
//         alert("Submitted!");
//     }
// });
//----------------------------------------------------------------------------------------------