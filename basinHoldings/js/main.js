$(function(){

	console.log('meow');

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

});