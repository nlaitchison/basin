$(function(){

	console.log('running');

	// NAVIGATION CURRENT

	// $(".company-link").addClass( "active" );



	window.onscroll = function (e) {

	var height = $( 'body' ).height();
	// console.log('height', height);

	var pos = $(document).scrollTop();
	// console.log('pos', pos);

	var width = $('#bar-test').width();
	// console.log('width', width);

	var barWidth = $('.bar').width();

	var maxLeft = width - barWidth;

	// if(pos >= 555){
		var leftPos = (pos * width) / height;
		console.log(leftPos);

		// if(leftPos < maxLeft+10)
			$('.bar').css("width", leftPos+55);

			if(pos == height){
				$('.bar').css("width", width);
			}

	// }

	};





	var menuOpen = false;

	$("#menu-btn").click(
		function() {
			console.log('click');
			if(!menuOpen){
				$(".mobile-header nav").addClass( "open" );
				menuOpen = true;
			}
			else if(menuOpen){
				$(".mobile-header nav").removeClass( "open" );
				menuOpen = false;
			}

		}
	);

	$(".mobile-header nav li a").click(
		function() {
			console.log('nav');
			if(menuOpen){
				$(".mobile-header nav").removeClass( "open" );
				menuOpen = false;
			}
		}
	);

	// Companies Hover Effects

	$(".company.supply").hover(
		function() {
			console.log('over');
			$(".company.supply .company-text").addClass( "current" );
		}, function() {
			console.log('off');
			$(".company.supply .company-text").removeClass( "current" );
		}
	);

	$(".company.rentals").hover(
		function() {
			console.log('over');
			$(".company.rentals .company-text").addClass( "current" );
		}, function() {
			console.log('off');
			$(".company.rentals .company-text").removeClass( "current" );
		}
	);

	$(".company.tools").hover(
		function() {
			console.log('over');
			$(".company.tools .company-text").addClass( "current" );
		}, function() {
			console.log('off');
			$(".company.tools .company-text").removeClass( "current" );
		}
	);

	$(".company.energy").hover(
		function() {
			console.log('over');
			$(".company.energy .company-text").addClass( "current" );
		}, function() {
			console.log('off');
			$(".company.energy .company-text").removeClass( "current" );
		}
	);


	// SMOOTH SCROLLING

	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
  	});

});