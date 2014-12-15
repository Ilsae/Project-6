    <div class="disabled" id="hiddenOverlay"></div>

    <header>
        <h1>Get on</h1>
    </header>
    <section>
        <header>
            <p id="headerTxt">
                On zoekt naar apparaten...
            </p>
            <a id="headerLink" href="#"></a>
        </header>
        <div class="content">
            <div class="loader" id="deviceLoader"></div>
            <ul id="lights">
                <li class="light hidden" id="light1"><input placeholder="Lamp 1"></li>
                <li class="light hidden" id="light2"><input placeholder="Lamp 2"></li>
                <li class="light hidden" id="light3"><input placeholder="Lamp 3"></li>
                <li class="light hidden" id="light4"><input placeholder="Lamp 4"></li>
            </ul>

            <ul id="cameras">
                <li class="camera hidden" id="camera1">
                    <input placeholder="Camera 1">
                    <div class="webCamPopup">
                        <video class="cameraViewport" autoplay></video>
                    </div>
                </li>
                <li class="camera hidden" id="camera2">
                    <input placeholder="Camera 2">
                    <div class="webCamPopup">
                        <video class="cameraViewport" autoplay></video>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    <a href="#connection" class="next button disabled" id="disabledButton">Volgende <i class="fa fa-caret-right"></i></a>

	<script type="text/javascript" src="webUI/1/js/deviceDetector/step1.js"></script>