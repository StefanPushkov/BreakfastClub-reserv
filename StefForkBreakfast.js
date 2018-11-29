$("#our-rest").click(function(event) {
	$('.second-levelX').removeClass("left-right");
	$('.second-level').toggleClass('left-right');
	event.preventDefault();
})

$("#food-menu").click(function(event) {
	$('.second-level').removeClass("left-right")
	$('.second-levelX').toggleClass('left-right');
	event.preventDefault();
})
