(function(Popcorn) {
    
  Popcorn.plugin( "scrolling" , function( options ) {

    return {
      start: function( event, options ) {
				// options.target is a string representing the ID a DOM object
				$.scrollTo($('#' + options.target), 1500),
				console.log("scrolling")
      },

      end: function( event, options ) {
				// Do nothing
      }, 
    };
  });
    
})(Popcorn);
