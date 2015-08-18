/* More Pokemon attacks Gastly to Nidoran Male */

function Sleeping_Gas(){
if (turn == "Player"){
	if (inPlay7.Card == "Gastly.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("P") != -1){
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
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Psychic_Energy"){
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

function Destiny_Bond(){
if (turn == "Player"){
	if (inPlay7.Card == "Gastly.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("P") != -1){
		alert("Discard a Psychic Energy to use this attack.");
		discardEnergy(Psychic_Energy);
		// set knockout when Gastly is knocked out.
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= "Psychic_Energy"){
		alert("Discard a Psychic Energy to use this attack.");
		enemyDiscardEnergy(Psychic_Energy);
		// set knockout when Gastly is knocked out.
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= "Fire_Energy"){
		playerActiveDamage = playerActiveDamage + 20;
		playerWeakness(Growlithe.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Water_Energy" * 3)){
		playerActiveDamage = playerActiveDamage + 50;
		playerWeakness(Gyarados.Type, 50);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
					$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
				}
			} else {
			alert("You do not have the 4 Water energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Water_Energy" * 4)){
		playerActiveDamage = playerActiveDamage + 40;
		playerWeakness(Gyarados.Type, 40);
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

function Hypnosis(){
if (turn == "Player"){
	if (inPlay7.Card == "Haunter.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("P") != -1){
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
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Psychic_Energy"){
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Psychic_Energy" * 2)){
		if ($('#player #sleep').length > 0){
		playerActiveDamage = playerActiveDamage + 50;
		playerWeakness(Haunter.Type, 50);
		} else {
			alert("Player Pokemon is not asleep. Enemy cannot use this attack!");
		}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Fighting_Energy"){
		playerActiveDamage = playerActiveDamage + 20;
		playerWeakness(Hitmonchan.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Fighting_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 40;
		playerWeakness(Hitmonchan.Type, 40);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= "Grass_Energy"){
		playerActiveDamage = playerActiveDamage + 30;
		playerWeakness(Ivysaur.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Poisonpowder(){
if (turn == "Player"){
	if (inPlay7.Card == "Ivysaur.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Flamethrower);
			if (window.count >= 3) {
				enemyActiveDamage = enemyActiveDamage + 20;
				enemyWeakness(Ivysaur.Type, 20);
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
		playerActiveDamage = playerActiveDamage + 20;
		playerWeakness(Ivysaur.Type, 20);
		alert("Player Pokemon is Poisoned!");
		$('.playerStatus').append('<img src="poisonCounter.gif" id="poison" />');
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Psychic_Energy"){
		playerActiveDamage = 10;
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
			playerActiveDamage = playerActiveDamage * 0;
		} else if (flip1 == "tails" && flip2 == "heads" || flip1 == "heads" && flip2 == "tails"){
			playerActiveDamage = playerActiveDamage * 1;
		} else {
			playerActiveDamage = playerActiveDamage * 2;
		}
		playerWeakness(Jynx.Type, playerActiveDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Psychic_Energy" * 2)){
		playerIncomingDamage = 20 + playerActiveDamage;
		playerWeakness(Jynx.Type, playerIncomingDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Psychic_Energy" * 2)){
		alert("Discard a Psychic Energy to use this attack!");
		discardEnergy(Psychic_Energy);
		enemyActiveDamage = 0;
		alert("Enemy Kadabra has healed all damage!");
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Psychic_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 50;
		playerWeakness(Kadabra.Type, 50);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
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
	betweenTurns("Enemy");
}
}

function Poisonpowder_Kakuna(){
if (turn == "Player"){
	if (inPlay7.Card == "Kakuna.jpg" && playerActiveEnergy.length >= 2){
		compareEnergy(playerActiveEnergy, Poisonpowder_Kakuna);
		if (window.count >= 2) {
			enemyActiveDamage = enemyActiveDamage + 20;
			enemyWeakness(Kakuna.Type, 20);
			alert("A coin will be flipped for poison!");
			coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon is not Poisoned.");
				} else {
					alert("Coin flip was heads! Enemy Pokemon is Poisoned!");
					$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
				}
		} else {
			alert("You do not have the 2 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Grass_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 20;
		playerWeakness(Kakuna.Type, 20);
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
					$('.enemyStatus').append('<img src="confusionCounter.gif" id="confusion" />');
				} else {
					alert("Coin flip was heads! Enemy Pokemon is Poisoned!");
					$('.enemyStatus').append('<img src="poisonCounter.gif" id="poison" />');
				}
		} else {
			alert("You do not have the 2 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Grass_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 10;
		playerWeakness(Kakuna.Type, 10);
		alert("A coin will be flipped for status!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Player Pokemon is Confused.");
		$('.playerStatus').append('<img src="confusionCounter.gif" id="confusion" />');
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Fighting_Energy" * 3)){
		playerActiveDamage = playerActiveDamage + 60;
		playerWeakness(Machamp.Type, 60);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Fighting_Energy" * 2)){
		attackDamage = 50 - enemyActiveDamage;
		if (attackDamage < 0){
			attackDamage = 0;
		}
		playerActiveDamage = playerActiveDamage + attackDamage;
		playerWeakness(Machoke.Type, attackDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Fighting_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 60;
		playerWeakness(Machoke.Type, 60);
		enemyWeakness(Machoke.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Fighting_Energy"){
		playerActiveDamage = playerActiveDamage + 20;
		playerWeakness(Machop.Type, 20);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1){
		playerActiveDamage = playerActiveDamage + 10;
		playerWeakness(Magikarp.Type, 10);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Water_Energy"){
		attackDamage = 10 * enemyActiveDamage;
		playerActiveDamage = playerActiveDamage + attackDamage;
		playerWeakness(Magikarp.Type, attackDamage);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Fire_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 30;
		playerWeakness(Magmar.Type, 30);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
		$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && enemyActiveAttachedEnergy >= "Lightning_Energy"){
		playerActiveDamage = playerActiveDamage + 10;
		playerWeakness(Magnemite.Type, 10);
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= "Lightning_Energy"){
		playerActiveDamage = playerActiveDamage + 40;
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
	betweenTurns("Enemy");
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
					$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
				}
		} else {
			alert("You do not have the 2 Lightning energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Lightning_Energy" * 2)){
		playerActiveDamage = playerActiveDamage + 30;
		playerWeakness(Magneton.Type, 30);
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 4 && enemyActiveAttachedEnergy >= ("Lightning_Energy" * 2)){
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
	betweenTurns("Enemy");
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
				$('.enemyStatus').append('<img src="paralyzeCounter.gif" id="paralyze" />');
			}
		} else {
			alert("You do not have the 2 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= ("Grass_Energy" * 2)){
		playerWeakness(Metapod.Type, 20);
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

function Psychic(){
if (turn == "Player"){
	if (inPlay7.Card == "Mewtwo.jpg" && playerActiveEnergy.length >= 2 && playerActiveEnergy.indexOf("P") != -1){
		attackBonus = enemyActiveAttachedEnergy.length * 10;
		enemyActiveDamage = enemyActiveDamage + 10 + attackBonus;
		enemyWeakness(Mewtwo.Type, (10 + attackBonus));
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && enemyActiveAttachedEnergy >= "Psychic_Energy"){
		attackBonus = playerplayerActiveEnergy.length * 10;
		playerActiveDamage = playerActiveDamage + 10 + attackBonus;
		playerWeakness(Mewtwo.Type, (10 + attackBonus));
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 2 && playerActiveEnergy >= ("Psychic_Energy" * 2)){
		alert("Discard a Psychic energy to use this attack.");
		discardEnergy(Psychic_Energy);
		noDamage(inPlay7, 1);
		noStatus(player);
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
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
		playerActiveDamage = playerActiveDamage + 10;
		enemyWeakness(Nidoking.Type, 30);
	} else {
		alert("Coin flip was heads! 10 extra damage!");
		enemyWeakness(Nidoking.Type, 40);
	}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && playerActiveEnergy >= "Grass_Energy"){
		playerActiveDamage = playerActiveDamage + 30;
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
	betweenTurns("Enemy");
}
}

function Toxic(){
if (turn == "Player"){
	if (inPlay7.Card == "Nidoking.jpg" && playerActiveEnergy.length >= 3){
		compareEnergy(playerActiveEnergy, Toxic);
		if (window.count >= 3) {
			enemyWeakness(Nidoking.Type, 20);
			alert("Enemy Pokemon is Toxic Poisoned!");
			$('.enemyStatus').append('<img src="poisonCounter.gif" id="toxic" />');
		} else {
			alert("You do not have the 3 Grass energy needed for this attack!");
		}
	} else {
		alert("You do not have the energy needed to use this attack!");
	}
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 3 && enemyActiveAttachedEnergy >= ("Grass_Energy" * 3)){
		playerActiveDamage = playerActiveDamage + 20;
		playerWeakness(Nidoking.Type, 20);
		alert("Player Pokemon is Toxic Poisoned!");
		$('.playerStatus').append('<img src="poisonCounter.gif" id="toxic" />');
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}

function Horn_Hazard(){
if (turn == "Player"){
	if (inPlay7.Card == "NidoranM.jpg" && playerActiveEnergy.length >= 1 && playerActiveEnergy.indexOf("G") != -1){
		enemyActiveDamage = enemyActiveDamage + 30;
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
	betweenTurns("Player");
} else {
	if(enemyActiveAttachedEnergy.length >= 1 && playerActiveEnergy >= "Grass_Energy"){
		alert("A coin will be flipped for damage.");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! No damage done!");
		enemyActiveDamage = enemyActiveDamage + 10;
		playerWeakness(NidoranM.Type, 0);
	} else {
		alert("Coin flip was heads! 30 damage!");
		playerWeakness(NidoranM.Type, 30);
	}
	} else {
		alert("Enemy does not have the energy needed to use this attack!");
	}
	betweenTurns("Enemy");
}
}
