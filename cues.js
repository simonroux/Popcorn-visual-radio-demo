// When the document is loaded...
  $(document).ready(function() {
     // Create a popcorn instance by calling Popcorn("#id-of-my-video")
     pop = Popcorn("#gdm")

    
// The scrolling actions underlines de different sections of the show, the other scripts happen when a section is loaded.
 
// Section 1 
  	pop.scrolling ({
  	 start: 0, 
  	  end: 48,
  	  target: 'section1'
  	  })
  	  
  	  
// Section 2
  	.scrolling({
  	  start: 49, 
  	  end: 197,
  	  target: 'section2'
  	})
  	
 // Section 3 
    .scrolling({
      start: 198,
      end: 418,
      target: 'section3'
    })

 // Section 4 
      .scrolling({
      start: 419,
      end: 573,
      target: 'section4'
    })

  
 // Section 5 
      .scrolling({
      start: 574,
      end: 1072,
      target: 'section5'
    })

  
  
 // Section 6 
      .scrolling({
      start: 1073,
      end: 1188,
      target: 'section6'
    })

  
// Section 7
  	.scrolling({
  	  start: 1189, 
  	  end: 1575,
  	  target: 'section7'
  	})
  	
 // Section 8 
    .scrolling({
      start: 1576,
      end: 1637,
      target: 'section8'
    })

 // Section 9 
      .scrolling({
      start: 1638,
      end: 2214,
      target: 'section9'
    })

  
 // Section 10 
      .scrolling({
      start: 2215,
      end: 2385,
      target: 'section10'
    })

  
 // Section 11 
      .scrolling({
      start: 2386,
      end: 3036,
      target: 'section11'
    })

  
   
 // Section 12 
      .scrolling({
      start: 3037,
      end: 3114,
      target: 'section12'
    })

  
 // Section 13 
      .scrolling({
      start: 3115,
      end: 3209,
      target: 'section13'
    })
		
		// Jump to timecode (proof of concept)
		$('#jump2').click(function() {
			pop.currentTime(49).play();
			return false;
		})
  });
  
  
  