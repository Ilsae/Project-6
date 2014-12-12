//Dropdown
$("dl.dropdown").click(function(e){
    if( !$(this).hasClass("active") ) {
        $(this).addClass("active");
    } else {

        $(this).find("dt").html(   $(e.target).html()   );
        $(this).find("li.active").removeClass("active")
        $(e.target).addClass("active");



        $(this).removeClass("active");
    }
});

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
$("li.add").click(function(e){

    var html = "";


    html += '<li><div class="color color' + zoneID + '"></div><dl class="dropdown"><dt>Kies de zone...</dt><dd><ul>';

    for()
    html += '</ul></dd></dl></li>';

    zoneID ++;
    $("ul#zones").append(html);

});