//////// MOBILE MENU ////////////////////
var menuButton = $('.header__mobile');
var menu = $('.header-menu');
$(document).ready(function(){
menuButton.on('click', function(event){
	if (menu[0].style.display == 'flex')
		{
			menu[0].style.display = 'none';
		}
	else{
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