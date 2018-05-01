/*global $*/

var toggled = false;

function openMenu(x) {
    if (toggled == NaN) {
	toggled = false;
    }

    var menu;
    var dropDown;
    
    if (toggled) {
	menu = $("nav > div.dropdown > a");
	dropDown = $("nav")
	menu.detach().appendTo(dropDown)
    } else {
	menu = $("nav > a:not(.selected)");
	dropDown = $(".dropdown");
	menu.detach().appendTo(dropDown)
    }

    menu.toggleClass("shown");
    
    toggled = !toggled;

}
