function animatePosts() {
  $('.row').onScreen({
	  doIn: function() {
	    $(this).animate({
	      top: 30,
	      opacity: 1
	    },500);
	  },
	  tolerance: 50
	});
}

function animateHeader() {
  $('.header .container').onScreen({
	  doIn: function() {
	    $(this).animate({
	      top: 30,
	      opacity: 1
	    },500);
	  },
	  tolerance: 50
	});
}

function animateSlogan() {
  $('.slogan').onScreen({
	  doIn: function() {
	    $(this).animate({
	      top: 30,
	      opacity: 1
	    },500);
	  },
	  tolerance: 50
	});
}

$(function(){
    animatePosts();
    animateHeader();
    animateSlogan();
});

$(document).ready(function(){
	// Smooth scrolling to anchors
    $('a[href*=#]').anchor({
        transitionDuration : 1200
    });

	// cache the window object
	$window = $(window);
	
	// add class shrink to nav when scrolling down
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 50) {
	    $('nav').addClass('shrink');
	  } else {
	    $('nav').removeClass('shrink');
	  }
	});
	
	// parallax effect
	$('[data-type="background"]').each(function(){
		// declare the variable to affect the defined data-type
		var $scroll = $(this);
		               
		$(window).scroll(function() {
			// Negative value because we're scrolling upwards                             
			var yPos = -($window.scrollTop() / $scroll.data('speed')); 
			 
			// background position
			var coords = '50% '+ yPos + 'px';
			
			// move the background
			$scroll.css({ backgroundPosition: coords });    
		}); // end window scroll
	});  // end section function
	
	
	// Form
    var options = { 
        target:        '#result',   // target element(s) to be updated with server response 
        beforeSubmit:  validate,  // pre-submit callback 
        success:       showResponse  // post-submit callback 
    }; 
 
    // bind to the form's submit event 
    $('#contactForm').submit(function() { 
        // inside event callbacks 'this' is the DOM element so we first 
        // wrap it in a jQuery object and then invoke ajaxSubmit 
        $(this).ajaxSubmit(options); 
        $('#result').hide();
        // !!! Important !!! 
        // always return false to prevent standard browser submit and page navigation 
        return false; 
        
    }); 
	
	
}); // close out script

function validate(formData, jqForm, options) { 
    // fieldValue is a Form Plugin method that can be invoked to find the 
    // current value of a field 
    // 
    // To validate, we can capture the values of both the username and password 
    // fields and return true only if both evaluate to true 
 
    var nameValue = $('input[name=name]').fieldValue(); 
    var emailValue = $('input[name=email]').fieldValue(); 
    var messageValue = $('textarea[name=message]').fieldValue(); 
    var error = 0;
    
    // Reset error messages
    $('.name-error').text('');
    $('.email-error').text('');
    $('.message-error').text('');
    
    $('#name').removeClass('error');
    $('#email').removeClass('error');
    $('#message').removeClass('error');
 
    // Check if fields contain default values.
    if (nameValue == 'Naam *') { 
        $('.name-error').text('Geef je naam op.');
        $('#name').addClass('error');
        error = 1;
    } 
    if (emailValue == 'E-mail *') { 
        $('.email-error').text('Vul een geldig e-mailadres in.');
        $('#email').addClass('error');
        error = 1;
    } 
    if (messageValue == 'Bericht *') { 
        $('.message-error').text('Typ een bericht.');
        $('#message').addClass('error');
        error = 1;
    } 
    if (error == 1) {
        return false; // Do not submit if error occurred.  
    }
}


// pre-submit callback 
function showRequest(formData, jqForm, options) { 
    // formData is an array; here we use $.param to convert it to a string to display it 
    // but the form plugin does this for you automatically when it submits the data 
    var queryString = $.param(formData); 
 
    // jqForm is a jQuery object encapsulating the form element.  To access the 
    // DOM element for the form do this: 
    // var formElement = jqForm[0]; 
 
    alert('About to submit: \n\n' + queryString); 
 
    // here we could return false to prevent the form from being submitted; 
    // returning anything other than false will allow the form submit to continue 
    return true; 
} 
 
// post-submit callback 
function showResponse(responseText, statusText, xhr, $form)  { 
    // executes after succesful form submission
 	
    $('#contactForm').slideUp(1000, function() {
    	// animation complete
    	$('#result').slideDown();
    });
    
    
    //alert('status: ' + statusText + '\n\nresponseText: \n' + responseText + 
    //    '\n\nThe output div should have already been updated with the responseText.'); 
} 

// Load in font
WebFontConfig = {
    google: { families: [ "Dancing+Script:400,300,700:latin" ] }
  };
  (function() {
    var wf = document.createElement("script");
    wf.src = ("https:" == document.location.protocol ? "https" : "http") +
      "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s);
  })();