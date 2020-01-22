$(document).ready(function() {
    // our characters
    var characters = {
      "Obi-Wan Kenobi": {
        name: "Obi-Wan Kenobi",
        health: 120,
        attack: 8,
        imageUrl: "assets/images/obi.jpg",
        enemyAttackBack: 15
      },
      "Luke Skywalker": {
        name: "Luke Skywalker",
        health: 100,
        attack: 14,
        imageUrl: "assets/images/luke.jpg",
        enemyAttackBack: 5
      },
      "Darth Sidious": {
        name: "Darth Sidious",
        health: 150,
        attack: 8,
        imageUrl: "assets/images/darth.jpg",
        enemyAttackBack: 20
      },
      "Darth Maul": {
        name: "Darth Maul",
        health: 180,
        attack: 7,
        imageUrl: "assets/images/maul.jpg",
        enemyAttackBack: 25
      }
    };
  
    var attacker;
    // enemies available
    var combatants = [];
    var defender;
    // player damage
    var turnCounter = 1;
    // defeated opponents
    var killCount = 0;
  
 
    // display function characters
    var renderCharacter = function(character, renderArea) {
      var charDiv = $("<div class='character' data-name='" + character.name + "'>");
      var charName = $("<div class='character-name'>").text(character.name);
      var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
      var charHealth = $("<div class='character-health'>").text(character.health);
      charDiv.append(charName).append(charImage).append(charHealth);
      $(renderArea).append(charDiv);
    };
  
    // load all the characters
    var initializeGame = function() {
      for (var key in characters) {
        renderCharacter(characters[key], "#characters");
      }
    };
  
    // run the function here
    initializeGame();
  
    // updating the selected player or the current defender
    var updateCharacter = function(charObj, areaRender) {
      $(areaRender).empty();
      renderCharacter(charObj, areaRender);
    };
  
    // render the available-to-attack enemies (run once after a character has been selected)
    var renderEnemies = function(enemyArr) {
      for (var i = 0; i < enemyArr.length; i++) {
        renderCharacter(enemyArr[i], "#available-enemies");
      }
    };
  
    // rendering messages
    var renderMessage = function(message) {
      var gameMessageSet = $("#message");
      var newMessage = $("<div>").text(message);
      gameMessageSet.append(newMessage);
    };
  
    // restarting the game after victory or defeat
    var restartGame = function(resultMessage) {
      var restart = $("<button>Restart</button>").click(function() {
        location.reload();
      });
      var gameState = $("<div>").text(resultMessage);
      $("body").append(gameState);
      $("body").append(restart);
    };
  
    // function to clear the message
    var clearMessage = function() {
      var gameMessage = $("#message");
      gameMessage.text("");
    };
  
    // selecting our character
    $("#characters").on("click", ".character", function() {
      var name = $(this).attr("data-name");

      if (!attacker) {
        attacker = characters[name];
        for (var key in characters) {
          if (key !== name) {
            combatants.push(characters[key]);
          }
        }
        $("#characters").hide();
        updateCharacter(attacker, "#selected-character");
        renderEnemies(combatants);
      }
    });
  
    // enemy
    $("#available-enemies").on("click", ".character", function() {
      var name = $(this).attr("data-name");
      if ($("#defender").children().length === 0) {
        defender = characters[name];
        updateCharacter(defender, "#defender");
        $(this).remove();
        clearMessage();
      }
    });
  
    // attack button
    $("#attack").on("click", function() {
      if ($("#defender").children().length !== 0) {
        var attackMessage = "You attacked " + defender.name + " for " + attacker.attack * turnCounter + " damage.";
        var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.";
        clearMessage();

        defender.health -= attacker.attack * turnCounter;
  
        if (defender.health > 0) {
          updateCharacter(defender, "#defender");
          renderMessage(attackMessage);
          renderMessage(counterAttackMessage);
          attacker.health -= defender.enemyAttackBack;
          updateCharacter(attacker, "#selected-character");
          if (attacker.health <= 0) {
            clearMessage();
            restartGame("You have been defeated...GAME OVER!!!");
            $("#attack").off("click");
          }
        }
        else {
          $("#defender").empty();
          var gameStateMessage = "You have defeated " + defender.name + ", you can choose to fight another enemy.";
          renderMessage(gameStateMessage);
          killCount++;
          if (killCount >= combatants.length) {
            clearMessage();
            $("#attack").off("click");
            restartGame("You Won!!! GAME OVER!!!");
          }
        }
        turnCounter++;
      }
      else {
        clearMessage();
        renderMessage("No enemy here.");
      }
    });
  });
  