
$(function() {

  $('form').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
  var form = $(this),
        btn = form.find('#form-submit');

    // Добавляем каждому проверяемому полю, указание что поле пустое
  form.find('.rfield').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.rfield').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
    $(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
    $(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'background-color':'red'});
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },1500);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
    checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
    lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        // form.submit();
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
			  	      	document.getElementById('form').submit();
			   		},1300);

		})




      }
    });
  });
});


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
// init animated-bg
animatedBg();
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




 animateTriangles();



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


function animatedBg() {
	var $container = $('.animated-bg');

	$container.each(function() {
		var containerOffsetLeft = $(this).offset().left,
				containerOffsetTop = $(this).offset().top,
				containerWidth = $(this).innerWidth(),
				containerHeight = $(this).innerHeight(),
				$animatedItems = $(this).find("> #animated"),
				// 2 = x2 speed of mouse
				speedRate = 1.1;

		$(this).on("mousemove", function(e) {
			var x = (e.pageX - containerOffsetLeft - containerWidth / 2) * 2,
					y = (e.pageY - containerOffsetTop - containerHeight / 2) * 2;

			$animatedItems.each(function(index) {
				var a = $(this).innerWidth() * x / containerWidth * speedRate,
					b = $(this).innerHeight() * y / containerHeight * speedRate;
				
				if(index % 2 == 0) {
					// $(this).css("transform", "matrix(1, 0, 0, 1, " + a + ", " + b + ")");
					$(this).css("transform", "translate(" + a + "px, " + b + "px)");
				} else {
					// $(this).css("transform", "matrix(1, 0, 0, 1, " + -a + ", " + -b + ")");
					$(this).css("transform", "translate(" + -a + "px, " + -b + "px)");
				}
			});

		});
	});
}
function animateTriangles() {
			
			//container
	var $evtContainer = $('.main'),
			
			//container values
			containerOffsetLeft = $evtContainer.offset().left,
			containerOffsetTop = $evtContainer.offset().top,
			containerWidth = $evtContainer.innerWidth(),
			containerHeight = $evtContainer.innerHeight(),
			
			//triangles
			$triangleAr = $('.ar'),
			$triangleVr = $('.vr'),
			$triangleMr = $('.mr'),
			
			//triangles titles
			$triangleArTitle = $triangleAr.find(".triangle__title"),
			$triangleVrTitle = $triangleVr.find(".triangle__title"),
			$triangleMrTitle = $triangleMr.find(".triangle__title"),
			
			//triangles titles bg
			$triangleArTitleBg = $triangleAr.find(".triangle__title-bg"),
			$triangleVrTitleBg = $triangleVr.find(".triangle__title-bg"),
			$triangleMrTitleBg = $triangleMr.find(".triangle__title-bg"),
			
			//triangles max % deviation
			deviationArX = 0.07,
			deviationVrX = 0.10,
			deviationMxX = 0.15,
			deviationMxY = 0.10;
			//maket
			//deviationMxX = 0.14,
			//deviationMxY = 0.26;
	
	$(window).resize(function(){
		containerOffsetLeft = $evtContainer.offset().left;
		containerOffsetTop = $evtContainer.offset().top;
		containerWidth = $evtContainer.innerWidth();
		containerHeight = $evtContainer.innerHeight();
	});
			
	$evtContainer.on("mousemove", function(evt) {
		var x = (evt.pageX - containerOffsetLeft - containerWidth / 2) * 2;
		
		transform($triangleAr, x, deviationArX, 0);
		transform($triangleVr, x, -deviationVrX, 0);
		transform($triangleMr, x, deviationMxX, deviationMxY);
		
		transform($triangleArTitle, x, deviationArX, 0);
		transform($triangleVrTitle, x, -deviationVrX, 0);
		transform($triangleMrTitle, x, deviationMxX, deviationMxY);
		
		//triangles titles bg values
		var $triangleArTitleBgWidth = parseInt($triangleArTitleBg.find("image").attr("width")),
				$triangleVrTitleBgWidth = parseInt($triangleVrTitleBg.find("image").attr("width")),
				$triangleMrTitleBgWidth = parseInt($triangleMrTitleBg.find("image").attr("width")),
				$triangleMrTitleBgHeight = parseInt($triangleMrTitleBg.find("image").attr("height"));
				
		position($triangleArTitleBg, $triangleArTitleBgWidth, 0, x, deviationArX, 0);
		position($triangleVrTitleBg, $triangleVrTitleBgWidth, 0, x, -deviationVrX, 0);
		position($triangleMrTitleBg, $triangleMrTitleBgWidth, $triangleMrTitleBgHeight, x, deviationMxX, deviationMxY);
	});
	
	function transform(element, evtX, deviationX, deviationY) {
		var a = element.innerWidth() * deviationX * evtX / containerWidth;
		var b = element.innerHeight() * deviationY * evtX / containerWidth;
		element.css("transform", "matrix(1, 0, 0, 1, " + a + ", " + b + ")");
	}
	
	function position(element, elWidth, elHeight, evtX, deviationX, deviationY) {
//		console.log("element: " + element);
//		console.log("elWidth: " + elWidth);
//		console.log(element.find("image").innerWidth());
//		console.log("elHeight: " + elHeight);
//		console.log(element.find("image").innerHeight());
//		console.log("evtX: " + evtX);
//		console.log("deviationX: " + deviationX);
//		console.log("deviationY: " + deviationY);
//		
		var a = elWidth * deviationX * evtX / containerWidth - elWidth * abs(deviationX);
		var b = elHeight * deviationY * evtX / containerWidth - elHeight * abs(deviationY);
//		console.log(a + ", " + b );
		element.attr("x", a);
		element.attr("y", b);
	}
	
	function abs(num){
		if(num >= 0)
			return num;
		else
			return -num;
	}
}
