$(function() {
	console.log("ready!");
});

//JAVASCRIPT VARIABLES//

//JQUERY VARIABLES//

var $social = $(".connect");
var $photo = $(".gallery");
/*var $plantLarge = "img src='photos/plantLarge.jpg' class='slideshow'";*/

//LISTENERS//

//HANDLERS AND FUNCTIONS//


/*Social media thumbnails*/

function fadeSocial() {
	$(this).fadeTo("fast",0.6);
}

function restoreSocial () {
	$(this).fadeTo("fast",1);
}

$social.hover(fadeSocial,restoreSocial);