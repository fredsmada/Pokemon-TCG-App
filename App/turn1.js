/*Functions for player and enemy turns*/

/* Setup the player's turn and declare any needed functions */
function playerTurn(previousTotal) {
	$('#enemyActiveHide').css('display', 'none');
	$('.inPlayerHand .card').attr('onClick', 'largeCard(this)');
	alert("First, draw a card to start your turn.");
	drawPlayerCard();
	/* draw card animation goes here and after each call of this function! */
	setInterval(function(){$('#handCounter').empty(); $('#handCounter').append(enemyHandCounter)}, 2000);
	enemyHandCounter = enemyInHand.length;
	$('#popup').css('display', 'block');
	
	// Pull up window of player functions
	if (previousTotal == 0 || !previousTotal) {
		previousTotal = 0;
	} else {
		previousTotal = $('#player .energy1 img').length + $('#player .energy2 img').length + $('#player .energy3 img').length + $('#player .energy4 img').length + $('#player .energy5 img').length + $('#player .energy6 img').length + $('#player .energy7 img').length + $('#player .energy8 img').length;
	}
	$('#popup').trigger('click');
	window.previousTotal = previousTotal;
	if (window.c == 0) {
		window.evoFlag = 1;
		window.inPlay7.Evo = 1;
		window.inPlay8.Evo = 1;
		window.inPlay9.Evo = 1;
		window.inPlay10.Evo = 1;
		window.inPlay11.Evo = 1;
		window.inPlay12.Evo = 1;
	} else {
		window.evoFlag = 0;
		window.inPlay7.Evo = 0;
		window.inPlay8.Evo = 0;
		window.inPlay9.Evo = 0;
		window.inPlay10.Evo = 0;
		window.inPlay11.Evo = 0;
		window.inPlay12.Evo = 0;
	}
	window.c++;
	window.turn = "Player";
	return turn;
}



/* Setup AI for computer turns */
function enemyTurn(enemyPreviousTotal) {
	enemyActiveEnergyCount = $('#enemy .active .energy1').length + $('#enemy .active .energy2').length + $('#enemy .active .energy3').length + $('#enemy .active .energy4').length + $('#enemy .active .energy5').length + $('#enemy .active .energy6').length + $('#enemy .active .energy7').length + $('#enemy .active .energy8').length;
	enemyBench1EnergyCount = $('#enemy .benchPoke:first .energy1').length + $('#enemy .benchPoke:first .energy2').length + $('#enemy .benchPoke:first .energy3').length + $('#enemy .benchPoke:first .energy4').length + $('#enemy .benchPoke:first .energy5').length + $('#enemy .benchPoke:first .energy6').length + $('#enemy .benchPoke:first .energy7').length + $('#enemy .benchPoke:first .energy8').length;
	enemyBench2EnergyCount = $('#enemy .benchPoke:nth-child(2) .energy1').length + $('#enemy .benchPoke:nth-child(2) .energy2').length + $('#enemy .benchPoke:nth-child(2) .energy3').length + $('#enemy .benchPoke:nth-child(2) .energy4').length + $('#enemy .benchPoke:nth-child(2) .energy5').length + $('#enemy .benchPoke:nth-child(2) .energy6').length + $('#enemy .benchPoke:nth-child(2) .energy7').length + $('#enemy .benchPoke:nth-child(2) .energy8').length;
	enemyBench3EnergyCount = $('#enemy .benchPoke:nth-child(3) .energy1').length + $('#enemy .benchPoke:nth-child(3) .energy2').length + $('#enemy .benchPoke:nth-child(3) .energy3').length + $('#enemy .benchPoke:nth-child(3) .energy4').length + $('#enemy .benchPoke:nth-child(3) .energy5').length + $('#enemy .benchPoke:nth-child(3) .energy6').length + $('#enemy .benchPoke:nth-child(3) .energy7').length + $('#enemy .benchPoke:nth-child(3) .energy8').length;
	enemyBench4EnergyCount = $('#enemy .benchPoke:nth-child(4) .energy1').length + $('#enemy .benchPoke:nth-child(4) .energy2').length + $('#enemy .benchPoke:nth-child(4) .energy3').length + $('#enemy .benchPoke:nth-child(4) .energy4').length + $('#enemy .benchPoke:nth-child(4) .energy5').length + $('#enemy .benchPoke:nth-child(4) .energy6').length + $('#enemy .benchPoke:nth-child(4) .energy7').length + $('#enemy .benchPoke:nth-child(4) .energy8').length;
	enemyBench5EnergyCount = $('#enemy .benchPoke:last .energy1').length + $('#enemy .benchPoke:last .energy2').length + $('#enemy .benchPoke:last .energy3').length + $('#enemy .benchPoke:last .energy4').length + $('#enemy .benchPoke:last .energy5').length + $('#enemy .benchPoke:last .energy6').length + $('#enemy .benchPoke:last .energy7').length + $('#enemy .benchPoke:last .energy8').length;
	$('#enemyActiveHide').css('display', 'none');
	drawEnemyCard();
	setInterval(function(){$('#handCounter').empty(); $('#handCounter').append(enemyHandCounter)}, 2000);
	enemyHandCounter = enemyInHand.length;
	$('#popup').css('display', 'none');
	alert("Enemy is thinking about using a trainer.");
	for(i=0; i < enemyInHand.length; i++){
		if(enemyInHand[i].Stage == "trainer"){
			enemyPlayTrainer(enemyInHand[i]);
		}
	}
		alert("Enemy is thinking about adding a Pokemon to the bench.");
	for(l=0; l < enemyInHand.length; l++){
		if (enemyInHand[l].Stage == "basic"){
			if ($('#enemy .benchPoke:first img').length == 0){
				$('#enemy .benchPoke:first').append('<img src="Cards/Base_Set/' + enemyInHand[l].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the card from the hand
				index = enemyInHand.indexOf(enemyInHand[l]);
				enemyInPlay8 = {Card: enemyInHand[index].Card, Stage: enemyInHand[index].Stage, Type: enemyInHand[index].Type, HP: enemyInHand[index].HP, PokePower: enemyInHand[index].PokePower, Attack1: enemyInHand[index].Attack1, Attack2: enemyInHand[index].Attack2, Weak: enemyInHand[index].Weak, Resist: enemyInHand[index].Resist, Retreat: enemyInHand[index].Retreat};
				enemyInHand.splice(index, 1);
				$('.inenemyHand').empty();
				for (i=0; i < enemyInHand.length; i++){
					$('.inenemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
				}
			} else if ($('#enemy .benchPoke:nth-child(2) img').length == 0){
				$('#enemy .benchPoke:nth-child(2)').append('<img src="Cards/Base_Set/' + enemyInHand[l].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the card from the hand
				index = enemyInHand.indexOf(enemyInHand[l]);
				enemyInPlay9 = {Card: enemyInHand[index].Card, Stage: enemyInHand[index].Stage, Type: enemyInHand[index].Type, HP: enemyInHand[index].HP, PokePower: enemyInHand[index].PokePower, Attack1: enemyInHand[index].Attack1, Attack2: enemyInHand[index].Attack2, Weak: enemyInHand[index].Weak, Resist: enemyInHand[index].Resist, Retreat: enemyInHand[index].Retreat};
				enemyInHand.splice(index, 1);
				$('.inenemyHand').empty();
				for (i=0; i < enemyInHand.length; i++){
					$('.inenemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
				}
			} else if ($('#enemy .benchPoke:nth-child(3) img').length == 0){
				$('#enemy .benchPoke:nth-child(3)').append('<img src="Cards/Base_Set/' + enemyInHand[l].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the card from the hand
				index = enemyInHand.indexOf(enemyInHand[l]);
				enemyInPlay10 = {Card: enemyInHand[index].Card, Stage: enemyInHand[index].Stage, Type: enemyInHand[index].Type, HP: enemyInHand[index].HP, PokePower: enemyInHand[index].PokePower, Attack1: enemyInHand[index].Attack1, Attack2: enemyInHand[index].Attack2, Weak: enemyInHand[index].Weak, Resist: enemyInHand[index].Resist, Retreat: enemyInHand[index].Retreat};
				enemyInHand.splice(index, 1);
				$('.inenemyHand').empty();
				for (i=0; i < enemyInHand.length; i++){
					$('.inenemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
				}
			} else if ($('#enemy .benchPoke:nth-child(4) img').length == 0){
				$('#enemy .benchPoke:nth-child(4)').append('<img src="Cards/Base_Set/' + enemyInHand[l].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the card from the hand
				index = enemyInHand.indexOf(enemyInHand[l]);
				enemyInPlay11 = {Card: enemyInHand[index].Card, Stage: enemyInHand[index].Stage, Type: enemyInHand[index].Type, HP: enemyInHand[index].HP, PokePower: enemyInHand[index].PokePower, Attack1: enemyInHand[index].Attack1, Attack2: enemyInHand[index].Attack2, Weak: enemyInHand[index].Weak, Resist: enemyInHand[index].Resist, Retreat: enemyInHand[index].Retreat};
				enemyInHand.splice(index, 1);
				$('.inenemyHand').empty();
				for (i=0; i < enemyInHand.length; i++){
					$('.inenemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
				}
			} else if ($('#enemy .benchPoke:last img').length == 0){
				$('#enemy .benchPoke:last').append('<img src="Cards/Base_Set/' + enemyInHand[l].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the card from the hand
				index = enemyInHand.indexOf(enemyInHand[l]);
				enemyInPlay12 = {Card: enemyInHand[index].Card, Stage: enemyInHand[index].Stage, Type: enemyInHand[index].Type, HP: enemyInHand[index].HP, PokePower: enemyInHand[index].PokePower, Attack1: enemyInHand[index].Attack1, Attack2: enemyInHand[index].Attack2, Weak: enemyInHand[index].Weak, Resist: enemyInHand[index].Resist, Retreat: enemyInHand[index].Retreat};
				enemyInHand.splice(index, 1);
				$('.inenemyHand').empty();
				for (i=0; i < enemyInHand.length; i++){
					$('.inenemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
				}
			}
		}
	}
	alert("Enemy is thinking about evolving a Pokemon.");
	for(k=0; k < enemyInHand.length; k++){
		if(enemyInHand[k].Stage == "stage1" || enemyInHand[k].Stage == "stage2" && enemyInHand[k].Evo != 1){
			enemyEvolve(enemyInHand[k]);
		}
	}
	alert("Enemy is thinking about attaching an energy card.");
	enemyEnergyChecker(enemyPreviousTotal);
	if (enemyEnergyTotal > enemyPreviousTotal){
		console.log("Should not end up here on first turn!");
	} else {
	for(j=0; j < enemyInHand.length; j++){
		if (enemyInHand[j].Stage == "energy" || enemyInHand[j].Stage == "specialEnergy"){
			if ($.inArray(enemyInPlay7.Attack2, attacksEnergy4) != -1 && enemyActiveAttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay7.Attack2, attacksEnergy3) != -1 && enemyActiveAttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay7.Attack2, attacksEnergy2) != -1 && enemyActiveAttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay7.Attack2, attacksEnergy1) != -1 && enemyActiveAttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay7.Attack1, attacksEnergy4) != -1 && enemyActiveAttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay7.Attack1, attacksEnergy3) != -1 && enemyActiveAttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay7.Attack1, attacksEnergy2) != -1 && enemyActiveAttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay7.Attack1, attacksEnergy1) != -1 && enemyActiveAttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay8.Attack2, attacksEnergy4) != -1 && enemyBench1AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench1EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench1EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay8.Attack2, attacksEnergy3) != -1 && enemyBench1AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench1EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench1EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay8.Attack2, attacksEnergy2) != -1 && enemyBench1AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay8.Attack2, attacksEnergy1) != -1 && enemyBench1AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay8.Attack1, attacksEnergy4) != -1 && enemyBench1AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench1EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench1EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay8.Attack1, attacksEnergy3) != -1 && enemyBench1AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench1EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench1EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay8.Attack1, attacksEnergy2) != -1 && enemyBench1AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay8.Attack1, attacksEnergy1) != -1 && enemyBench1AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay9.Attack2, attacksEnergy4) != -1 && enemyBench2AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench2EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench2EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay9.Attack2, attacksEnergy3) != -1 && enemyBench2AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench2EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench2EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay9.Attack2, attacksEnergy2) != -1 && enemyBench2AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay9.Attack2, attacksEnergy1) != -1 && enemyBench2AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay9.Attack1, attacksEnergy4) != -1 && enemyBench2AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench2EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench2EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay9.Attack1, attacksEnergy3) != -1 && enemyBench2AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench2EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench2EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay9.Attack1, attacksEnergy2) != -1 && enemyBench2AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay9.Attack1, attacksEnergy1) != -1 && enemyBench2AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay10.Attack2, attacksEnergy4) != -1 && enemyBench3AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench3EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench3EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay10.Attack2, attacksEnergy3) != -1 && enemyBench3AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench3EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench3EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay10.Attack2, attacksEnergy2) != -1 && enemyBench3AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay10.Attack2, attacksEnergy1) != -1 && enemyBench3AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay10.Attack1, attacksEnergy4) != -1 && enemyBench3AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench3EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench3EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay10.Attack1, attacksEnergy3) != -1 && enemyBench3AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench3EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench3EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay10.Attack1, attacksEnergy2) != -1 && enemyBench3AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay10.Attack1, attacksEnergy1) != -1 && enemyBench3AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay11.Attack2, attacksEnergy4) != -1 && enemyBench4AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench4EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench4EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay11.Attack2, attacksEnergy3) != -1 && enemyBench4AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBenchEnergy4Count+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench4EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay11.Attack2, attacksEnergy2) != -1 && enemyBench4AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay11.Attack2, attacksEnergy1) != -1 && enemyBench4AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay11.Attack1, attacksEnergy4) != -1 && enemyBench4AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench4EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench4EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBenchAttachedEnergy) {
					enemyBenchAttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBenchAttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay11.Attack1, attacksEnergy3) != -1 && enemyBenchAttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench4EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench4EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay11.Attack1, attacksEnergy2) != -1 && enemyBench4AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay11.Attack1, attacksEnergy1) != -1 && enemyBench4AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay12.Attack2, attacksEnergy4) != -1 && enemyBench5AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench5EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench5EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay12.Attack2, attacksEnergy3) != -1 && enemyBench5AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench5EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench5EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay12.Attack2, attacksEnergy2) != -1 && enemyBench5AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay12.Attack2, attacksEnergy1) != -1 && enemyBench5AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay12.Attack1, attacksEnergy4) != -1 && enemyBench5AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench5EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench5EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay12.Attack1, attacksEnergy3) != -1 && enemyBench5AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench5EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench5EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay12.Attack1, attacksEnergy2) != -1 && enemyBench5AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			} else if ($.inArray(enemyInPlay12.Attack1, attacksEnergy1) != -1 && enemyBench5AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				enemyInHand.splice(index, 1);
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
				}
			}
		}
	}
}

	window.turn = "Enemy";

	//Computer attack
	alert("Enemy is thinking about attacking.");
	if (enemyInPlay7.Attack2 != ""){
		if ($.inArray(attacksEnergy4,enemyInPlay7.Attack2) && enemyActiveAttachedEnergy.length >= 4){
			window[enemyInPlay7.Attack2]();
		} else if ($.inArray(attacksEnergy3,enemyInPlay7.Attack2) && enemyActiveAttachedEnergy.length >= 3){
			window[enemyInPlay7.Attack2]();
		} else if ($.inArray(attacksEnergy2,enemyInPlay7.Attack2) && enemyActiveAttachedEnergy.length >= 2){
			window[enemyInPlay7.Attack2]();
		} else if ($.inArray(attacksEnergy1,enemyInPlay7.Attack2) && enemyActiveAttachedEnergy.length >= 1){
			window[enemyInPlay7.Attack2]();
		} else {
			alert("Enemy Pokemon does not have the energy for 2nd attack.");
		}
	} else {
		if ($.inArray(attacksEnergy4,enemyInPlay7.Attack1) && enemyActiveAttachedEnergy.length >= 4){
			window[enemyInPlay7.Attack1]();
		} else if ($.inArray(attacksEnergy3,enemyInPlay7.Attack1) && enemyActiveAttachedEnergy.length >= 3){
			window[enemyInPlay7.Attack1]();
		} else if ($.inArray(attacksEnergy2,enemyInPlay7.Attack1) && enemyActiveAttachedEnergy.length >= 2){
			window[enemyInPlay7.Attack1]();
		} else if ($.inArray(attacksEnergy1,enemyInPlay7.Attack1) && enemyActiveAttachedEnergy.length >= 1){
			window[enemyInPlay7.Attack1]();
		} else {
			alert("Enemy Pokemon does not have the energy for 1st attack.");
		}
	}

	// below goes at end of this function
	window.c++;
	betweenTurns("Enemy");
}

function enemyPlayTrainer(card) {
	console.log("Running Trainer");
	card = card;
	if (card.Stage != "trainer"){
		alert("That is not a trainer card. Please choose another card.");
	} else {
		if (card.Card == "Bill.jpg"){
			alert("Draw two cards!");
			drawEnemyCard();
			drawEnemyCard();
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
			reset();
			return;
		} else if (card == Clefairy_Doll){
			setBench(Clefairy_Doll);
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			reset();
			return;
		} else if (card == Computer_Search){
			index = enemyInHand.indexOf(card);
			window.currentHand = enemyInHand.length;
			enemyInHand.splice(index, 1);
			alert("Choose a card to discard.");
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="computerSearch(enemyInHand['+i+'])" />');
			}
			$('.handButton').trigger('click');
		} else if (card == Defender){
			// Damage to Poke -20 until next turn.
			$('.inEnemyHand').remove(card);
		} else if (card == Devolution_Spray){
			alert("Please choose one of your Pokemon to devolve.");
			$('#enemy .card').attr('onClick', 'devolutionSpray(this)');
			$('.inEnemyHand').remove(card);
		} else if (card == Energy_Removal){
			if (playerEnergyTotal > 0){
				alert("Choose an energy card attached to the opponent's Pokemon you want to discard.");
				$('#enemy .energy, #enemy .energy1, #enemy .energy2, #enemy .energy3, #enemy .energy4, #enemy .energy5, #enemy .energy6, #enemy .energy7, #enemy .energy8').attr('onClick', 'energyRemoval(this)');
				$('.inEnemyHand').remove(card);
			} else {
				alert("Player does not have any energy to remove.");
				return true;
			}
		} else if (card == Energy_Retrieval){
			alert("First, discard a card from your hand.");
			$('#exit, #exit2, .exit3').trigger('click');
			$('.handbutton').trigger('click');
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="energyRetrieval(' + enemyInHand[i] + ')" />');
			}
			$('.inEnemyHand').remove(card);
		} else if (card == Full_Heal){
			// Remove all special condition counters
			$('.inEnemyHand').remove(card);
		} else if (card == Gust_of_Wind){
			alert("Choose a Pokemon to switch with the active Pokemon");
			$('#enemy .benchPoke .card').attr('onClick', 'gustOfWind(this)');
			$('.inEnemyHand').remove(card);
		} else if (card == Impostor_Professor_Oak){
			alert("Opponent will shuffle their hand into their deck and draw 7 cards.");
			$('.inEnemyHand').empty();
			amount = enemyInHand.length;
			for (i=0; i < enemyInHand.length; i++){
				enemyDeck.splice(0, 0, enemyInHand[i]);
			}
			$('.inEnemyHand').remove(card);
		} else if (card == Item_Finder){
			alert("Choose 2 cards to discard.");
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="itemFinder(' + enemyInHand[i] + ')" />');
			}
			$('#exit, #exit2, .exit3, .handButton').trigger('click');
			$('.inEnemyHand').remove(card);
		} else if (card == Lass){
			$('#enemyHandButton').trigger('click');
			alert("When you are done looking at opponent's hand, click ok.");
			for (i=0; i < enemyInHand.length; i++){
				if (enemyInHand.Stage == "trainer"){
					index = enemyInHand[i];
					enemyInHand.splice(index, 1);
					enemyDeck.splice(0, 0, enemyInHand[i]);
					shuffleDeck(enemyDeck);
				}
			}
			for (i=0; i < enemyInHand.length; i++){
				if (enemyInHand.Stage == "trainer"){
					index = enemyInHand[i];
					enemyInHand.splice(index, 1);
					enemyDeck.splice(0, 0, enemyInHand[i]);
					shuffleDeck(enemyDeck);
				}
			}
			alert("You and your opponent's trainer cards have been shuffled into your decks!");
			$('.inEnemyHand').remove(card);
			reset()
			return;
		} else if (card == Maintenance){
			if (enemyInHand.length < 3){
				alert("You do not have enough cards in your hand to play this card!");
			} else {
				alert("Choose 2 cards to shuffle into your deck.");
				$('#exit, #exit2, .exit3, .handButton').trigger('click');
				for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="maintenance(' + enemyInHand[i] + ')" />');
				}
			}
			$('.inEnemyHand').remove(card);
		} else if (card == PlusPower){
			// Add 10 damage to attack by active Pokemon this turn.
			$('.inEnemyHand').remove(card);
		} else if (card == Pokedex){
			alert("Here are the top 5 cards of your deck. First card you click on will be next.");
			alert("Then, each card you click on after will follow that top card.");
			$('.inEnemyHand').empty();
			for (i=0; i < 4; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyDeck[i].Card + '" class="card" onClick="pokedex(' + enemyDeck[i] + ')" />');
			}
			$('.inEnemyHand').remove(card);
		} else if (card == Pokemon_Breeder){
			alert("Choose an evolution card you want to use.");
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="pokemonBreeder(enemyInHand[' + i + '])" />');
			}
			$('#exit, #exit2, .exit3').trigger('click');
			$('.handButton').trigger('click');
			$('.inEnemyHand').remove(card);
		} else if (card == Pokemon_Center){
			// Remove all damage counters from your Pokemon. Then, discard all energy from Pokemon that had damage.
			$('.inEnemyHand').remove(card);
		} else if (card == Pokemon_Flute){
			// Put a Pokemon from Opponent's discard pile onto their bench.
			$('.inEnemyHand').remove(card);
		} else if (card == Pokemon_Trader){
			alert("Choose a Pokemon from your hand to trade.");
			$('.inEnemyHand').empty();
			$('#exit, #exit2, .exit3').trigger('click');
			$('.handButton').trigger('click');
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="pokemonTrader(' + enemyInHand[i] + ')" />');
			}
			$('.inEnemyHand').remove(card);
		} else if (card == Potion){
			if(enemyActiveDamage >= 20){
				alert("Enemy removes 20 damage from active Pokemon.");
				enemyActiveDamage = enemyActiveDamage - 20;
			} else if (enemyBench1Damage >= 20){
				alert("Enemy removes 20 damage from 1st benched Pokemon.");
				enemyBench1Damage = enemyBench1Damage - 20;
			} else if (enemyBench2Damage >= 20){
				alert("Enemy removes 20 damage from 2nd benched Pokemon.");
				enemyBench2Damage = enemyBench2Damage - 20;
			} else if (enemyBench3Damage >= 20){
				alert("Enemy removes 20 damage from 3rd benched Pokemon.");
				enemyBench3Damage = enemyBench3Damage - 20;
			} else if (enemyBench4Damage >= 20){
				alert("Enemy removes 20 damage from 4th benched Pokemon.");
				enemyBench4Damage = enemyBench4Damage - 20;
			} else if (enemyBench5Damage >= 20){
				alert("Enemy removes 20 damage from last benched Pokemon.");
				enemyBench5Damage = enemyBench5Damage - 20;
			}
			$('.inEnemyHand').remove(card);
		} else if (card == Professor_Oak){
			alert("Discarding your hand and drawing 7 cards from the deck.");
			for(i=0; i < enemyInHand.length; i++){
				enemyDiscardPile.splice(0, 0, enemyInHand[i]);
			}
			enemyInHand = new Array();
			for(i=0; i < 7; i++){
				enemyInHand.splice(0, 0, enemyDeck[i]);
			}
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
			$('#exit, #exit2, .exit3').trigger('click');
			$('.handButton').trigger('click');
		} else if (card == Scoop_Up){
			alert("Choose a Pokemon to scoop up.");
			for(i=0; i < $('#enemy .card').length; i++){
				$('#enemy .card').attr('onClick', 'scoopUp(this)');
			}
			$('.inEnemyHand').remove(card);
		} else if (card == Super_Energy_Removal){
			// Discard 1 energy attached to yours to remove 2 energy from 1 of your opponent's Pokemon.
			$('.inEnemyHand').remove(card);
		} else if (card == Super_Potion){
			// Discard an energy attached to remove 4 damage counters.
			$('.inEnemyHand').remove(card);
		} else if (card == Switch){
			alert("Choose a Pokemon to switch with your active Pokemon.");
			$('#enemy .active .card, #enemy .benchPoke .card').attr('onClick', 'switchFunc(this)');
		}
	}
}
