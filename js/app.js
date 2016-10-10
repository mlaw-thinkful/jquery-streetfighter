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
    // console.log('mousedown');

    // play hadouken sound
    playHadouken();
	$('.ryu-ready').hide();
	$('.ryu-throwing').show();
	// $('.hadouken').show();
	// animate hadouken to the right of the screen
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
    // console.log('mouseup');

    // ryu goes back to his ready position
	$('.ryu-throwing').hide();
	$('.ryu-ready').show();
  });

});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}