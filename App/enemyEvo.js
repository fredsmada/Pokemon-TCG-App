/* Mostly Enemy Evolutions */

/* Draw card functions */
function drawPlayerCard() {
	if (playerDeckCount > 0){
		playerDeckCount = playerDeckCount - 1;
		for (n = 0; n < playerDeckCount; n++){
			anewCard = playerDeck[0].Card;
			drawnCard = '<img src="" class="card" id="newCard" />';
			$('.inPlayerHand').append(drawnCard);
			$('.inPlayerHand #newCard').attr("src", "Cards/Base_Set/" + anewCard);
			$('.inPlayerHand .card').attr("onClick", "largeCard(this)");
			$('.inPlayerHand #newCard').removeAttr("id");
			playerInHand.push(playerDeck[0]);			
			playerDeck.splice(0, 1);
			break;
		}
		alert("You have drawn a card.");
	} else {
		alert("You are out of cards to draw! You have Lost the game!");
	}
}
function drawEnemyCard() {
	if (enemyDeckCount > 0){
		enemyDeckCount = enemyDeckCount - 1;
		for (n = 0; n < enemyDeckCount; n++){
			anewCard = enemyDeck[0].Card;
			drawnCard = '<img src="" class="card" id="newCard" />';
			$('.inEnemyHand').append(drawnCard);
			$('.inEnemyHand #newCard').attr("src", "Cards/Base_Set/" + anewCard);
			$('.inEnemyHand .card').attr("onClick", "largeCard(this)");
			$('.inEnemyHand #newCard').removeAttr("id");
			enemyInHand.push(enemyDeck[0]);
			enemyDeck.splice(0, 1);
			break;
		}
		alert("Computer has drawn a card.");
	} else {
		alert("Computer is out of cards to draw! You have Won the game!");
	}
}

function enemyEvolve(card){
	console.log("running Evo");
	card=card;
	index = enemyInHand.indexOf(card);
	if (card == enemyInPlay7  && enemyInPlay7.Evo !== 1){
		source = "Cards/Base_Set/" + enemyInPlay7.Card;
		spot = $('#enemy .active');
	} else if (card == enemyInPlay8  && enemyInPlay8.Evo !== 1){
		source = "Cards/Base_Set/" + enemyInPlay8.Card;
		spot = $('#enemy .benchPoke:first');
	} else if (card == enemyInPlay9  && enemyInPlay9.Evo !== 1){
		source = "Cards/Base_Set/" + enemyInPlay9.Card;
		spot = $('#enemy .benchPoke:nth-child(2)');
	} else if (card == enemyInPlay10  && enemyInPlay10.Evo !== 1){
		source = "Cards/Base_Set/" + enemyInPlay10.Card;
		spot = $('#enemy .benchPoke:nth-child(3)');
	} else if (card == enemyInPlay11  && enemyInPlay11.Evo !== 1){
		source = "Cards/Base_Set/" + enemyInPlay11.Card;
		spot = $('#enemy .benchPoke:nth-child(4)');
	} else if (card == enemyInPlay12  && enemyInPlay12.Evo !== 1){
		source = "Cards/Base_Set/" + enemyInPlay12.Card;
		spot = $('#enemy .benchPoke:last');
	} else {
		reset();
		alert("Either choose one of your Pokemon next time or none of your Pokemon can evolve this turn!");
		return;
	}
	evo = evo; card = card;
	index = enemyInHand.indexOf(evo);
	if (evo.Card == "Charmeleon.jpg" && card.Card == "Charmander.jpg") {

		source = "Cards/Base_Set/Charmeleon.jpg";
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Charizard.jpg" && card.Card == "Charmeleon.jpg") {
		baseCharmeleon = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Charizard.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	} else if (evo.Card == "Kadabra.jpg" && card.Card == "Abra.jpg") {
		baseAbra = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Kadabra.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	} else if (evo.Card == "Alakazam.jpg" && card.Card == "Kadabra.jpg") {
		baseKadabra = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Alakazam.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	} else if (evo.Card == "Arcanine.jpg" && card.Card == "Growlithe.jpg") {
		baseGrowlithe = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Arcanine.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Kakuna.jpg" && card.Card == "Weedle.jpg") {
		baseWeedle = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Kakuna.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	} else if (evo.Card == "Beedrill.jpg" && card.Card == "Kakuna.jpg") {
		baseKakuna = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Beedrill.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Wartortle.jpg" && card.Card == "Squirtle.jpg") {
		baseSquirtle = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Wartortle.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Blastoise.jpg" && card.Card == "Wartortle.jpg") {
		baseWartortle = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Blastoise.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Ivysaur.jpg" && card.Card == "Bulbasaur.jpg") {
		baseBulbasaur = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Ivysaur.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Venusaur.jpg" && card.Card == "Ivysaur.jpg") {
		baseIvysaur = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Venusaur.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Metapod.jpg" && card.Card == "Caterpie.jpg") {
		baseCaterpie = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Metapod.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Dewgong.jpg" && card.Card == "Seel.jpg") {
		baseSeel = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Dewgong.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Dugtrio.jpg" && card.Card == "Diglett.jpg") {
		baseDiglett = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Dugtrio.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Dragonair.jpg" && card.Card == "Dratini.jpg") {
		baseDratini = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Dragonair.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Electrode.jpg" && card.Card == "Voltorb.jpg") {
		baseVoltorb = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Electrode.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Haunter.jpg" && card.Card == "Gastly.jpg") {
		baseGastly = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Haunter.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Gyarados.jpg" && card.Card == "Magikarp.jpg") {
		baseMagikarp = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Gyarados.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Machoke.jpg" && card.Card == "Machop.jpg") {
		baseMachop = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Machoke.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Machamp.jpg" && card.Card == "Machoke.jpg") {
		baseMachoke = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Machamp.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Magneton.jpg" && card.Card == "Magnemite.jpg") {
		baseMagnemite = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Magneton.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Nidorino.jpg" && card.Card == "NidoranM.jpg") {
		baseNidoranM = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Nidorino.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Nidoking.jpg" && card.Card == "Nidorino.jpg") {
		baseNidorino = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Nidoking.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Ninetales.jpg" && card.Card == "Vulpix.jpg") {
		baseVulpix = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Ninetales.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Pidgeotto.jpg" && card.Card == "Pidgey.jpg") {
		basePidgey = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Pidgeotto.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Raichu.jpg" && card.Card == "Pikachu.jpg") {
		basePikachu = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Raichu.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Poliwhirl.jpg" && card.Card == "Poliwag.jpg") {
		basePoliwag = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Poliwhirl.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Poliwrath.jpg" && card.Card == "Poliwhirl.jpg") {
		basePoliwhirl = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Poliwrath.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Raticate.jpg" && card.Card == "Rattata.jpg") {
		baseRattata = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Raticate.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Starmie.jpg" && card.Card == "Staryu.jpg") {
		baseStaryu = card;
		enemyInHand.splice(index, 1);
		$('.inEnemyHand').empty();
		for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Starmie.jpg";
		
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />'); 
		if (spot.selector == "#enemy .active" && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:first" && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(2)" && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
		} else if (spot.selector == "#enemy .benchPoke:nth-child(3)" && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:nth-child(4)" && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
		}  else if (spot.selector == "#enemy .benchPoke:last" && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	} else {
		alert("That is not a matching evolution card!");
	}
	$('.inEnemyHand').empty();
	for (i=0; i < enemyInHand.length; i++){
			$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
	$('.card').attr('onClick', 'largeCard(this)');
}
