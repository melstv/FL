(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function() {
	$('.navcoin').on('click', function(e) {
		e.preventDefault();
		$('.bar').each(function() {
			$(this).css('display', 'none');
		});
		var block = $(this).attr('href');
		$(block).css('display', 'block');
	});
});


$(function() {
  $("#section_wraper_menu4 ul li").click(function(e) {
    e.preventDefault();
    $("#section_wraper_menu4 ul li").removeClass('active');
    $(this).addClass('active');
  })
});



$(document).ready(function(){
    $('.tabs').tabs();
  }); 

$(document).ready(function(){
$('.modal').modal();
})
$(".button-collapse").sideNav();
$('.modal-trigger').leanModal();
$('#push,secton').pushpin({ top:$('#push').height() });
document.getElementById("fm").align="left";

 $(document).ready(function(){
    $('.tooltipped').tooltip();
  });
  

  