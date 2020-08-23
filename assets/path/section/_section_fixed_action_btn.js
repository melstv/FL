$(function (){
$('#section_fixed_action_btn').prepend(' <div class="fixed-action-btn"> <a class="btn-floating btn-large blue-grey darken-4"> <i class="large material-icons">menu</i> </a> <ul> <li><a href="../index.html" target="_blank" class="btn-floating blue-grey darken-4"><i class="material-icons">home</i></a></li> <li><a href="../review.html" target="_blank" class="btn-floating blue-grey darken-4"><i class="material-icons">subtitles</i></a></li> <li><a href="../list.html" target="_blank" class="btn-floating blue-grey darken-4"><i class="material-icons">double_arrow</i></a></li> <li><a href="../rotator.html" target="_blank" class="btn-floating blue-grey darken-4"><i class="material-icons">autorenew</i></a></li> </ul></div>');

});

$(document).ready(function(){
$('.fixed-action-btn').floatingActionButton();
}); 
