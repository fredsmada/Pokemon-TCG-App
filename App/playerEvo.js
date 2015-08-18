/*Mostly Player's Evolution */

// Pop-up available on Player's Turn
function playerPopup() {
	document.getElementById("light5").style.display="block";
	document.getElementById("fade").style.display="block";
}

// Function run when Add to Bench button is clicked
function addToBench() {
	if ($('#player .benchPoke .card').length < 5){
		alert("Choose a Pokemon to put on the Bench.");
		$('#exit, #exit2, .exit3').trigger('click');
		$('.handButton').trigger('click');
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="setBench(playerInHand[' + i + '])" />');
		}
	} else {
		alert("Your bench is already full you cannot add another Pokemon!");
	}
}

// Functions run when Evolve button is clicked
function evolve() {
	alert("Choose an evolution card you want to use.");
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
		$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="evolve2(playerInHand[' + i + '])" />');
	}
	$('#exit, #exit2, .exit3').trigger('click');
	$('.handButton').trigger('click');
}

function evolve2(card) {
	card = card;
	if (card.Stage == "stage1" || card.Stage == "stage2"){
		index = playerInHand.indexOf(card);
		alert("Choose a Pokemon in play to evolve.")
		$('#exit, #exit2, .exit3').trigger('click');
		if ($('#player .active .card').length > 0){
			$('#player .active .card').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay7)');
		} else if ($('#player .benchPoke:first').length > 0 && inPlay8.Evo !== 1){
			$('#player .benchPoke:first').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay8)');
		} else if ($('#player .benchPoke:nth-child(2)').length > 0 && inPlay9.Evo !== 1){
			$('#player .benchPoke:nth-child(2)').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay9)');
		} else if ($('#player .benchPoke:nth-child(3)').length > 0 && inPlay10.Evo !== 1){
			$('#player .benchPoke:nth-child(3)').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay10)');
		} else if ($('#player .benchPoke:nth-child(4)').length > 0 && inPlay11.Evo !== 1){
			$('#player .benchPoke:nth-child(4)').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay11)');
		} else if ($('#player .benchPoke:last').length > 0 && inPlay12.Evo !== 1){
			$('#player .benchPoke:last').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay12)');
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			reset();
			return;
		}
	} else {
		alert("That is not an evolution card!");
		evolve()
	}
}

// Actual function to evolve a Poke
function evolvePoke(evo, card){
	if (card == inPlay7  && inPlay7.Evo !== 1){
		source = "Cards/Base_Set/" + inPlay7.Card;
		spot = $('#player .active');
	} else if (card == inPlay8  && inPlay8.Evo !== 1){
		source = "Cards/Base_Set/" + inPlay8.Card;
		spot = $('#player .benchPoke:first');
	} else if (card == inPlay9  && inPlay9.Evo !== 1){
		source = "Cards/Base_Set/" + inPlay9.Card;
		spot = $('#player .benchPoke:nth-child(2)');
	} else if (card == inPlay10  && inPlay10.Evo !== 1){
		source = "Cards/Base_Set/" + inPlay10.Card;
		spot = $('#player .benchPoke:nth-child(3)');
	} else if (card == inPlay11  && inPlay11.Evo !== 1){
		source = "Cards/Base_Set/" + inPlay11.Card;
		spot = $('#player .benchPoke:nth-child(4)');
	} else if (card == inPlay12  && inPlay12.Evo !== 1){
		source = "Cards/Base_Set/" + inPlay12.Card;
		spot = $('#player .benchPoke:last');
	} else {
		reset();
		alert("Either choose one of your Pokemon next time or none of your Pokemon can evolve this turn!");
		return;
	}
	evo = evo; card = card;
	index = playerInHand.indexOf(evo);
	if (evo.Card == "Charmeleon.jpg" && card.Card == "Charmander.jpg") {

		source = "Cards/Base_Set/Charmeleon.jpg";
		spot.append('<img src="' + source + '" class="card" onClick="largeCard(this)" />');
		if (spot.selector == "#player .active" && inPlay7.Evo != 1){
			inPlay7 = evo;
			inPlay7.Evo = 1;
			baseCharmander = card;
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (spot.selector == "#player .benchPoke:first" && inPlay8.Evo != 1){
			inPlay8 = evo;
			inPlay8.Evo = 1;
			baseCharmander = card;
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (spot.selector == "#player .benchPoke:nth-child(2)" && inPlay9.Evo != 1){
			inPlay9 = evo;
			inPlay9.Evo = 1;
			baseCharmander = card;
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (spot.selector == "#player .benchPoke:nth-child(3)" && inPlay10.Evo != 1){
			inPlay10 = evo;
			inPlay10.Evo = 1;
			baseCharmander = card;
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (spot.selector == "#player .benchPoke:nth-child(4)" && inPlay11.Evo != 1){
			inPlay11 = evo;
			inPlay11.Evo = 1;
			baseCharmander = card;
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (spot.selector == "#player .benchPoke:last" && inPlay12.Evo != 1){
			inPlay12 = evo;
			inPlay12.Evo = 1;
			baseCharmander = card;
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Charizard.jpg" && card.Card == "Charmeleon.jpg") {
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	} else if (evo.Card == "Kadabra.jpg" && card.Card == "Abra.jpg") {
		baseAbra = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Kadabra.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	} else if (evo.Card == "Alakazam.jpg" && card.Card == "Kadabra.jpg") {
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	} else if (evo.Card == "Arcanine.jpg" && card.Card == "Growlithe.jpg") {
		baseGrowlithe = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Arcanine.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Kakuna.jpg" && card.Card == "Weedle.jpg") {
		baseWeedle = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Kakuna.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	} else if (evo.Card == "Beedrill.jpg" && card.Card == "Kakuna.jpg") {
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Wartortle.jpg" && card.Card == "Squirtle.jpg") {
		baseSquirtle = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Wartortle.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Blastoise.jpg" && card.Card == "Wartortle.jpg") {
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Ivysaur.jpg" && card.Card == "Bulbasaur.jpg") {
		baseBulbasaur = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Ivysaur.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Venusaur.jpg" && card.Card == "Ivysaur.jpg") {
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Metapod.jpg" && card.Card == "Caterpie.jpg") {
		baseCaterpie = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Metapod.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Dewgong.jpg" && card.Card == "Seel.jpg") {
		baseSeel = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Dewgong.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Dugtrio.jpg" && card.Card == "Diglett.jpg") {
		baseDiglett = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Dugtrio.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Dragonair.jpg" && card.Card == "Dratini.jpg") {
		baseDratini = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Dragonair.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Electrode.jpg" && card.Card == "Voltorb.jpg") {
		baseVoltorb = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Electrode.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Haunter.jpg" && card.Card == "Gastly.jpg") {
		baseGastly = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Haunter.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Gyarados.jpg" && card.Card == "Magikarp.jpg") {
		baseMagikarp = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Gyarados.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Machoke.jpg" && card.Card == "Machop.jpg") {
		baseMachop = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Machoke.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Machamp.jpg" && card.Card == "Machoke.jpg") {
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Magneton.jpg" && card.Card == "Magnemite.jpg") {
		baseMagnemite = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Magneton.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Nidorino.jpg" && card.Card == "NidoranM.jpg") {
		baseNidoranM = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Nidorino.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Nidoking.jpg" && card.Card == "Nidorino.jpg") {
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Ninetales.jpg" && card.Card == "Vulpix.jpg") {
		baseVulpix = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Ninetales.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		}
	}  else if (evo.Card == "Pidgeotto.jpg" && card.Card == "Pidgey.jpg") {
		basePidgey = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Pidgeotto.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Raichu.jpg" && card.Card == "Pikachu.jpg") {
		basePikachu = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Raichu.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Poliwhirl.jpg" && card.Card == "Poliwag.jpg") {
		basePoliwag = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Poliwhirl.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Poliwrath.jpg" && card.Card == "Poliwhirl.jpg") {
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Raticate.jpg" && card.Card == "Rattata.jpg") {
		baseRattata = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Raticate.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
		} 
	}  else if (evo.Card == "Starmie.jpg" && card.Card == "Staryu.jpg") {
		baseStaryu = card;
		playerInHand.splice(index, 1);
		$('.inPlayerHand').empty();
		for (i=0; i < playerInHand.length; i++){
			$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
		
		source = "Cards/Base_Set/Starmie.jpg";
		
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
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
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
