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