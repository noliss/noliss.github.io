//////// MOBILE MENU ////////////////////
var menuButton = $('.header__mobile img');
var menu = $('.header-menu');
$(document).ready(function(){
menuButton.on('click', function(event){
	if (menu[0].style.display == 'flex')
		{
			menu[0].style.display = 'none';
			$(menuButton).attr('src', '../img/mobile/m-menu-off.png').hide().fadeIn("fast");
		}
	else{
			$(menuButton).attr('src', '../img/mobile/m-menu-on.png').hide().fadeIn("fast");
			menu[0].style.display = 'flex';
		}
	});
});
//////////////////////////////////////////
////////////////DATE PICKER//////////////
$(function(){
	$('.request-form__date').appendDtpicker({
		autodateOnStart: false,
		locale: "ru",
    minDate: 0, // 0 days offset = today
    closeOnSelected: true,
    futureOnly: true
	});
});

function ChangeImage(id,image){
		var el = document.getElementById(id);
		el.src=image;
}

// Слайдер index.html
$(document).ready(function(){
$(function(){
$("#tw-container").twentytwenty();
	});
$(function(){
$("#tw-container-m").twentytwenty();
	});
});