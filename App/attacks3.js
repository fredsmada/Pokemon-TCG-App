/* More attacks Nidorino to Zapdos */
function Double_Kick(){
if (turn == "Player"){
	if (inPlay7.Card == "Nidorino.jpg" && playerActiveEnergy.length >= 3 && playerActiveEnergy.indexOf("G") != -1){
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails!");
			flip1 = "tails";
		} else {
			alert("Coin flip was heads!");
			flip1 = "heads";
		}
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails!");
			flip2 = "tails";
		} else {
			alert("Coin flip was heads!");
			flip2 = "heads";
		}
		if (flip1 == "tails" && flip2 == "tails"){
			damageAmount = 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			damageAmount = 30;
		} else {
			damageAmount = 60;
		}
		enemyWeakness(Nidorino.Type, damageAmount);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= "Grass_Energy"){
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails!");
			flip1 = "tails";
		} else {
			alert("Coin flip was heads!");
			flip1 = "heads";
		}
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails!");
			flip2 = "tails";
		} else {
			alert("Coin flip was heads!");
			flip2 = "heads";
		}
		if (flip1 == "tails" && flip2 == "tails"){
			damageAmount = 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			damageAmount = 30;
		} else {
			damageAmount = 60;
		}
		playerWeakness(Nidorino.Type, damageAmount);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Horn_Drill(){
if (turn == "Player"){
	if (inPlay7.Card == "Nidorino.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Horn_Drill);
		if (window.count >= 2) {
			enemyWeakness(Nidorino.Type, 50);
		} else {
			alert("You do not have the 2 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Grass_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 50; 
		playerWeakness(Nidorino.Type, 50);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Lure(){
if (turn == "Player"){
	if (inPlay7.Card == "Ninetales.jpg" && playerActiveEnergy.length >= 2){
		alert("Choose a Pokemon to switch with the active Pokemon.");
		$('#enemy .benchPoke .card').attr('onClick', 'gustOfWind(this)');
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		alert("Choose a Pokemon to switch with the active Pokemon.");
		$('#player .benchPoke .card').attr('onClick', 'gustOfWind(this)');
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Fire_Blast(){
if (turn == "Player"){
	if (inPlay7.Card == "Ninetales.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Fire_Blast);
		if (window.count >= 4) {
			enemyWeakness(Ninetales.Type, 80);
			alert("Discard a Fire Energy to use this attack!");
			discardEnergy(Fire_Energy);
		} else {
			alert("You do not have the 4 Fire energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Fire_Energy" * 4)){
		playerWeakness(Ninetales.Type, 80);
		alert("Discard a Fire Energy to use this attack!");
		enemyDiscardEnergy(Fire_Energy);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Rock_Throw(){
if (turn == "Player"){
	if (inPlay7.Card == "Onix.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("F") != -1){
		enemyActiveDamage = enemyActiveDamage + 10;
		enemyWeakness(Onix.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Fighting_Energy"){
		playerActiveDamage = playerActiveDamage + 10;
		playerWeakness(Onix.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Harden(){
if (turn == "Player"){
	if (inPlay7.Card == "Onix.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Harden);
		if (window.count >= 2) {
			currentDamage = playerActiveDamage;
			if (playerActiveDamage <= currentDamage + 30){
				playerActiveDamage = currentDamage;
			} else {
			}
		} else {
			alert("You do not have the 2 Fighting energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && playerActiveEnergy >= ("Fighting_Energy" * 2)){
		currentDamage = enemyActiveDamage;
		if (enemyActiveDamage <= currentDamage + 30){
			enemyActiveDamage = currentDamage;
		} else {
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Whirlwind(){
if (turn == "Player"){
	if (inPlay7.Card == "Pidgeotto.jpg" && playerActiveEnergy.length >= 2){
		enemyActiveDamage = enemyActiveDamage + 20;
		enemyWeakness(Pidgeotto.Type, 20);
		if ($('#enemy .benchPoke').length > 0){
			alert("Choose a Pokemon to switch with the active Pokemon.");
			$('#enemy .benchPoke .card').attr('onClick', 'gustOfWind(this)');
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		playerActiveDamage = playerActiveDamage + 20;
		playerWeakness(Pidgeotto.Type, 20);
		if ($('#player .benchPoke').length > 0){
			alert("Choose a Pokemon to switch with the active Pokemon.");
			$('#player .benchPoke .card').attr('onClick', 'gustOfWind(this)');
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Mirror_Move(){
	// Exact attack on Pidgeotto from last turn needs to be mirrored here.
}

function Whirlwind_Pidgey(){
if (turn == "Player"){
	if (inPlay7.Card == "Pidgey.jpg" && playerActiveEnergy.length >= 2){
		enemyWeakness(Pidgey.Type, 10);
		if ($('#enemy .benchPoke').length > 0){
			alert("Choose a Pokemon to switch with the active Pokemon.");
			$('#enemy .benchPoke .card').attr('onClick', 'gustOfWind(this)');
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		playerActiveDamage = playerActiveDamage + 10;
		playerWeakness(Pidgey.Type, 10);
		if ($('#player .benchPoke').length > 0){
			alert("Choose a Pokemon to switch with the active Pokemon.");
			$('#player .benchPoke .card').attr('onClick', 'gustOfWind(this)');
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Gnaw(){
if (turn == "Player"){
	if (inPlay7.Card == "Pikachu.jpg" && playerActiveEnergy.length >= 1){
		enemyWeakness(Pikachu.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerActiveDamage = playerActiveDamage + 10;
		playerWeakness(Pikachu.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Thunder_Jolt(){
if (turn == "Player"){
	if (inPlay7.Card == "Pikachu.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("L") != -1){
		alert("A coin will be flipped. If tails, Pikachu will take 10 damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! 10 damage to Pikachu.");
		playerActiveDamage = playerActiveDamage + 10;
		enemyWeakness(Pikachu.Type, 30);
	} else {
		alert("Coin flip was heads! No damage to Pikachu!");
		enemyWeakness(Pikachu.Type, 30);
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= "Lightning_Energy"){
		alert("A coin will be flipped. If tails, Electrode will take 10 damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! 10 damage to Pikachu.");
		enemyActiveDamage = enemyActiveDamage + 10;
		playerWeakness(Pikachu.Type, 30);
	} else {
		alert("Coin flip was heads! No damage to Electrode!");
		playerWeakness(Pikachu.Type, 30);
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Water_Gun(){
if (turn == "Player"){
	if (inPlay7.Card == "Poliwag.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("W") != -1){
		if (playerActiveEnergy >= ("Water_Energy" * 2) && playerActiveEnergy < ("Water_Energy" * 3)){
			damageAmount = 20;
		} else if (playerActiveEnergy >= ("Water_Energy" * 3)){
			damageAmount = 30;
		} else {			
		damageAmount = 10;
		}
		enemyWeakness(Poliwag.Type, damageAmount);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Water_Energy"){
		if (enemyActiveAttachedEnergy >= ("Water_Energy" * 2) && enemyActiveAttachedEnergy < ("Water_Energy" * 3)){
			playerActiveDamage = playerActiveDamage + 20;
		} else if (enemyActiveAttachedEnergy >= ("Water_Energy" * 3)){
			playerActiveDamage = playerActiveDamage + 30;
		} else {			
		playerActiveDamage = playerActiveDamage + 10;
		}
		playerWeakness(Poliwag.Type, playerActiveDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Amnesia(){
if (turn == "Player"){
	if (inPlay7.Card == "Poliwhirl.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Amnesia);
		if (window.count >= 2) {
			alert("Choose an attack on the enemy Pokemon that cannot be used next turn.");
			// Code to disable attack goes here.
		} else {
			alert("You do not have the 2 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Water_Energy" * 2)){
		alert("Choose an attack on the player Pokemon that cannot be used next turn.");
		// Code to disable attack goes here.
	} else {
		alert("Enemy does not have the energy needed to sue this attack!");
	}
	betweenTurns("Enemy");
}
}

function Doubleslap_Poliwhirl(){
if (turn == "Player"){
	if (inPlay7.Card == "Poliwhirl.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Doubleslap_Poliwhirl);
		if (window.count >= 2) {
			coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails!");
				flip1 = "tails";
			} else {
				alert("Coin flip was heads!");
				flip1 = "heads";
			}
			coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails!");
				flip2 = "tails";
			} else {
				alert("Coin flip was heads!");
				flip2 = "heads";
			}
			if (flip1 == "tails" && flip2 == "tails"){
				damageAmount = 0;
			} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
				damageAmount = 30;
			} else {
				damageAmount = 60;
			}
			enemyWeakness(Poliwhirl.Type, damageAmount);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Water_Energy" * 2)){
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails!");
			flip1 = "tails";
		} else {
			alert("Coin flip was heads!");
			flip1 = "heads";
		}
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails!");
			flip2 = "tails";
		} else {
			alert("Coin flip was heads!");
			flip2 = "heads";
		}
		if (flip1 == "tails" && flip2 == "tails"){
			damageAmount = 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			damageAmount = 30;
		} else {
			damageAmount = 60;
		}
		playerWeakness(Poliwhirl.Type, damageAmount);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}
}

function Water_Gun_Poliwrath(){
if (turn == "Player"){
	if (inPlay7.Card == "Poliwrath.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Water_Gun_Poliwrath);
		if (window.count >= 2) {
			if (playerActiveEnergy >= ("Water_Energy" * 3) && playerActiveEnergy < ("Water_Energy" * 4)){
				enemyActiveDamage = enemyActiveDamage + 40;
			} else if (playerActiveEnergy >= ("Water_Energy" * 5)){
				enemyActiveDamage = enemyActiveDamage + 50;
			} else {			
			enemyActiveDamage = enemyActiveDamage + 30;
			}
			enemyWeakness(Poliwrath.Type, enemyActiveDamage);
		} else {
			alert("You do not have the 2 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Water_Energy" * 2)){
		if (enemyActiveAttachedEnergy >= ("Water_Energy" * 3) && enemyActiveAttachedEnergy < ("Water_Energy" * 4)){
			playerActiveDamage = playerActiveDamage + 40;
		} else if (enemyActiveAttachedEnergy >= ("Water_Energy" * 5)){
			playerActiveDamage = playerActiveDamage + 50;
		} else {			
		playerActiveDamage = playerActiveDamage + 30;
		}
		playerWeakness(Poliwrath.Type, playerActiveDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Whirlpool(){
if (turn == "Player"){
	if (inPlay7.Card == "Poliwrath.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Whirlpool);
		if (window.count >= 2) {
			enemyWeakness(Poliwrath.Type, 40);
			playTrainer2(Energy_Removal);
		} else {
			alert("You do not have the 2 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Water_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 40;
		playerWeakness(Poliwrath.Type, 40);
		playTrainer2(Energy_Removal);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Smash_Kick(){
if (turn == "Player"){
	if (inPlay7.Card == "Ponyta.jpg" && playerActiveEnergy.length >= 2){
		enemyWeakness(Ponyta.Type, 20);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		playerWeakness(Ponyta.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Flame_Tail(){
if (turn == "Player"){
	if (inPlay7.Card == "Ponyta.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Flame_Tail);
		if (window.count >= 2) {
			enemyWeakness(Ponyta.Type, 30);
		} else {
			alert("You do not have the 2 Fire energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Fire_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 30;
		playerWeakness(Ponyta.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Conversion_1(){
if (turn == "Player"){
	if (inPlay7.Card == "Porygon.jpg" && playerActiveEnergy.length >= 1){
		var answer = prompt("What type do you want enemy's weakness to be changed to?");
		answer = answer.toLowerCase();
		if (answer == "fighting"){
			enemyInPlay7.weak = "Fighting_Energy";
		} else if (answer == "fire"){
			enemyInPlay7.weak = "Fire_Energy";
		} else if (answer == "grass"){
			enemyInPlay7.weak = "Grass_Energy";
		} else if (answer == "lightning"){
			enemyInPlay7.weak = "Lightning_Energy";
		} else if (answer == "psychic"){
			enemyInPlay7.weak = "Psychic_Energy";
		} else if (answer == "water"){
			enemyInPlay7.weak = "Water_Energy";
		} else {
			alert("That is not a valid type! Choose from fighting, fire, grass, lightning, psychic, or water.");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		var answer = prompt("What type do you want player's weakness to be changed to?");
		answer = answer.toLowerCase();
		if (answer == "fighting"){
			InPlay7.weak = "Fighting_Energy";
		} else if (answer == "fire"){
			InPlay7.weak = "Fire_Energy";
		} else if (answer == "grass"){
			InPlay7.weak = "Grass_Energy";
		} else if (answer == "lightning"){
			InPlay7.weak = "Lightning_Energy";
		} else if (answer == "psychic"){
			InPlay7.weak = "Psychic_Energy";
		} else if (answer == "water"){
			InPlay7.weak = "Water_Energy";
		} else {
			alert("That is not a valid type! Choose from fighting, fire, grass, lightning, psychic, or water.");
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Conversion_2(){
if (turn == "Player"){
	if (inPlay7.Card == "Porygon.jpg" && playerActiveEnergy.length >= 2){
		var answer = prompt("What type do you want your resistance to be changed to?");
		answer = answer.toLowerCase();
		if (answer == "fighting"){
			InPlay7.resist = "Fighting_Energy";
		} else if (answer == "fire"){
			InPlay7.resist = "Fire_Energy";
		} else if (answer == "grass"){
			InPlay7.resist = "Grass_Energy";
		} else if (answer == "lightning"){
			InPlay7.resist = "Lightning_Energy";
		} else if (answer == "psychic"){
			InPlay7.resist = "Psychic_Energy";
		} else if (answer == "water"){
			InPlay7.resist = "Water_Energy";
		} else {
			alert("That is not a valid type! Choose from fighting, fire, grass, lightning, psychic, or water.");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		var answer = prompt("What type do you want your resistance to be changed to?");
		answer = answer.toLowerCase();
		if (answer == "fighting"){
			enemyInPlay7.resist = "Fighting_Energy";
		} else if (answer == "fire"){
			enemyInPlay7.resist = "Fire_Energy";
		} else if (answer == "grass"){
			enemyInPlay7.resist = "Grass_Energy";
		} else if (answer == "lightning"){
			enemyInPlay7.resist = "Lightning_Energy";
		} else if (answer == "psychic"){
			enemyInPlay7.resist = "Psychic_Energy";
		} else if (answer == "water"){
			enemyInPlay7.resist = "Water_Energy";
		} else {
			alert("That is not a valid type! Choose from fighting, fire, grass, lightning, psychic, or water.");
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Agility(){
if (turn == "Player"){
	if (inPlay7.Card == "Raichu.jpg" && playerActiveEnergy.length >= 3 && playerActiveEnergy.indexOf("L") != -1){
		alert("Flipping a coin to see if you avoid enemy's attack next turn!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails! You will be affected by enemy's attack next turn.");
		} else {
			alert("Coin flip was heads! You will not be affected by enemy's attack next turn!");
			noDamage(inPlay7, 1);
			noStatus(player);
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= "Lightning_Energy"){
		alert("Flipping a coin to see if enemy avoids your attack next turn!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails! Enemy will be affected by your attack next turn.");
		} else {
			alert("Coin flip was heads! Enemy will not be affected by your attack next turn!");
			noDamage(enemyInPlay7, 1);
			noStatus(enemy);
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Thunder(){
if (turn == "Player"){
	if (inPlay7.Card == "Raichu.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Thunder);
		if (window.count >= 3) {
			alert("A coin will be flipped. If tails, Raichu will take 30 damage!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! 30 damage to Raichu.");
					playerActiveDamage = playerActiveDamage + 30;
					enemyWeakness(Raichu.Type, 60);
				} else {
					alert("Coin flip was heads! No damage to Raichu!");
					enemyWeakness(Raichu.Type, 60);
				}
		} else {
			alert("You do not have the 3 Lightning energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Lightning_Energy" * 3)){
		alert("A coin will be flipped. If tails, Raichu will take 30 damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! 30 damage to Raichu.");
		enemyActiveDamage = enemyActiveDamage + 30;
		playerWeakness(Raichu.Type, 60);
	} else {
		alert("Coin flip was heads! No damage to Raichu!");
		playerWeakness(Raichu.Type, 60);
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Bite(){
if (turn == "Player"){
	if (inPlay7.Card == "Rattata.jpg" || "Raticate.jpg" && playerActiveEnergy.length >= 1){
		enemyWeakness(Raticate.Type, 20);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerWeakness(Raticate.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Super_Fang(){
	//Does damage to the defending pokemon equal to half of its remaining HP rounded up.
}

function Sand_Attack(){
if (turn == "Player"){
	if (inPlay7.Card == "Sandshrew.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("F") != -1){
		enemyActiveDamage = enemyActiveDamage + 10;
		enemyWeakness(Sandshrew.Type, 10);
		enemySandAttack = 1;
		return enemySandAttack;
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Fighting_Energy"){
		playerActiveDamage = playerActiveDamage + 10;
		playerWeakness(Sandshrew.Type, 10);
		playerSandAttack = 1;
		return playerSandAttack;
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Headbutt(){
if (turn == "Player"){
	if (inPlay7.Card == "Seel.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("W") != -1){
		enemyWeakness(Seel.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Water_Energy"){
		playerWeakness(Seel.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Bubble(){
if (turn == "Player"){
	if (inPlay7.Card == "Squirtle.jpg" && playerActiveEnergy.length >= 1 && window.playerActiveEnergy.indexOf("W") != -1){
		enemyWeakness(Squirtle.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
		$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && window.enemyActiveEnergy.indexOf("W") != -1){
		playerWeakness(Squirtle.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Withdraw(){
if (turn == "Player"){
	if (inPlay7.Card == "Squirtle.jpg" || "Wartortle.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("W") != -1){
		alert("A coin will be flipped for Withdraw!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Withdraw did not work.");
	} else {
		alert("Coin flip was heads! You will receive no damage next turn.");
		noDamage(inPlay7, 1);
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && window.enemyActiveEnergy.indexOf("W") != -1){
		alert("A coin will be flipped for Withdraw!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Withdraw did not work.");
	} else {
		alert("Coin flip was heads! Enemy Squirtle will receive no damage next turn.");
		noDamage(enemyInPlay7, 1);
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Recover_Starmie(){
if (turn == "Player"){
	if (inPlay7.Card == "Starmie.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Recover_Starmie);
		if (window.count >= 2) {
			alert("Discard a Water Energy to use this attack!");
			discardEnergy(Water_Energy);
			playerActiveDamage = 0;
			alert("Starmie has healed all damage!");
		} else {
			alert("You do not have the 2 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Water_Energy" * 2)){
		alert("Discard a Water Energy to use this attack!");
		discardEnergy(Water_Energy);
		enemyActiveDamage = 0;
		alert("Enemy Starmie has healed all damage!");
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Star_Freeze(){
if (turn == "Player"){
	if (inPlay7.Card == "Starmie.jpg" && playerActiveEnergy.length >= 3 && playerActiveEnergy.indexOf("W") != -1){
		enemyWeakness(Starmie.Type, 20);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
		} else {
			alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
			$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= "Water_Energy"){
		playerActiveDamage = playerActiveDamage + 20;
		playerWeakness(Starmie.Type, 20);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Slap(){
if (turn == "Player"){
	if (inPlay7.Card == "Staryu.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("W") != -1){
		enemyActiveDamage = enemyActiveDamage + 20;
		enemyWeakness(Staryu.Type, 20);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Water_Energy"){
		playerActiveDamage = playerActiveDamage + 20;
		playerWeakness(Staryu.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Bind(){
if (turn == "Player"){
	if (inPlay7.Card == "Tangela.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("G") != -1){
		enemyWeakness(Tangela.Type, 20);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
		$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= "Grass_Energy"){
		playerActiveDamage = playerActiveDamage + 20;
		playerWeakness(Tangela.Type, 20);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Poisonpowder_Tangela(){
if (turn == "Player"){
	if (inPlay7.Card == "Tangela.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Poisonpowder_Tangela);
		if (window.count >= 3) {
			enemyActiveDamage = enemyActiveDamage + 20;
			enemyWeakness(Tangela.Type, 20);
			alert("Enemy Pokemon is Poisoned!");
			$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
		} else {
			alert("You do not have the 3 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Grass_Energy" * 3)){
		playerWeakness(Tangela.Type, 20);
		alert("Player Pokemon is Poisoned!");
		$('.playerStatus').append('<img src="poisonCounter.gif" id="poison" />');
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Solarbeam(){
if (turn == "Player"){
	if (inPlay7.Card == "Venusaur.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Solarbeam);
		if (window.count >= 4) {
			enemyActiveDamage = enemyActiveDamage + 60;
			enemyWeakness(Venusaur.Type, 60);
		} else {
			alert("You do not have the 4 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Grass_Energy" * 4)){
		playerActiveDamage = playerActiveDamage + 60;
		playerWeakness(Venusaur.Type, 60);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Tackle_Voltorb(){
if (turn == "Player"){
	if (inPlay7.Card == "Voltorb.jpg" && playerActiveEnergy.length >= 1){
		enemyWeakness(Voltorb.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerWeakness(Voltorb.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Confuse_Ray_Vulpix(){
if (turn == "Player"){
	if (inPlay7.Card == "Vulpix.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Confuse_Ray_Vulpix);
		if (window.count >= 2) {
			enemyWeakness(Vulpix.Type, 10);
			alert("A coin will be flipped for confusion!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
		} else {
			alert("You do not have the 2 Fire energy needed for this attack!");
		}
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Confused.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Confused!");
		$('.enemyStatus').append('<img src="confusionCounter.gif" id="confusion" />');
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Fire_Energy" * 2)){
		playerWeakness(Vulpix.Type, 10);
		alert("A coin will be flipped for confusion!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Confused.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Confused!");
		$('.playerStatus').append('<img src="confusionCounter.gif" id="confusion" />');
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Bite_Wartortle(){
if (turn == "Player"){
	if (inPlay7.Card == "Wartortle.jpg" && playerActiveEnergy.length >= 3 && playerActiveEnergy.indexOf("W") != -1){
		enemyWeakness(Wartortle.Type, 40);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= "Water_Energy"){
		playerWeakness(Wartortle.Type, 40);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Poison_Sting_Weedle(){
if (turn == "Player"){
	if (inPlay7.Card == "Weedle.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("G") != -1){
		enemyWeakness(Weedle.Type, 10);
		alert("A coin will be flipped for poison!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Poisoned.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Poisoned!");
		$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Grass_Energy"){
		playerWeakness(Weedle.Type, 10);
		alert("A coin will be flipped for poison!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Poisoned.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Poisoned!");
		$('.playerStatus').append('<img src="poisonCounter.gif" id="poison" />');
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Thunder_Zapdos(){
if (turn == "Player"){
	if (inPlay7.Card == "Zapdos.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Thunder_Zapdos);
		if (window.count >= 3) {
			alert("A coin will be flipped. If tails, Zapdos will take 30 damage!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails! 30 damage to Zapdos.");
				playerActiveDamage = playerActiveDamage + 30;
				enemyWeakness(Zapdos.Type, 60);
			} else {
				alert("Coin flip was heads! No damage to Zapdos!");
				enemyWeakness(Zapdos.Type, 60);
			}
		} else {
			alert("You do not have the 3 Lightning energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Lightning_Energy" * 3)){
		alert("A coin will be flipped. If tails, Zapdos will take 30 damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! 30 damage to Zapdos.");
		enemyActiveDamage = enemyActiveDamage + 30;
		playerWeakness(Zapdos.Type, 60);
	} else {
		alert("Coin flip was heads! No damage to Zapdos!");
		playerWeakness(Zapdos.Type, 60);
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Thunderbolt(){
if (turn == "Player"){
	if (inPlay7.Card == "Zapdos.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Thunderbolt);
		if (window.count >= 4) {
			enemyWeakness(Zapdos.Type, 100);
			alert("Discard all energy to use this attack!");
			$('#player .active .energy1, #player .active .energy2, #player .active .energy3, #player .active .energy4, #player .active .energy5, #player .active .energy6, #player .active .energy7, #player .active .energy8').empty();
			playerActiveEnergy.length = 0;
			playerActiveAttachedEnergy = "";
		} else {
			alert("You do not have the 4 Lightning energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Lightning_Energy" * 4)){
		playerWeakness(Zapdos.Type, 100);
		alert("Discard all energy to use this attack!");
		$('#enemy .active .energy1, #enemy .active .energy2, #enemy .active .energy3, #enemy .active .energy4, #enemy .active .energy5, #enemy .active .energy6, #enemy .active .energy7, #enemy .active .energy8').empty();
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}