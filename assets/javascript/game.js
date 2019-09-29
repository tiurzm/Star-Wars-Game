$(document).ready(function(){
    var counter = 0; 
    var obi = 120;
    var luke = 100;
    var sidious = 150;
    var maul = 180; 
    // choose a character
    $(".image").on("click", function(){
        $(".image").off("click");
        $(this).css("background", "white");
        $(".my-char").append($(this));
        $(".characters>.image").each(function(){
            $(this).removeClass("image").addClass("my-image");
            $(".enemies").append($(this));
        });
        $(".characters").remove();

        // choose an enemy
        $(".my-image").on("click", function(){
            $(this).css("background","black")
            $(this).css("color","white")
            $(".defender").append($(this));
            console.log(this);
            // button attack the enemy 
            $(".attack").on("click", function(){
                var newH = $("<h3>");
                var text = $(".defender .tag").text()
                newH.addClass("clear");
                newH.html("You attacked " + text + " for" + " demage"+ "<br>" + text + " attacked you back for" + " demage" + "</br>");
                $(".defender").append(newH);
            }); 
        });

        
    });
}); 