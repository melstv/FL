document.write(' <div id="announcement-banner" class="announcement-banner"> <div id="announcement-banner-close" class="announcement-banner-close"><i class="material-icons">close</i> </div> <div class="announcement-banner-title"> <span>Attention Customers!</span> </div> <div class="announcement-banner-content"> <span>THIS IS AN ANNOUNCEMENT ABOUT SOMETHING HAPPENING SOON! Also dont forget to check out this other thing thats also going to be happening soon! Yay information! Gotta love it!</span> </div></div> ');
var announcementBanner = document.getElementById("announcement-banner");
var announcementCloseButton = document.getElementById("announcement-banner-close");
announcementCloseButton.onclick = function(){
  announcementBanner.style.display = "none";
}