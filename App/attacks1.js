/* Pokemon Attacks Abra to Farfecth'd */

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
				$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
			}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && window.enemyActiveEnergy.indexOf("P") != -1){
		playerWeakness(Abra.Type, 10);
		alert("A coin will be flipped for paralysis!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
			if (coinFlip <= 5){
				alert("Coin flip was tails! Enemy Pokemon is not Paralyzed.");
			} else {
				alert("Coin flip was heads! Enemy Pokemon is Paralyzed!");
				$('.playerStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
			}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
				$('.enemyStatus').append('<img src="confusionCounter.gif" id="confusion" />');
			}
		} else {
			alert("You do not have the 3 Psychic energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy.length >= 3){
		compareEnergy(enemyActiveEnergy, Confuse_Ray);
		if (window.count >= 3) {
			playerWeakness(Alakazam.Type, 30);
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
		} else {
			alert("Computer does not have the 3 Psychic energy needed for this attack!");
		}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3){
		compareEnergy(enemyActiveEnergy, Flamethrower);
			if (window.count >= 2) {
				playerWeakness(Arcanine.Type, 50);
				alert("Discard a Fire Energy to use this attack!");
				enemyDiscardEnergy(Fire_Energy);
			} else {
				alert("Computer does not have the 2 Fire energy needed for this attack!");
			}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4){
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
	betweenTurns("Enemy");
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
	betweenTurns("Player");
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
	betweenTurns("Enemy");
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
			$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
		}
	} else {
			alert("You do not have the 3 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Grass_Energy" * 3)){
		playerWeakness(Beedrill.Type, 40);
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

function Hydro_Pump(){
if (turn == "Player"){
	if (inPlay7.Card == "Blastoise.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Hydro_Pump);
		if (window.count >= 3) {
				if (playerActiveEnergy >= ("Water_Energy" * 4) && playerActiveEnergy < ("Water_Energy" * 5)){
					enemyActiveDamage = 50;
				} else if (playerActiveEnergy >= ("Water_Energy" * 5)){
					enemyActiveDamage = 60;
				} else {			
				enemyActiveDamage = 40;
				}
				enemyWeakness(Blastoise.Type, enemyActiveDamage);
		} else {
			alert("You do not have the 3 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Water_Energy" * 3)){
		if (enemyActiveAttachedEnergy >= ("Water_Energy" * 4) && enemyActiveAttachedEnergy < ("Water_Energy" * 5)){
			playerActiveDamage = 50;
		} else if (enemyActiveAttachedEnergy >= ("Water_Energy" * 5)){
			playerActiveDamage = 60;
		} else {			
		playerActiveDamage = 40;
		}
		playerWeakness(Blastoise.Type, playerActiveDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Grass_Energy" * 2)){
		playerWeakness(Bulbasaur.Type, 20);
		enemyActiveDamage = enemyActiveDamage - 10;
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
		$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Grass_Energy"){
		playerWeakness(Caterpie.Type, 10);
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
	betweenTurns("Player");
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
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4){
		playerWeakness(Chansey.Type, 80);
		enemyWeakness(Chansey.Type, 80);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Fire_Energy" * 4)){
		playerActiveDamage = playerActiveDamage + 100;
		playerWeakness(Charizard.Type, 100);
		alert("Discard 2 Energy to use this attack!");
		enemyDiscardEnergy(Fire_Energy);
		enemyDiscardEnergy(Fire_Energy);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Scratch(){
if (turn == "Player"){
	if (inPlay7.Card == "Charmander.jpg" && playerActiveEnergy.length >= 1){
		enemyWeakness(Charmander.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerWeakness(Charmander.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= "Fire_Energy"){
		playerWeakness(Charmander.Type, 30);
		alert("Discard a Fire Energy to use this attack!");
		enemyDiscardEnergy(Fire_Energy);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Slash(){
if (turn == "Player"){
	if (inPlay7.Card == "Charmeleon.jpg" && playerActiveEnergy.length >= 3){
		enemyWeakness(Charmeleon.Type, 30);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3){
		playerWeakness(Charmeleon.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
		$('.enemyStatus').append('<img src="sleepCounter.gif" id="sleep" />');
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		alert("A coin will be flipped for sleep!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is not Asleep.");
	} else {
		alert("Coin flip was heads! Player Pokemon is Asleep!");
		$('.playerStatus').append('<img src="sleepCounter.gif" id="sleep" />');
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
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
	betweenTurns("Enemy");
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
			enemyActiveDamage = enemyActiveDamage + 50;
			enemyWeakness(Dewgong.Type, 50);
		} else {
			alert("You do not have the 2 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Water_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 50;
		playerWeakness(Dewgong.Type, 50);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
		$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Water_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 30;
		playerWeakness(Dewgong.Type, 30);
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

function Dig(){
if (turn == "Player"){
	if (inPlay7.Card == "Diglett.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("F") != -1){
		enemyActiveDamage = enemyActiveDamage + 10;
		enemyWeakness(Diglett.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Fighting_Energy"){
		playerActiveDamage = playerActiveDamage + 10;
		playerWeakness(Diglett.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Fighting_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 30;
		playerWeakness(Diglett.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
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
	betweenTurns("Enemy");
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
	betweenTurns("Player");
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
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4){
		playerWeakness(Dragonair.Type, 20);
		playTrainer2(Energy_Removal);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Pound(){
if (turn == "Player"){
	if (inPlay7.Card == "Dratini.jpg" && playerActiveEnergy.length >= 1){
		enemyWeakness(Dratini.Type, 10);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerWeakness(Dratini.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
				$('.enemyStatus').append('<img src="confusionCounter.gif" id="confusion" />');
			}
		} else {
			alert("You do not have the 2 Psychic energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Psychic_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 10;
		playerWeakness(Drowzee.Type, 10);
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Fighting_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 40;
		playerWeakness(Dugtrio.Type, 40);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Fighting_Energy" * 4)){
		playerActiveDamage = playerActiveDamage + 70;
		playerWeakness(Dugtrio.Type, 70);
		enemyBench1Damage = enemyBench1Damage + 10;
		enemyBench2Damage = enemyBench2Damage + 10;
		enemyBench3Damage = enemyBench3Damage + 10;
		enemyBench4Damage = enemyBench4Damage + 10;
		enemyBench5Damage = enemyBench5Damage + 10;
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
		$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Lightning_Energy"){
		playerActiveDamage = playerActiveDamage + 10;
		playerWeakness(Electabuzz.Type, 10);
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

function Thunderpunch(){
if (turn == "Player"){
	if (inPlay7.Card == "Electabuzz.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("L") != -1){
		enemyActiveDamage = enemyActiveDamage + 30;
		alert("A coin will be flipped for extra damage!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! 10 damage to Electabuzz.");
		playerActiveDamage = playerActiveDamage + 10;
		enemyWeakness(Electabuzz.Type, 30);
	} else {
		alert("Coin flip was heads! 10 extra damage!");
		enemyWeakness(Electabuzz.Type, 40);
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && playerActiveEnergy >= "Lightning_Energy"){
		playerActiveDamage = playerActiveDamage + 30;
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
	betweenTurns("Enemy");
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
				playerActiveDamage = playerActiveDamage + 10;
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Lightning_Energy" * 3)){
		playerActiveDamage = playerActiveDamage + 50;
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
	betweenTurns("Enemy");
}
}

function Leek_Slap(){
if (leekSlapCounter === 0){
if (turn == "Player"){
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
	betweenTurns("Player");
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
	betweenTurns("Enemy");
}
}

function Pot_Smash(){
if (turn == "Player"){
	if (inPlay7.Card == "Farfetchd.jpg" && playerActiveEnergy.length >= 3){
		enemyWeakness(Farfetchd.Type, 30);
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerActiveDamage = playerActiveDamage + 30;
		playerWeakness(Farfetchd.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}
