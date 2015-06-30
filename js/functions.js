// JavaScript Document

//NAVIGATION

jQuery(function($){
    $( '#menubuttonsvg' ).click(function(){
      $('.mobileNavWrapper').toggleClass('showNav')
      });
    });
	  
jQuery(function($){
	$( '#backsvg' ).click(function(){
      $('.mobileNavWrapper').removeClass('showNav')
      });
    });
	 
jQuery(function($){
	$( '.scroll' ).click(function(event){
     event.preventDefault();
     var target = "#" + this.getAttribute('data-target');
     $('html, body').animate({
        scrollTop: $(target).offset().top
        }, 2000);
     });
	});

	
