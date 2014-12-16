//In deze functie staan alle Coachmarks, ze kunnen hierna aangeroepen worden door: coachMarks(1);
var selectedZone = "";

function coachMark(id, after) {

    var coach = [];

    coach[1] = [
        // De tekst
        "Druk op een apparaat om hem te testen.", //de tekst
        "28vw", // de afstand van de linkerkant
        "55vh", // de afstand van de bovenkant

        // Het handje
        "doublePress", //de beweging die de hand maakt (press, draw of
        "28.5vh", // de afstand van de bovenkant
        "31vh",  // de afstand van de bovenkant

        0
    ];

    coach[2] = [
        // De tekst
        "Geef de apparaten een naam.", //de tekst
        "24vw", // de afstand van de linkerkant
        "65vh", // de afstand van de bovenkant

        // Het handje
        "press", //de beweging die de hand maakt (press, draw of
        "28.5vh", // de afstand van de bovenkant
        "41vh",  // de afstand van de bovenkant

        0
    ];

    coach[3] = [
        // De tekst
        "Geef de zone een passende naam.", //de tekst
        "44vw", // de afstand van de linkerkant
        "51vh", // de afstand van de bovenkant

        // Het handje
        "press", //de beweging die de hand maakt (press, draw of
        "78.5vh", // de afstand van de bovenkant
        "30vh",  // de afstand van de bovenkant

        0
    ];

    coach[4] = [
        // De tekst
        "Kleur nu de " + selectedZone.toLowerCase() + " in.", //de tekst
        "36vw", // de afstand van de linkerkant
        "61vh", // de afstand van de bovenkant

        // Het handje
        "color", //de beweging die de hand maakt (press, draw of
        "50.5vh", // de afstand van de bovenkant
        "40vh",  // de afstand van de bovenkant

        0
    ];


    var html = '';
    html += '<div id="coachMark" class="hidden">';

    html +=     '<div id="coachHand" style="left: ' + coach[id][4] + '; top: ' + coach[id][5] + ';" class="' + coach[id][3] + '"></div>';

    html +=     '<div id="coachMarkContent" style="left: ' + coach[id][1] + '; top: ' + coach[id][2] + ';">'
    html +=         '<p>' + coach[id][0] + '</p>'
    html +=         '<div class="button">Ok&eacute;</div>';
    html +=     '</div>'

    html += '</div>';



    //create the coachmark HTML
    $("body").prepend(html);

    setTimeout(function(){
        $("#coachMark").removeClass("hidden");
    }, 20);


    //close the coachMark when the button is pressed
    $("#coachMark .button").on( "click", function(){

        //fade to opacity: 0
        $("#coachMark").addClass("hidden");

        //remove the coachmark for better performance
        setTimeout(function(){
            $("#coachMark").remove();
            if (typeof after !== "undefined") {
                after();
            }
        }, 600);
    });

}