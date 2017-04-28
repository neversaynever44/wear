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