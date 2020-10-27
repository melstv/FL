document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var options = {};
  var instances = M.Sidenav.init(elems, options);

  document
    .querySelector("#toggle_sidenav")
    .addEventListener("click", function() {
      var elem = document.querySelector(".sidenav");
      var instance = M.Sidenav.getInstance(elem);

      if (instance.isOpen) {
        console.log("Is open: I need to close it");
        instance.close();
      } else {
        console.log("Is closed: I need to open it");
        instance.open();
      }
    });
});

$(document).ready(function () {
  $('.collapsible').collapsible();
});
	
$(document).ready(function() {
  // plugin initializations etc.
$('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
});	


// SWAP ICON ON CLICK
	$('.dark-toggle').on('click',function(){
		if ($(this).find('i').text() == 'brightness_4'){
				$(this).find('i').text('brightness_high');
		} else {
				$(this).find('i').text('brightness_4');
		}
	});
