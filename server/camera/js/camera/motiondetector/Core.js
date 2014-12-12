/**
 *
 * @project        Motion Detection in JS
 * @file           ImageCompare.js
 * @description    Core functionality.
 * @author         Benjamin Horn
 * @package        MotionDetector
 * @version        -
 * 
 */

;(function(App) {

	"use strict";
	
	/*
	 * The core motion detector. Does all the work.
	 *
	 * @return <Object> The initalized object.
	 *
	 */
	App.Core = function() {

		var rendering = false;

		var width = 64;
		var height = 48;

		var webCam = null;
		var imageCompare = null;

		var currentImage = null;
		var oldImage = null;

		var topLeft = [Infinity,Infinity];
		var bottomRight = [0,0];

		var raf = (function(){
			return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
			function( callback ){
				window.setTimeout(callback, 1000/60);
			};
		})();

		/*
		 * Initializes the object.
		 *
		 * @return void.
		 *
		 */
		function initialize() {
			imageCompare = new App.ImageCompare();
			webCam = new App.WebCamCapture(document.getElementById('webCamWindow'));

			rendering = true;

			main();
		}

		/*
		 * Compares to images and updates the position
		 * of the motion div.
		 *
		 * @return void.
		 *
		 */
		function render() {
			oldImage = currentImage;
			currentImage = webCam.captureImage(false);

			if (!oldImage || !currentImage) {
				return;
			}

			var vals = imageCompare.compare(currentImage, oldImage, width, height);

			topLeft[0] = vals.topLeft[0] * 10;
			topLeft[1] = vals.topLeft[1] * 10;

			bottomRight[0] = vals.bottomRight[0] * 10;
			bottomRight[1] = vals.bottomRight[1] * 10;

			//The values may not be -Infinity
			if( (bottomRight[0] - topLeft[0]) !== -Infinity || (bottomRight[1] - topLeft[1]) !== -Infinity) {

				//The values may not be too small
				if((bottomRight[0] - topLeft[0]) > 40 && (bottomRight[1] - topLeft[1]) > 40) {

					//the values may not be too big
					if((bottomRight[0] - topLeft[0]) < 600 && (bottomRight[1] - topLeft[1]) < 400) {

						pSub.publish("/camera/motionDetected", {
							pos1_x: topLeft[0],
							pos1_y: topLeft[1],
							pos2_x: bottomRight[0],
							pos2_y: bottomRight[1]
						});
					}
				}
			}

			topLeft = [Infinity,Infinity];
			bottomRight = [0,0]

		}

		/*
		 * The main rendering loop.
		 *
		 * @return void.
		 *
		 */
		function main() {
			try{
				render();
			} catch(e) {
				console.log(e);
				return;
			}

			if(rendering == true) {
				raf(main.bind(this));
			}
		}

		initialize();
	};
})(MotionDetector);