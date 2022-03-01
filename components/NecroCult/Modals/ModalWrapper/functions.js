/********************************************

MODALS

	NOTES
	- 	Which modal is called is controlled by the data-modal attribute.
		A button with data-modal="thank_you" will open the corresponding 
		modal with data-modal="thank_you"

********************************************/
import ModalWrapper from '@components/Modals/ModalWrapper/ModalWrapper'
import $ from 'jquery'; 

//$(document).ready(function(){
class Functions extends ModalWrapper {
componentDidMount() {
	//MODALS

		//OPEN
			$('body').on('click','.modal_open',function(e) {
				e.preventDefault();
				var modal_get = $(this).data('modal');
				$('.modal_overlay').addClass('active');
				$('.modal[data-modal="'+modal_get+'"]').addClass('active');
			});

			$('body').on('click','.video_modal_open',function(e) {
				e.preventDefault();
				var video_id = $(this).data('video-id');
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



		//Global offsite link modal - affects all links on site
		/*
			$('body').on('click','a',function(e) {
				if($(this).hasClass('offsite_send_cta')){
					$('.modal_overlay').removeClass('active');
			  		$('.modal').removeClass('active');
				}else{
					//console.log('link click');
		        	//e.preventDefault();
		        	var href = $(this).attr('href');
		        	//Update site var with new site's name
		        	var site = "http://framework.oxfordcommunications.com.php73-39.lan3-1.websitetestlink.com";
		        	console.log(href);
		        	if (href.indexOf("http") >= 0) {
		        		if(href.indexOf(site) >= 0 ){
		        			console.log('onsite link');
		        		}else{
		        			console.log('offsite link');
		        			e.preventDefault();
		        			$('.offsite_send_cta').attr('href', href);

		        		}
		        	}
				}

	        	
	        });
	    */


}
}
//});