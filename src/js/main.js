'use strict';

$(document).ready(function(){

  // init animate triangles
 animateTriangles();

});

//animate triangles function
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

//animatedBg

// function AnimatedBg(element, speed) {
	
// 	var _this = this;

// 	if(element) this.target = $(element);
// 	else throw new Error("set element in constructor");
	
// 	this.speedRate = speed || 1.5;
	
// 	this.setContainerParams();
	
// 	this.triangles = this.target.find(".triangle");

// 	this.svgs = this.target.find("> svg");
	
// 	this.deviation = {
// 		x0: 0.07,
// 		y0: 0,
// 		x1: (-0.10),
// 		y1: 0,
// 		x2: 0.15,
// 		y2: 0.10
// 	}
	
// 	this.events = (function(){
		
// 		return {
// 			resize: $(window).resize(function(){
// 				_this.setContainerParams();
// 			}),
			
// 			mousemove: _this.target.on("mousemove", function(evt){
				
// 				_this.animateX(_this.triangles, _this.getMouseCoordinates(evt).x);
// 				_this.animateXY(_this.svgs, _this.getMouseCoordinates(evt).x, _this.getMouseCoordinates(evt).y);
// //				this.animateXY(this.getMouseCoordinates(evt).x,this.getMouseCoordinates(evt).y);
// 			})
// 		};
// 	})();

// }

// AnimatedBg.prototype.setContainerParams = function() {
// 	this.containerOffsetLeft = this.target.offset().left || 0;
// 	this.containerOffsetTop = this.target.offset().top || 0;
// 	this.containerWidth = this.target.innerWidth() || 0;
// 	this.containerHeight = this.target.innerHeight() || 0;
// }

// AnimatedBg.prototype.animateX = function(element, x) {
// 	var _this = this;
// 	$(element).each(function(index){
// 		var a = $(this).innerWidth() * _this.deviation['x' + index] * x / _this.containerWidth;
// 		var b = $(this).innerHeight() * _this.deviation['y' + index] * x / _this.containerWidth;
// //		$(this).css("transform", "matrix(1, 0, 0, 1, " + a + ", " + b + ")");
// 		$(this).css("transform", "translate(" + a + "px, " + b + "px)");
// //		$(this).css("top", b);
// //		$(this).css("left", a);
// 	})
// }

// AnimatedBg.prototype.animateXY = function(element, x, y) {
// 	var _this = this;
// 	$(element).each(function(index){
// 		var a = $(this).innerWidth() * x / _this.containerWidth * _this.speedRate,
// 				b = $(this).innerHeight() * y / _this.containerHeight * _this.speedRate;
		
// 		if(index % 2 == 0) {
// //			$(this).css("transform", "matrix(1, 0, 0, 1, " + a + ", " + b + ")");
// 			$(this).css("transform", "translate(" + a + "px, " + b + "px)");
// 		} else {
// //			$(this).css("transform", "matrix(1, 0, 0, 1, " + -a + ", " + -b + ")");
// 			$(this).css("transform", "translate(" + -a + "px, " + -b + "px)");
// 		}
// 	});
// }


// AnimatedBg.prototype.getMouseCoordinates = function(evt) {
// 	return {
// 		x: (evt.pageX - this.containerOffsetLeft - this.containerWidth / 2) * 2,
// 		y: (evt.pageY - this.containerOffsetTop - this.containerHeight / 2) * 2
// 	}
// }

// var animbg = new AnimatedBg(".animated-bg", 1.5);
// console.log(animbg);