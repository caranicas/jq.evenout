(function( $ ) {
 
    $.fn.evenout = function() {
		
		var height = 0;
		var self = this;
		 
		$(window).bind("resize", function(){
			height = 0;
			resize(self);
		});
			
		function resize(group)
		{
			group.each(function() {
		        var obj = $( this );
	 			obj.css('height','auto');

			});

			group.each(function() {
		        var obj = $( this );

				if(obj.height() > height)
					height = obj.height();
			});

			group.each(function() {
				var obj = $( this );
				obj.height(height);
			});
		}
		
		resize(self);		
		return 0;
    };
 
}( jQuery ));