	(function (window, document) {

	    var layout   = document.getElementById('layout'),
	        menu     = document.getElementById('menu'),
	        menuLink = document.getElementById('menuLink'),
	        content  = document.getElementById('main');

	    function toggleClass(element, className) {
	        var classes = element.className.split(/\s+/),
	            length = classes.length,
	            i = 0;

	        for(; i < length; i++) {
	          if (classes[i] === className) {
	            classes.splice(i, 1);
	            break;
	          }
	        }
	        // The className is not found
	        if (length === classes.length) {
	            classes.push(className);
	        }

	        element.className = classes.join(' ');
	    }

	    function toggleAll(e) {
	        var active = 'active';

	        e.preventDefault();
	        toggleClass(layout, active);
	        toggleClass(menu, active);
	        toggleClass(menuLink, active);
	    }

	    menuLink.onclick = function (e) {
	        toggleAll(e);
	    };

	    content.onclick = function(e) {
	        if (menu.className.indexOf('active') !== -1) {
	            toggleAll(e);
	        }
	    };

	}(this, this.document));


$(document).ready(function(){
	/****** SMOOTH SCROLL *****/
	var $root = $('html, body');
	$('a').click(function() {
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 500, function () {
	        window.location.hash = href;
	    });
	    return false;
	});
		
	/****** FADE IN 
	$("a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(900ms, redirectPage);
	}); *********/

	function redirectPage() {
		window.location = linkLocation;
	}
});