routie({
    '':             function() {    loadStep(1);    },
    'connection':   function() {    loadStep(2);    },
    'zones':        function() {    loadStep(3);    },
    'lighteling':   function() {    loadStep(4);    },

    'server':       function() {    loadStep(9);    }
});




//load selected page
function loadStep(step) {
    //check if the page has been loaded before
    if( isEmpty( $("#step" + step) ) ) {
        //load content to element
        $("#step" + step).load( "webUI/" + step + ".php", function() {
            //when completed, change the classes
            activate(step);
        });
    } else {
        //change the classes
        activate(step);
    }
}




//change the classes
function activate(step) {

    if(step == 1) {
        $("#step0").attr('class', 'step active');
    } else {
        $("#step0").remove();
    }
	for (var i = 1; i <= 4; i++) {
		if(step > i) {
            $("#step"+i).attr('class', 'step completed');

        } else if(step == i) {
			$("#step"+i).attr('class', 'step active');
			console.log("step" + i + ": " + 'active');
		} else {
			$("#step"+i).attr('class', 'step inactive');
		}
	};
	
}

function setLights(onOff) {
    var client = new XMLHttpRequest();
    client.open('GET', 'arduino/setLights.php?set='+onOff);
    client.onreadystatechange = function() {
        //console.log(client.responseText);
    }
    client.send();
}

function isEmpty( el ){
    return !$.trim(el.html())
}