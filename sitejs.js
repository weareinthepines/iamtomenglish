$(document).ready(function(){    
	var x = new Date ();
		var y = x.getHours();
		if (y > 6 || y < 12)
			$("#parallax").css("background-image", "url('sunrise.png')");
		else if (y > 12 || y < 18)
			$("#parallax").css("background-image", "url('noon.jpg')");
		else if (y > 18 || y < 24)
			$("#parallax").css("background-image", "url('sunset.jpg')");
		else
			$("#parallax").css("background-image", "url('midnight.jpg')");
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});