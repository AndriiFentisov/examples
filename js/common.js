// SECTION BLUR
$(function() {
	$('.blur__block').draggable();
});
// SECTION 3dCARD TRANSFORM
$('.card-transform__item').on('click', function() {
	$('.card-transform').toggleClass('card-transform__origin');
});
// SECTION HAMBURGER + MENU
$('.hamburger-slide-menu__toggle').on('click', function() {
	$('.hamburger-slide-menu__nav').toggleClass('hamburger-slide-menu__nav_active');
});
// SECTION SLIIDE ICON MENU
$('.hamburger-slide-btn__toggle').on('click', function() {
	$('.hamburger-slide-btn__nav').toggleClass('hamburger-slide-btn__nav_active');
});