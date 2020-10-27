function Open() {
var win=window.open(document.getElementById("ifrm").src, '_blank');
win.focus();
}

let iframeHeight = $(window).height();

$("#ifrm").css({
  height: iframeHeight - 54
});

var refreshIframe = function() {
  $("#ifrm").attr("src", $("#ifrm").attr("src"));
  $("#ifrm").load(function() {
    $("#ifrm")
      .stop()
      .animate(
        {
          opacity: 1
        },
        1000,
        "swing"
      );
  });
};

function loadIframe(iframeName, url) {
  const $iframe = $("#" + iframeName);
  if ($iframe.length) {
    $iframe.attr("src", url); // here you can change src
    return false;
  }
  return true;
}

