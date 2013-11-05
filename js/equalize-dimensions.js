/**
 * equalize-dimensions.js v0.0.3
 * Author & copyright (c) 2013: Ángel Cervera Claudio
 * Apache License
 *
 * Repo: https://github.com/angelcervera/equalizeDimensions
 *
 * In this first version, this jQuery plugin equalizes the height of selected elements.
 * 
 * options:
 * 	selector: css selector used to select elements to equalize. If not, equalize children elements
 *
 */
(function($) {

	$.fn.equalizeDimensions = function(options) {
		
		$(this).each(function() {
			var defaultOptions = {
			};
			
			options = $.extend({}, defaultOptions, options );
			
			var $parent = $(this);
			var $elements = null;
			if(options.selector) {
				$elements = $parent.find(options.selector);
			} else {
				$elements = $parent.children();
			}

			// Calculate dimension.
			var newVal = -1, val;
			$elements.each(function() {
				val = $(this).outerHeight(true);
				if(val > newVal) {
					newVal = val;
				}
			});
			
			// Set max height
			$elements.each(function() {
				if(newVal > 0) {
					var $this = $(this);
					var elH = newVal - ($this.outerHeight(true) - $this.height());
					$this.height(elH);
				}
			});
		});
		
		return this;
	};

}(jQuery));
