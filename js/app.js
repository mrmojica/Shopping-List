$(document).ready(function() {

/************Add Button*************/
// add clear out input box after submission
//add validation to make sure input is correct, dont add empty input

$('#newForm').submit(function(event) {
	event.preventDefault();
	var $items = $('#newItem').val();
	$('.listItems').append('<li class="item"><input class="check" type="checkbox">' + '<strong>' +$items + '</strong>' + '<button class="edit" type="button"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="remove" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button></li>');
});

/************Checked Button*************/

/* selected .listItems so function will apply to new added items on click with .check */
$('.listItems').on('click', '.check', function() {
	// if ($(this).is(':checked')) {
	// /*	console.log('Checked'); */
	// 	$(this).parent('.item').addClass('completed');
	// } else {
 //    /*console.log('Unchecked'); */
 //    	$(this).parent('.item').removeClass('completed');

 //    } 
 	$(this).parent('.item').toggleClass('completed');


});

/************Edit Button*************/

$('.listItems').on('click', '.edit', function() {
	var newInput = '<input id="newItem" type="text" name="itemName">';
	var enteredInput = newInput.val();
	$(this).siblings('strong').html(newInput);	
/*
// .siblings('strong').attr(contenteditable="true")

example to re-use variable:
var ele = $(this).siblings('strong')
ele.attr('contenteditable', true)

// use add/remove class to change icon


*/

});


/************Remove Button*************/

$('.listItems').on('click', '.remove', function() {
	$(this).parent('li').remove();
});


/************Clear All Button*************/

$('.reset').on('click', '#clearButton', function() {
	$('.listItems').children('li').remove();
});


});

