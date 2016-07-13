$(document).ready(function() {

/************Add Button*************/

$('#addButton').click(function() {
	var $items = $('#newItem').val();
	$('.listItems').append('<li class="item"><input class="check" type="checkbox">' + '<strong>' +$items + '</strong>' + '<button class="edit" type="button"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="remove" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button></li>');
});

/************Checked Button*************/

/* selected .listItems so function will apply to new added items on click with .check */
$('.listItems').on('click', '.check', function() {
	if ($(this).is(':checked')) {
	/*	console.log('Checked'); */
		$(this).parent('.item').addClass('completed');
	} else {
    /*console.log('Unchecked'); */
    	$(this).parent('.item').removeClass('completed');
    }
});

/************Edit Button*************/

$('.edit').click(function(){
	var currentInput = $(this).parent();
	


});


/************Remove Button*************/

$('.listItems').on('click', '.remove', function() {
	$(this).parent('li').remove();
});



});