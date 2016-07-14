$(document).ready(function() {

/************Add Button*************/

$('#newForm').submit(function(event) {
	event.preventDefault();
	var items = $('#newItem').val();
	if (!$('#newItem').val()) {
		alert('This field cannot be blank');
	} else {
	$('.listItems').append('<li class="item"><input class="check" type="checkbox" contenteditable="false">' + '<strong>' + items + '</strong>' + '<button class="edit" type="button"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="remove" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button></li>');
	}
});

/************Checked Button*************/


$('.listItems').on('click', '.check', function() {
 	$(this).parent('.item').toggleClass('completed');
});


/************Edit Button*************/

$('.listItems').on('click', '.edit', function() {
	var editInput = $(this).siblings('strong');
	editInput.attr('contenteditable', 'true');
	editInput.focus();
	$(this).addClass('save');
	$(this).children('i').attr('class', 'fa fa-floppy-o');

	
/*
// .siblings('strong').attr(contenteditable="true")

example to re-use variable:
var ele = $(this).siblings('strong')
ele.attr('contenteditable', true)

// use add/remove class to change icon


*/

});

$('.listItems').on('click', '.save', function() {
	var saveInput = $(this).siblings('strong');
	saveInput.attr('contenteditable', 'false');
	saveInput.blur();
	$(this).removeClass('save');
	$(this).children('i').attr('class', 'fa fa-pencil');
	


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

