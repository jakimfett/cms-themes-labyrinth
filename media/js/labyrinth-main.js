(function($) {
	
	function expand(el) {
		var parent = el.parent();
		var top = el.closest("section");
		var height = top.height();
		if (height == 0 || height == NaN)
			return;
		
		var container = top.find(".hsContent");
		var padout = container.css("padding").split(" ");
		var pads = [ parseInt(padout[0], 10), parseInt(padout[1], 10) ];
		
		var pref_height = height - pads[1];
		var pref_ratio = parseFloat(el.data("resize-ratio"));
		var pref_width = pref_ratio * pref_height;
		
		var parent_width = parent.width();
		if (pref_width > parent_width) {
			pref_width = parent_width;
			pref_height = pref_width / pref_ratio;
		}
		
		el.width ( pref_width );
		el.height ( pref_height );
		return [ pref_width, pref_height ];
	}
	
	function labyrinth() {
		var $window = $(window);
		var $fullwidths = $('.macro-fullwidth');
		var $halfwidths = $('.macro-halfwidth');
		var $blackouts = $('.blackout');
		var $medias = $(".media-embed");
		var $footer = $('.footer');
		var $body = $('body');
		
		function adjustWindow(){
			// Init Skrollr
			var s = skrollr.init({
				forceHeight: false,
				render: function(data) {
					//Debugging - Log the current scroll position.
					//console.log(data.curTop);
				}
			});

			// Get window size
			var winH = $window.height();
			var hWinH = winH / 2;
			// Keep minimum height 550
			if (winH <= 600)
				winH = 550;
			if (hWinH <= 600)
				hWinH = 600;

			// Resize our slides
			$footer.height(6 * (winH / 8));
			$fullwidths.each(function() { jQuery(this).height(winH); });
			$halfwidths.each(function() { jQuery(this).height(hWinH); } );
			$blackouts.each(function() { jQuery(this).height(winH / 8); });

			$(".dyn-size").each(function() {
				expand($(this));
			});
			
			// Refresh Skrollr after resizing our sections
			s.refresh($('.intro'));
		}
	
		adjustWindow();
		$medias.fitVids();
		$(window).on("resize", function() { adjustWindow(); });
	}
	
	$(document).on("ready", function() { labyrinth(); });
})(jQuery);