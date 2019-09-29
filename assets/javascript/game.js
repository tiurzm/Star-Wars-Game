$(document).ready(function(){
    var characters = [
        {name:"obi", hitPoints: 120, attackPoints: 8},
        {name: "luke", hitPoints: 100,attackPoints: 5},
        {name: "sidious", hitPoints: 150, attackPoints: 20},
        {name: "maul", hitPoints: 180,attackPoints: 25}
    ]
    
    var attacker = "obi";
    var defender = "luke";
    var attackerHitPoint = function () {
        for (var i = 0; i < characters.length; i++) {
            if (attacker === characters[i].name) {
              console.log("hit point " + characters[i].attackPoints);
              return characters[i].attackPoints;
            }
          }
    }
    var defenderAttackPoint = function () {
        for (var i = 0; i < characters.length; i++) {
            if (defender === characters[i].name) {
              console.log("hit point " + characters[i].attackPoints);
              return characters[i].attackPoints;
            }
          }
    }
  
    var attackPointToDefender = attackerHitPoint();
    var counterAttackByDefender = defenderAttackPoint();
    

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
                var point1 = attackPointToDefender;
                var point2 = counterAttackByDefender;
                newH.addClass("clear");
                newH.html("You attacked " + text + " for " + point1 + " demage"+ "<br>" + text + " attacked you back for " + point2 + " demage" + "</br>");
                $(".defender").append(newH);

                // attack
                $(".attack").on("click", function(){
    
                }); 
            }); 
        });

        
    });
}); 