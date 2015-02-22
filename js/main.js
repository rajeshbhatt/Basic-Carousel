$(document).ready(function() {
    console.log( "ready!" );
    var currentIndex = 0,
    	$carousel = $('.carousel li'),
    	length = $carousel.length,
    	initCycle = function(){
    	setInterval(startSlide ,4000);
    },
    clearCycle = function(){
    	clearInterval(initCycle);
    },
    init = function(){
    	initCycle();
    },
    startSlide = function(){
    	console.log(currentIndex);
    	if(length > currentIndex){
    		$carousel.css('display','none');
	    	$carousel.eq(currentIndex).css('display','inline');
	    	currentIndex ++;
    	}
    	else{
    		alert('end');
    		clearCycle();
    	}
    	
    };
    init();
});
