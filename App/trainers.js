/*Attach Energy and Play Trainers */

// Function run when Attach as Energy is clicked
function attachEnergy(attachedEnergy, previousTotal){
	previousTotal = window.previousTotal;
	energyChecker(previousTotal);
	if (playerEnergyTotal > previousTotal) {
		reset();
	} else {
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
}

function attachEnergy2(card){
	card = card;
	switch (card.Stage) {
		case 'energy':
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
		case 'specialEnergy':
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
			$('#player .active').append('<div class="energy1"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench1EnergyCount + 1) + '" /></div>');
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
			$('#player .active').append('<div class="energy1"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench2EnergyCount + 1) + '" /></div>');
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
			$('#player .active').append('<div class="energy1"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench3EnergyCount + 1) + '" /></div>');
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
			$('#player .active').append('<div class="energy1"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench4EnergyCount + 1) + '" /></div>');
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
			$('#player .active').append('<div class="energy1"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench5EnergyCount + 1) + '" /></div>');
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
	reset();
}

// Check if energy was already attached
function energyChecker(previousTotal) {
	currentTotal = $('#player .energy1 img').length + $('#player .energy2 img').length + $('#player .energy3 img').length + $('#player .energy4 img').length + $('#player .energy5 img').length + $('#player .energy6 img').length + $('#player .energy7 img').length + $('#player .energy8 img').length;
	if (currentTotal.length === 'undefined') {
		currentTotal = 0;
	}
	if (currentTotal == 0) {
		playerEnergyTotal = $('#player .energy1 img').length + $('#player .energy2 img').length + $('#player .energy3 img').length + $('#player .energy4 img').length + $('#player .energy5 img').length + $('#player .energy6 img').length + $('#player .energy7 img').length + $('#player .energy8 img').length;
	} else {
		playerEnergyTotal = currentTotal;
	}
		if (playerEnergyTotal > previousTotal) {
			alert ("You have already attached an energy card this turn!");
			return previousTotal;
		} else {
			return playerEnergyTotal;
		}
}

// Function to constantly check player total energy and what type it is.
setInterval(function() {
    function checkPlayerActiveEnergy() {
    	if ($('#player .active .energy')){
    		for (i=0; $('#player .active .energy').length; i++){
    			if (i == "Double_Colorless_Energy"){

    			}
    		}
    	}
    }
}, 60000);

function enemyEnergyChecker(enemyPreviousTotal) {
	currentTotal = $('#enemy .energy1 img').length + $('#enemy .energy2 img').length + $('#enemy .energy3 img').length + $('#enemy .energy4 img').length + $('#enemy .energy5 img').length + $('#enemy .energy6 img').length + $('#enemy .energy7 img').length + $('#enemy .energy8 img').length;
	if (currentTotal.length === 'undefined') {
		currentTotal = 0;
	}
	if (currentTotal == 0) {
		enemyEnergyTotal = $('#enemy .energy1 img').length + $('#enemy .energy2 img').length + $('#enemy .energy3 img').length + $('#enemy .energy4 img').length + $('#enemy .energy5 img').length + $('#enemy .energy6 img').length + $('#enemy .energy7 img').length + $('#enemy .energy8 img').length;
	} else {
		enemyEnergyTotal = currentTotal;
	}
		if (enemyEnergyTotal > previousTotal) {
			alert ("Enemy has already attached an energy card this turn!");
			return enemyPreviousTotal;
		} else {
			return enemyEnergyTotal;
		}
}

// Function to constantly check enemy total energy and what type it is.
setInterval(function() {
    function checkEnemyActiveEnergy() {
    	if ($('#enemy .active .energy')){
    		for (i=0; $('#enemy .active .energy').length; i++){
    			if (i == "Double_Colorless_Energy"){

    			}
    		}
    	}
    }
}, 60000);

function playTrainer() {
	alert("Choose a trainer card to play.");
	$('#exit, #exit2, .exit3').trigger('click');
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="playTrainer2(playerInHand['+i+'])" />');
	}
	$('.handButton').trigger('click');
}

function playTrainer2(card) {
	card = card;
	if (card.Stage != "trainer"){
		alert("That is not a trainer card. Please choose another card.");
	} else {
		if (card.Card == "Bill.jpg"){
			alert("Draw two cards!");
			drawPlayerCard();
			drawPlayerCard();
			index = playerInHand.indexOf(card);
			playerInHand.splice(index, 1);
			$('#player #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			playerDiscardPile.splice(0, 0, card);
			reset();
			return;
		} else if (card == Clefairy_Doll){
			setBench(Clefairy_Doll);
			index = playerInHand.indexOf(card);
			playerInHand.splice(index, 1);
			reset();
			return;
		} else if (card == Computer_Search){
			index = playerInHand.indexOf(card);
			window.currentHand = playerInHand.length;
			playerInHand.splice(index, 1);
			alert("Choose a card to discard.");
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="computerSearch(playerInHand['+i+'])" />');
			}
			$('.handButton').trigger('click');
		} else if (card == Defender){
			// Damage to Poke -20 until next turn.
			$('.inPlayerHand').remove(card);
		} else if (card == Devolution_Spray){
			alert("Please choose one of your Pokemon to devolve.");
			$('#player .card').attr('onClick', 'devolutionSpray(this)');
			$('.inPlayerHand').remove(card);
		} else if (card == Energy_Removal){
			alert("Choose an energy card attached to the opponent's Pokemon you want to discard.");
			$('#enemy .energy, #enemy .energy1, #enemy .energy2, #enemy .energy3, #enemy .energy4, #enemy .energy5, #enemy .energy6, #enemy .energy7, #enemy .energy8').attr('onClick', 'energyRemoval(this)');
			$('.inPlayerHand').remove(card);
		} else if (card == Energy_Retrieval){
			alert("First, discard a card from your hand.");
			$('#exit, #exit2, .exit3').trigger('click');
			$('.handbutton').trigger('click');
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="energyRetrieval(' + playerInHand[i] + ')" />');
			}
			$('.inPlayerHand').remove(card);
		} else if (card == Full_Heal){
			// Remove all special condition counters
			$('.inPlayerHand').remove(card);
		} else if (card == Gust_of_Wind){
			alert("Choose a Pokemon to switch with the active Pokemon");
			$('#enemy .benchPoke .card').attr('onClick', 'gustOfWind(this)');
			$('.inPlayerHand').remove(card);
		} else if (card == Impostor_Professor_Oak){
			alert("Opponent will shuffle their hand into their deck and draw 7 cards.");
			$('.inEnemyHand').empty();
			amount = enemyInHand.length;
			for (i=0; i < enemyInHand.length; i++){
				enemyDeck.splice(0, 0, enemyInHand[i]);
			}
			$('.inPlayerHand').remove(card);
		} else if (card == Item_Finder){
			alert("Choose 2 cards to discard.");
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="itemFinder(' + playerInHand[i] + ')" />');
			}
			$('#exit, #exit2, .exit3, .handButton').trigger('click');
			$('.inPlayerHand').remove(card);
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
			for (i=0; i < playerInHand.length; i++){
				if (playerInHand.Stage == "trainer"){
					index = playerInHand[i];
					playerInHand.splice(index, 1);
					playerDeck.splice(0, 0, playerInHand[i]);
					shuffleDeck(playerDeck);
				}
			}
			alert("You and your opponent's trainer cards have been shuffled into your decks!");
			$('.inPlayerHand').remove(card);
			reset()
			return;
		} else if (card == Maintenance){
			if (playerInHand.length < 3){
				alert("You do not have enough cards in your hand to play this card!");
			} else {
				alert("Choose 2 cards to shuffle into your deck.");
				$('#exit, #exit2, .exit3, .handButton').trigger('click');
				for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="maintenance(' + playerInHand[i] + ')" />');
				}
			}
			$('.inPlayerHand').remove(card);
		} else if (card == PlusPower){
			// Add 10 damage to attack by active Pokemon this turn.
			$('.inPlayerHand').remove(card);
		} else if (card == Pokedex){
			alert("Here are the top 5 cards of your deck. First card you click on will be next.");
			alert("Then, each card you click on after will follow that top card.");
			$('.inPlayerHand').empty();
			for (i=0; i < 4; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerDeck[i].Card + '" class="card" onClick="pokedex(' + playerDeck[i] + ')" />');
			}
			$('.inPlayerHand').remove(card);
		} else if (card == Pokemon_Breeder){
			alert("Choose an evolution card you want to use.");
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="pokemonBreeder(playerInHand[' + i + '])" />');
			}
			$('#exit, #exit2, .exit3').trigger('click');
			$('.handButton').trigger('click');
			$('.inPlayerHand').remove(card);
		} else if (card == Pokemon_Center){
			// Remove all damage counters from your Pokemon. Then, discard all energy from Pokemon that had damage.
			$('.inPlayerHand').remove(card);
		} else if (card == Pokemon_Flute){
			// Put a Pokemon from Opponent's discard pile onto their bench.
			$('.inPlayerHand').remove(card);
		} else if (card == Pokemon_Trader){
			index = playerInHand.indexOf(Pokemon_Trader);
			playerInHand.splice(index, 1);
			alert("Choose a Pokemon from your hand to trade.");
			$('.inPlayerHand').empty();
			$('#exit, #exit2, .exit3').trigger('click');
			$('.handButton').trigger('click');
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="pokemonTrader(playerInHand[' + i + '])" />');
			}
			$('.inPlayerHand').remove(card);
		} else if (card == Potion){
			alert("Choose a Pokemon to remove 20 damage from.");
			$('#player #poke').attr('onclick', 'potion(this)');
			$('.inPlayerHand').remove(card);
		} else if (card == Professor_Oak){
			alert("Discarding your hand and drawing 7 cards from the deck.");
			for(i=0; i < playerInHand.length; i++){
				playerDiscardPile.splice(0, 0, playerInHand[i]);
			}
			playerInHand = new Array();
			for(i=0; i < 7; i++){
				playerInHand.splice(0, 0, playerDeck[i]);
			}
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
			$('#exit, #exit2, .exit3').trigger('click');
			$('.handButton').trigger('click');
			$('.inPlayerHand').remove(card);
		} else if (card == Scoop_Up){
			alert("Choose a Pokemon to scoop up.");
			for(i=0; i < $('#player .card').length; i++){
				$('#player .card').attr('onClick', 'scoopUp(this)');
			}
			$('.inPlayerHand').remove(card);
		} else if (card == Super_Energy_Removal){
			// Discard 1 energy attached to yours to remove 2 energy from 1 of your opponent's Pokemon.
			$('.inPlayerHand').remove(card);
		} else if (card == Super_Potion){
			// Discard an energy attached to remove 4 damage counters.
			$('.inPlayerHand').remove(card);
		} else if (card == Switch){
			alert("Choose a Pokemon to switch with your active Pokemon.");
			$('#player .active .card, #player .benchPoke .card').attr('onClick', 'switchFunc(this)');
		}
	}
}

function computerSearch(card, currentHand){
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
		$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="computerSearchDiscard(playerInHand['+i+'])" />');
	}
	card = card;
	currentHand = playerInHand.length;
	window.discardAmount = 0;
	$('.inPlayerHand').click(computerSearchDiscard(card, discardAmount, window.currentHand))	
}

function computerSearch2(card){
	alert("This card has been added to your hand!");
	index = playerDeck.indexOf(card);
	playerDeck.splice(index, 1);
	playerInHand.splice(0, 0, card);
	$('.exit3').trigger('click');
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
}

function computerSearchDiscard(card, discardAmount, currentHand){
	card = card;
	index = playerInHand.indexOf(card);
	playerInHand.splice(index, 1);
	playerDiscardPile.splice(0, 0, card);
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
		$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="computerSearchDiscard(playerInHand['+i+'], discardAmount, window.currentHand)" />');
	}
	if ((playerDiscardPile.length - 1) == discardAmount){
		alert("Now that you have discarded, search your deck for any card.");
		$('#exit, #exit2, .exit3').trigger('click');
		$('#playerDeck').trigger('click');
		$('.inPlayerDeck').empty();
		$('.inPlayerHand').empty();
		for (i=0; i < playerDeck.length; i++){
			$('.inPlayerDeck').append('<img src="Cards/Base_Set/' + playerDeck[i].Card + '" class="card" onClick="computerSearch2(playerDeck[' + i + '])" />');
		}
	} else {
	window.discardAmount++;
	return window.discardAmount;
	}
}

function devolutionSpray(card){
	if (card == inPlay7 || card == inPlay8 || card == inPlay9 || card == inPlay10 || card == inPlay11 || card == inPlay12) {
		alert("Choose a stage to devolve to.");
		} else {
		alert("Either that is not one of your Pokemon or it is a Basic Pokemon!");
		}
}

function energyRemoval(card){
	if (card.Stage != 'energy'){
		alert("That is not an energy card. Choose another card.");
	} else {
		enemyDiscardPile.splice(0, 0, card);
		$(document).remove(card);
	}
}

function energyRetrieval(card){
	index = playerInHand.indexOf(card);
	playerInHand.splice(index, 1);
	discardPile.splice(0, 0, card);
	alert("Choose up to 2 basic energy cards from your discard pile.");
	$('.discardPile').empty();
	document.getElementById('light8').style.display='block';
	document.getElementById('fade').style.display='block';
	for (i=0; i < discardPile.length; i++){
			$('.discardPile').append('<img src="Cards/Base_Set/' + discardPile[i].Card + '" class="card" onClick="energyRetrieval2(' + discardPile[i] + ')" />');
	}
	$('#exit5').trigger('click');
}

function energyRetrieval2(card){
	index = discardPile.indexOf(card);
	if (card.Stage == "energy"){
		discardPile.splice(index, 1);
		playerInHand.splice(0, 0, card);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
	} else {
		alert("That is not a basic energy card. Choose another card.");
	}
}

function gustOfWind(card){
	if (card == enemyInPlay8){
		$('#enemy .benchPoke:first').append('<img src="Cards/Base_Set/' + enemyInPlay7.Card + '" class="card" onClick="largeCard(this)" />');
		$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInPlay8.Card + '" class="card" onClick="largeCard(this)" />');
		enemyInPlay8 = enemyInPlay7;
	} else if (card == enemyInPlay9){
		$('#enemy .benchPoke:nth-child(2)').append('<img src="Cards/Base_Set/' + enemyInPlay7.Card + '" class="card" onClick="largeCard(this)" />');
		$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInPlay9.Card + '" class="card" onClick="largeCard(this)" />');
		enemyInPlay9 = enemyInPlay7;
	} else if (card == enemyInPlay10){
		$('#enemy .benchPoke:nth-child(3)').append('<img src="Cards/Base_Set/' + enemyInPlay7.Card + '" class="card" onClick="largeCard(this)" />');
		$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInPlay10.Card + '" class="card" onClick="largeCard(this)" />');
		enemyInPlay10 = enemyInPlay7;
	} else if (card == enemyInPlay11){
		$('#enemy .benchPoke:nth-child(4)').append('<img src="Cards/Base_Set/' + enemyInPlay7.Card + '" class="card" onClick="largeCard(this)" />');
		$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInPlay11.Card + '" class="card" onClick="largeCard(this)" />');
		enemyInPlay11 = enemyInPlay7;
	} else if (card == enemyInPlay12){
		$('#enemy .benchPoke:last').append('<img src="Cards/Base_Set/' + enemyInPlay7.Card + '" class="card" onClick="largeCard(this)" />');
		$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInPlay12.Card + '" class="card" onClick="largeCard(this)" />');
		enemyInPlay12 = enemyInPlay7;
	}
}

function itemFinder(card){
	amount = inPlayerHand.length - 2;
	index = playerInHand.indexOf(card);
	playerInHand.splice(index, 1);
	discardPile.splice(0, 0, card);
	if (inPlayerHand.length == amount){
		alert("Choose a trainer card from your discard pile to put into your hand.");
		$('#exit, #exit2, .exit3').trigger('click');		
		document.getElementById('light8').style.display='block';
		document.getElementById('fade').style.display='block';
		$('.discardPile').empty();
	for (i=0; i < discardPile.length; i++){
			$('.discardPile').append('<img src="Cards/Base_Set/' + discardPile[i].Card + '" class="card" onClick="itemFinder2(' + discardPile[i] + ')" />');
	}
	}
}

function itemFinder2(card){
	index = discardPile.indexOf(card);
	discardPile.splice(index, 1);
	playerInHand.splice(0, 0, card);
	$('#exit5').trigger('click');
}

function maintenance(card){
	amount = playerInHand.length - 2;
	index = playerInHand.indexOf(card);
	playerInHand.splice(index, 1);
	playerDeck.splice(0, 0, card);
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
		$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="maintenance(' + playerInHand[i] + ')" />');
	}
	if (playerInHand.length == amount){
		alert("Shuffling your deck and drawing you a card.");
		shuffleDeck(playerDeck);
		drawPlayerCard();
	}
}

function pokedex(card){
	temp = new Array();
	temp.splice(-1, 0, card);
	index = temp.indexOf(card);
	playerDeck.splice(0, 0, temp.index)
}

function pokemonBreeder(card){
	card = card;
	if (card.Stage == "stage2"){
		index = playerInHand.indexOf(card);
		alert("Choose a Pokemon in play to evolve.")
		$('#exit, #exit2, .exit3').trigger('click');
		if ($('#player .active .card').length > 0){
			$('#player .active .card').attr('onClick', 'pokemonBreeder2(playerInHand[' + index + '], inPlay7)');
		} else if ($('#player .benchPoke:first').length > 0){
			$('#player .benchPoke:first').attr('onClick', 'pokemonBreeder2(playerInHand[' + index + '], inPlay8)');
		} else if ($('#player .benchPoke:nth-child(2)').length > 0){
			$('#player .benchPoke:nth-child(2)').attr('onClick', 'pokemonBreeder2(playerInHand[' + index + '], inPlay9)');
		} else if ($('#player .benchPoke:nth-child(3)').length > 0){
			$('#player .benchPoke:nth-child(3)').attr('onClick', 'pokemonBreeder2(playerInHand[' + index + '], inPlay10)');
		} else if ($('#player .benchPoke:nth-child(4)').length > 0){
			$('#player .benchPoke:nth-child(4)').attr('onClick', 'pokemonBreeder2(playerInHand[' + index + '], inPlay11)');
		} else if ($('#player .benchPoke:last').length > 0){
			$('#player .benchPoke:last').attr('onClick', 'pokemonBreeder2(playerInHand[' + index + '], inPlay12)');
		} else {
		}
	} else {
		alert("That is not a Stage 2 evolution card!");
		evolve()
	}
}

function pokemonBreeder2(evo, card){
	if (card == inPlay7){
		source = "Cards/Base_Set/" + inPlay7.Card;
		spot = $('#player .active');
	} else if (card == inPlay8){
		source = "Cards/Base_Set/" + inPlay8.Card;
		spot = $('#player .benchPoke:first');
	} else if (card == inPlay9){
		source = "Cards/Base_Set/" + inPlay9.Card;
		spot = $('#player .benchPoke:nth-child(2)');
	} else if (card == inPlay10){
		source = "Cards/Base_Set/" + inPlay10.Card;
		spot = $('#player .benchPoke:nth-child(3)');
	} else if (card == inPlay11){
		source = "Cards/Base_Set/" + inPlay11.Card;
		spot = $('#player .benchPoke:nth-child(4)');
	} else if (card == inPlay12){
		source = "Cards/Base_Set/" + inPlay12.Card;
		spot = $('#player .benchPoke:last');
	} else {
	}
	evo = evo; card = card;
	index = playerInHand.indexOf(evo);
	if (evo.Card == "Charizard.jpg" && card.Card == "Charmander.jpg") {
		baseCharmeleon = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Charizard.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#player .active" && inPlay7.Evo != 1){
			inPlay7 = evo;
			inPlay7.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:first" && inPlay8.Evo != 1){
			inPlay8 = evo;
			inPlay8.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(2)" && inPlay9.Evo != 1){
			inPlay9 = evo;
			inPlay9.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(3)" && inPlay10.Evo != 1){
			inPlay10 = evo;
			inPlay10.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:nth-child(4)" && inPlay11.Evo != 1){
			inPlay11 = evo;
			inPlay11.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:last" && inPlay12.Evo != 1){
			inPlay12 = evo;
			inPlay12.Evo = 1;
		} else {
		}
	} else if (evo.Card == "Alakazam.jpg" && card.Card == "Abra.jpg") {
		baseKadabra = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Alakazam.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#player .active" && inPlay7.Evo != 1){
			inPlay7 = evo;
			inPlay7.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:first" && inPlay8.Evo != 1){
			inPlay8 = evo;
			inPlay8.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(2)" && inPlay9.Evo != 1){
			inPlay9 = evo;
			inPlay9.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(3)" && inPlay10.Evo != 1){
			inPlay10 = evo;
			inPlay10.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:nth-child(4)" && inPlay11.Evo != 1){
			inPlay11 = evo;
			inPlay11.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:last" && inPlay12.Evo != 1){
			inPlay12 = evo;
			inPlay12.Evo = 1;
		} else {
		}
	} else if (evo.Card == "Beedrill.jpg" && card.Card == "Weedle.jpg") {
		baseKakuna = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Beedrill.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#player .active" && inPlay7.Evo != 1){
			inPlay7 = evo;
			inPlay7.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:first" && inPlay8.Evo != 1){
			inPlay8 = evo;
			inPlay8.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(2)" && inPlay9.Evo != 1){
			inPlay9 = evo;
			inPlay9.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(3)" && inPlay10.Evo != 1){
			inPlay10 = evo;
			inPlay10.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:nth-child(4)" && inPlay11.Evo != 1){
			inPlay11 = evo;
			inPlay11.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:last" && inPlay12.Evo != 1){
			inPlay12 = evo;
			inPlay12.Evo = 1;
		} else {
		}
	} else if (evo.Card == "Blastoise.jpg" && card.Card == "Squirtle.jpg") {
		baseWartortle = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Blastoise.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#player .active" && inPlay7.Evo != 1){
			inPlay7 = evo;
			inPlay7.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:first" && inPlay8.Evo != 1){
			inPlay8 = evo;
			inPlay8.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(2)" && inPlay9.Evo != 1){
			inPlay9 = evo;
			inPlay9.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(3)" && inPlay10.Evo != 1){
			inPlay10 = evo;
			inPlay10.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:nth-child(4)" && inPlay11.Evo != 1){
			inPlay11 = evo;
			inPlay11.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:last" && inPlay12.Evo != 1){
			inPlay12 = evo;
			inPlay12.Evo = 1;
		} else {
		}
	} else if (evo.Card == "Venusaur.jpg" && card.Card == "Bulbasaur.jpg") {
		baseIvysaur = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Venusaur.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#player .active" && inPlay7.Evo != 1){
			inPlay7 = evo;
			inPlay7.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:first" && inPlay8.Evo != 1){
			inPlay8 = evo;
			inPlay8.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(2)" && inPlay9.Evo != 1){
			inPlay9 = evo;
			inPlay9.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(3)" && inPlay10.Evo != 1){
			inPlay10 = evo;
			inPlay10.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:nth-child(4)" && inPlay11.Evo != 1){
			inPlay11 = evo;
			inPlay11.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:last" && inPlay12.Evo != 1){
			inPlay12 = evo;
			inPlay12.Evo = 1;
		} else {
		}
	} else if (evo.Card == "Machamp.jpg" && card.Card == "Machop.jpg") {
		baseMachoke = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Machamp.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#player .active" && inPlay7.Evo != 1){
			inPlay7 = evo;
			inPlay7.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:first" && inPlay8.Evo != 1){
			inPlay8 = evo;
			inPlay8.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(2)" && inPlay9.Evo != 1){
			inPlay9 = evo;
			inPlay9.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(3)" && inPlay10.Evo != 1){
			inPlay10 = evo;
			inPlay10.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:nth-child(4)" && inPlay11.Evo != 1){
			inPlay11 = evo;
			inPlay11.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:last" && inPlay12.Evo != 1){
			inPlay12 = evo;
			inPlay12.Evo = 1;
		} else {
		}
	} else if (evo.Card == "Nidoking.jpg" && card.Card == "NidoranM.jpg") {
		baseNidorino = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Nidoking.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#player .active" && inPlay7.Evo != 1){
			inPlay7 = evo;
			inPlay7.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:first" && inPlay8.Evo != 1){
			inPlay8 = evo;
			inPlay8.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(2)" && inPlay9.Evo != 1){
			inPlay9 = evo;
			inPlay9.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(3)" && inPlay10.Evo != 1){
			inPlay10 = evo;
			inPlay10.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:nth-child(4)" && inPlay11.Evo != 1){
			inPlay11 = evo;
			inPlay11.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:last" && inPlay12.Evo != 1){
			inPlay12 = evo;
			inPlay12.Evo = 1;
		} else {
		}
	} else if (evo.Card == "Poliwrath.jpg" && card.Card == "Poliwag.jpg") {
		basePoliwhirl = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Poliwrath.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#player .active" && inPlay7.Evo != 1){
			inPlay7 = evo;
			inPlay7.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:first" && inPlay8.Evo != 1){
			inPlay8 = evo;
			inPlay8.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(2)" && inPlay9.Evo != 1){
			inPlay9 = evo;
			inPlay9.Evo = 1;
		} else if (spot.selector == "#player .benchPoke:nth-child(3)" && inPlay10.Evo != 1){
			inPlay10 = evo;
			inPlay10.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:nth-child(4)" && inPlay11.Evo != 1){
			inPlay11 = evo;
			inPlay11.Evo = 1;
		}  else if (spot.selector == "#player .benchPoke:last" && inPlay12.Evo != 1){
			inPlay12 = evo;
			inPlay12.Evo = 1;
		} else {
		}
	} else {
		alert("That is not a matching evolution card!");
	}
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
	$('.card').attr('onClick', 'largeCard(this)');
}

function pokemonTrader(card){
	index = playerInHand.indexOf(card);
	playerInHand.splice(index, 1);
	playerDeck.splice(0, 0, card);
	alert("Choose a Pokemon card from your deck to put into your hand.");
	$('.inPlayerHand').empty();
	for (i=0; i < playerDeck.length; i++){
		$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerDeck[i].Card + '" class="card" onClick="pokemonTrader2(playerDeck[' + i + '])" />');
	}
}

function pokemonTrader2(card){
	index = playerDeck.indexOf(card);
	playerDeck.splice(index, 1);
	playerInHand.splice(0, 0, card);
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
		$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
}

function potion(card){
	if (card == inPlay7){
		playerActiveDamage = playerActiveDamage - 20;
	} else if (card == inPlay8){
		playerBench1Damage = playerBench1Damage - 20;
	} else if (card == inPlay9){
		playerBench2Damage = playerBench2Damage - 20;
	} else if (card == inPlay10){
		playerBench3Damage = playerBench3Damage - 20;
	} else if (card == inPlay11){
		playerBench4Damage = playerBench4Damage - 20;
	} else if (card == inPlay12){
		playerBench5Damage = playerBench5Damage - 20;
	}
}

function scoopUp(card){
	card = card;
	if ($('#player .benchPoke').length > 0){
		if(card == inPlay7){
			playerInHand.splice(0, 0, inPlay7);
			$('#player .active').empty();
			inPlay7 = "";
			// function to change active with benched (like after a knockout) goes here.
		} else if (card == inPlay8){
			playerInHand.splice(0, 0, inPlay8);
			$('#player .benchPoke:first').empty();
			inPlay8 = "";
		} else if (card == inPlay9){
			playerInHand.splice(0, 0, inPlay9);
			$('#player .benchPoke:nth-child(2)').empty();
			inPlay9 = "";
		} else if (card == inPlay10){
			playerInHand.splice(0, 0, inPlay10);
			$('#player .benchPoke:nth-child(3)').empty();
			inPlay10 = "";
		} else if (card == inPlay11){
			playerInHand.splice(0, 0, inPlay11);
			$('#player .benchPoke:nth-child(4)').empty();
			inPlay11 = "";
		} else if (card == inPlay12){
			playerInHand.splice(0, 0, inPlay12);
			$('#player .benchPoke:last').empty();
			inPlay12 = "";
		} else {
			alert("That is not one of your Pokemon!");
		}
	} else {
		alert("You cannot scoop up your only Pokemon!");
	}
}

function switchFunc(card){
	if (card == inPlay8){
		inPlay8 = temp;
		inPlay7 = inPlay8;
		temp = inPlay7;
		$('#temp').append($('#player .active'));
		$('#player .active').append($('#player .benchPoke:first'));
		$('#player .benchPoke:first').append($('#temp'));
	} else if (card == inPlay9){
		inPlay9 = temp;
		inPlay7 = inPlay9;
		temp = inPlay7;
		$('#temp').append($('#player .active'));
		$('#player .active').append($('#player .benchPoke:first'));
		$('#player .benchPoke:first').append($('#temp'));
	} else if (card == inPlay10){
		inPlay10 = temp;
		inPlay7 = inPlay10;
		temp = inPlay7;
		$('#temp').append($('#player .active'));
		$('#player .active').append($('#player .benchPoke:first'));
		$('#player .benchPoke:first').append($('#temp'));
	} else if (card == inPlay11){
		inPlay11 = temp;
		inPlay7 = inPlay11;
		temp = inPlay7;
		$('#temp').append($('#player .active'));
		$('#player .active').append($('#player .benchPoke:first'));
		$('#player .benchPoke:first').append($('#temp'));
	} else if (card == inPlay12){
		inPlay12 = temp;
		inPlay7 = inPlay12;
		temp = inPlay7;
		$('#temp').append($('#player .active'));
		$('#player .active').append($('#player .benchPoke:first'));
		$('#player .benchPoke:first').append($('#temp'));
	} else {
		alert("That is not one of your Pokemon!");
	}
}
