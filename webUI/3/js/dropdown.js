var zoneID = 1;

var presets = [
                "Keuken",
                "Eethoek",
                "Zithoek",
                "Werkplek",
                "Speelhoek",
                "Anders...",
              ];


//Add a zone
$("li.add").on( "click", function(e){

    var html = "";

    html += '<li><div class="color color' + zoneID + '"></div><dl class="dropdown"><dt>Kies de zone...</dt><dd><ul>';

    for(i = 0; i < presets.length; i++) {
        html += '<li>' + presets[i] + '</li>';
    }

    html += '</ul></dd></dl></li>';

    zoneID ++;
    $("ul#zones").append(html);


    //Dropdown
    $("dl.dropdown").on( "click", function(e){
        if( !$(this).hasClass("active") ) {
            $(this).addClass("active");
        } else {

            $(this).find("dt").html(   $(e.target).html()   );
            $(this).find("li.active").removeClass("active")
            $(e.target).addClass("active");



            $(this).removeClass("active");
        }
    });

});