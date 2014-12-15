//In deze functie staan alle toastMsg, ze kunnen hierna aangeroepen worden door: toastMsg(1);

//maak variabele toast
var toast = [];


//dit zijn alle teksten, gevolgd door een 0 (die 0 geeft aan of de toast al bekeken is)
//het programma verandert deze naar een 1, hier moet je niet aankomen, lekker laten staan
toast[1] = ["Kijk om je heen om te zien welke lamp brandt.", 0];
toast[2] = ["Zorg dat de kamer goed in beeld is.", 0];



//deze functie roept de toastMsg op
function toastMsg(id) {

    //check of de toastMsg al eens is weergegeven
    if(toast[id][1] == 0) {

        toast[id][1] = 1;


        var html = '';
        html += '<div id="toastMsg" class="hidden"><span>' + toast[id][0] + '</span><button>Ok&eacute;</button></div>';


        //create the toastMsg HTML
        $("body").prepend(html);

        setTimeout(function () {
            $("#toastMsg").removeClass("hidden");
        }, 20);


        //close the toastMsg when the button is pressed
        $("#toastMsg button").on("click", function () {

            setTimeout(function () {
                //fade to opacity: 0
                $("#toastMsg").addClass("hidden");

                //remove the toastMsg for better performance
                setTimeout(function () {
                    $("#toastMsg").remove();
                }, 600);
            }, 20);
        });

    }

}