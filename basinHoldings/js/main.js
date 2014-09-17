$(function(){

	console.log('running');

	// NAVIGATION CURRENT

	// $(".company-link").addClass( "active" );

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