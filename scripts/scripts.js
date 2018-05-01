/*global $*/
function openMenu(x) {
    x.classList.toggle("change");
    
    var menu = $(".menu");
    
    $(".menu").slideToggle("slow", function () {

        menu.toggleClass("shown");
        
    });
}