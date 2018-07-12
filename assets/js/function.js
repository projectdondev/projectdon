var url = window.location.pathname;
console.log(url);
var arr = url.split(".html");
console.log(arr[0]);

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