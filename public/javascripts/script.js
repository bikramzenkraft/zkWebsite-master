// JavaScript Document

var vv =jQuery.noConflict();
// Checking for Retina Devices
function isRetina() {
	var query = '(min-moz-device-pixel-ratio: 1.5),\
				(-o-min-device-pixel-ratio: 3/2),\
				(min-device-pixel-ratio: 1.5),\
				(min-resolution: 144dpi),\
				(min-resolution: 1.5dppx)';

	if (window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia(query).matches)) {
		return true;
	}

	return false;
}

// Replace images with @2x
function isRetinaipad() {
	var query1 = '(min-resolution: 192dpi),\
                  (min-device-width : 300px) and (max-device-width : 1024px),'
				   ;

	if ((window.matchMedia && window.matchMedia(query1).matches)) {
		return true;
	}

	return false;
}
 
 vv(document).ready(function() {
	if (window.isRetinaipad()) {
		var images = document.getElementsByTagName('img');
		for (var i = 0, j = images.length; i < j; i++) {
			var image = images[i],
				src = image.src,
				lastSlash = src.lastIndexOf('/'),
				path = src.substring(0, lastSlash),
				file = src.substring(lastSlash + 1),
				retinaSrc = 'images/@2x/' + file;

			image.src = retinaSrc;
		}
	}


	console.log('fancybox-media');
	$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
	});

	$('#intercom').on('click',function() {
		Intercom('showNewMessage')
	})


});
