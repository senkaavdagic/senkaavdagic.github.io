$(window).resize(function(){
	var w = window.innerWidth;
	var h = window.innerHeight;
	if (w < 768) {
		$('#my-logo').text('StitchBricks');
		$('#jumbo-container').find("p").text('');
	} else {
		$('#my-logo').text('Welcome to StitchBricks!');
		$('#jumbo-container').find("p").text('Yet another site dedicated to all things knit!');
	}

});


