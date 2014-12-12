<!DOCTYPE html>
<html>
	<head>
		<title>On</title>

		<link rel="shortcut icon" type="image/png" href="../favicon.png"/>
		<link rel="stylesheet" type="text/css" href="../styles/main.css" media="all">

	</head>
	<body>

		<header>
			<h1>On Server</h1>
		</header>
		<section>
			<header>
				<p>
				</p>
			</header>
			<div class="content">
				<div id="serverCam">
					<video id="webCamWindow" autoplay></video>
					<audio id="ttsTest" autoplay></audio>
					<div id="overlay">

						<div id="movement"></div>

						<div class="zone" title="Chair" style="top: 80px; left: 10px; width: 140px; height: 390px;">1</div>
						<div class="zone" title="Couch" style="top: 80px; left: 170px; width: 140px; height: 390px;">2</div>
						<div class="zone" title="Table" style="top: 80px; left: 330px; width: 140px; height: 390px;">3</div>
						<div class="zone" title="Desk" style="top: 80px; left: 490px; width: 140px; height: 390px;">4</div>

					</div>
				</div>

			</div>
		</section>




		<script type="text/javascript" src="camera/js/global.js"></script>

		<script type="text/javascript" src="camera/js/camera/motiondetector/WebcamCapture.js"></script>
		<script type="text/javascript" src="camera/js/camera/motiondetector/ImageCompare.js"></script>
		<script type="text/javascript" src="camera/js/camera/motiondetector/Core.js"></script>
		<script type="text/javascript" src="camera/js/camera/collisiondetector/Core.js"></script>
		<script type="text/javascript" src="camera/js/camera/pubsub/Core.js"></script>

		<script type="text/javascript" src="camera/js/main.js"></script>

	</body>
</html>