$(document).ready(function(){
    
//init menu trigger
toggleMenu();
// init animated-bg
		if($(document).width() > 768) {
			animatedBg();
		}

  var locale = 'ru';
  function getLocale() {
    if(location.pathname.match(/\b(en|ru)\b/)) {
      locale = location.pathname.match(/\b(en|ru)\b/)[1];
    }
    if(locale == undefined || locale == null || locale == '') {
      locale = 'ru';
    }
  }
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
	$('#form-submit').on('click', function(event){
	  var $form = $(this).parents('form');
	  var valid = validate($form.attr('id'))

	  console.log(valid, $form);
	  if (valid) {
	     var plane =      $('#flyPlane');
		var btnSubmit   = $('#form-submit')
		$('.form-label').on("click",function(){
			   		 btnSubmit.prop("disabled", true);
				    plane.addClass('is-active');
				    btnSubmit.addClass('is-hidden');
			      setTimeout(function(){
			       plane.removeClass('is-active'); 
			      btnSubmit.removeClass('is-hidden'); 
			      	   btnSubmit.removeAttr('disabled');
			  	      	document.getElementById('feedback-form').submit();
			   		},1300);

		})
	  }
	  else {
	    event.preventDefault();
	    $('.error').fadeIn();
	    return false;
	  }
  });
  // Animation button-send
// var plane = $('#flyPlane');
// var btnSubmit   = $('#form-submit')
// $('.form-label').on("click",function(){
// 	if(!$('.input').hasClass('empty_field')){
// 	   if(!plane.hasClass('is-active')){
// 	   		 btnSubmit.attr('disabled', 'disabled');
// 		    plane.addClass('is-active');
// 		    btnSubmit.addClass('is-hidden');
// 	      setTimeout(function(){
// 	       plane.removeClass('is-active'); 
// 	      btnSubmit.removeClass('is-hidden'); 
// 	      	   btnSubmit.removeAttr('disabled');
// 	  	      	document.getElementById('feedback-form').submit();
// 	   		},1300);
// 	 	 }
//  	}
// })

  //on submit form
  // $('form').on('submit', function(event){
  //     var $form = $(this).parents('form');
  //     var valid = validate($form.attr('id'))
  //     if (valid) {
  //       $form.submit();
  //     }
  //     else {
  //       event.preventDefault();
  //       $('.error').fadeIn();
  //       return false;
  //     }
  // });



// open-popup

// if('ontouchstart' in window) {
// 	$('.js-open-popup').on('touchstart', function (e) {
// 			// if(event.preventDefault){
// 			//    	event.preventDefault();
// 			// }else{
// 			//     event.returnValue = false; 
// 			// };

// 		var link = $(this).data('link');
// 		var popup = $('.js-popup[data-popup="' + link + '"]');

// 		popup.add('.js-overlay').addClass('is-active');
// 		// $("body").addClass("is-hidden");
// 	});
// 	$('.js-close-popup').click(function (e) {
// 		$(this).parents('.js-popup').add('.js-overlay').removeClass('is-active');

// 	})
// } else {
		$('.js-open-popup').on('click', function (e) {
			if(event.preventDefault){
			   	event.preventDefault();
			}else{
			    event.returnValue = false; 
			};

		var link = $(this).data('link');
		var popup = $('.js-popup[data-popup="' + link + '"]');

		popup.add('.js-overlay').addClass('is-active');
		// $("body").addClass("is-hidden");
	});
	$('.js-close-popup').click(function (e) {
		$(this).parents('.js-popup').add('.js-overlay').removeClass('is-active');

	})
// }



// Animation button-send
// var plane = $('#flyPlane');
// var btnSubmit   = $('#form-submit')
// $('.form-label').on("click",function(){
// 	if(!$('.input').hasClass('empty_field')){
// 	   if(!plane.hasClass('is-active')){
// 	   		 btnSubmit.attr('disabled', 'disabled');
// 		    plane.addClass('is-active');
// 		    btnSubmit.addClass('is-hidden');
// 	      setTimeout(function(){
// 	       plane.removeClass('is-active'); 
// 	      btnSubmit.removeClass('is-hidden'); 
// 	      	   btnSubmit.removeAttr('disabled');
// 	  	      	document.getElementById('form').submit();
// 	   		},1300);
// 	 	 }
//  	}
// })


$('.btn-send').on('click',function() {
	$(this).prop('disabled', true);
	$(this).addClass('is-scale');
	$('.icon-send').addClass('is-active');
      setTimeout(function(){
   		$('.icon-send').removeClass('is-active'); 
  	   	$('.btn-send').removeAttr('disabled');
  	    $('.btn-send').removeClass('is-scale');
	      	document.getElementById('form').submit();
		},1300);
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
// show arrow 
$(document).scroll(function() {
    if ($(this).scrollTop() > 200) { 
        $('.arrow-up').addClass('is-show');
    } else {
    	$('.arrow-up').removeClass('is-show')
    }
});

 $(window).resize(function() {
 	var windowSize = $(document).width();
	 if (windowSize <= 480) {
		  $(".blog__list-item:not(:lt(3))").fadeOut(300);
			 $('.blog-show').on('click', function(e){
			  	e.preventDefault();
	  			  $(".blog__list-item:not(:lt(3))").fadeIn(300);
	  			  $(this).hide();
			  })
	} else {
		 $(".blog__list-item:not(:lt(3))").fadeIn(300);
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
	 // centerMode: true,
 	 prevArrow: '.js-prev',
	 nextArrow: '.js-next'
});

	function initSlider(slider, options) {
	 slider.on('init', function() {
	  setTimeout(function() {
	   slider.addClass('is-ready');
	  }, 100);
	 });
	 slider.not('.slick-initialized').slick(options);
	}


// tabs
	$('.learn-more').on('click', function(e){
		e.preventDefault();
	var item = $(this).closest('.job__list-item'),
		contentItem = $('.job__content'),
		itemPosition = item.index(),
		clickBtn        = $('.learn-more');
		
	// 	console.log(item);
	// console.log(contentItem);
	// console.log(itemPosition);
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

// var supportedPrefix,
//       supports3d = false,
//       prefixes = [ "Webkit", "Moz", "ms", "O" ],
//       div = document.createElement("div");

//     if ( div.style.perspective !== undefined ) {
//         /*Browser supports CSS transform 3d without prefix*/
//         supportedPrefix = "";
//         supports3d = true;
//     }else {
//         for ( var i = 0; i < prefixes.length; ++i ) {
//             if((prefixes[i] + "Perspective") in div.style) {
//                 supports3d = true;
//                 supportedPrefix = prefixes[i];
//                 break;
//             }
//         }
//     }
//     console.log("supports3d: " + supports3d + "; browser prefix: " + supportedPrefix);

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
  //         $('body').click(function(e) { 
		//     var el = e.target || e.srcElement; 
		//     if (!$(el).closest('.js-show').length && !$(el).closest('.js-show').length) { 
		//      panel.style.maxHeight = null;
		//      $('.js-show').removeClass('is-active');
		//     } 
		// }); 
          _prevClick = this;

        });

      }



  //     var acc = document.querySelectorAll(".learn-more");
  //     var i,
  //         _prevClick;

  //     for (i = 0; i < acc.length; i++) {

  //       acc[i].addEventListener('click', function() {
          
  //         if(_prevClick && _prevClick !== this) {
  //           _prevClick.classList.remove("is-active");
  //           _prevClick.nextElementSibling.style.maxHeight = '';
  //         }
  //         this.classList.toggle("is-active");
  //         var panel = this.nextElementSibling;
  //         if (panel.style.maxHeight) {
  //           panel.style.maxHeight = '';
  //         } else {
  //           panel.style.maxHeight = panel.scrollHeight + "px";
  //         }
  // //         $('body').click(function(e) { 
		// //     var el = e.target || e.srcElement; 
		// //     if (!$(el).closest('.js-show').length && !$(el).closest('.js-show').length) { 
		// //      panel.style.maxHeight = null;
		// //      $('.js-show').removeClass('is-active');
		// //     } 
		// // }); 
  //         _prevClick = this;

  //       });

  //     }





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


function animatedBg() {
	var $container = $('.animated-bg');

	$container.each(function() {
		var containerOffsetLeft = $(this).offset().left,
				containerOffsetTop = $(this).offset().top,
				containerWidth = $(this).innerWidth(),
				containerHeight = $(this).innerHeight(),
				$animatedItems = $(this).find("> .animated"),
				// 2 = x2 speed of mouse
				speedRate = 1.4;

		$(this).on("mousemove", function(e) {
			var x = (e.pageX - containerOffsetLeft - containerWidth / 2) * 2,
					y = (e.pageY - containerOffsetTop - containerHeight / 2) * 2;

			$animatedItems.each(function(index) {
				var a = $(this).innerWidth() * x / containerWidth * speedRate,
					b = $(this).innerHeight() * y / containerHeight * speedRate;
				
				if(index % 2 == 0) {
					$(this).css("transform", "matrix(1, 0, 0, 1, " + a + ", " + b + ")");
					// $(this).css("transform", "translate(" + a + "px, " + b + "px)");
				} else {
					$(this).css("transform", "matrix(1, 0, 0, 1, " + -a + ", " + -b + ")");
					// $(this).css("transform", "translate(" + -a + "px, " + -b + "px)");
				}
			});

		});
	});
}


