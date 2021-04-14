/**** TODO: all attacks need to match format of Vulpix Confuse Ray!!!****/
/*  attacks use compareEnergy function which either needs to be fixed or removed!! */
// File that contains all Poke Attacks.
var colorlessEnergyAvailable = [];
var fightingEnergyAvailable = [];
var fireEnergyAvailable = [];
var grassEnergyAvailable = [];
var lightningEnergyAvailable = [];
var psychicEnergyAvailable = [];
var waterEnergyAvailable = [];
var energyTypes = [];

// Functions of all attacks. Very long :(
function Psyshock(){
if (turn == "Player"){
	if (inPlay7.Card == "Abra.jpg" && playerActiveEnergy.length >= 1 && window.playerActiveEnergy.indexOf("P") != -1){
		enemyWeakness(Abra.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
			} else {
				alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
				if($('#enemy #paralyze').length > 0){
				} else {
					$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
				}
			}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && psychicEnergyAvailable.length >= 1){
		playerWeakness(Abra.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
			} else {
				alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
				if($('#player #paralyze').length > 0){
				} else {
					$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
				}
			}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Confuse_Ray(){
if (turn == "Player"){
	if (inPlay7.Card == "Alakazam.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Confuse_Ray);
		if (window.count >= 3) {
			enemyWeakness(Alakazam.Type, 30);
			alert("A coin will be flipped for confusion!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails! Enemy Pokemon is not Confused.");
			} else {
				alert("Coin flip was heads! Enemy Pokemon is Confused!");
				if($('#enemy #confusion').length > 0){
				} else {
					$('.enemyStatus').append('<img src="confusionCounter.gif" id="confusion" />');
				}
			}
		} else {
			alert("You do not have the 3 Psychic energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && psychicEnergyAvailable.length >= 3){
		compareEnergy(enemyActiveEnergy, Confuse_Ray);
		if (window.count >= 3) {
			playerWeakness(Alakazam.Type, 30);
			alert("A coin will be flipped for confusion!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails! Player Pokemon is not Confused.");
			} else {
				alert("Coin flip was heads! Player Pokemon is Confused!");
				if($('#player #confusion').length > 0){
				} else {
					$('.playerStatus').append('<img src="confusionCounter.gif" id="confusion" />');
				}
			}
			} else {
				alert("Enemy does not have the energy needed to use this attack!");
			}
		} else {
			alert("Computer does not have the 3 Psychic energy needed for this attack!");
		}
	betweenTurns('Enemy');
	}
}

function Flamethrower(){
if (turn == "Player"){
	if (inPlay7.Card == "Arcanine.jpg" || "Charmeleon.jpg" || "Magmar.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Flamethrower);
			if (window.count >= 2) {
				enemyWeakness(Arcanine.Type, 50);
				alert("Discard a Fire Energy to use this attack!");
				discardEnergy(Fire_Energy);
			} else {
				alert("You do not have the 2 Fire energy needed for this attack!");
			}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("R")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "R"){
				fireEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && fireEnergyAvailable.length >= 2){
		playerWeakness(Arcanine.Type, 50);
		alert("Discard a Fire Energy to use this attack!");
		enemyDiscardEnergy(Fire_Energy);
		/*compareEnergy(enemyActiveEnergy, Flamethrower);
			if (window.count >= 2) {
				
			} else {
				alert("Computer does not have the 2 Fire energy needed for this attack!");
			}*/
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Take_Down(){
if (turn == "Player"){
	if (inPlay7.Card == "Arcanine.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Take_Down);
			if (window.count >= 2) {
			enemyWeakness(Arcanine.Type, 80);
			playerWeakness(Arcanine.Type, 30);
		} else {
			alert("You do not have the 2 Fire energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("R")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "R"){
				fireEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && fireEnergyAvailable.length >= 2){
		compareEnergy(playerActiveEnergy, Take_Down);
			if (window.count >= 2) {
			playerWeakness(Arcanine.Type, 80);
			enemyWeakness(Arcanine.Type, 30);
		} else {
			alert("Computer does not have the 2 Fire energy needed for this attack!");
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Twineedle(){
if (turn == "Player"){
	if (inPlay7.Card == "Beedrill.jpg" && playerActiveEnergy.length >= 3){
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
			enemyActiveDamage = 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			enemyActiveDamage = 30;
		} else {
			enemyActiveDamage = 60;
		}
		enemyWeakness(Beedrill.Type, enemyActiveDamage);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 3){
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
			playerActiveDamage = 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			playerActiveDamage = 30;
		} else {
			playerActiveDamage = 60;
		}
		playerWeakness(Beedrill.Type, playerActiveDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Poison_Sting(){
if (turn == "Player"){
	if (inPlay7.Card == "Beedrill.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Poison_Sting);
			if (window.count >= 3) {
		enemyWeakness(Beedrill.Type, 40);
		alert("A coin will be flipped for poison!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails! Enemy Pokemon is not Poisoned.");
		} else {
			alert("Coin flip was heads! Enemy Pokemon is Poisoned!");
			if($('#enemy #poison').length > 0){
			} else {
				$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
			}
		}
	} else {
			alert("You do not have the 3 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && grassEnergyAvailable.length >= 3){
		playerWeakness(Beedrill.Type, 40);
		alert("A coin will be flipped for poison!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Poisoned.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Poisoned!");
		if($('#player #poison').length > 0){
		} else {
			$('.playerStatus').append('<img src="poisonCounter.gif" id="poison" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Hydro_Pump(){
if (turn == "Player"){
	if (inPlay7.Card == "Blastoise.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Hydro_Pump);
		if (window.count >= 3) {
				if (playerActiveEnergy >= ("Water_Energy" * 4) && playerActiveEnergy < ("Water_Energy" * 5)){
					incomingDamage = 50;
				} else if (playerActiveEnergy >= ("Water_Energy" * 5)){
					incomingDamage = 60;
				} else {			
				incomingDamage = 40;
				}
				enemyWeakness(Blastoise.Type, incomingDamage);
		} else {
			alert("You do not have the 3 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && waterEnergyAvailable.length >= 3){
		if (waterEnergyAvailable.length >= 5){
			incomingDamage = 60;
		} else if (waterEnergyAvailable.length >= 4){
			incomingDamage = 50;
		} else {			
		incomingDamage = 40;
		}
		playerWeakness(Blastoise.Type, incomingDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Leech_Seed(){
if (turn == "Player"){
	if (inPlay7.Card == "Bulbasaur.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Leech_Seed);
			if (window.count >= 2) {
				enemyWeakness(Bulbasaur.Type, 20);
				playerActiveDamage = playerActiveDamage - 10;
			} else {
				alert("You do not have the energy needed to use this attack!");
			}
		} else {
			alert("You do not have the 2 Grass energy needed for this attack!");
		}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && grassEnergyAvailable.length >= 2){
		playerWeakness(Bulbasaur.Type, 20);
		if(enemyActiveDamage > 0){
			enemyActiveDamage = enemyActiveDamage - 10;
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function String_Shot(){
if (turn == "Player"){
	if (inPlay7.Card == "Caterpie.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("G") != -1){
		enemyWeakness(Caterpie.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
		if($('#enemy #paralyze').length > 0){
		} else {
			$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && grassEnergyAvailable.length >= 1){
		playerWeakness(Caterpie.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		if($('#player #paralyze').length > 0){
		} else {
			$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Scrunch(){
if (turn == "Player"){
	if (inPlay7.Card == "Chansey.jpg" && playerActiveEnergy.length >= 2){
		alert("A coin will be flipped for Scrunch!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Scrunch did not work.");
	} else {
		alert("Coin flip was heads! You will receive no damage next turn.");
		noDamage(inPlay7, 1);
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		alert("A coin will be flipped for Scrunch!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Scrunch did not work.");
	} else {
		alert("Coin flip was heads! Enemy Chansey will receive no damage next turn.");
		noDamage(enemyInPlay7, 1);
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Double_Edge(){
if (turn == "Player"){
	if (inPlay7.Card == "Chansey.jpg" && playerActiveEnergy.length >= 4){
		enemyWeakness(Chansey.Type, 80);
		playerWeakness(Chansey.Type, 80);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 4){
		playerWeakness(Chansey.Type, 80);
		enemyWeakness(Chansey.Type, 80);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Fire_Spin(){
if (turn == "Player"){
	if (inPlay7.Card == "Charizard.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Fire_Spin);
			if (window.count >= 4) {
				enemyActiveDamage = enemyActiveDamage + 100;
				enemyWeakness(Charizard.Type, 100);
				alert("Discard 2 Energy to use this attack!");
				discardEnergy(Fire_Energy);
				discardEnergy(Fire_Energy);
		} else {
			alert("You do not have the 4 Fire energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Fire_Energy" * 4)){
		 100;
		playerWeakness(Charizard.Type, 100);
		alert("Discard 2 Energy to use this attack!");
		enemyDiscardEnergy(Fire_Energy);
		enemyDiscardEnergy(Fire_Energy);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Scratch(){
if (turn == "Player"){
	if (inPlay7.Card == "Charmander.jpg" && playerActiveEnergy.length >= 1){
		enemyWeakness(Charmander.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerWeakness(Charmander.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Ember(){
if (turn == "Player"){
	if (inPlay7.Card == "Charmander.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("R") != -1){
		enemyWeakness(Charmander.Type, 30);
		alert("Discard a Fire Energy to use this attack!");
		discardEnergy(Fire_Energy);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("R")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "R"){
				fireEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && fireEnergyAvailable.length >= 1){
		playerWeakness(Charmander.Type, 30);
		alert("Discard a Fire Energy to use this attack!");
		enemyDiscardEnergy(Fire_Energy);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Slash(){
if (turn == "Player"){
	if (inPlay7.Card == "Charmeleon.jpg" && playerActiveEnergy.length >= 3){
		enemyWeakness(Charmeleon.Type, 30);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 3){
		playerWeakness(Charmeleon.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Sing(){
if (turn == "Player"){
	if (inPlay7.Card == "Clefairy.jpg" && playerActiveEnergy.length >= 1){
		alert("A coin will be flipped for sleep!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Asleep.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Asleep!");
		if($('#enemy #sleep').length > 0){
		} else {
			$('.enemyStatus').append('<img src="sleepCounter.gif" id="sleep" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		alert("A coin will be flipped for sleep!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Asleep.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Asleep!");
		if($('#player #sleep').length > 0){
		} else {
			$('.playerStatus').append('<img src="sleepCounter.gif" id="sleep" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Metronome(){
if (turn == "Player"){
	if (inPlay7.Card == "Clefairy.jpg" && playerActiveEnergy.length >= 3){
		alert("Choose an attack to copy.");
		$('.attacks').empty();
		document.getElementById("light9").style.display="block";
		document.getElementById("fade").style.display="block";
		$('.attacks').append('<img src="Cards/Base_Set/' + enemyinPlay7.Card + '" />');
		$('.attacks').append('<a onClick="' + Metronome2(enemyInPlay7.Attack1) + '()" class="buttons" >' + enemyInPlay7.Attack1 + '</a>');
		$('.attacks').append('<a onClick="' + Metronome2(enemyInPlay7.Attack2) + '()" class="buttons" >' + enemyInPlay7.Attack2 + '</a>');
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if (enemyActiveAttachedEnergy.length >= 3){
		alert("Choose an attack to copy.");
		$('.attacks').empty();
		document.getElementById("light9").style.display="block";
		document.getElementById("fade").style.display="block";
		$('.attacks').append('<img src="Cards/Base_Set/' + playerInPlay7.Card + '" />');
		$('.attacks').append('<a onClick="' + Metronome2(playerInPlay7.Attack1) + '()" class="buttons" >' + playerInPlay7.Attack1 + '</a>');
		$('.attacks').append('<a onClick="' + Metronome2(playerInPlay7.Attack2) + '()" class="buttons" >' + playerInPlay7.Attack2 + '</a>');
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Metronome2(attack){
	// Need to copy attack except for energy costs, discarding cards, etc. and make sure damage ends up on proper Poke.
}

function Aurora_Beam(){
if (turn == "Player"){
	if (inPlay7.Card == "Dewgong.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Aurora_Beam);
		if (window.count >= 2) {
			enemyWeakness(Dewgong.Type, 50);
		} else {
			alert("You do not have the 2 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && waterEnergyAvailable.length >= 2){
		playerWeakness(Dewgong.Type, 50);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Ice_Beam(){
if (turn == "Player"){
	if (inPlay7.Card == "Dewgong.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Ice_Beam);
			if (window.count >= 2) {
				enemyActiveDamage = enemyActiveDamage + 30;
				enemyWeakness(Dewgong.Type, 30);
				alert("A coin will be flipped for paralysis!");
				coinFlip = Math.floor(Math.random() * 10) + 1;
			} else {
				alert("You do not have the 2 Water energy needed for this attack!");
			}
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
		if($('#enemy #paralyze').length > 0){
		} else {
			$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && waterEnergyAvailable.length >= 2){
		playerWeakness(Dewgong.Type, 30);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		if($('#player #paralyze').length > 0){
		} else {
			$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Dig(){
if (turn == "Player"){
	if (inPlay7.Card == "Diglett.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("F") != -1){
		enemyActiveDamage = enemyActiveDamage + 10;
		enemyWeakness(Diglett.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && fightingEnergyAvailable.length >= 1){
		playerWeakness(Diglett.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Mud_Slap(){
if (turn == "Player"){
	if (inPlay7.Card == "Diglett.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Mud_Slap);
			if (window.count >= 2) {
				enemyActiveDamage = enemyActiveDamage + 30;
				enemyWeakness(Diglett.Type, 30);
			} else {
				alert("You do not have the 2 Fighting energy needed for this attack!");
			}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && fightingEnergyAvailable.length >= 2){
		 30;
		playerWeakness(Diglett.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Fury_Attack(){
if (turn == "Player"){
	if (inPlay7.Card == "Doduo.jpg" && playerActiveEnergy.length >= 1){
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
			enemyActiveDamage = 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			enemyActiveDamage = 10;
		} else {
			enemyActiveDamage = 20;
		}
		enemyWeakness(Doduo.Type, enemyActiveDamage);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
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
			playerActiveDamage = 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			playerActiveDamage = 10;
		} else {
			playerActiveDamage = 20;
		}
		playerWeakness(Doduo.Type, playerActiveDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Slam(){
if (turn == "Player"){
	if (inPlay7.Card == "Dragonair.jpg" && playerActiveEnergy.length >= 3){
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
			enemyActiveDamage = 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			enemyActiveDamage = 30;
		} else {
			enemyActiveDamage = 60;
		}
		enemyWeakness(Dragonair.Type, enemyActiveDamage);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 3){
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
			playerActiveDamage = 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			playerActiveDamage = 30;
		} else {
			playerActiveDamage = 60;
		}
		playerWeakness(Dragonair.Type, playerActiveDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Hyper_Beam(){
if (turn == "Player"){
	if (inPlay7.Card == "Dragonair.jpg" && playerActiveEnergy.length >= 4){
		enemyWeakness(Dragonair.Type, 20);
		playTrainer2(Energy_Removal);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 4){
		playerWeakness(Dragonair.Type, 20);
		playTrainer2(Energy_Removal);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Pound(){
if (turn == "Player"){
	if (inPlay7.Card == "Dratini.jpg" && playerActiveEnergy.length >= 1){
		enemyWeakness(Dratini.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerWeakness(Dratini.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Confuse_Ray_Drowzee(){
if (turn == "Player"){
	if (inPlay7.Card == "Drowzee.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Confuse_Ray_Drowzee);
		if (window.count >= 2) {
				enemyActiveDamage = enemyActiveDamage + 10;
				enemyWeakness(Drowzee.Type, 10);
				alert("A coin will be flipped for confusion!");
				coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails! Enemy Pokemon is not Confused.");
			} else {
				alert("Coin flip was heads! Enemy Pokemon is Confused!");
				if($('#enemy #confusion').length > 0){
				} else {
					$('.enemyStatus').append('<img src="confusionCounter.gif" id="confusion" />');
				}
			}
		} else {
			alert("You do not have the 2 Psychic energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && psychicEnergyAvailable.length >= 2){
		playerWeakness(Drowzee.Type, 10);
		alert("A coin will be flipped for confusion!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Confused.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Confused!");
		if($('#player #confusion').length > 0){
		} else {
			$('.playerStatus').append('<img src="confusionCounter.gif" id="confusion" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Slash_Dugtrio(){
if (turn == "Player"){
	if (inPlay7.Card == "Dugtrio.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Slash_Dugtrio);
		if (window.count >= 2) {
			enemyActiveDamage = enemyActiveDamage + 40;
			enemyWeakness(Dugtrio.Type, 40);
		} else {
			alert("You do not have the 2 Fighting energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && fightingEnergyAvailable.length >= 2){
		 40;
		playerWeakness(Dugtrio.Type, 40);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Earthquake(){
if (turn == "Player"){
	if (inPlay7.Card == "Dugtrio.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Earthquake);
		if (window.count >= 4) {
			enemyActiveDamage = enemyActiveDamage + 70;
			enemyWeakness(Dugtrio.Type, 70);
			playerBench1Damage = playerBench1Damage + 10;
			playerBench2Damage = playerBench2Damage + 10;
			playerBench3Damage = playerBench3Damage + 10;
			playerBench4Damage = playerBench4Damage + 10;
			playerBench5Damage = playerBench5Damage + 10;
		} else {
			alert("You do not have the 4 Fighting energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && fightingEnergyAvailable.length >= 4){
		 70;
		playerWeakness(Dugtrio.Type, 70);
		enemyBench1Damage = enemyBench1Damage + 10;
		enemyBench2Damage = enemyBench2Damage + 10;
		enemyBench3Damage = enemyBench3Damage + 10;
		enemyBench4Damage = enemyBench4Damage + 10;
		enemyBench5Damage = enemyBench5Damage + 10;
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Thundershock(){
if (turn == "Player"){
	if (inPlay7.Card == "Electabuzz.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("L") != -1){
		enemyActiveDamage = enemyActiveDamage + 10;
		enemyWeakness(Electabuzz.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
		if($('#enemy #paralyze').length > 0){
		} else {
			$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && lightningEnergyAvailable.length >= 1){
		playerWeakness(Electabuzz.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		if($('#player #paralyze').length > 0){
		} else {
			$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Thunderpunch(){
if (turn == "Player"){
	if (inPlay7.Card == "Electabuzz.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("L") != -1){
		enemyActiveDamage = enemyActiveDamage + 30;
		alert("A coin will be flipped for extra damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! 10 damage to Electabuzz.");
		enemyWeakness(Electabuzz.Type, 30);
	} else {
		alert("Coin flip was heads! 10 extra damage!");
		enemyWeakness(Electabuzz.Type, 40);
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && lightningEnergyAvailable.length >= 1){
		 30;
		alert("A coin will be flipped for extra damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! 10 damage to Electabuzz.");
		enemyActiveDamage = enemyActiveDamage + 10;
		playerWeakness(Electabuzz.Type, 30);
	} else {
		alert("Coin flip was heads! 10 extra damage!");
		playerWeakness(Electabuzz.Type, 40);
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Electric_Shock(){
if (turn == "Player"){
	if (inPlay7.Card == "Electrode.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Electric_Shock);
		if (window.count >= 3) {
			enemyActiveDamage = enemyActiveDamage + 50;
			alert("A coin will be flipped. If tails, Electrode will take 10 damage!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails! 10 damage to Electrode.");
				 10;
				enemyWeakness(Electrode.Type, 50);
			} else {
				alert("Coin flip was heads! No damage to Electrode!");
				enemyWeakness(Electrode.Type, 50);
			}
		} else {
			alert("You do not have the 3 Lightning energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && lightningEnergyAvailable.length >= 3){
		alert("A coin will be flipped. If tails, Electrode will take 10 damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails! 10 damage to Electrode.");
			enemyActiveDamage = enemyActiveDamage + 10;
			playerWeakness(Electrode.Type, 50);
		} else {
			alert("Coin flip was heads! No damage to Electrode!");
			playerWeakness(Electrode.Type, 50);
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Leek_Slap(){
if (turn == "Player"){
	if (leekSlapCounter === 0){
		if (inPlay7.Card == "Farfetchd.jpg" && playerActiveEnergy.length >= 1){
			enemyActiveDamage = enemyActiveDamage + 30;
			enemyWeakness(Farfetchd.Type, 30);
			leekSlapCounter = 1;
			return leekSlapCounter;
		} else {
			alert("You do not have the energy needed to use this attack!");
		}
	} else {
		alert("You already used this attack and it can only be used once!");
	}
	betweenTurns('Player');
} else {
	if (leekSlapCounter === 0){
		if(enemyActiveAttachedEnergy.length >= 1){
			enemyActiveDamage = enemyActiveDamage + 30;
			enemyWeakness(Farfetchd.Type, 30);
			leekSlapCounter = 1;
			return leekSlapCounter;
		} else {
			alert("Enemy does not have the energy needed to use this attack!");
		}
	} else {
		alert("Enemy already used this attack and it can only be used once!");
	}
		betweenTurns('Enemy');
}
}

function Pot_Smash(){
if (turn == "Player"){
	if (inPlay7.Card == "Farfetchd.jpg" && playerActiveEnergy.length >= 3){
		enemyWeakness(Farfetchd.Type, 30);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		 30;
		playerWeakness(Farfetchd.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Sleeping_Gas(){
if (turn == "Player"){
	if (inPlay7.Card == "Gastly.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("P") != -1){
		alert("A coin will be flipped for sleep!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Asleep.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Asleep!");
		if($('#enemy #sleep').length > 0){
		} else {
			$('.enemyStatus').append('<img src="sleepCounter.gif" id="sleep" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && psychicEnergyAvailable.length >= 1){
		alert("A coin will be flipped for sleep!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Asleep.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Asleep!");
		if($('#player #sleep').length > 0){
		} else {
			$('.playerStatus').append('<img src="sleepCounter.gif" id="sleep" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Destiny_Bond(){
if (turn == "Player"){
	if (inPlay7.Card == "Gastly.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("P") != -1){
		alert("Discard a Psychic Energy to use this attack.");
		discardEnergy(Psychic_Energy);
		// set knockout when Gastly is knocked out.
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && psychicEnergyAvailable.length >= 2){
		alert("Discard a Psychic Energy to use this attack.");
		enemyDiscardEnergy(Psychic_Energy);
		// set knockout when Gastly is knocked out.
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Flare(){
if (turn == "Player"){
	if (inPlay7.Card == "Growlithe.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("R") != -1){
		enemyActiveDamage = enemyActiveDamage + 20;
		enemyWeakness(Growlithe.Type, 20);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("R")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "R"){
				fireEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && fireEnergyAvailable.length >= 1){
		playerWeakness(Growlithe.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Dragon_Rage(){
if (turn == "Player"){
	if (inPlay7.Card == "Gyarados.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Dragon_Rage);
		if (window.count >= 3) {
			enemyActiveDamage = enemyActiveDamage + 50;
			enemyWeakness(Gyarados.Type, 50);
		} else {
			alert("You do not have the 3 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && waterEnergyAvailable.length >= 3){
		 50;
		playerWeakness(Gyarados.Type, 50);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Bubblebeam(){
if (turn == "Player"){
	if (inPlay7.Card == "Gyarados.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Bubblebeam);
			if (window.count >= 4) {
			enemyActiveDamage = enemyActiveDamage + 40;
			enemyWeakness(Gyarados.Type, 40);
			alert("A coin will be flipped for paralysis!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
				} else {
					alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
					if($('#enemy #paralyze').length > 0){
					} else {
						$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
					}
				}
			} else {
			alert("You do not have the 4 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && waterEnergyAvailable.length >= 4){
		 40;
		playerWeakness(Gyarados.Type, 40);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		if($('#player #paralyze').length > 0){
		} else {
			$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Hypnosis(){
if (turn == "Player"){
	if (inPlay7.Card == "Haunter.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("P") != -1){
		alert("A coin will be flipped for sleep!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Asleep.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Asleep!");
		if($('#enemy #sleep').length > 0){
		} else {
			$('.enemyStatus').append('<img src="sleepCounter.gif" id="sleep" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && psychicEnergyAvailable.length >= 1){
		alert("A coin will be flipped for sleep!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Asleep.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Asleep!");
		if($('#player #sleep').length > 0){
		} else {
			$('.playerStatus').append('<img src="sleepCounter.gif" id="sleep" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Dream_Eater(){
if (turn == "Player"){
	if (inPlay7.Card == "Haunter.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Dream_Eater);
			if (window.count >= 2) {
				if ($('#enemy #sleep').length > 0){
				enemyActiveDamage = enemyActiveDamage + 50;
				enemyWeakness(Haunter.Type, 50);
				} else {
					alert("Enemy Pokemon is not asleep. You cannot use this attack!");
				}
			} else {
			alert("You do not have the 2 Psychic energy needed for this attack!");
			}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && psychicEnergyAvailable.length >= 2){
		if ($('#player #sleep').length > 0){
		 50;
		playerWeakness(Haunter.Type, 50);
		} else {
			alert("Player Pokemon is not asleep. Enemy cannot use this attack!");
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Jab(){
if (turn == "Player"){
	if (inPlay7.Card == "Hitmonchan.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("F") != -1){
		enemyActiveDamage = enemyActiveDamage + 20;
		enemyWeakness(Hitmonchan.Type, 20);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && fightingEnergyAvailable.length >= 1){
		playerWeakness(Hitmonchan.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Special_Punch(){
if (turn == "Player"){
	if (inPlay7.Card == "Hitmonchan.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Special_Punch);
		if (window.count >= 2) {
			enemyActiveDamage = enemyActiveDamage + 40;
			enemyWeakness(Hitmonchan.Type, 40);
		} else {
			alert("You do not have the 2 Fighting energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && fightingEnergyAvailable.length >= 2){
		 40;
		playerWeakness(Hitmonchan.Type, 40);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Vine_Whip(){
if (turn == "Player"){
	if (inPlay7.Card == "Ivysaur.jpg" && playerActiveEnergy.length >= 3 && playerActiveEnergy.indexOf("G") != -1){
		enemyActiveDamage = enemyActiveDamage + 30;
		enemyWeakness(Ivysaur.Type, 30);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && grassEnergyAvailable.length >= 1){
		 30;
		playerWeakness(Ivysaur.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Poisonpowder(){
if (turn == "Player"){
	if (inPlay7.Card == "Ivysaur.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Poisonpowder);
			if (window.count >= 3) {
				enemyActiveDamage = enemyActiveDamage + 20;
				enemyWeakness(Ivysaur.Type, 20);
				alert("Enemy Pokemon is Poisoned!");
				if($('#enemy #poison').length > 0){
				} else {
					$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
				}
			} else {
			alert("You do not have the 3 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && grassEnergyAvailable.length >= 3){
		playerWeakness(Ivysaur.Type, 20);
		alert("Player Pokemon is Poisoned!");
		if($('#player #poison').length > 0){
		} else {
			$('.playerStatus').append('<img src="poisonCounter.gif" id="poison" />');
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Doubleslap(){
if (turn == "Player"){
	if (inPlay7.Card == "Jynx.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("P") != -1){
		enemyActiveDamage = 10;
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
			enemyActiveDamage = enemyActiveDamage * 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			enemyActiveDamage = enemyActiveDamage * 1;
		} else {
			enemyActiveDamage = enemyActiveDamage * 2;
		}
		enemyWeakness(Jynx.Type, enemyActiveDamage);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && psychicEnergyAvailable.length >= 1){
		incomingDamage = 10;
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
			actualDamage = incomingDamage * 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			actualDamage = incomingDamage * 1;
		} else {
			actualDamage = incomingDamage * 2;
		}
		playerWeakness(Jynx.Type, actualDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Meditate(){
if (turn == "Player"){
	if (inPlay7.Card == "Jynx.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Meditate);
		if (window.count >= 2) {
			enemyIncomingDamage = 20 + enemyActiveDamage;
			enemyWeakness(Jynx.Type, enemyIncomingDamage);
		} else {
			alert("You do not have the 2 Psychic energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && psychicEnergyAvailable.length >= 2){
		playerIncomingDamage = 20 + playerActiveDamage;
		playerWeakness(Jynx.Type, playerIncomingDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Recover(){
if (turn == "Player"){
	if (inPlay7.Card == "Kadabra.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Recover);
		if (window.count >= 2) {
			alert("Discard a Psychic Energy to use this attack!");
			discardEnergy(Psychic_Energy);
			playerActiveDamage = 0;
			alert("Kadabra has healed all damage!");
		} else {
			alert("You do not have the 2 Psychic energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && psychicEnergyAvailable.length >= 2){
		alert("Discard a Psychic Energy to use this attack!");
		discardEnergy(Psychic_Energy);
		enemyActiveDamage = 0;
		alert("Enemy Kadabra has healed all damage!");
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Super_Psy(){
if (turn == "Player"){
	if (inPlay7.Card == "Kadabra.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Super_Psy);
		if (window.count >= 2) {
			enemyActiveDamage = enemyActiveDamage + 50;
			enemyWeakness(Kadabra.Type, 50);
		} else {
			alert("You do not have the 2 Psychic energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && psychicEnergyAvailable.length >= 2){
		 50;
		playerWeakness(Kadabra.Type, 50);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Stiffen(){
if (turn == "Player"){
	if (inPlay7.Card == "Kakuna.jpg" || Metapod && playerActiveEnergy.length >= 2){
		alert("A coin will be flipped for Stiffen!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Stiffen did not work.");
	} else {
		alert("Coin flip was heads! You will receive no damage next turn.");
		noDamage(inPlay7, 1);
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		alert("A coin will be flipped for Stiffen!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Stiffen did not work.");
	} else {
		alert("Coin flip was heads! Enemy Kakuna will receive no damage next turn.");
		noDamage(enemyInPlay7, 1);
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Poisonpowder_Kakuna(){
if (turn == "Player"){
	if (inPlay7.Card == "Kakuna.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Poisonpowder_Kakuna);
		if (window.count >= 2) {
			enemyWeakness(Kakuna.Type, 20);
			alert("A coin will be flipped for poison!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon is not Poisoned.");
				} else {
					alert("Coin flip was heads! Enemy Pokemon is Poisoned!");
					if($('#enemy #poison').length > 0){
					} else {
						$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
					}
				}
		} else {
			alert("You do not have the 2 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && grassEnergyAvailable.length >= 2){
		playerWeakness(Kakuna.Type, 20);
		alert("A coin will be flipped for poison!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Poisoned.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Poisoned!");
		if($('#player #poison').length > 0){
		} else {
			$('.playerStatus').append('<img src="poisonCounter.gif" id="poison" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Foul_Gas(){
if (turn == "Player"){
	if (inPlay7.Card == "Koffing.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Foul_Gas);
		if (window.count >= 2) {
			enemyActiveDamage = enemyActiveDamage + 10;
			enemyWeakness(Koffing.Type, 10);
			alert("A coin will be flipped for status!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon is Confused.");
					if($('#enemy #confusion').length > 0){
					} else {
						$('.enemyStatus').append('<img src="confusionCounter.gif" id="confusion" />');
					}
				} else {
					alert("Coin flip was heads! Enemy Pokemon is Poisoned!");
					if($('#enemy #poison').length > 0){
					} else {
						$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
					}
				}
		} else {
			alert("You do not have the 2 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && grassEnergyAvailable.length >= 2){
		playerWeakness(Kakuna.Type, 10);
		alert("A coin will be flipped for status!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is Confused.");
		if($('#player #confusion').length > 0){
		} else {
			$('.playerStatus').append('<img src="confusionCounter.gif" id="confusion" />');
		}
	} else {
		alert("Coin flip was heads! Player Pokemon is Poisoned!");
		if($('#player #poison').length > 0){
		} else {
			$('.playerStatus').append('<img src="poisonCounter.gif" id="poison" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Seismic_Toss(){
if (turn == "Player"){
	if (inPlay7.Card == "Machamp.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Seismic_Toss);
		if (window.count >= 3) {
			enemyActiveDamage = enemyActiveDamage + 60;
			enemyWeakness(Machamp.Type, 60);
		} else {
			alert("You do not have the 3 Fighting energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && fightingEnergyAvailable.length >= 3){
		playerWeakness(Machamp.Type, 60);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Karate_Chop(){
if (turn == "Player"){
	if (inPlay7.Card == "Machoke.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Karate_Chop);
		if (window.count >= 2) {
			attackDamage = 50 - playerActiveDamage;
			if (attackDamage < 0){
				attackDamage = 0;
			}
			enemyWeakness(Machoke.Type, attackDamage);
		} else {
			alert("You do not have the 2 Fighting energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && fightingEnergyAvailable.length >= 2){
		attackDamage = 50 - enemyActiveDamage;
		if (attackDamage < 0){
			attackDamage = 0;
		}
		 attackDamage;
		playerWeakness(Machoke.Type, attackDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Submission(){
if (turn == "Player"){
	if (inPlay7.Card == "Machoke.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Submission);
		if (window.count >= 2) {
			enemyActiveDamage = enemyActiveDamage + 60;
			enemyWeakness(Machoke.Type, 60);
			playerWeakness(Machoke.Type, 20);
		} else {
			alert("You do not have the 2 Fighting energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && fightingEnergyAvailable.length >= 2){
		playerWeakness(Machoke.Type, 60);
		enemyWeakness(Machoke.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Low_Kick(){
if (turn == "Player"){
	if (inPlay7.Card == "Machop.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("F") != -1){
		enemyActiveDamage = enemyActiveDamage + 20;
		enemyWeakness(Machop.Type, 20);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && fightingEnergyAvailable.length >= 1){
		playerWeakness(Machop.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Tackle(){
if (turn == "Player"){
	if (inPlay7.Card == "Magikarp.jpg" && playerActiveEnergy.length >= 1){
		enemyActiveDamage = enemyActiveDamage + 10;
		enemyWeakness(Magikarp.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerWeakness(Magikarp.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Flail(){
if (turn == "Player"){
	if (inPlay7.Card == "Magikarp.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("W") != -1){
		attackDamage = 10 * playerActiveDamage;
		enemyWeakness(Magikarp.Type, attackDamage);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && waterEnergyAvailable.length >= 1){
		attackDamage = 10 * enemyActiveDamage;
		playerWeakness(Magikarp.Type, attackDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Fire_Punch(){
if (turn == "Player"){
	if (inPlay7.Card == "Magmar.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Fire_Punch);
		if (window.count >= 2) {
			enemyWeakness(Magmar.Type, 30);
		} else {
			alert("You do not have the 2 Fire energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("R")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "R"){
				fireEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && fireEnergyAvailable.length >= 2){
		playerWeakness(Magmar.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Thunder_Wave(){
if (turn == "Player"){
	if (inPlay7.Card == "Magnemite.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("L") != -1){
		enemyWeakness(Magnemite.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
		if($('#enemy #paralyze').length > 0){
		} else {
			$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && lightningEnergyAvailable.length >= 1){
		playerWeakness(Magnemite.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		if($('#player #paralyze').length > 0){
		} else {
			$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Selfdestruct(){
if (turn == "Player"){
	if (inPlay7.Card == "Magnemite.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("L") != -1){
		enemyWeakness(Magnemite.Type, 40);
		playerWeakness(Magnemite.Type, 40);
		playerBench1Damage = playerBench1Damage + 10;
		playerBench2Damage = playerBench2Damage + 10;
		playerBench3Damage = playerBench3Damage + 10;
		playerBench4Damage = playerBench4Damage + 10;
		playerBench5Damage = playerBench5Damage + 10;
		enemyBench1Damage = playerBench1Damage + 10;
		enemyBench2Damage = playerBench2Damage + 10;
		enemyBench3Damage = playerBench3Damage + 10;
		enemyBench4Damage = playerBench4Damage + 10;
		enemyBench5Damage = playerBench5Damage + 10;
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && lightningEnergyAvailable.length >= 1){
		 40;
		playerWeakness(Magnemite.Type, 40);
		enemyWeakness(Magnemite.Type, 40);
		playerBench1Damage = playerBench1Damage + 10;
		playerBench2Damage = playerBench2Damage + 10;
		playerBench3Damage = playerBench3Damage + 10;
		playerBench4Damage = playerBench4Damage + 10;
		playerBench5Damage = playerBench5Damage + 10;
		enemyBench1Damage = playerBench1Damage + 10;
		enemyBench2Damage = playerBench2Damage + 10;
		enemyBench3Damage = playerBench3Damage + 10;
		enemyBench4Damage = playerBench4Damage + 10;
		enemyBench5Damage = playerBench5Damage + 10;
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Thunder_Wave_Magneton(){
if (turn == "Player"){
	if (inPlay7.Card == "Magneton.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Thunder_Wave_Magneton);
		if (window.count >= 2) {
			enemyWeakness(Magneton.Type, 30);
			alert("A coin will be flipped for paralysis!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
				} else {
					alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
					if($('#enemy #paralyze').length > 0){
					} else {
						$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
					}
				}
		} else {
			alert("You do not have the 2 Lightning energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && lightningEnergyAvailable.length >= 2){
		 30;
		playerWeakness(Magneton.Type, 30);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		if($('#player #paralyze').length > 0){
		} else {
			$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Selfdestruct_Magneton(){
if (turn == "Player"){
	if (inPlay7.Card == "Magneton.jpg" && playerActiveEnergy.length >= 4){
		compareEnergy(playerActiveEnergy, Selfdestruct_Magneton);
		if (window.count >= 2) {
			enemyWeakness(Magneton.Type, 80);
			playerWeakness(Magneton.Type, 80);
			playerBench1Damage = playerBench1Damage + 20;
			playerBench2Damage = playerBench2Damage + 20;
			playerBench3Damage = playerBench3Damage + 20;
			playerBench4Damage = playerBench4Damage + 20;
			playerBench5Damage = playerBench5Damage + 20;
			enemyBench1Damage = playerBench1Damage + 20;
			enemyBench2Damage = playerBench2Damage + 20;
			enemyBench3Damage = playerBench3Damage + 20;
			enemyBench4Damage = playerBench4Damage + 20;
			enemyBench5Damage = playerBench5Damage + 20;
		} else {
			alert("You do not have the 2 Lightning energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && lightningEnergyAvailable.length >= 2){
		playerWeakness(Magneton.Type, 80);
		enemyWeakness(Magneton.Type, 80);
		playerBench1Damage = playerBench1Damage + 20;
		playerBench2Damage = playerBench2Damage + 20;
		playerBench3Damage = playerBench3Damage + 20;
		playerBench4Damage = playerBench4Damage + 20;
		playerBench5Damage = playerBench5Damage + 20;
		enemyBench1Damage = playerBench1Damage + 20;
		enemyBench2Damage = playerBench2Damage + 20;
		enemyBench3Damage = playerBench3Damage + 20;
		enemyBench4Damage = playerBench4Damage + 20;
		enemyBench5Damage = playerBench5Damage + 20;
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Stun_Spore(){
if (turn == "Player"){
	if (inPlay7.Card == "Metapod.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Stun_Spore);
		if (window.count >= 2) {
			enemyWeakness(Metapod.Type, 20);
			alert("A coin will be flipped for paralysis!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
			} else {
				alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
				if($('#enemy #paralyze').length > 0){
				} else {
					$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
				}
			}
		} else {
			alert("You do not have the 2 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && grassEnergyAvailable.length >= 2){
		playerWeakness(Metapod.Type, 20);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		if($('#player #paralyze').length > 0){
		} else {
			$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Psychic(){
if (turn == "Player"){
	if (inPlay7.Card == "Mewtwo.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("P") != -1){
		attackBonus = enemyActiveAttachedEnergy.length * 10;
		enemyActiveDamage = enemyActiveDamage + 10 + attackBonus;
		enemyWeakness(Mewtwo.Type, (10 + attackBonus));
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && psychicEnergyAvailable.length >= 1){
		attackBonus = playerplayerActiveEnergy.length * 10;
		 10 + attackBonus;
		playerWeakness(Mewtwo.Type, (10 + attackBonus));
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Barrier(){
if (turn == "Player"){
	if (inPlay7.Card == "Mewtwo.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Barrier);
		if (window.count >= 2) {
			alert("Discard a Psychic energy to use this attack.");
			discardEnergy(Psychic_Energy);
			noDamage(inPlay7, 1);
			noStatus(player);
		} else {
			alert("You do not have the 2 Psychic energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("P")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "P"){
				psychicEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && psychicEnergyAvailable.length >= 2){
		alert("Discard a Psychic energy to use this attack.");
		discardEnergy(Psychic_Energy);
		noDamage(inPlay7, 1);
		noStatus(player);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Thrash(){
if (turn == "Player"){
	if (inPlay7.Card == "Nidoking.jpg" && playerActiveEnergy.length >= 3 && playerActiveEnergy.indexOf("G") != -1){
		enemyActiveDamage = enemyActiveDamage + 30;
		alert("A coin will be flipped for extra damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! 10 damage to Nidoking.");
		enemyWeakness(Nidoking.Type, 30);
	} else {
		alert("Coin flip was heads! 10 extra damage!");
		enemyWeakness(Nidoking.Type, 40);
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && grassEnergyAvailable.length >= 1){
		 30;
		alert("A coin will be flipped for extra damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! 10 damage to Nidoking.");
		enemyActiveDamage = enemyActiveDamage + 10;
		playerWeakness(Nidoking.Type, 30);
	} else {
		alert("Coin flip was heads! 10 extra damage!");
		playerWeakness(Nidoking.Type, 40);
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Toxic(){
if (turn == "Player"){
	if (inPlay7.Card == "Nidoking.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Toxic);
		if (window.count >= 3) {
			enemyWeakness(Nidoking.Type, 20);
			alert("Enemy Pokemon is Toxic Poisoned!");
			if($('#enemy #toxic').length > 0){
			} else {
				$('.enemyStatus').append('<img src="poisonCounter.gif" id="toxic" />');
			}
		} else {
			alert("You do not have the 3 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && grassEnergyAvailable.length >= 3){
		playerWeakness(Nidoking.Type, 20);
		alert("Player Pokemon is Toxic Poisoned!");
		if($('#player #toxic').length > 0){
		} else {
			$('.playerStatus').append('<img src="poisonCounter.gif" id="toxic" />');
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Horn_Hazard(){
if (turn == "Player"){
	if (inPlay7.Card == "NidoranM.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("G") != -1){
		alert("A coin will be flipped for damage.");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! No damage done!");
		enemyWeakness(NidoranM.Type, 0);
	} else {
		alert("Coin flip was heads! 30 damage!");
		enemyWeakness(NidoranM.Type, 30);
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && grassEnergyAvailable.length >= 1){
		alert("A coin will be flipped for damage.");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! No damage done!");
		playerWeakness(NidoranM.Type, 0);
	} else {
		alert("Coin flip was heads! 30 damage!");
		playerWeakness(NidoranM.Type, 30);
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && grassEnergyAvailable.length >= 1){
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
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && grassEnergyAvailable.length >= 2){
		 50; 
		playerWeakness(Nidorino.Type, 50);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		alert("Choose a Pokemon to switch with the active Pokemon.");
		$('#player .benchPoke .card').attr('onClick', 'gustOfWind(this)');
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("R")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "R"){
				fireEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && fireEnergyAvailable.length >= 4){
		playerWeakness(Ninetales.Type, 80);
		alert("Discard a Fire Energy to use this attack!");
		enemyDiscardEnergy(Fire_Energy);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && fightingEnergyAvailable.length >= 1){
		playerWeakness(Onix.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && fightingEnergyAvailable.length >= 2){
		currentDamage = enemyActiveDamage;
		if (enemyActiveDamage <= currentDamage + 30){
			enemyActiveDamage = currentDamage;
		} else {
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		playerWeakness(Pidgeotto.Type, 20);
		if ($('#player .benchPoke').length > 0){
			alert("Choose a Pokemon to switch with the active Pokemon.");
			$('#player .benchPoke .card').attr('onClick', 'gustOfWind(this)');
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		playerWeakness(Pidgey.Type, 10);
		if ($('#player .benchPoke').length > 0){
			alert("Choose a Pokemon to switch with the active Pokemon.");
			$('#player .benchPoke .card').attr('onClick', 'gustOfWind(this)');
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Gnaw(){
if (turn == "Player"){
	if (inPlay7.Card == "Pikachu.jpg" && playerActiveEnergy.length >= 1){
		enemyWeakness(Pikachu.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerWeakness(Pikachu.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Thunder_Jolt(){
if (turn == "Player"){
	if (inPlay7.Card == "Pikachu.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("L") != -1){
		alert("A coin will be flipped. If tails, Pikachu will take 10 damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! 10 damage to Pikachu.");
		enemyWeakness(Pikachu.Type, 30);
	} else {
		alert("Coin flip was heads! No damage to Pikachu!");
		enemyWeakness(Pikachu.Type, 30);
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && lightningEnergyAvailable.length >= 1){
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
	betweenTurns('Enemy');
}
}

function Water_Gun(){
if (turn == "Player"){
	tempAmt = 0;
	if (inPlay7.Card == "Poliwag.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("W") != -1){
			for (i=0;i < playerActiveEnergy.length; i++){
			if (playerActiveEnergy[i] == "W"){
				tempAmt = tempAmt+1;
			}
		}
		if(tempAmt == 2){
			damageAmount = 20;
		} else if (tempAmt == 3){
			damageAmount = 30;
		} else {			
		damageAmount = 10;
		}
		enemyWeakness(Poliwag.Type, damageAmount);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && waterEnergyAvailable.length >= 1){
		tempAmt = 0;
		for (i=0;i < enemyActiveEnergy.length; i++){
			if (enemyActiveEnergy[i] == "W"){
				tempAmt = tempAmt+1;
			}
		}
		if(tempAmt == 2){
			damageAmount = 20;
		} else if (tempAmt == 3){
			damageAmount = 30;
		} else {			
		damageAmount = 10;
		}
		playerWeakness(Poliwag.Type, damageAmount);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && waterEnergyAvailable.length >= 2){
		alert("Choose an attack on the player Pokemon that cannot be used next turn.");
		// Code to disable attack goes here.
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && waterEnergyAvailable.length >= 2){
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
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && waterEnergyAvailable.length >= 2){
		if (enemyActiveAttachedEnergy.length >= 5 && waterEnergyAvailable.length >= 4){
			 50;
		} else if (waterEnergyAvailable.length >= 3){
			 40;
		} else {			
		 30;
		}
		playerWeakness(Poliwrath.Type, playerActiveDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && waterEnergyAvailable.length >= 2){
		 40;
		playerWeakness(Poliwrath.Type, 40);
		playTrainer2(Energy_Removal);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Smash_Kick(){
if (turn == "Player"){
	if (inPlay7.Card == "Ponyta.jpg" && playerActiveEnergy.length >= 2){
		enemyWeakness(Ponyta.Type, 20);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 2){
		playerWeakness(Ponyta.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("R")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "R"){
				fireEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && fireEnergyAvailable.length >= 2){
		 30;
		playerWeakness(Ponyta.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
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
	betweenTurns('Enemy');
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
	betweenTurns('Player');
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
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && lightningEnergyAvailable.length >= 1){
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
	betweenTurns('Enemy');
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
					 30;
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && lightningEnergyAvailable.length >= 3){
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
	betweenTurns('Enemy');
}
}

function Bite(){
if (turn == "Player"){
	if (inPlay7.Card == "Rattata.jpg" || "Raticate.jpg" && playerActiveEnergy.length >= 1){
		enemyWeakness(Raticate.Type, 20);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerWeakness(Raticate.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("F")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "F"){
				fightingEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && fightingEnergyAvailable.length >= 1){
		playerWeakness(Sandshrew.Type, 10);
		playerSandAttack = 1;
		return playerSandAttack;
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Headbutt(){
if (turn == "Player"){
	if (inPlay7.Card == "Seel.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("W") != -1){
		enemyWeakness(Seel.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && waterEnergyAvailable.length >= 1){
		playerWeakness(Seel.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
		if($('#enemy #paralyze').length > 0){
		} else {
			$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	alert("made it into attack");
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && waterEnergyAvailable.length >= 1){
		playerWeakness(Squirtle.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		if($('#player #paralyze').length > 0){
		} else {
			$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && waterEnergyAvailable.length >= 1){
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
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && waterEnergyAvailable.length >= 2){
		alert("Discard a Water Energy to use this attack!");
		discardEnergy(Water_Energy);
		enemyActiveDamage = 0;
		alert("Enemy Starmie has healed all damage!");
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
			if($('#enemy #paralyze').length > 0){
			} else {
				$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
			}
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && waterEnergyAvailable.length >= 1){
		playerWeakness(Starmie.Type, 20);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		if($('#player #paralyze').length > 0){
		} else {
			$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && waterEnergyAvailable.length >= 1){
		playerWeakness(Staryu.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
		if($('#enemy #paralyze').length > 0){
		} else {
			$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && grassEnergyAvailable.length >= 1){
		playerWeakness(Tangela.Type, 20);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Paralyzed.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Paralyzed!");
		if($('#player #paralyze').length > 0){
		} else {
			$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
			if($('#enemy #poison').length > 0){
			} else {
				$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
			}
		} else {
			alert("You do not have the 3 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && grassEnergyAvailable.length >= 3){
		playerWeakness(Tangela.Type, 20);
		alert("Player Pokemon is Poisoned!");
		if($('#player #poison').length > 0){
		} else {
			$('.playerStatus').append('<img src="poisonCounter.gif" id="poison" />');
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && grassEnergyAvailable.length >= 4){
		playerWeakness(Venusaur.Type, 60);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

function Tackle_Voltorb(){
if (turn == "Player"){
	if (inPlay7.Card == "Voltorb.jpg" && playerActiveEnergy.length >= 1){
		enemyWeakness(Voltorb.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerWeakness(Voltorb.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
		if($('#enemy #confusion').length > 0){
		} else {
			$('.enemyStatus').append('<img src="confusionCounter.gif" id="confusion" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("R")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "R"){
				fireEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 2 && fireEnergyAvailable.length >= 2){
		playerWeakness(Vulpix.Type, 10);
		alert("A coin will be flipped for confusion!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Enemy Pokemon is not Confused.");
	} else {
		alert("Coin flip was heads! Enemy Pokemon is Confused!");
		if($('#player #confusion').length > 0){
		} else {
			$('.playerStatus').append('<img src="confusionCounter.gif" id="confusion" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	fireEnergyAvailable = [];
	betweenTurns('Enemy');
}
}

function Bite_Wartortle(){
if (turn == "Player"){
	if (inPlay7.Card == "Wartortle.jpg" && playerActiveEnergy.length >= 3 && playerActiveEnergy.indexOf("W") != -1){
		enemyWeakness(Wartortle.Type, 40);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("W")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "W"){
				waterEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 3 && waterEnergyAvailable.length >= 1){
		playerWeakness(Wartortle.Type, 40);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
		if($('#enemy #poison').length > 0){
		} else {
			$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
		}
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("G")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "G"){
				grassEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 1 && grassEnergyAvailable.length >= 1){
		playerWeakness(Weedle.Type, 10);
		alert("A coin will be flipped for poison!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Poisoned.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Poisoned!");
		if ($('#player #poison').length > 0){
		} else {
			$('.playerStatus').append('<img src="poisonCounter.gif" id="poison" />');
		}
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && lightningEnergyAvailable.length >= 3){
		playerWeakness(Zapdos.Type, 60);
		alert("A coin will be flipped. If tails, Zapdos will take 30 damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails! 30 damage to Zapdos.");
			enemyActiveDamage = enemyActiveDamage + 30;
		} else {
			alert("Coin flip was heads! No damage to Zapdos!");
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
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
	betweenTurns('Player');
} else {
	
	for(i=0; i < enemyActiveAttachedEnergy.length; i++){
		energyTypes.push(enemyActiveAttachedEnergy[i].Type);
	}
	if(energyTypes.includes("L")){
		for(i=0; i < energyTypes.length; i++){
			if(energyTypes[i] == "L"){
				lightningEnergyAvailable.push(energyTypes[i]);
			}
		}
	}
	if(enemyActiveAttachedEnergy.length >= 4 && lightningEnergyAvailable.length >= 4){
		playerWeakness(Zapdos.Type, 100);
		alert("Discard all energy to use this attack!");
		$('#enemy .active .energy1, #enemy .active .energy2, #enemy .active .energy3, #enemy .active .energy4, #enemy .active .energy5, #enemy .active .energy6, #enemy .active .energy7, #enemy .active .energy8').empty();
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns('Enemy');
}
}

// Pokemon Powers
function pokemonPowers(){
	// Blastoise
	if ((inPlay7 == Blastoise && $('.playerStatus img').length < 1) || inPlay8 == Blastoise || inPlay9 == Blastoise || inPlay10 == Blastoise || inPlay11 == Blastoise || inPlay12 == Blastoise){
		alert("You may now attach as many Water Energy cards to your Water Pokemon as you wish!");
		rainDance();
		function rainDance(){
			// Reset onClick event
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
					$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
			$('.card').attr('onClick', 'largeCard(this)');

			alert("Choose an energy card to attach");
			$('.exit3').trigger('click');
			$('.handButton').trigger('click');
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="attachEnergy2(playerInHand[' + i + '])" />');
			}
		}

		function attachEnergy2(card){
			card = card;
			switch (card.Stage) {
				case 'energy':
					if (card != "Water_Energy"){
						alert("You must choose a Water Energy for this power!");
					} else {
						index = playerInHand.indexOf(card);
						// Remove the card from the hand
						energyInPlay1 = {Card: playerInHand[index].Card, Stage: playerInHand[index].Stage, Type: playerInHand[index].Type, HP: playerInHand[index].HP, PokePower: playerInHand[index].PokePower, Attack1: playerInHand[index].Attack1, Attack2: playerInHand[index].Attack2, Weak: playerInHand[index].Weak, Resist: playerInHand[index].Resist, Retreat: playerInHand[index].Retreat};
						playerInHand.splice(index, 1);
						alert("Choose a Pokemon to attach the Energy card to.");
							activeEnergyCount = $('#player .active .energy1').length + $('#player .active .energy2').length + $('#player .active .energy3').length + $('#player .active .energy4').length + $('#player .active .energy5').length + $('#player .active .energy6').length + $('#player .active .energy7').length + $('#player .active .energy8').length;
							bench1EnergyCount = $('#player .benchPoke:first .energy1').length + $('#player .benchPoke:first .energy2').length + $('#player .benchPoke:first .energy3').length + $('#player .benchPoke:first .energy4').length + $('#player .benchPoke:first .energy5').length + $('#player .benchPoke:first .energy6').length + $('#player .benchPoke:first .energy7').length + $('#player .benchPoke:first .energy8').length;
							bench2EnergyCount = $('#player .benchPoke:nth-child(2) .energy1').length + $('#player .benchPoke:nth-child(2) .energy2').length + $('#player .benchPoke:nth-child(2) .energy3').length + $('#player .benchPoke:nth-child(2) .energy4').length + $('#player .benchPoke:nth-child(2) .energy5').length + $('#player .benchPoke:nth-child(2) .energy6').length + $('#player .benchPoke:nth-child(2) .energy7').length + $('#player .benchPoke:nth-child(2) .energy8').length;
							bench3EnergyCount = $('#player .benchPoke:nth-child(3) .energy1').length + $('#player .benchPoke:nth-child(3) .energy2').length + $('#player .benchPoke:nth-child(3) .energy3').length + $('#player .benchPoke:nth-child(3) .energy4').length + $('#player .benchPoke:nth-child(3) .energy5').length + $('#player .benchPoke:nth-child(3) .energy6').length + $('#player .benchPoke:nth-child(3) .energy7').length + $('#player .benchPoke:nth-child(3) .energy8').length;
							bench4EnergyCount = $('#player .benchPoke:nth-child(2) .energy1').length + $('#player .benchPoke:nth-child(2) .energy2').length + $('#player .benchPoke:nth-child(2) .energy3').length + $('#player .benchPoke:nth-child(2) .energy4').length + $('#player .benchPoke:nth-child(2) .energy5').length + $('#player .benchPoke:nth-child(2) .energy6').length + $('#player .benchPoke:nth-child(2) .energy7').length + $('#player .benchPoke:nth-child(2) .energy8').length;
							bench5EnergyCount = $('#player .benchPoke:last .energy1').length + $('#player .benchPoke:last .energy2').length + $('#player .benchPoke:last .energy3').length + $('#player .benchPoke:last .energy4').length + $('#player .benchPoke:last .energy5').length + $('#player .benchPoke:last .energy6').length + $('#player .benchPoke:last .energy7').length + $('#player .benchPoke:last .energy8').length;
						// Automatically exit hand
						$('#exit, #exit2, .exit3').trigger('click');
						$('#player .active .card').attr('onClick', 'attachEnergy3(inPlay7, energyCard)');	
						$('#player .benchPoke:first .card').attr('onClick', 'attachEnergy3(inPlay8, energyCard)');
						$('#player .benchPoke:nth-child(2) .card').attr('onClick', 'attachEnergy3(inPlay9, energyCard)');
						$('#player .benchPoke:nth-child(3) .card').attr('onClick', 'attachEnergy3(inPlay10, energyCard)');
						$('#player .benchPoke:nth-child(4) .card').attr('onClick', 'attachEnergy3(inPlay11, energyCard)');
						$('#player .benchPoke:last .card').attr('onClick', 'attachEnergy3(inPlay12, energyCard)');
						energyCard = card;
						return energyCard;
						break;
					}
				default:
					alert("That is not an energy card! Please choose an energy card next time.");
					$('#exit2').trigger('click');
					$('#popup').trigger('click');
			}
		}

		function attachEnergy3(card, energyCard) {
			attachedEnergy = window.attachedEnergy;
			card = card;
			energyCard = energyCard;
			index=playerInHand.indexOf(energyCard);
			playerInHand.splice(index,1);
			if (card == inPlay7){
				if (activeEnergyCount < 8){
					$('#player .active').append('<div class="energy' + (activeEnergyCount+1) + '"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (activeEnergyCount+1) + '" /></div>');
						if (!playerActiveAttachedEnergy) {
							playerActiveAttachedEnergy = [energyCard];
							return playerActiveAttachedEnergy;
						} else {
							playerActiveAttachedEnergy.splice(0, 0, energyCard);
							return playerActiveAttachedEnergy;
						}
				} else {
					alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
				}		
			} else if (typeof inPlay8 !== "undefined" && card == inPlay8){
				if (bench1EnergyCount < 8){
					$('#player .benchPoke:first').append('<div class="energy1"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench1EnergyCount + 1) + '" /></div>');
					if (!playerBench1AttachedEnergy) {
							playerBench1AttachedEnergy = [energyCard];
							return playerBench1AttachedEnergy;
						} else {
							playerBench1AttachedEnergy.splice(0, 0, energyCard);
							return playerBench1AttachedEnergy;
						}
					$('.card').attr('onClick', 'largeCard(this)');
					return playerBench1AttachedEnergy;
				} else {
					alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
				}
			} else if (typeof inPlay9 !== "undefined" && card == inPlay9){
				if (bench2EnergyCount < 8){
					$('#player .benchPoke:nth-child(2)').append('<div class="energy1"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench2EnergyCount + 1) + '" /></div>');
					if (!playerBench2AttachedEnergy) {
							playerBench2AttachedEnergy = [energyCard];
							return playerBench2AttachedEnergy;
						} else {
							playerBench2AttachedEnergy.splice(0, 0, energyCard);
							return playerBench2AttachedEnergy;
						}
					$('.card').attr('onClick', 'largeCard(this)');
					return playerBench2AttachedEnergy;
				} else {
					alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
				}
			} else if (typeof inPlay10 !== "undefined" && card == inPlay10){
				if (bench3EnergyCount < 8){
					$('#player .benchPoke:nth-child(3)').append('<div class="energy1"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench3EnergyCount + 1) + '" /></div>');
					if (!playerBench3AttachedEnergy) {
							playerBench3AttachedEnergy = [energyCard];
							return playerBench3AttachedEnergy;
						} else {
							playerBench3AttachedEnergy.splice(0, 0, energyCard);
							return playerBench3AttachedEnergy;
						}
					$('.card').attr('onClick', 'largeCard(this)');
					return playerBench3AttachedEnergy;
				} else {
					alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
				}
			} else if (typeof inPlay11 !== "undefined" && card == inPlay11){
				if (bench4EnergyCount < 8){
					$('#player .benchPoke:nth-child(4)').append('<div class="energy1"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench4EnergyCount + 1) + '" /></div>');
					if (!playerBench4AttachedEnergy) {
							playerBench4AttachedEnergy = [energyCard];
							return playerBench4AttachedEnergy;
						} else {
							playerBench4AttachedEnergy.splice(0, 0, energyCard);
							return playerBench4AttachedEnergy;
						}
					$('.card').attr('onClick', 'largeCard(this)');
					return playerBench4AttachedEnergy;
				} else {
					alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
				}
			} else if (typeof inPlay12 !== "undefined" && card == inPlay12){
				if (bench5EnergyCount < 8){
					$('#player .benchPoke:last').append('<div class="energy1"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench5EnergyCount + 1) + '" /></div>');
					if (!playerBench5AttachedEnergy) {
							playerBench5AttachedEnergy = [energyCard];
							return playerBench5AttachedEnergy;
						} else {
							playerBench5AttachedEnergy.splice(0, 0, energyCard);
							return playerBench5AttachedEnergy;
						}
					$('.card').attr('onClick', 'largeCard(this)');
					return playerBench5AttachedEnergy;
				} else {
					alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
				}
			} else {
				alert("That is not one of your Pokemon. Choose one of your Pokemon.");
			}
			rainDance();
		}
	}
	// Charizard
	if ((inPlay7 == Charizard && $('.playerStatus img').length < 1) || inPlay8 == Charizard || inPlay9 == Charizard || inPlay10 == Charizard || inPlay11 == Charizard || inPlay12 == Charizard){
		alert("Charizard's Energy will become Fire Energy!");
		energyBurn();
		function energyBurn(){
			if(inPlay7 == Charizard){
				newCount=playerActiveAttachedEnergy.length;
				playerActiveAttachedEnergy=[];
				for(i=0;i<newCount;i++){
					playerActiveAttachedEnergy[i]=Fire_Energy;
				}
			} else if(inPlay8 == Charizard){
				newCount=playerActiveAttachedEnergy.length;
				playerActiveAttachedEnergy=[];
				for(i=0;i<newCount;i++){
					playerActiveAttachedEnergy[i]=Fire_Energy;
				}
			}else if(inPlay9 == Charizard){
				newCount=playerActiveAttachedEnergy.length;
				playerActiveAttachedEnergy=[];
				for(i=0;i<newCount;i++){
					playerActiveAttachedEnergy[i]=Fire_Energy;
				}
			}else if(inPlay10 == Charizard){
				newCount=playerActiveAttachedEnergy.length;
				playerActiveAttachedEnergy=[];
				for(i=0;i<newCount;i++){
					playerActiveAttachedEnergy[i]=Fire_Energy;
				}
			}else if(inPlay11 == Charizard){
				newCount=playerActiveAttachedEnergy.length;
				playerActiveAttachedEnergy=[];
				for(i=0;i<newCount;i++){
					playerActiveAttachedEnergy[i]=Fire_Energy;
				}
			} else if(inPlay12 == Charizard){
				newCount=playerActiveAttachedEnergy.length;
				playerActiveAttachedEnergy=[];
				for(i=0;i<newCount;i++){
					playerActiveAttachedEnergy[i]=Fire_Energy;
				}
			}
		}
	}
	// Venusaur
	if ((inPlay7 == Venusaur && $('.playerStatus img').length < 1) || inPlay8 == Venusaur || inPlay9 == Venusaur || inPlay10 == Venusaur || inPlay11 == Venusaur || inPlay12 == Venusaur){
		alert("Venusaur can now let you transfer Grass Energy!");
		energyTrans();
		function energyTrans(){
			$('#light5 #buttonAlign').append('<a onClick="energyTrans2()" class="buttons3">EnergyTrans Power</a>');
			document.getElementById("light5").style.display="block";
			document.getElementById("fade").style.display="block";
		}
		function energyTrans2(){
			alert("Please choose a Pokemon to transfer energy from.");
			$('#player .active .card').attr('onClick', 'energyTrans3('+this+')');
		}
		function energyTrans3(card){
			card=card;
			$('#player .active .card').attr('onClick', 'energyTrans4('+this+')');
			switch(card) {
				case inPlay7:
					if(playerActiveAttachedEnergy.indexOf(Grass_Energy) != -1){
						tempTrans=Grass_Energy;
						index=playerActiveAttachedEnergy.indexOf(Grass_Energy);
						playerActiveAttachedEnergy.splice(index, 1);
						document.remove(card);
					} else {
						alert("That Pokemon does not have a Grass Energy attached to it.")
					}
					break;
				case inPlay8:
					if(playerActiveAttachedEnergy.indexOf(Grass_Energy) != -1){
						tempTrans=Grass_Energy;
						index=playerActiveAttachedEnergy.indexOf(Grass_Energy);
						playerActiveAttachedEnergy.splice(index, 1);
						document.remove(card);
					} else {
						alert("That Pokemon does not have a Grass Energy attached to it.")
					}
					break;
				case inPlay9:
					if(playerActiveAttachedEnergy.indexOf(Grass_Energy) != -1){
						tempTrans=Grass_Energy;
						index=playerActiveAttachedEnergy.indexOf(Grass_Energy);
						playerActiveAttachedEnergy.splice(index, 1);
						document.remove(card);
					} else {
						alert("That Pokemon does not have a Grass Energy attached to it.")
					}
					break;
				case inPlay10:
					if(playerActiveAttachedEnergy.indexOf(Grass_Energy) != -1){
						tempTrans=Grass_Energy;
						index=playerActiveAttachedEnergy.indexOf(Grass_Energy);
						playerActiveAttachedEnergy.splice(index, 1);
						document.remove(card);
					} else {
						alert("That Pokemon does not have a Grass Energy attached to it.")
					}
					break;
				case inPlay11:
					if(playerActiveAttachedEnergy.indexOf(Grass_Energy) != -1){
						tempTrans=Grass_Energy;
						index=playerActiveAttachedEnergy.indexOf(Grass_Energy);
						playerActiveAttachedEnergy.splice(index, 1);
						document.remove(card);
					} else {
						alert("That Pokemon does not have a Grass Energy attached to it.")
					}
					break;
				case inPlay12:
					if(playerActiveAttachedEnergy.indexOf(Grass_Energy) != -1){
						tempTrans=Grass_Energy;
						index=playerActiveAttachedEnergy.indexOf(Grass_Energy);
						playerActiveAttachedEnergy.splice(index, 1);
						document.remove(card);
					} else {
						alert("That Pokemon does not have a Grass Energy attached to it.")
					}
					break;
				defaut:
					alert("That is not one of your Pokemon!");
			}
		}
		function energyTrans4(card){
			if(card==inPlay7){
				spot=playerActiveAttachedEnergy.length+1;
				playerActiveAttachedEnergy.splice(0,0,tempTrans);
				$('#player .active').append('<div class="energy'+spot+'"><img src="Cards/Base_Set/' + tempTrans.Card + '" class="energy'+spot+'" /></div>');
			} else if(card==inPlay8){
				spot=playerBench1AttachedEnergy.length+1;
				playerBench1AttachedEnergy.splice(0,0,tempTrans);
				$('#player .benchPoke:first').append('<div class="energy'+spot+'"><img src="Cards/Base_Set/' + tempTrans.Card + '" class="energy'+spot+'" /></div>');
			} else if(card==inPlay9){
				spot=playerBench2AttachedEnergy.length+1;
				playerBench2AttachedEnergy.splice(0,0,tempTrans);
				$('#player .benchPoke:nth-child(2)').append('<div class="energy'+spot+'"><img src="Cards/Base_Set/' + tempTrans.Card + '" class="energy'+spot+'" /></div>');
			} else if(card==inPlay10){
				spot=playerBench3AttachedEnergy.length+1;
				playerBench3AttachedEnergy.splice(0,0,tempTrans);
				$('#player .benchPoke:nth-child(3)').append('<div class="energy'+spot+'"><img src="Cards/Base_Set/' + tempTrans.Card + '" class="energy'+spot+'" /></div>');
			} else if(card==inPlay11){
				spot=playerBench4AttachedEnergy.length+1;
				playerBench4AttachedEnergy.splice(0,0,tempTrans);
				$('#player .benchPoke:nth-child(4)').append('<div class="energy'+spot+'"><img src="Cards/Base_Set/' + tempTrans.Card + '" class="energy'+spot+'" /></div>');
			} else if(card==inPlay12){
				spot=playerBench5AttachedEnergy.length+1;
				playerBench5AttachedEnergy.splice(0,0,tempTrans);
				$('#player .benchPoke:last').append('<div class="energy'+spot+'"><img src="Cards/Base_Set/' + tempTrans.Card + '" class="energy'+spot+'" /></div>');
			}
		}
	} else {
		alert("You don't have any usable Pokemon Powers.");
	}
}