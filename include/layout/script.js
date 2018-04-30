$(document).ready(function(){

	// Set header cell widths
	$('hr').parent().remove();
	var headers = $('th');
	// First column should be the icon
	$(headers[0]).addClass('icon');

	// Refresh button
	$('a#refresh').click(function(){window.location.reload(true);return false;});
});