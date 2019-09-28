$(document).ready(function(){
    var counter = 0; 

    // choose a character
    $(".image").on("click", function(){
        $(".image").off("click");
        $(this).css("background", "white");
        $(".my-char").append($(this));
        $(".characters>.image").each(function(){
            $(this).removeClass("image").addClass("my-image");
            $(this).css("background", "#ff944d");
            $(".enemies").append($(this));
        });
        $(".characters").remove();
        // choose an enemy
        $(".my-image").on("click", function(){
            $(this).css("background","black")
            $(this).css("color","white")
            $(".defender").append($(this));
            console.log(this);
            // attack the enemy 
            $(".attack").on("click", function(){
                var newH = $("<h3>");
                newH.addClass("clear");
                newH.text("You attacked your enemy");
                $(".defender").append(newH);
            }); 
        });
    });
}); 