
$('#lotMenu').on('click', function() {

  var selectedLot = $(this).find('option').filter(':selected').text();
  console.log(selectedLot);
  
});
