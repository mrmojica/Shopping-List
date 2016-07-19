$(document).ready(function() {

/************Add Button*************/

$('#newForm').submit(function(event) {
	event.preventDefault();
	var items = $('#newItem').val();
	if (!$('#newItem').val()) {
		alert('This field cannot be blank');
	} else {
		$('.listItems').append('<li class="item"><input class="check" type="checkbox" contenteditable="false">' + '<strong>' + items + '</strong>' + '<button class="edit" type="button"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="remove" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button></li>');
		//clears input text
		$('input:text').val('');
	}
});

/************Checked Button*************/


$('.listItems').on('click', '.check', function() {
 	$(this).parent('.item').toggleClass('completed');
});


/************Edit Button*************/

$('.listItems').on('click', '.edit', function() {
	var editInput = $(this).siblings('strong');
	var iconClass = $(this).children('i').attr('class');
	//change edit icon to save icon
	if (iconClass == 'fa fa-pencil') {
		$(this).children('i').attr('class', 'fa fa-floppy-o');	
		editInput.attr('contenteditable', 'true');
		editInput.focus();

	} else if ( iconClass == 'fa fa-floppy-o') {
		$(this).children('i').attr('class', 'fa fa-pencil');
		editInput.attr('contenteditable', 'false');	
	}

});

/************Remove Button*************/

$('.listItems').on('click', '.remove', function() {
	$(this).parent('li').remove();
});


/************Clear All Button*************/

$('.reset').on('click', '#clearButton', function() {
	$('.listItems').children('li').remove();
});

/************Filter Button*************/
$('.filterChecked').on('click', '#filter', function(){
	$('.completed').closest('li').toggle();
});


});

