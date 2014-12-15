var zoneID = 1;

var presets = [
                "Keuken",
                "Eethoek",
                "Zithoek",
                "Werkplek",
                "Speelhoek"
              ];


//Add a zone
$("li.add").on( "click", function(e){

    var html = "";

    html += '<li><div class="color color' + zoneID + '"></div><dl class="dropdown"><dt>Kies de zone...</dt><dd><ul>';

    for(i = 0; i < presets.length; i++) {
        html += '<li>' + presets[i] + '</li>';
    }

    html += '<li id="other">Anders...</li>';

    html += '</ul></dd></dl></li>';

    zoneID ++;
    $("ul#zones").append(html);


    //Dropdown
    $("dl.dropdown").on( "click", function(e){

        if( !$(this).hasClass("active") ) {

            $(this).addClass("active");

        } else {

            if( $(e.target).attr("id") != "other" ) {

                $(this).find("dt").html($(e.target).html());
                $(this).find("li.active").removeClass("active");
                $(e.target).addClass("active");
                selectedZone = $(e.target).html();
                coachMark(4);

            }

            $(this).removeClass("active");

        }

    });

});

$("li.add").click();

setTimeout(function(){
    coachMark(3);
}, 900);










//draw

var COLOURS = [ '#E3EB64', '#A7EBCA', '#FFFFFF', '#D8EBA7', '#868E80' ];

Sketch.create({

    container: document.getElementById( 'camOverlay' ),

    autoclear: false,

    touchmove: function() {

        for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {

            touch = this.touches[i];

            this.lineCap = 'round';
            this.lineJoin = 'round';
            this.fillStyle =
            this.strokeStyle = COLOURS[4];
            this.lineWidth = 20;

            this.beginPath();
            this.moveTo( touch.ox, touch.oy );
            this.lineTo( touch.x, touch.y );
            this.stroke();
        }
    }
});
