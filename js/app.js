$(function() {

	$('.ryu').mouseenter(function() {
		hideAll();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		hideAll();
		$('.ryu-still').show();
	})
	.mousedown(function() {

	    playHadouken(); // play hadouken sound

		hideAll();
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
		hideAll();
		$('.ryu-ready').show();
	});


	$('body').keydown(function(event){
        if ( event.which == 88 ) {
        	// $(".ryu-cool").css("display", "block");
        	// $(".ryu-ready").css("display", "none");
        	hideAll();
        	$('.ryu-cool').show();
    	}
    })
    .keyup(function(event){
        if ( event.which == 88 ) {
        	// $(".ryu-cool").css("display", "none");
        	// $(".ryu-ready").css("display", "block");
        	hideAll();
        	$('.ryu-ready').show();
    	}
    });


});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.1;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function hideAll(){
	$('.ryu-cool').hide();
	$('.ryu-ready').hide();
	$('.ryu-throwing').hide();
	$('.ryu-still').hide();
}