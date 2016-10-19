$(function() {

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {

	    playHadouken(); // play hadouken sound

		$('.ryu-ready').hide();
		$('.ryu-throwing').show();

		// show hadouken and animate it to the right of the screen
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$('.hadouken').hide();
				$('.hadouken').css('left', '610px');
			}
		);
  	})

	.mouseup(function() {
		// ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});


	$('document').keydown(function(){
        if ( event.which == 88 ) {
        	// $(".ryu-cool").css("display", "block");
        	// $(".ryu-ready").css("display", "none");
        	$('.ryu-cool').show();
        	$('.ryu-ready').hide();
    	}
    })
    .keyup(function(){
        if ( event.which == 88 ) {
        	// $(".ryu-cool").css("display", "none");
        	// $(".ryu-ready").css("display", "block");
        	$('.ryu-cool').hide();
        	$('.ryu-ready').show();
    	}
    });


});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.1;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
