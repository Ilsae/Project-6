var core         = new MotionDetector.Core();
var pSub         = PubSub;
var previousZone = [];

pSub.subscribe("/camera/motionDetected", function(val) {

    var zone              = document.querySelectorAll('.zone');
    var movement          = document.getElementById('movement');
    
    var activeZones       = [];

    var lightOnOff = "";

    movement.style.top    = val.pos1_y + 'px';
    movement.style.left   = val.pos1_x + 'px';
    movement.style.width  = (val.pos2_x - val.pos1_x) + 'px';
    movement.style.height = (val.pos2_y - val.pos1_y) + 'px';

    for (i = 0; i < zone.length; i++) {

        if(collides(movement, zone[i])) {

            activeZones.push(i);
            lightOnOff += "1";
        } else {
            lightOnOff += "0";
        }
    }
    //zet de lampen aan
    setLights(lightOnOff);

    if(activeZones !== previousZone){

        previousZone = activeZones;

        var text = "";

        for (i = 0; i < activeZones.length; i++) {
            text += zone[activeZones[i]].getAttribute("title");
            text += ", ";
        }

        if(text != "") {
            console.log(text);

            //document.getElementById('ttsTest').setAttribute('src', 'http://tts-api.com/tts.mp3?q=' + text);
        }
        
    }
    
});