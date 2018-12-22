$(document).ready(function() {

	$(".slider").slider({
		min: 0,
		max: 2,
		create: function() {
			var position = $(".slider").slider("value");
		},
		stop: function( event,  ui) {
			var position = $(".slider").slider("value");
			if (position == 0) {
 				$(".photos").css("background","url(../img/wolfpop2016.png");
 			}
 			if (position == 1) {
 				$(".photos").css("background","url(../img/wolfpop2017.png)");
 			}
 			if (position == 2) {
 				$(".photos").css("background","url(../img/wolfpop2018.png)");
 			}
 			
		}
	});

	
});

