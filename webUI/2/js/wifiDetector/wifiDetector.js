setTimeout(function () {
    var elements = document.getElementsByClassName('wifi');

    var randomWifi = [5, 3, 0, 2, 4, 8, 6, 1, 7, 9, 10];

    var i = 0;                     //  set your counter to 1

    function findWifi () {

        setTimeout(function () {
            elements[randomWifi[i]].className = "wifi";

            i++;                     //  increment the counter
            if (i < elements.length) {            //  if the counter < 10, call the loop function
                findWifi();             //  ..  again which will trigger another
            } else {
                document.getElementById("wifiLoader").remove();
            }
        }, Math.random() * 900)

    }




    //event listener voor alle wifi-netwerken
    for(var j=0; j < elements.length; j++){
        elements[j].addEventListener("click", function(e){


            for(var j=0; j < elements.length; j++){
                elements[j].className = "wifi";

            }
            e.target.className = "wifi active";
            document.getElementById('wifiSelect').className = "selectList";
            document.getElementById('wifiPassword').className="password";

        }, false);
    }


    document.getElementById("pwField").addEventListener("keyup", function(e){
        if(e.target.value.length > 7) {
            document.getElementById('disabledButton').className="next button";
        } else {
            document.getElementById('disabledButton').className="next button disabled";

        }
    });


    findWifi();                      //  start the loop

}, 700);