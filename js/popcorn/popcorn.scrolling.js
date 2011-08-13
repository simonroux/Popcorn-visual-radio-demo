(function(Popcorn) {
    
  Popcorn.plugin( "scrolling" , function( options ) {

    return {
      _setup: function() {
        // optional                          
      },
      start: function( event, options ) {
        // Do stuff at the start!
        console.log("The Start!");
      },
      end: function( event, options ) {
        // Do stuff at the end!
        console.log("The End!");
      }, 
      _teardown: function() {
        // optional            
      }
    };
  });
    
})(Popcorn);
