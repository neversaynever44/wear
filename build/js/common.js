$(document).ready(function(){

	//init menu trigger
	toggleMenu();

	// init animated-bg
	if($(document).width() > 768) {
		// animatedBg();
	}
var animbg = new AnimatedMouseMove('.animated-bg', '.triangle', '.animated', 1.5);
	var locale = 'ru';
	function getLocale() {
		if(location.pathname.match(/\b(en|ru)\b/)) {
			locale = location.pathname.match(/\b(en|ru)\b/)[1];
		}
		if(locale == undefined || locale == null || locale == '') {
			locale = 'ru';
		}
	}
	// init getLocale
	getLocale();

  //validate form
  function validate(idForm) {

  	var $form = $('#' + idForm);
  	$form.find('.error').remove();
  	var valid = true;

    //validate name
    var $formName = $form.find('[name="Feedback\[name\]"]');
    if ($formName.val() === null || $formName.val() == "" || $formName.val() === undefined) {
    	if (locale == 'en') {
    		var errorSpanName = createErrorSpan('Please, enter your name');
    	} else {
    		var errorSpanName = createErrorSpan('Пожалуйста, введите имя');
    	}
    	$formName.after(errorSpanName);
    	valid = false;
    }

    //validate email
    var emailRegEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    var $formEmail = $form.find('[name="Feedback\[email\]"]');
    if ($formEmail.val() === null || $formEmail.val() == "" || $formEmail.val() === undefined) {
    	if (locale == 'en') {
    		var errorSpanEmail = createErrorSpan('Please, enter your Email');
    	} else {
    		var errorSpanEmail = createErrorSpan('Пожалуйста, введите Email');
    	}
    	$formEmail.after(errorSpanEmail);
    	valid = false;
    } else if ($formEmail.val().search(emailRegEx) == -1) {
    	var errorSpanEmail = createErrorSpan('Неправильный Email адрес');
    	$formEmail.after(errorSpanEmail);
    	valid = false;
    }
    
    //validate tel
    var telRegEx = /^\+?\d+(\(\d+\))?[\d\-\s]+\d+$/;
    var $formTel = $form.find('[name="Feedback\[telephone\]"]');
    if ($formTel.val() === null || $formTel.val() == "" || $formTel.val() === undefined) {
    	if (locale == 'en') {
    		var errorSpanTel = createErrorSpan('Please, enter your phone');
    	} else {
    		var errorSpanTel = createErrorSpan('Пожалуйста, введите номер');
    	}
    	$formTel.after(errorSpanTel);
    	valid = false;
    } else if ($formTel.val().search(telRegEx) == -1) {
    	if (locale == 'en') {
    		var errorSpanTel = createErrorSpan('Incorrect number');
    	} else {
    		var errorSpanTel = createErrorSpan('Неправильный номер');
    	}
    	$formTel.after(errorSpanTel);
    	valid = false;
    }

    // if something isn't valid
    if(!valid) return false;

    //if all valid
    return true;
  }

  //create error validation massage span
  function createErrorSpan(errorMas) {
  	var span = document.createElement('span');
  	span.className = "error";
  	span.innerHTML = errorMas;
  	return span;
  }
var plane      = $('#flyPlane');
var btnSubmit  = $('#form-submit');
var th = $('#feedback-form');

 function defaultState() {
  	$('.contact-message').removeClass('is-active');
  	plane.removeClass('is-active'); 
  	btnSubmit.removeClass('is-hidden'); 
  }

// form-is-visible
  $('#form-submit').on('click', function(event){
  	var $form = $(this).parents('form');
  	var valid = validate($form.attr('id'))
  	if (valid) {
  		$.ajax({
  			type: "POST",
      url: "../mail.php", //Change
      data: th.serialize()
    }).done(function() {
    	plane.addClass('is-active');
    	btnSubmit.addClass('is-hidden');
    	setTimeout(function() {
    		$('.contact-message').addClass('is-active');
    	}, 1000);
    	setTimeout(defaultState, 3000);
    });
    th.trigger("reset");

    return false;
  }
  else {
  	event.preventDefault();
  	$('.error').fadeIn();
  	return false;
  }
});
// form-is-hidden
  $('.btn-send').on('click', function(event){
  	var $form = $(this).parents('form');
  	var valid = validate($form.attr('id'))
  	if (valid) {
  		$.ajax({
  			type: "POST",
      url: "../mail.php", //Change
      data: $form.serialize()
    }).done(function() {
    		$('.btn-send').addClass('is-scale');
    	  $('.icon-send').addClass('is-active');
    	setTimeout(function() {
    		$('.icon-send').removeClass('is-active'); 
  			$('.btn-send').removeAttr('disabled');
  			$('.btn-send').removeClass('is-scale');
    	}, 1000);
    });
    $form.trigger("reset");

    return false;
  }
  else {
  	event.preventDefault();
  	$('.error').fadeIn();
  	return false;
  }
});


// slider
var newSlider = $('.js-slider');

initSlider(newSlider, {
	infinite: false,
	speed: 1000,
	dots: true,
	autoplay: false,
	adaptiveHeight: true,
	arrows: true,
	prevArrow: '.js-prev',
	nextArrow: '.js-next'
});

var slider1 = $('.js-slider1');

initSlider(slider1, {
	infinite: false,
	speed: 1000,
	autoplay: false,
	adaptiveHeight: true,
	arrows: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: '.js-prev1',
	nextArrow: '.js-next1',
	 responsive: [
    {
      breakpoint: 1111,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

  ]
});


var slider2 = $('.js-slider2');

initSlider(slider2, {
	infinite: false,
	speed: 1000,
	 slidesToShow: 3,
  slidesToScroll: 3,
	autoplay: false,
	adaptiveHeight: true,
	arrows: true,
	prevArrow: '.js-prev2',
	nextArrow: '.js-next2',
	 responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

  ]
});


// slider3
var slider3 = $('.js-slider3');

initSlider(slider3, {
	infinite: false,
	speed: 1000,
	 slidesToShow: 3,
  slidesToScroll: 3,
	autoplay: false,
	adaptiveHeight: true,
	arrows: true,
	prevArrow: '.js-prev3',
	nextArrow: '.js-next3',
	 responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },


  ]
});
// slider4
var slider4 = $('.js-slider4');

initSlider(slider4, {
	infinite: false,
	speed: 1000,
	autoplay: false,
	adaptiveHeight: true,
	arrows: true,
	prevArrow: '.js-prev4',
	nextArrow: '.js-next4'
});


// initslider
function initSlider(slider, options) {
	slider.on('init', function() {
		setTimeout(function() {
			slider.addClass('is-ready');
		}, 100);
	});
	slider.not('.slick-initialized').slick(options);
}
$('.links__link').each(function() {
	if ($(this).attr('href') == '') {
		 $(this).parent().remove(); 
	}else {
    $(this).parent().show(); 
}
});




// open-popup

$('.js-open-popup').on('click', function (event) {

	event.preventDefault();

	var link = $(this).data('link');
	var popup = $('.js-popup[data-popup="' + link + '"]');
	popup.add('.js-overlay').addClass('is-active');
});
$('.js-close-popup').click(function (e) {
	$(this).parents('.js-popup').add('.js-overlay').removeClass('is-active');
});




// anchor
$('.arrow-up').on('click', function(event) {
	event.preventDefault();
	var arrowUp = $('.arrow-up'),
	id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 400);
});
// show arrowUp 
$(document).scroll(function() {
	if($(this).scrollTop() > 200) { 
		$('.arrow-up').addClass('is-show');
	} else {
		$('.arrow-up').removeClass('is-show')
	}
});






// tabs
$('.learn-more').on('click', function(e){
	e.preventDefault();
	var item = $(this).closest('.job__list-item'),
	contentItem = $('.job__content'),
	itemPosition = item.index(),
	clickBtn        = $('.learn-more');
	contentItem.eq(itemPosition)
	.add(item)
	.toggleClass('is-active')
	.siblings()
});


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

// support browser
var supportedPrefix,
supports3d = false,
prefixes = [ "Webkit", "Moz", "ms", "O" ],
div = document.createElement("div");
if ( div.style.perspective !== undefined ) {
	/*Browser supports CSS transform 3d without prefix*/
	supportedPrefix = "";
	supports3d = true;
}else {
	for ( var i = 0; i < prefixes.length; ++i ) {
		if((prefixes[i] + "Perspective") in div.style) {
			supports3d = true;
			supportedPrefix = prefixes[i];
			break;
		}
	}
}
console.log("supports3d: " + supports3d + "; browser prefix: " + supportedPrefix);


// accordion menu
var acc = document.querySelectorAll(".js-show");
var i,
_prevClick;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function() {
		if(_prevClick && _prevClick !== this) {
			_prevClick.classList.remove("is-active");
			_prevClick.nextElementSibling.style.maxHeight = '';
		}
		this.classList.toggle("is-active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = '';
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
		_prevClick = this;

	});
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
	var menuOpen = function() {
		$trigger.removeClass("is-active").addClass("is-active");
		$menuOverflow.addClass("is-active");
		$menu.addClass("is-open");
		$body.css({
			overflowY: "hidden",
			paddingRight: $scrollWidth + "px"
		});
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

function AnimatedMouseMove(container, triangles, bgIcons, speed) {

	var _this = this;

	this.container = $(container);

	var trianglesInit = false;
	if($(triangles)[0]) {
		this.triangles = $(triangles);
		this.trianglesTitles = this.triangles.find('.triangle__title');
		this.trianglesTitlesBg = this.triangles.find('.triangle__title-bg');
		trianglesInit = true;
	}

	this.bgIcons = $(bgIcons);

	this.speedRate = speed || 1.5;

	this.setContainerParams();

	this.deviation = {
		x0: 0.07,
		y0: 0,
		x1: (-0.10),
		y1: 0,
		x2: 0.15,
		y2: 0.10
	}

	$(window).resize(function(){
		_this.setContainerParams();
	});

	this.container.on('mousemove', function(evt) {
		var pageXY = _this.getMouseCoordinates(evt);
		if(trianglesInit) {
			_this.animateX(_this.triangles, pageXY.x);
			_this.animateX(_this.trianglesTitles, pageXY.x);
			_this.positionX(_this.trianglesTitlesBg, pageXY.x)
		}
		_this.animateXY(_this.bgIcons, pageXY.x, pageXY.y);
	})
}

AnimatedMouseMove.prototype.setContainerParams = function() {
	this.containerOffsetLeft = this.container.offset().left || 0;
	this.containerOffsetTop = this.container.offset().top || 0;
	this.containerWidth = this.container.innerWidth() || 0;
	this.containerHeight = this.container.innerHeight() || 0;

	this.correctCenterWidth = this.containerOffsetLeft + this.containerWidth / 2;
	this.correctCenterHeight = this.containerOffsetTop + this.containerHeight / 2;
}

AnimatedMouseMove.prototype.animateX = function(elements, x) {
	var _this = this,
			elementsLength = elements.length,
			i, a, b;

	for (i = 0; i < elementsLength; i++) {
		a = elements[i].clientWidth * _this.deviation['x' + i] * x / _this.containerWidth;
		b = elements[i].clientWidth * _this.deviation['y' + i] * x / _this.containerWidth;
		elements[i].style.transform = "translate(" + a + "px, " + b +"px)";
	}
}

AnimatedMouseMove.prototype.animateXY = function(elements, x, y) {
	var _this = this,
			elementsLength = elements.length,
			i, a, b;

	for (i = 0; i < elementsLength; i++) {
		a = elements[i].clientWidth * x / _this.containerWidth * _this.speedRate;
		b = elements[i].clientHeight * y / _this.containerHeight * _this.speedRate;
		if(i % 2 == 0) {
			elements[i].style.transform = "translate(" + a + "px, " + b +"px)";
		} else {
			elements[i].style.transform = "translate(" + -a + "px, " + -b +"px)";
		}
	}
}

AnimatedMouseMove.prototype.positionX = function(elements, x) {
	var _this = this,
			elementsLength = elements.length,
			i, a, b;

	for (i = 0; i < elementsLength; i++) {
		a = elements[i].attributes.width.value * _this.deviation['x' + i] * x / _this.containerWidth ;
		b = elements[i].attributes.height.value * _this.deviation['y' + i] * x / _this.containerWidth ;
		elements[i].setAttribute('x', a);
		elements[i].setAttribute('y', b);
	}
}

AnimatedMouseMove.prototype.getMouseCoordinates = function(evt) {
	return {
		x: (evt.pageX - this.correctCenterWidth) * 2,
		y: (evt.pageY - this.correctCenterHeight) * 2
	}
}

AnimatedMouseMove.prototype.abs = function(num) {
	if(num >= 0)
		return num;
	else
		return -num;
}




// animatedBG
// function animatedBg() {
// 	var $container = $('.animated-bg');

// 	$container.each(function() {
// 		var containerOffsetLeft = $(this).offset().left,
// 		containerOffsetTop = $(this).offset().top,
// 		containerWidth = $(this).innerWidth(),
// 		containerHeight = $(this).innerHeight(),
// 		$animatedItems = $(this).find("> .animated"),
// 			// 2 = x2 speed of mouse
// 			speedRate = 1.4;

// 			$(this).on("mousemove", function(e) {
// 				var x = (e.pageX - containerOffsetLeft - containerWidth / 2) * 2,
// 				y = (e.pageY - containerOffsetTop - containerHeight / 2) * 2;

// 				$animatedItems.each(function(index) {
// 					var a = $(this).innerWidth() * x / containerWidth * speedRate,
// 					b = $(this).innerHeight() * y / containerHeight * speedRate;

// 					if(index % 2 == 0) {
// 						$(this).css("transform", "matrix(1, 0, 0, 1, " + a + ", " + b + ")");
// 					// $(this).css("transform", "translate(" + a + "px, " + b + "px)");
// 				} else {
// 					$(this).css("transform", "matrix(1, 0, 0, 1, " + -a + ", " + -b + ")");
// 					// $(this).css("transform", "translate(" + -a + "px, " + -b + "px)");
// 				}
// 			});

// 			});
// 		});
// }


