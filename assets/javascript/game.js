$(document).ready(function(){
    var characters = {
        obi: {hitPoints: 120, attackPoints: 8},
        luke: {hitPoints: 100,attackPoints: 5},
        sidious: {hitPoints: 150, attackPoints: 20},
        maul: {hitPoints: 180,attackPoints: 25}
    }

    var attacker= "obi";
    for (var i = 0; i < characters.length; i++){
        if (attacker === characters[i]) {
            alert("hai");
        }
    }

    $(".image").attr(characters);

    // choose a character
    $(".image").on("click", function(){
        $(".image").off("click");
        $(this).css("background", "white");
        $(".my-char").append($(this));

        // move to enemies
        $("#characters>.image").each(function(){
            $(this).removeClass("image").addClass("my-image");
            $(".enemies").append($(this));
        });
        $("#characters").remove();
        
        // choose an enemy
        $(".my-image").on("click", function(){
            $(this).css("background","black")
            $(this).css("color","white")
            $(".defender").append($(this));
            // button attack the enemy 
            $(".attack").on("click", function(){
                var newH = $("<h3>");
                var text = $(".defender .tag").text();
                newH.addClass("clear");
                newH.html("You attacked " + text + " for " + " demage"+ "<br>" + text + " attacked you back for" + " demage" + "</br>");
                $(".defender").append(newH);

                // attack
                $(".attack").on("click", function(){
    
                }); 
            }); 
        });

        
    });
}); 