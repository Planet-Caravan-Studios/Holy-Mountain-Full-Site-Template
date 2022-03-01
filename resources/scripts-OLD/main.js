/**************************************************
Necro Cult Zine | Main JS file


Notes:
	-	$(document).ready(function(){
 			//my code here
		});

**************************************************/
$(document).ready(function(){
	console.log('main.js script is connected.');
});


$(document).ready(function(){
	$("#DesktopNav").headroom();
});


/********************************************

MODALS

	NOTES
	- 	Which modal is called is controlled by the data-modal attribute.
		A button with data-modal="thank_you" will open the corresponding 
		modal with data-modal="thank_you"

********************************************/
$(document).ready(function(){

	console.log('Modal code start');
	
//OPEN
	$('body').on('click','.modal_open',function(e) {
		console.log('.modal_open clicked');
		e.preventDefault();
		var modal_get = $(this).data('modal');
		console.log(modal_get);
		$('.modal_overlay').addClass('active');
		$('.modal[data-modal="'+modal_get+'"]').addClass('active');
	});

	$('body').on('click','.video_modal_open',function(e) {
		e.preventDefault();
		var video_id = $(this).attr('data-youtube-id');
		$('.modal.video iframe').attr('src', 'https://www.youtube.com/embed/' + video_id + '?rel=0');
		$('.modal_overlay').addClass('active');
		$('.modal.video').addClass('active');
	});


//CLOSE
	$('body').on('click','.modal_overlay',function(e) {
		e.preventDefault();
		$('.modal_overlay').removeClass('active');
		$('.modal').removeClass('active');

		//only affects video modals
		setTimeout(
			function() 
			{
				$('.modal.video iframe').attr('src', '');
			}, 500);
	});

	$('body').on('click','.modal_close',function(e) {
		e.preventDefault();
		$('.modal_overlay').removeClass('active');
		$('.modal').removeClass('active');
		setTimeout(
			function() 
			{
				$('.modal.video iframe').attr('src', '');
			}, 500);
	});

	$('body').on('click','.modal a',function(e) {
		e.preventDefault();
		$('.modal_overlay').removeClass('active');
		$('.modal').removeClass('active');
		setTimeout(
			function() 
			{
				$('.modal.video iframe').attr('src', '');
			}, 500);
	});

//ESC Key Close
	var esc_key = 27;

	$(document).keyup(function(e) {
	  if (e.keyCode == esc_key && $('.modal_overlay').hasClass('active')){
	  	e.preventDefault();
	  	$('.modal_overlay').removeClass('active');
	  	$('.modal').removeClass('active');
	  	setTimeout(
	  		function() 
	  		{
	  			$('.modal.video iframe').attr('src', '');
	  		}, 500);
	  }
	});


	console.log('Modal code END');
});