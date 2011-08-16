  // When the document is loaded...
  $(document).ready(function() {
     // Create a popcorn instance by calling Popcorn("#id-of-my-video")
     var pop = Popcorn("#gdm")

  	// Scroll the page
  	.scrolling({
  	  start: 4, 
  	  end: 45,
  	  target: 'section2'
  	})
  	
    .scrolling({
      start: 197,
      end: 198,
      target: 'section3'
    })
  });