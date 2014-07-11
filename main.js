// Constants
RATING_SCALE = 5;

// Render the quote data on the page
// layoutStyle is 1(list) or 2(panels)
var renderData = function(layoutStyle) {
	// console.log("Rendering the data with layout style: " + layoutStyle);
	hideInputs();
	$('.data').empty();
	console.log(quoteData);
	for (var i = 0; i <= quoteData.length - 1; i++) {

		var newDataItem = $('<div class="quote-data">');
		newDataItem.append(
			'<div class="quote-text">' + quoteData[i].text + '</div>'
		);
		newDataItem.append(
			'<div class="quote-author">-' + quoteData[i].author + '</div>'
		);

		// newDataItem.append(
		// 	'<div>Rating: ' + quoteData[i].rating + '</div>'
		// );

		for (var x = 0; x < RATING_SCALE; x++) {
			// var starRatings = $('<div class="icon-star">')
			// newDataItem.append(starRatings);
			if( x < quoteData[i].rating) {
				newDataItem.append('<div class="icon-star gold-star">');	
			}
			else {
				newDataItem.append('<div class="icon-star">');	
			}
		};

		newDataItem.append(
			'<i class="icon-cancel"></i>'
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
		if($('.entry-form').is(':hidden')) { 
			$('.entry-form').slideDown(100);
		}
		else {
			$('.entry-form').slideUp(100);
		}

	})

	$('#filter').on('click', function() {
		if($('.filter-form').is(':hidden')) { 
			$('.filter-form').slideDown(100);
		}
		else {
			$('.filter-form').slideUp(100);
		}
	})

	$(document).on('click', '.icon-cancel', function() {
		$(this).parent().remove();
	})

	$('.entry-form').on('submit', function(e) {
		e.preventDefault();
		var formData = $('.entry-form').children();
		quoteData.push({
			text: formData[0].value,
			author: formData[1].value,
			rating: 0
		})
		renderData();
	})

	$('.filter-form').on('submit', function(e) {
		e.preventDefault();
		// var filterData = $('.filter-form').children();
		var filterData = $('.filter-form').find('[name=search]');
		var authorSearch = {author: filterData[0].value};
		var textSearch = {text: filterData[0].value};
		// Research underscore.js filter function

		console.log(filterData[0].value);
		console.log(authorSearch);
		console.log(textSearch);
		console.log(_.contains(quoteData, authorSearch));
		console.log(_.contains(quoteData, textSearch));
		console.log(_.contains(quoteData, {text: "*life*"}));
	})
  

});