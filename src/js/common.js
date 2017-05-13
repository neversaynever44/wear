
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






$(document).ready(function(){
    
//init menu trigger
toggleMenu();
// init animated-bg
animatedBg();
// open-popup

if('ontouchstart' in window) {
	$('.js-open-popup').on('touchstart', function (e) {
			// if(event.preventDefault){
			//    	event.preventDefault();
			// }else{
			//     event.returnValue = false; 
			// };

		var link = $(this).data('link');
		var popup = $('.js-popup[data-popup="' + link + '"]');

		popup.add('.js-overlay').addClass('is-active');
		// $("body").addClass("is-hidden");
	});
	$('.js-close-popup').click(function (e) {
		$(this).parents('.js-popup').add('.js-overlay').removeClass('is-active');

	})
} else {
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
}


	$.getScript('//maps.googleapis.com/maps/api/js?key=AIzaSyCFJl-oqf0NECka4ZBhXlOVfeUnLvAa-Yw&amp;ver=1.0', function() {
	// Google maps
	// Create and Initialise the Map (required) our google map below
	google.maps.event.addDomListener(window, 'load', init);
	function init() {
	// Basic options for a simple Google Map
	var mapOptions = {
	// How zoomed in you want the map to start at (always required)
	zoom: 15,
	scrollwheel: false,
	// The latitude and longitude to center the map (always required)
	center: new google.maps.LatLng(50.4724601,30.4408557,21),
	disableDefaultUI: false,
	draggable: true,
	styles:    [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]

	// styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"weight":"0.01"},{"visibility":"simplified"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"hue":"#ffde00"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}]
};
	var mapElement = document.getElementById("object-map");
	// Create the Google Map using out element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);
	var image = "img/marker.svg";
	// Define the Lattitude and Longitude for the map location

	var myLatLng = new google.maps.LatLng(50.4724601,30.4408557,21);
	// Define the map marker characteristics
	var mapMarker = new
	google.maps.Marker({
		position: myLatLng,
		map: map,
		title: '',
		 icon: image
	});
}	

})




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
	 // autoplaySpeed: 6000,
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
