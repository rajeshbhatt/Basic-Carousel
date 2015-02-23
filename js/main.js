$(document).ready(function() {
    console.log( "ready!" );
    var currentIndex = 0,
    	interval,
    	$carousel = $('.carousel li'),
    	$next = $('#next'),
    	$previous = $('#previous'),
    	length = $carousel.length,
    	initCycle = function(){
    	interval = setInterval(startSlide ,2000);
    },
    clearCycle = function(){
    	clearInterval(initCycle);
    },
    init = function(){
    	bindEvents();
    	initCycle();
    },
    bindEvents = function(){
    	$next.on('click', function(){
    		next();
    	});
    	$previous.on('click', function(){
    		previous();
    	})
    }
    startSlide = function(){
    	console.log(currentIndex , length);
    	if(length-1 === currentIndex){
    		$next.css("display" , "none");
    		$previous.css("display" , "block");
    		currentIndex = 0; // to restart slides
    		// it will stop the slides at the last img
    		clearInterval(interval);
    		return;
    	}
    	if(length > currentIndex){
    		$carousel.css('display','none');
	    	$carousel.eq(currentIndex).css('display','inline');
	    	currentIndex ++;
	    	$next.css("display" , "block");
    	}
    	if(length-1 < currentIndex){
    		$carousel.css('display','none');
	    	$previous.css("display" , "block");
    	}
    	if(currentIndex > 0){
    		$previous.css("display" , "block");
    	}
    	
    },
    next = function(){
    	clearInterval(interval);
    	$carousel.css('display','none');
    	$carousel.eq(currentIndex).css('display','inline');
    	currentIndex ++;
    	$next.css("display" , "block");
    },
    previous = function(){
    	clearInterval(interval);
    	$carousel.css('display','none');
    	$carousel.eq(currentIndex).css('display','inline');
    	currentIndex --;
    	$previous.css("display" , "block");

    };
    init();
});
