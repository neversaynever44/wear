// $(document).ready(function(){

// var client = document.querySelector('.menu').clientHeight;
// var scroll = document.querySelector('.menu').scrollHeight;
// var scrollW = getScrollbarWidth();
// 	if (scroll > client) {
// 		console.log()
// 		$('.menu').css({
// 			marginRight: - scrollW + "px"
// 		});
// 	}


// function getScrollbarWidth() {

// 		var div = document.createElement('div');

// 		div.style.overflowY = 'scroll';
// 		div.style.width = '50px';
// 		div.style.height = '50px';

// 		div.style.visibility = 'hidden';

// 		document.body.appendChild(div);
// 		var scrollWidth = div.offsetWidth - div.clientWidth;
// 		document.body.removeChild(div);

// 	return scrollWidth;
// 	}
// 	// function getScrollbarWidth() {
// 	//     var outer = document.createElement("div");
// 	//     outer.style.visibility = "hidden";
// 	//     outer.style.width = "100px";
// 	//     outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

// 	//     document.body.appendChild(outer);

// 	//     var widthNoScroll = outer.offsetWidth;
// 	//     // force scrollbars
// 	//     outer.style.overflow = "scroll";

// 	//     // add innerdiv
// 	//     var inner = document.createElement("div");
// 	//     inner.style.width = "100%";
// 	//     outer.appendChild(inner);        

// 	//     var widthWithScroll = inner.offsetWidth;

// 	//     // remove divs
// 	//     outer.parentNode.removeChild(outer);

// 	//     return widthNoScroll - widthWithScroll;
// 	// }
// });




$(document).ready(function(){

//init menu trigger
toggleMenu();

// open-popup
$('.js-open-popup').click(function (e) {
	e.preventDefault();

	var link = $(this).data('link');
	var popup = $('.js-popup[data-popup="' + link + '"]');

	popup.add('.js-overlay').addClass('is-active');
	// $("body").addClass("is-hidden");
});
$('.js-close-popup').click(function (e) {
	$(this).parents('.js-popup').add('.js-overlay').removeClass('is-active');

})

// Animation button-send
var plane = $('#flyPlane');
$('.form-label').on("click",function(){
   if(!plane.hasClass('is-active')){
	    plane.addClass('is-active');
	    $('#form-submit').addClass('is-hidden');
	    $('#form-submit').attr('disabled', 'disabled');
      setTimeout(function(){
       plane.removeClass('is-active'); 
       $('#form-submit').removeClass('is-hidden'); 
      	   $('#form-submit').removeAttr('disabled');
  	      	document.getElementById('form').submit();
   		},1300);
 	 }
})

// anchor
$('.arrow-up').on('click', function() {
		if(event.preventDefault){
		   	event.preventDefault();
		}else{
		    event.returnValue = false; 
		};
		var arrowUp = $('.arrow-up'),
		    id  = $(this).attr('href'),
			top = $(id).offset().top;
	 $('body,html').animate({scrollTop: top}, 400);
});
// arrow-up
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) { 
        $('.arrow-up').addClass('is-show');
    } else {
    	$('.arrow-up').removeClass('is-show')
    }
});


// slider

	var newSlider = $('.js-slider');

	initSlider(newSlider, {
	infinite: false,
	 speed: 1000,
	 dots: true,
	 autoplay: true,
   	 adaptiveHeight: true,
	 autoplaySpeed: 6000,
	 arrows: true,
 	 prevArrow: '.js-prev',
	 nextArrow: '.js-next',
});

	function initSlider(slider, options) {
	 slider.on('init', function() {
	  setTimeout(function() {
	   slider.addClass('is-ready');
	  }, 100);
	 });
	 slider.not('.slick-initialized').slick(options);
	}

// Show-Hide More text
// $(function() {
// 	$('.read-more').on('click',function(){
// 		event.preventDefault()
// 	    var $showText = $('.hide-text');
// 	    if ($showText.is(':visible')) {
// 	        $showText.fadeOut("200");
// 	    } else {
// 	    	$showText.fadeIn("200");
// 	    }
	        
// 	});
//  });    




// clickDocument
 $(document).click(function(e) {
    var allPopupClose = !$(e.target).closest('.js-open-popup').length && 
                        !$(e.target).closest('.popup__window').length && 
                        !$(e.target).closest('.menu').length &&
                        !$(e.target).closest('.menu-btn').length;

    if (allPopupClose) {
    	$('.js-popup, .menu-btn, .js-overlay').removeClass('is-active');
        $('.menu').removeClass('is-open');
        $('body').removeAttr("style");

     }

});



// accordion menu
	var acc = document.getElementsByClassName("js-show");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].onclick = function() {
	    this.classList.toggle("is-active");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight){
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	      $('body').click(function(e) { 
		    var el = e.target || e.srcElement; 
		    if (!$(el).closest('.js-show').length && !$(el).closest('.js-show').length) { 
		     panel.style.maxHeight = null;
		     $('.js-show').removeClass('is-active');
		    } 
		}); 
	  }
	}

});

//menu trigger function
function toggleMenu() {
	var $menu = $(".menu"),
			$menuOverflow = $(".js-overlay"),
			$trigger = $(".menu-btn"),
			$body = $("body"),
			$scrollWidth = getScrollWidth();

	$trigger.on("click", function() {
		if($menu.hasClass("is-open")) {
			menuClose();
		} else {
			menuOpen();
		}
	});

	// $menuOverflow.on("click", function(evt){ 
	// 	if(evt.target == this) {
	// 		menuClose();
	// 	}
	// });

	var menuOpen = function() {
		$trigger.removeClass("is-active").addClass("is-active");
		$menuOverflow.addClass("is-active");
		$menu.addClass("is-open");
		$body.css({
			overflowY: "hidden",
			paddingRight: $scrollWidth + "px"
		});
		// $("html, body").stop().animate({
		// 	scrollTop: 0
		// }, 500);
	};

	var menuClose = function() {
		$trigger.removeClass("is-active");
		$menuOverflow.removeClass('is-active');
		$menu.removeClass("is-open");
		$body.removeAttr("style");
	};
}
//get scroll width 
function getScrollWidth() {
	if ($(document).height() > $(window).height()) {
		var div = document.createElement('div');

		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';

		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		var scrollWidth = div.offsetWidth - div.clientWidth;
		document.body.removeChild(div);
	} else {
		var scrollWidth = 0;
	}

	return scrollWidth;
};
