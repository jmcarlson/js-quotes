// Render the quote data on the page
// layoutStyle is 1(list) or 2(panels)
var renderData = function(layoutStyle) {
	// console.log("Rendering the data with layout style: " + layoutStyle);
	$('.data').empty();
	console.log(quoteData);
	for (var i = 0; i <= quoteData.length - 1; i++) {

		var newDataItem = $('<div class="quote-data">');
		newDataItem.append(
			'<div>' + quoteData[i].text + '</div>'
		);
		newDataItem.append(
			'<div>-' + quoteData[i].author + '</div>'
		);
		newDataItem.append(
			'<div>Rating: ' + quoteData[i].rating + '</div>'
		);
		newDataItem.append(
			'<img id="button-remove" src="http://placehold.it/20&text=Remove">'
		);
		// Create new DOM element
		newDataItem.appendTo('.data');

	};
}

var hideInputs = function() {
	$('.entry-form').hide();
	$('.filter-form').hide();
}




$(document).on('ready', function() {

	hideInputs();
	renderData(1);

	$('#home').on('click', function() {
		hideInputs();
		renderData(1);
	})

	$('#add').on('click', function() {
		hideInputs();
		$('.entry-form').slideDown(100);
	})

	$('#filter').on('click', function() {
		hideInputs();
		$('.filter-form').slideDown(100);
	})

	$(document).on('click', '#button-remove', function() {
		$(this).parent().remove();
	})
  
});