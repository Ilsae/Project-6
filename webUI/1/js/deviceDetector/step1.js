
var debugmode = false;

var base = 5000;
var difference = 1300;
var random = 1000;

if(debugmode) {
    base = 1000;
    difference = 100;
    random = 100;
}


//lights
setTimeout(function() {
	document.getElementById("light1").className = "light";
},(Math.random() * random) + base);

setTimeout(function() {
	document.getElementById("light2").className = "light";
},(Math.random() * random) + base + difference*1);

setTimeout(function() {
	document.getElementById("light3").className = "light";

    setTimeout(function(){
        coachMark(1);
    }, 600);
},(Math.random() * random) + base + (difference*2));

setTimeout(function() {
	document.getElementById("light4").className = "light";
},(Math.random() * random) + base + (difference*3));



//camera's
setTimeout(function() {
	document.getElementById("camera1").className = "camera";
},(Math.random() * random) + base + (difference*2));

setTimeout(function() {
	document.getElementById("camera2").className = "camera";
},(Math.random() * random) + base + (difference*5));




//loader
setTimeout(function() {
	$("#deviceLoader").remove();
    $("#disabledButton").removeClass("disabled");
    $("#headerTxt").html("On heeft de volgende apparaten gevonden:");
    $("#headerLink").html('<i class="fa fa-repeat"></i> Zoek naar meer apparaten');

},(Math.random() * random) + base + (difference*6));




(function(){

    function init() {
        animationEnd(function(){
            document.getElementById("step0").remove();
        }, 1);

    }


    /*
     * This function will run a given function when a CSS animation is completed
     *
     * input:  - function() > which will run when the animation is completed
     *         - Number     > amount of times the animation has to play
     *
     * output: - NULL
     *
     * */

    function animationEnd(func, count) {

        // animation listener events
        PrefixedEvent(document.getElementById("step0"), "AnimationStart", AnimationListener);
        PrefixedEvent(document.getElementById("step0"), "AnimationIteration", AnimationListener);
        PrefixedEvent(document.getElementById("step0"), "AnimationEnd", AnimationListener);

        // apply prefixed event handlers
        function PrefixedEvent(element, type, callback) {
            for (var p = 0; p < ["webkit", "moz", "MS", "o", ""].length; p++) {
                if (!["webkit", "moz", "MS", "o", ""][p]) type = type.toLowerCase();
                element.addEventListener(["webkit", "moz", "MS", "o", ""][p] + type, callback, false);
            }
        }

        // handle animation events
        function AnimationListener(e) {
            if (e.type.toLowerCase().indexOf("animationend") >= 0) {
                if (count == 2) {
                    func();
                } else {
                    count++;
                }
            }
        }
    }

    init();

})();




var light1 = "0";
var light2 = "0";
var light3 = "0";
var light4 = "0";
setLights(light1+light2+light3+light4);

document.getElementById("light1").addEventListener("click", function(e){
    if(light1 == "0") {

        light1 = "1";
        e.target.className = "light on";


    } else {
        light1 = "0";
        e.target.className = "light";

    }
    setLights(light1+light2+light3+light4);

});
document.getElementById("light2").addEventListener("click", function(e){
    if(light2 == "0") {

        light2 = "1";
        e.target.className = "light on";

    } else {

        light2 = "0";
        e.target.className = "light";

    }
    setLights(light1+light2+light3+light4);
});
document.getElementById("light3").addEventListener("click", function(e){
    if(light3 == "0") {

        light3 = "1";
        e.target.className = "light on";

    } else {

        light3 = "0";
        e.target.className = "light";

    }
    setLights(light1+light2+light3+light4);
});
document.getElementById("light4").addEventListener("click", function(e){
    if(light4 == "0") {

        light4 = "1";
        e.target.className = "light on";

    } else {

        light4 = "0";
        e.target.className = "light";

    }
    setLights(light1+light2+light3+light4);
});


var coachMark2Seen = 0;

$(".light").not("input").click(function(e){
    if(coachMark2Seen == 0) {
        coachMark(2);
        coachMark2Seen ++;
    } else if(coachMark2Seen == 1 && $(e.target).attr("class") != "light" ) {
        toastMsg(1);
        coachMark2Seen ++;
    }
});


$( "#camera1, #camera2").not("input").click(function() {
    $(this).addClass( "on" );
    $("#hiddenOverlay").removeClass("disabled");
    toastMsg(2);
});

$( "#hiddenOverlay" ).click(function() {
    $("#camera1, #camera2").removeClass( "on" );
    $("#hiddenOverlay").addClass("disabled");
});

