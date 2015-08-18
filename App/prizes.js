/* Functions for the Poke Game */

/* Mostly Check attacks and draw prizes */
function reset(playerInHand) {
	playerInHand = window.playerInHand;
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
		$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(playerInHand[' + i + '])" />');
	}
	$('.card').attr('onClick', 'largeCard(this)');
}


setInterval(
function convertEnergy(playerActiveAttachedEnergy, enemyActiveAttachedEnergy) {
	playerActiveAttachedEnergy = window.playerActiveAttachedEnergy;
	window.playerActiveEnergy = [];
	for (i=0; i < playerActiveAttachedEnergy.length; i++) {
		switch (playerActiveAttachedEnergy[i].Type){
			case "F": {
				window.playerActiveEnergy.splice(0, 0,"F");
				break;
			}
			case "R": {
				window.playerActiveEnergy.splice(0, 0, "R");
				break;
			}
			case "G": {
				window.playerActiveEnergy.splice(0, 0, "G");
				break;
			}
			case "L": {
				window.playerActiveEnergy.splice(0, 0, "L");
				break;
			}
			case "P": {
				window.playerActiveEnergy.splice(0, 0, "P");
				break;
			}
			case "W": {
				window.playerActiveEnergy.splice(0, 0, "W");
				break;
			}
			case "CC": {
				window.playerActiveEnergy.splice(0, 0, "C");				
				window.playerActiveEnergy.splice(0, 0, "C");
				break;
			}
		}
	}
	return window.playerActiveEnergy;
}
, 5000);

function compareEnergy(energy, attack) {
	// Try this one to run through array
	energy = playerActiveEnergy;
	count = 0;
	switch (attack){
		case (Confuse_Ray):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("P") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Flamethrower):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("R") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Take_Down):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("R") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Poison_Sting):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("G") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Hydro_Pump):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("W") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Leech_Seed):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("G") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Fire_Spin):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("R") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Aurora_Beam):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("W") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Ice_Beam):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("W") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Mud_Slap):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("F") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Confuse_Ray_Drowzee):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("P") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Slash_Dugtrio):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("F") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Earthquake):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("F") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Electric_Shock):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("L") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Dragon_Rage):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("W") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Bubblebeam):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("W") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Dream_Eater):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("P") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Special_Punch):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("F") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Poisonpowder):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("G") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Meditate):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("P") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Recover):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("P") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Super_Psy):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("P") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Poisonpowder_Kakuna):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("G") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Foul_Gas):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("G") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Seismic_Toss):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("F") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Karate_Chop):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("F") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Submission):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("F") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Fire_Punch):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("R") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Thunder_Wave_Magneton):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("L") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Selfdestruct_Magneton):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("L") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Stun_Spore):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("G") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Barrier):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("P") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Toxic):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("G") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Horn_Drill):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("G") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Fire_Blast):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("R") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Harden):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("F") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Amnesia):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("W") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Water_Gun_Poliwrath):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("W") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Whirlpool):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("W") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Flame_Tail):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("R") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Thunder):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("L") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Recover_Starmie):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("W") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Poisonpowder_Tangela):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("G") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Solarbeam):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("G") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Confuse_Ray_Vulpix):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("R") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Thunder_Zapdos):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("L") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		case (Thunderbolt):
			for (i=0; i < playerActiveEnergy.length; i++) {
				if (playerActiveEnergy[i].indexOf("L") != -1){
					count = count + 1;
				}
			}
			return count;
			break;
		default:
			alert ("Energy types do not match for this attack!");
	}
}

function betweenTurns(turn) {
	//paralyze goes away here, poison/toxic/burn happens here, sleep happens here, transition from player
	// to computer and vice versa
	if (turn == "Player"){
		//coming from player turn
		if ($('#player .status').length > 0) {
			if ($('#player #paralyze')){
				alert("Your Pokemon is no longer paralyzed.");
				$('#player #paralyze').remove();
			} else if ($('#player #poison')){
				alert("Your Pokemon takes 10 damage from Poison!");
				playerActiveDamage = playerActiveDamage + 10;
			} else if ($('#player #sleep')){
				alert("Flip a coin to see if you Pokemon wakes up.");
				coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Your Pokemon is still Asleep.");
				} else {
					alert("Coin flip was heads! Your Pokemon is Awake!");
					$('#player #sleep').remove();
				}
			} else if ($('#player #burn')){
				alert("Flip a coin to see if your Pokemon takes damage from Burn.");
				if (coinFlip <= 5){
					alert("Coin flip was tails! Your Pokemon takes 20 damage from Burn!");
					playerActiveDamage = playerActiveDamage + 20;
				} else {
					alert("Coin flip was heads! Your Pokemon does not take damage from Burn!");
				}
			} else if ($('#player #toxic')){
				alert("Your Pokemon takes 20 damage from Toxic!");
				playerActiveDamage = playerActiveDamage + 20;
			}
		}
		if ($('#enemy .status').length > 0) {
			if ($('#enemy #paralyze')){
				alert("Enemy Pokemon is no longer paralyzed.");
				$('#enemy #paralyze').remove();
			} else if ($('#enemy #poison')){
				alert("Enemy Pokemon takes 10 damage from Poison!");
				enemyActiveDamage = enemyActiveDamage + 10;
			} else if ($('#enemy #sleep')){
				alert("Coin flip to see if enemy Pokemon wakes up.");
				coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon is still Asleep.");
				} else {
					alert("Coin flip was heads! Enemy Pokemon is Awake!");
					$('#enemy #sleep').remove();
				}
			} else if ($('#enemy #burn')){
				alert("Coin flip to see if Enemy Pokemon takes damage from Burn.");
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon takes 20 damage from Burn!");
					enemyActiveDamage = enemyActiveDamage + 20;
				} else {
					alert("Coin flip was heads! Enemy Pokemon does not take damage from Burn!");
				}
			} else if ($('#enemy #toxic')){
				alert("Enemy Pokemon takes 20 damage from Toxic!");
				playerActiveDamage = playerActiveDamage + 20;
			}
		}
		previousTotal = $('#player .energy1 img').length + $('#player .energy2 img').length + $('#player .energy3 img').length + $('#player .energy4 img').length + $('#player .energy5 img').length + $('#player .energy6 img').length + $('#player .energy7 img').length + $('#player .energy8 img').length;
		enemyPreviousTotal = $('#enemy .energy1 img').length + $('#enemy .energy2 img').length + $('#enemy .energy3 img').length + $('#enemy .energy4 img').length + $('#enemy .energy5 img').length + $('#enemy .energy6 img').length + $('#enemy .energy7 img').length + $('#enemy .energy8 img').length;
		reset();
		$('#exit, #exit2, .exit3').trigger('click');
		$('.handbutton').trigger('click');
		enemyTurn(enemyPreviousTotal);
	} else if (turn == "Enemy") {
		//coming from enemy turn
		if ($('.status').length > 0) {
			if ($('#player #paralyze')){
				alert("Your Pokemon is no longer paralyzed.");
				$('#player #paralyze').remove();
			} else if ($('#player #poison')){
				alert("Your Pokemon takes 10 damage from Poison!");
				playerActiveDamage = playerActiveDamage + 10;
			} else if ($('#player #sleep')){
				alert("Flip a coin to see if you Pokemon wakes up.");
				coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Your Pokemon is still Asleep.");
				} else {
					alert("Coin flip was heads! Your Pokemon is Awake!");
					$('#player #sleep').remove();
				}
			} else if ($('#player #burn')){
				alert("Flip a coin to see if your Pokemon takes damage from Burn.");
				if (coinFlip <= 5){
					alert("Coin flip was tails! Your Pokemon takes 20 damage from Burn!");
					playerActiveDamage = playerActiveDamage + 20;
				} else {
					alert("Coin flip was heads! Your Pokemon does not take damage from Burn!");
				}
			} else if ($('#player #toxic')){
				alert("Your Pokemon takes 20 damage from Toxic!");
				playerActiveDamage = playerActiveDamage + 20;
			}
		}
		if ($('#enemy .status').length > 0) {
			if ($('#enemy #paralyze')){
				alert("Enemy Pokemon is no longer paralyzed.");
				$('#enemy #paralyze').remove();
			} else if ($('#enemy #poison')){
				alert("Enemy Pokemon takes 10 damage from Poison!");
				enemyActiveDamage = enemyActiveDamage + 10;
			} else if ($('#enemy #sleep')){
				alert("Coin flip to see if enemy Pokemon wakes up.");
				coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon is still Asleep.");
				} else {
					alert("Coin flip was heads! Enemy Pokemon is Awake!");
					$('#enemy #sleep').remove();
				}
			} else if ($('#enemy #burn')){
				alert("Coin flip to see if Enemy Pokemon takes damage from Burn.");
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon takes 20 damage from Burn!");
					enemyActiveDamage = enemyActiveDamage + 20;
				} else {
					alert("Coin flip was heads! Enemy Pokemon does not take damage from Burn!");
				}
			} else if ($('#enemy #toxic')){
				alert("Enemy Pokemon takes 20 damage from Toxic!");
				playerActiveDamage = playerActiveDamage + 20;
			}
		}
		previousTotal = $('#player .energy1 img').length + $('#player .energy2 img').length + $('#player .energy3 img').length + $('#player .energy4 img').length + $('#player .energy5 img').length + $('#player .energy6 img').length + $('#player .energy7 img').length + $('#player .energy8 img').length;
		enemyPreviousTotal = $('#enemy .energy1 img').length + $('#enemy .energy2 img').length + $('#enemy .energy3 img').length + $('#enemy .energy4 img').length + $('#enemy .energy5 img').length + $('#enemy .energy6 img').length + $('#enemy .energy7 img').length + $('#enemy .energy8 img').length;
		reset()
		$('#exit, #exit2, .exit3').trigger('click');
		$('.handbutton').trigger('click');
		playerTurn(previousTotal);
	}
}

// Constant check to see if a Pokemon is knocked out.
setInterval(
	function knockoutCheck(){
		if (playerActiveDamage >= inPlay7.HP){
			playerDiscardedCards = inPlay7+playerActiveAttachedEnergy;
			playerDiscardPile.splice(0, 0, inPlay7+playerActiveAttachedEnergy);
			knockoutPokemon(enemy, inPlay7);
			if ($('#player benchPoke').length < 1){
				alert("You are out of Pokemon! Enemy wins.");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#player .active').empty();
			$('#player .benchPoke').attr('onClick', 'newActive(card)');
		} else if (inPlay8.length > 0 && playerBench1Damage >= inPlay8.HP){
			playerDiscardedCards = inPlay8+playerBench1AttachedEnergy;
			playerDiscardPile.splice(0, 0, inPlay8+playerBench1AttachedEnergy);
			knockoutPokemon(enemy, inPlay8);
			if ($('#player benchPoke').length < 1){
				alert("You are out of Pokemon! Enemy wins.");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#player .active').empty();
			$('#player .benchPoke').attr('onClick', 'newActive(card)');
		} else if (inPlay9.length > 0 && playerBench2Damage >= inPlay9.HP){
			playerDiscardedCards = inPlay9+playerBench2AttachedEnergy;
			playerDiscardPile.splice(0, 0, inPlay9+playerBench2AttachedEnergy);
			knockoutPokemon(enemy, inPlay9);
			if ($('#player benchPoke').length < 1){
				alert("You are out of Pokemon! Enemy wins.");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#player .active').empty();
			$('#player .benchPoke').attr('onClick', 'newActive(card)');
		} else if (inPlay10.length > 0 && playerBench3Damage >= inPlay10.HP){
			playerDiscardedCards = inPlay10+playerBench3AttachedEnergy;
			playerDiscardPile.splice(0, 0, inPlay10+playerBench3AttachedEnergy);
			knockoutPokemon(enemy, inPlay10);
			if ($('#player benchPoke').length < 1){
				alert("You are out of Pokemon! Enemy wins.");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#player .active').empty();
			$('#player .benchPoke').attr('onClick', 'newActive(card)');
		} else if (inPlay11.length > 0 && playerBench4Damage >= inPlay11.HP){
			playerDiscardedCards = inPlay11+playerBench4AttachedEnergy;
			playerDiscardPile.splice(0, 0, inPlay11+playerBench4AttachedEnergy);
			knockoutPokemon(enemy, inPlay11);
			if ($('#player benchPoke').length < 1){
				alert("You are out of Pokemon! Enemy wins.");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#player .active').empty();
			$('#player .benchPoke').attr('onClick', 'newActive(card)');
		} else if (inPlay12.length > 0 && playerBench5Damage >= inPlay12.HP){
			playerDiscardedCards = inPlay12+playerBench5AttachedEnergy;
			playerDiscardPile.splice(0, 0, inPlay12+playerBench5AttachedEnergy);
			knockoutPokemon(enemy, inPlay12);
			if ($('#player benchPoke').length < 1){
				alert("You are out of Pokemon! Enemy wins.");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#player .active').empty();
			$('#player .benchPoke').attr('onClick', 'newActive(card)');
		}
		if (enemyInPlay7.length > 0 && enemyActiveDamage >= enemyInPlay7.HP){
			enemyDiscardedCards = inPlay7+enemyActiveAttachedEnergy;
			enemyDiscardPile.splice(0, 0, inPlay7+enemyActiveAttachedEnergy);
			knockoutPokemon(enemy, inPlay7);
			if ($('#enemy benchPoke').length < 1){
				alert("Enemy is out of Pokemon! You win!!!");
				window.location.reload();
			}
			alert("Enemy will choose a new Active Pokemon.");
			$('#enemy .active').empty();
			enemyChooseActive();
		} else if (enemyInPlay8 && enemyBench1Damage >= enemyInPlay8.HP){
			enemyDiscardedCards = inPlay8+enemyBench1AttachedEnergy;
			enemyDiscardPile.splice(0, 0, inPlay8+enemyBench1AttachedEnergy);
			knockoutPokemon(enemy, inPlay8);
			if ($('#enemy benchPoke').length < 1){
				alert("Enemy is out of Pokemon! You win!!!");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#enemy .active').empty();
			$('#enemy .benchPoke').attr('onClick', 'newActive(card)');
		} else if (enemyInPlay9 && enemyBench2Damage >= enemyInPlay9.HP){
			enemyDiscardedCards = inPlay9+enemyBench2AttachedEnergy;
			enemyDiscardPile.splice(0, 0, inPlay9+enemyBench2AttachedEnergy);
			knockoutPokemon(enemy, inPlay9);
			if ($('#enemy benchPoke').length < 1){
				alert("Enemy is out of Pokemon! You win!!!");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#enemy .active').empty();
			$('#enemy .benchPoke').attr('onClick', 'newActive(card)');
		} else if (enemyInPlay10.length > 0 && enemyBench3Damage >= enemyInPlay10.HP){
			enemyDiscardedCards = inPlay10+enemyBench3AttachedEnergy;
			enemyDiscardPile.splice(0, 0, inPlay10+enemyBench3AttachedEnergy);
			knockoutPokemon(enemy, inPlay10);
			if ($('#enemy benchPoke').length < 1){
				alert("Enemy is out of Pokemon! You win!!!");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#enemy .active').empty();
			$('#enemy .benchPoke').attr('onClick', 'newActive(card)');
		} else if (enemyInPlay11.length > 0 && enemyBench4Damage >= enemyInPlay11.HP){
			enemyDiscardedCards = inPlay11+enemyBench4AttachedEnergy;
			enemyDiscardPile.splice(0, 0, inPlay11+enemyBench4AttachedEnergy);
			knockoutPokemon(enemy, inPlay11);
			if ($('#enemy benchPoke').length < 1){
				alert("Enemy is out of Pokemon! You win!!!");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#enemy .active').empty();
			$('#enemy .benchPoke').attr('onClick', 'newActive(card)');
		} else if (enemyInPlay12.length > 0 && enemyBench5Damage >= enemyInPlay12.HP){
			enemyDiscardedCards = inPlay12+enemyBench5AttachedEnergy;
			enemyDiscardPile.splice(0, 0, inPlay12+enemyBench5AttachedEnergy);
			knockoutPokemon(enemy, inPlay12);
			if ($('#enemy benchPoke').length < 1){
				alert("Enemy is out of Pokemon! You win!!!");
				window.location.reload();
			}
			alert("Choose your new Active Pokemon.");
			$('#player .active').empty();
			$('#player .benchPoke').attr('onClick', 'newActive(card)');
		}
	}
	, 5000);

function knockoutPokemon(player){
	if (player == "Player"){
		alert("You have knocked out the opponent's Pokemon! Pick a Prize card!");
		for (i=0; i < $('#player #prizes').length; i++){
			$('#player #prizes .playerCover').attr('onClick', 'takePrize("Player", inPlay'+(i+1)+')');
		}
	} else if (player == "Enemy") {
		alert("Your active Pokemon is Knocked Out! Opponent gets a prize card.");
		if (enemyInPlay1.length > 0){
			card = enemyInPlay1;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:first').remove();
			$('#enemy .enemyCover:last').remove();
		} else if (enemyInPlay2.length > 0){
			card = enemyInPlay2;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:nth-child(2)').remove();
			$('#enemy .enemyCover:last').remove();
		} else if (enemyInPlay3.length > 0){
			card = enemyInPlay3;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:nth-child(3)').remove();
			$('#enemy .enemyCover:last').remove();
		} else if (enemyInPlay4.length > 0){
			card = enemyInPlay4;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:nth-child(4)').remove();
			$('#enemy .enemyCover:last').remove();
		} else if (enemyInPlay5.length > 0){
			card = enemyInPlay5;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:nth-child(5)').remove();
			$('#enemy .enemyCover:last').remove();
		} else if (enemyInPlay6.length > 0){
			card = enemyInPlay6;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:last').remove();
			$('#enemy .enemyCover:last').remove();
		}
	}
}

function takePrize(player, card){
	$('#player .playerCover:last').remove();
	if (player == "Player"){
		playerInHand.splice(-1, 0, card);
		switch (card){
			case (inPlay1):
				$('#player .prize:first').remove();
				break;
			case (inPlay2):
				$('#player .prize:nth-child(2)').remove();
				break;
			case (inPlay3):
				$('#player .prize:nth-child(3)').remove();
				break;
			case (inPlay4):
				$('#player .prize:nth-child(4)').remove();
				break;
			case (inPlay5):
				$('#player .prize:nth-child(5)').remove();
				break;
			case (inPlay6):
				$('#player .prize:last').remove();
				break;
			default:
				break;
		}
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this))" />');
		}
		$('.handButton').trigger('click');
	} else {
		//enemy should have already taken a prize card.
	}
}

function newActive(card){
	if (card == inPlay8){
		inPlay7 = inPlay8;
		inPlay8 = '';
		$('#player .active img').remove();
		$('#player .active').append($('#player .benchPoke:first img'));
		playerActiveDamage = playerBench1Damage;
		playerBench1Damage = 0;
	} else if (card == inPlay9){
		inPlay7 = inPlay9;
		inPlay9 = '';
		$('#player .active img').remove();
		$('#player .active').append($('#player .benchPoke:nth-child(2) img'));
		playerActiveDamage = playerBench2Damage;
		playerBench2Damage = 0;
	} else if (card == inPlay10){
		inPlay7 = inPlay10;
		inPlay10 = '';
		$('#player .active img').remove();
		$('#player .active').append($('#player .benchPoke:nth-child(3) img'));
		playerActiveDamage = playerBench3Damage;
		playerBench3Damage = 0;
	} else if (card == inPlay11){
		inPlay7 = inPlay11;
		inPlay11 = '';
		$('#player .active img').remove();
		$('#player .active').append($('#player .benchPoke:nth-child(4) img'));
		playerActiveDamage = playerBench4Damage;
		playerBench4Damage = 0;
	} else if (card == inPlay12){
		inPlay7 = inPlay12;
		inPlay12 = '';
		$('#player .active img').remove();
		$('#player .active').append($('#player .benchPoke:last img'));
		playerActiveDamage = playerBench5Damage;
		playerBench5Damage = 0;
	}
}

function enemyChooseActive(){
	//energyCount = {enemyBench1AttachedEnergy.length, enemyBench2AttachedEnergy.length, enemyBench3AttachedEnergy.length, nemyBench4AttachedEnergy.length, enemyBench5AttachedEnergy.length};
	largest = Math.max.apply(Math, energyCount);
	if (largest == energyCount[0]){
		enemyInPlay7 = enemyInPlay8;
		enemyInPlay8 = '';
		$('#enemy .active img').remove();
		$('#enemy .active').append($('#enemy .benchPoke:first img'));
		enemyActiveDamage = enemyBench1Damage;
		enemyBench1Damage = 0;
	} else if (largest == energyCount[1]){
		enemyInPlay7 = enemyInPlay9;
		enemyInPlay9 = '';
		$('#enemy .active img').remove();
		$('#enemy .active').append($('#enemy .benchPoke:nth-child(2) img'));
		enemyActiveDamage = enemyBench2Damage;
		enemyBench2Damage = 0;
	} else if (largest == energyCount[2]){
		enemyInPlay7 = enemyInPlay10;
		enemyInPlay10 = '';
		$('#enemy .active img').remove();
		$('#enemy .active').append($('#enemy .benchPoke:nth-child(3) img'));
		enemyActiveDamage = enemyBench3Damage;
		enemyBench3Damage = 0;
	} else if (largest == energyCount[3]){
		enemyInPlay7 = enemyInPlay11;
		enemyInPlay10 = '';
		$('#enemy .active img').remove();
		$('#enemy .active').append($('#enemy .benchPoke:nth-child(3) img'));
		enemyActiveDamage = enemyBench4Damage;
		enemyBench4Damage = 0;
	} else if (largest == energyCount[4]){
		enemyInPlay7 = enemyInPlay12;
		enemyInPlay10 = '';
		$('#enemy .active img').remove();
		$('#enemy .active').append($('#enemy .benchPoke:nth-child(3) img'));
		enemyActiveDamage = enemyBench5Damage;
		enemyBench5Damage = 0;
	} else {
		if (enemyInPlay8){
			enemyInPlay7 = enemyInPlay8;
			enemyInPlay8 = '';
			$('#enemy .active img').remove();
			$('#enemy .active').append($('#enemy .benchPoke:first img'));
			enemyActiveDamage = enemyBench1Damage;
			enemyBench1Damage = 0;
		} else if (enemyInPlay9){
			enemyInPlay7 = enemyInPlay9;
			enemyInPlay9 = '';
			$('#enemy .active img').remove();
			$('#enemy .active').append($('#enemy .benchPoke:nth-child(2) img'));
			enemyActiveDamage = enemyBench2Damage;
			enemyBench2Damage = 0;
		} else if (enemyInPlay10){
			enemyInPlay7 = enemyInPlay10;
			enemyInPlay10 = '';
			$('#enemy .active img').remove();
			$('#enemy .active').append($('#enemy .benchPoke:nth-child(3) img'));
			enemyActiveDamage = enemyBench3Damage;
			enemyBench3Damage = 0;
		} else if (enemyInPlay11){
			enemyInPlay7 = enemyInPlay11;
			enemyInPlay10 = '';
			$('#enemy .active img').remove();
			$('#enemy .active').append($('#enemy .benchPoke:nth-child(3) img'));
			enemyActiveDamage = enemyBench4Damage;
			enemyBench4Damage = 0;
		} else if (enemyInPlay12){
			enemyInPlay7 = enemyInPlay12;
			enemyInPlay10 = '';
			$('#enemy .active img').remove();
			$('#enemy .active').append($('#enemy .benchPoke:nth-child(3) img'));
			enemyActiveDamage = enemyBench5Damage;
			enemyBench5Damage = 0;
		}
	}
}

function confusionCheck(player){
	if ($('#player .status #confusion').length > 0){
		alert("Your Pokemon is confused. Flip a coin to see if your attack goes through!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails! Your Pokemon takes damage from confusion!");
			playerActiveDamage = playerActiveDamage + 20;
		} else {
			alert("Coin flip was heads! Your attack goes through normally!");
			success = 1;
			return success;
		}
	} else if ($('#enemy .status #confusion').length > 0){
		alert("Enemy Pokemon is confused. Enemy will flip a coin to see if its attack goes through!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
		if (coinFlip <= 5){
			alert("Coin flip was tails! Enemy Pokemon takes damage from confusion!");
			enemyActiveDamage = enemyActiveDamage + 20;
		} else {
			alert("Coin flip was heads! Enemy's attack goes through normally!");
			success = 1;
			return success;
		}
	} else {
		success = 1;
		return success;
	}
}