

$(document).ready(function() {


$(document).on( "click", "#menutel", function() {
  console.log("ekzajork");
  $(".menuportable").addClass("menuportableactive");
  $(".menuportableactive").removeClass("menuportable");
  $("#menutel").addClass("oui");
});





$(document).on( "click", ".oui", function() {

	$(".menuportableactive").addClass("menuportable");
	$(".menuportable").removeClass("menuportableactive");
	$("#menutel").removeClass("oui");
  
});


});


