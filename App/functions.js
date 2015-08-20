/* Functions for the Poke Game */

/* Card id's */
/* Array= Card, PokeStage, Type, HP, Power, Attack1, Attack2, Weakness, Resistance, Retreat Cost */
var Abra = {Card: "Abra.jpg", Stage: "basic", Type: "P", HP: 30, PokePower: "", Attack1: "Psyshock", Attack2: "", Weak: "P", Resist: "", Retreat: 0, Evo: 0};
var Alakazam = {Card: "Alakazam.jpg", Stage: "stage2", Type: "P", HP: 80, PokePower: "Damage_Swap", Attack1: "Confuse_Ray", Attack2: "", Weak: "P", Resist: "", Retreat: 3, Evo: 0};
var Arcanine = {Card: "Arcanine.jpg", Stage: "stage1", Type: "R", HP: 100, PokePower: "", Attack1: "Flamethrower", Attack2: "Take_Down", Weak: "W", Resist: "", Retreat: 3, Evo: 0};
var Beedrill = {Card: "Beedrill.jpg", Stage: "stage2", Type: "G", HP: 80, PokePower: "", Attack1: "Twineedle", Attack2: "Poison_Sting", Weak: "R", Resist: "F", Retreat: 0, Evo: 0};
var Bill = {Card: "Bill.jpg", Stage: "trainer"};
var Blastoise = {Card: "Blastoise.jpg", Stage: "stage2", Type: "W", HP: 100, PokePower: "Rain_Dance", Attack1: "Hydro_Pump", Attack2: "", Weak: "L", Resist: "", Retreat: 3, Evo: 0};
var Bulbasaur = {Card: "Bulbasaur.jpg", Stage: "basic", Type: "G", HP: 40, PokePower: "", Attack1: "Leech_Seed", Attack2: "", Weak: "R", Resist: "", Retreat: 1, Evo: 0};
var Caterpie = {Card: "Caterpie.jpg", Stage: "basic", Type: "G", HP: 40, PokePower: "", Attack1: "String_Shot", Attack2: "", Weak: "R", Resist: "", Retreat: 1, Evo: 0};
var Chansey = {Card: "Chansey.jpg", Stage: "basic", Type: "C", HP: 120, PokePower: "", Attack1: "Scrunch", Attack2: "Double_Edge", Resist: "P", Weak: "F", Retreat: 1, Evo: 0};
var Charizard = {Card: "Charizard.jpg", Stage: "stage2", Type: "R", HP: 120, PokePower: "Energy_Burn", Attack1: "Fire_Spin", Attack2: "", Weak: "W", Resist: "F", Retreat: 3, Evo: 0};
var Charmander = {Card: "Charmander.jpg", Stage: "basic", Type: "R", HP: 50, PokePower: "", Attack1: "Scratch", Attack2: "Ember", Weak: "W", Resist: "", Retreat: 1, Evo: 0};
var Charmeleon = {Card: "Charmeleon.jpg", Stage: "stage1", Type: "R", HP: 80, PokePower: "", Attack1: "Slash", Attack2: "Flamethrower", Weak: "W", Resist: "", Retreat: 1, Evo: 0};
var Clefairy_Doll = {Card: "Clefairy_Doll.jpg", Stage: "trainer"};
var Clefairy = {Card: "Clefairy.jpg", Stage: "basic", Type: "C", HP: 40, PokePower: "", Attack1: "Sing", Attack2: "Metronome", Resist: "F", Weak: "P", Retreat: 1, Evo: 0};
var Computer_Search = {Card: "Computer_Search.jpg", Stage: "trainer"};
var Defender = {Card: "Defender.jpg", Stage: "trainer"};
var Devolution_Spray = {Card: "Devolution_Spray.jpg", Stage: "trainer"};
var Dewgong = {Card: "Dewgong.jpg", Stage: "stage1", Type: "W", HP: 80, PokePower: "", Attack1: "Aurora_Beam", Attack2: "Ice_Beam", Weak: "L", Resist: "", Retreat: 3, Evo: 0};
var Diglett = {Card: "Diglett.jpg", Stage: "basic", Type: "F", HP: 30, PokePower: "", Attack1: "Dig", Attack2: "Mud_Slap", Weak: "G", Resist: "L", Retreat: 0, Evo: 0};
var Doduo = {Card: "Doduo.jpg", Stage: "basic", Type: "C", HP: 50, PokePower: "", Attack1: "Fury_Attack", Attack2: "", Weak: "L", Resist: "F", Retreat: 0, Evo: 0};
var Double_Colorless_Energy = {Card: "Double_Colorless_Energy.jpg", Stage: "specialEnergy", Type: "CC"};
var Dragonair = {Card: "Dragonair.jpg", Stage: "stage1", Type: "C", HP: 80, PokePower: "", Attack1: "Slam", Attack2: "Hyper_Beam", Weak: "", Resist: "P", Retreat: 2, Evo: 0};
var Dratini = {Card: "Dratini.jpg", Stage: "basic", Type: "C", HP: 40, PokePower: "", Attack1: "Pound", Attack2: "", Weak: "", Resist: "P", Retreat: 1, Evo: 0};
var Drowzee = {Card: "Drowzee.jpg", Stage: "basic", Type: "P", HP: 50, PokePower: "", Attack1: "Pound", Attack2: "Confuse_Ray_Drowzee", Weak: "P", Resist: "", Retreat: 1, Evo: 0};
var Dugtrio = {Card: "Dugtrio.jpg", Stage: "stage1", Type: "F", HP: 70, PokePower: "", Attack1: "Slash_Dugtrio", Attack2: "Earthquake", Weak: "G", Resist: "L", Retreat: 2, Evo: 0};
var Electabuzz = {Card: "Electabuzz.jpg", Stage: "basic", Type: "L", HP: 70, PokePower: "", Attack1: "Thundershock", Attack2: "Thunderpunch", Resist: "F", Resist: "", Retreat: 2, Evo: 0};
var Electrode = {Card: "Electrode.jpg", Stage: "stage1", Type: "L", HP: 80, PokePower: "Buzzap", Attack1: "Electric_Shock", Attack2: "", Weak: "F", Resist: "", Retreat: 1, Evo: 0};
var Energy_Removal = {Card: "Energy_Removal.jpg", Stage: "trainer"};
var Energy_Retrieval = {Card: "Energy_Retrieval.jpg", Stage: "trainer"};
var Farfetchd = {Card: "Farfetchd.jpg", Stage: "basic", Type: "C", HP: 50, PokePower: "", Attack1: "Leek_Slap", Attack2: "Pot_Smash", Weak: "L", Resist: "F", Retreat: 1, Evo: 0};
window.leekSlapCounter = 0;
var Fighting_Energy = {Card: "Fighting_Energy.jpg", Stage: "energy", Type: "F"};
var Fire_Energy = {Card: "Fire_Energy.jpg", Stage: "energy", Type: "R"};
var Full_Heal = {Card: "Full_Heal.jpg", Stage: "trainer"};
var Gastly = {Card: "Gastly.jpg", Stage: "basic", Type: "P", HP: 30, PokePower: "", Attack1: "Sleeping_Gas", Attack2: "Destiny_Bond", Weak: "", Resist: "F", Retreat: 0, Evo: 0};
var Grass_Energy = {Card: "Grass_Energy.jpg", Stage: "energy", Type: "G"};
var Growlithe = {Card: "Growlithe.jpg", Stage: "basic", Type: "R", HP: 60, PokePower: "", Attack1: "Flare", Attack2: "", Weak: "W", Resist: "", Retreat: 1, Evo: 0};
var Gust_of_Wind = {Card: "Gust_of_Wind.jpg", Stage: "trainer"};
var Gyarados = {Card: "Gyarados.jpg", Stage: "stage1", Type: "W", HP: 100, PokePower: "", Attack1: "Dragon_Rage", Attack2: "Bubblebeam", Weak: "G", Resist: "F", Retreat: 3, Evo: 0};
var Haunter = {Card: "Haunter.jpg", Stage: "stage1", Type: "P", HP: 60, PokePower: "", Attack1: "Hypnosis", Attack2: "Dream_Eater", Resist: "", Resist: "F", Retreat: 1, Evo: 0};
var Hitmonchan = {Card: "Hitmonchan.jpg", Stage: "basic", Type: "F", HP: 70, PokePower: "", Attack1: "Jab", Attack2: "Special_Punch", Weak: "P", Resist: "", Retreat: 2, Evo: 0};
var Impostor_Professor_Oak = {Card: "Impostor_Professor_Oak.jpg", Stage: "trainer"};
var Item_Finder = {Card: "Item_Finder.jpg", Stage: "trainer"};
var Ivysaur = {Card: "Ivysaur.jpg", Stage: "stage1", Type: "G", HP: 60, PokePower: "", Attack1: "Vine_Whip", Attack2: "Poisonpowder",Weak: "R", Resist: "", Retreat: 1, Evo: 0};
var Jynx = {Card: "Jynx.jpg", Stage: "basic", Type: "P", HP: 70, PokePower: "", Attack1: "Doubleslap", Attack2: "Meditate", Weak: "P", Resist: "", Retreat: 2, Evo: 0};
var Kadabra = {Card: "Kadabra.jpg", Stage: "stage1", Type: "P", HP: 60, PokePower: "", Attack1: "Recover", Attack2: "Super_Psy", Weak: "P", Resist: "", Retreat: 3, Evo: 0};
var Kakuna = {Card: "Kakuna.jpg", Stage: "stage1", Type: "G", HP: 80, PokePower: "", Attack1: "Stiffen", Attack2: "Poisonpowder_Kakuna",Weak: "R", Resist: "", Retreat: 2, Evo: 0};
var Koffing = {Card: "Koffing.jpg", Stage: "basic", Type: "G", HP: 50, PokePower: "", Attack1: "Foul_Gas", Attack2: "", Weak: "P", Resist: "", Retreat: 1, Evo: 0};
var Lass = {Card: "Lass.jpg", Stage: "trainer"};
var Lightning_Energy = {Card: "Lightning_Energy.jpg", Stage: "energy", Type: "L"};
var Machamp = {Card: "Machamp.jpg", Stage: "stage2", Type: "F", HP: 100, PokePower: "Strikes_Back", Attack1: "Seismic_Toss", Attack2: "", Weak: "P", Resist: "", Retreat: 3, Evo: 0};
var Machoke = {Card: "Machoke.jpg", Stage: "stage1", Type: "F", HP: 80, PokePower: "", Attack1: "Karate_Chop", Attack2: "Submission", Weak: "P", Resist: "", Retreat: 3, Evo: 0};
var Machop = {Card: "Machop.jpg", Stage: "basic", Type: "F", HP: 50, PokePower: "", Attack1: "Low_Kick", Attack2: "", Weak: "P", Resist: "", Retreat: 1, Evo: 0};
var Magikarp = {Card: "Magikarp.jpg", Stage: "basic", Type: "W", HP: 30, PokePower: "", Attack1: "Tackle", Attack2: "Flail", Weak: "L", Resist: "", Retreat: 1, Evo: 0};
var Magmar = {Card: "Magmar.jpg", Stage: "basic", Type: "R", HP: 50, PokePower: "", Attack1: "Fire_Punch", Attack2: "Flamethrower", Weak: "W", Resist: "", Retreat: 2, Evo: 0};
var Magnemite = {Card: "Magnemite.jpg", Stage: "basic", Type: "L", HP: 40, PokePower: "", Attack1: "Thunder_Wave", Attack2: "Selfdestruct", Weak: "F", Resist: "", Retreat: 1, Evo: 0};
var Magneton = {Card: "Magneton.jpg", Stage: "stage1", Type: "L", HP: 60, PokePower: "", Attack1: "Thunder_Wave_Magneton", Attack2: "Selfdestruct_Magneton", Weak: "F", Resist: "", Retreat: 1, Evo: 0};
var Maintenance = {Card: "Maintenance.jpg", Stage: "trainer"};
var Metapod = {Card: "Metapod.jpg", Stage: "stage1", Type: "G", HP: 70, PokePower: "", Attack1: "Stiffen", Attack2: "Stun_Spore",Weak: "R", Resist: "", Retreat: 2, Evo: 0};
var Mewtwo = {Card: "Mewtwo.jpg", Stage: "basic", Type: "P", HP: 60, PokePower: "", Attack1: "Psychic", Attack2: "Barrier", Weak: "P", Resist: "", Retreat: 3, Evo: 0};
var Nidoking = {Card: "Nidoking.jpg", Stage: "stage2", Type: "G", HP: 90, PokePower: "", Attack1: "Thrash", Attack2: "Toxic", Weak: "P", Resist: "", Retreat: 3, Evo: 0};
var NidoranM = {Card: "NidoranM.jpg", Stage: "basic", Type: "G", HP: 40, PokePower: "", Attack1: "Horn_Hazard", Attack2: "", Weak: "P", Resist: "", Retreat: 1, Evo: 0};
var Nidorino = {Card: "Nidorino.jpg", Stage: "stage1", Type: "G", HP: 60, PokePower: "", Attack1: "Double_Kick", Attack2: "Horn_Drill", Weak: "P", Resist: "", Retreat: 1, Evo: 0};
var Ninetales = {Card: "Ninetales.jpg", Stage: "stage1", Type: "R", HP: 80, PokePower: "", Attack1: "Lure", Attack2: "Fire_Blast", Weak: "W", Resist: "", Retreat: 1, Evo: 0};
var Onix = {Card: "Onix.jpg", Stage: "basic", Type: "F", HP: 90, PokePower: "", Attack1: "Rock_Throw", Attack2: "Harden", Weak: "G", Resist: "", Retreat: 3, Evo: 0};
var Pidgeotto = {Card: "Pidgeotto.jpg", Stage: "stage1", Type: "C", HP: 60, PokePower: "", Attack1: "Whirlwind", Attack2: "Mirror_Move", Weak: "L", Resist: "F", Retreat: 1, Evo: 0};
var Pidgey = {Card: "Pidgey.jpg", Stage: "basic", Type: "C", HP: 40, PokePower: "", Attack1: "Whirlwind_Pidgey", Attack2: "", Weak: "L", Resist: "F", Retreat: 1, Evo: 0};
var Pikachu = {Card: "Pikachu.jpg", Stage: "basic", Type: "L", HP: 40, PokePower: "", Attack1: "Gnaw", Attack2: "Thunder_Jolt", Weak: "F", Resist: "", Retreat: 1, Evo: 0};
var PlusPower = {Card: "PlusPower.jpg", Stage: "trainer"};
var Pokedex = {Card: "Pokedex.jpg", Stage: "trainer"};
var Pokemon_Breeder = {Card: "Pokemon_Breeder.jpg", Stage: "trainer"};
var Pokemon_Center = {Card: "Pokemon_Center.jpg", Stage: "trainer"};
var Pokemon_Flute = {Card: "Pokemon_Flute.jpg", Stage: "trainer"};
var Pokemon_Trader = {Card: "Pokemon_Trader.jpg", Stage: "trainer"};
var Poliwag = {Card: "Poliwag.jpg", Stage: "basic", Type: "W", HP: 40, PokePower: "", Attack1: "Water_Gun", Attack2: "", Weak: "G", Resist: "", Retreat: 1, Evo: 0};
var Poliwhirl = {Card: "Poliwhirl.jpg", Stage: "stage1", Type: "W", HP: 60, PokePower: "", Attack1: "Amnesia", Attack2: "Doubleslap_Poliwhirl", Weak: "G", Resist: "", Retreat: 1, Evo: 0};
var Poliwrath = {Card: "Poliwrath.jpg", Stage: "stage2", Type: "W", HP: 90, PokePower: "", Attack1: "Water_Gun_Poliwrath", Attack2: "Whirlpool", Weak: "G", Resist: "", Retreat: 3, Evo: 0};
var Ponyta = {Card: "Ponyta.jpg", Stage: "basic", Type: "R", HP: 40, PokePower: "", Attack1: "Smash_Kick", Attack2: "Flame_Tail", Weak: "W", Resist: "", Retreat: 1, Evo: 0};
var Porygon = {Card: "Porygon.jpg", Stage: "basic", Type: "C", HP: 30, PokePower: "", Attack1: "Conversion_1", Attack2: "Conversion_2", Resist: "P", Weak: "F", Retreat: 1, Evo: 0};
var Potion = {Card: "Potion.jpg", Stage: "trainer"};
var Professor_Oak = {Card: "Professor_Oak.jpg", Stage: "trainer"};
var Psychic_Energy = {Card: "Psychic_Energy.jpg", Stage: "energy", Type: "P"};
var Raichu = {Card: "Raichu.jpg", Stage: "stage1", Type: "L", HP: 80, PokePower: "", Attack1: "Agility", Attack2: "Thunder", Weak: "F", Resist: "", Retreat: 1, Evo: 0};
var Raticate = {Card: "Raticate.jpg", Stage: "stage1", Type: "C", HP: 60, PokePower: "", Attack1: "Bite", Attack2: "Super_Fang", Weak: "F", Resist: "P", Retreat: 1, Evo: 0};
var Rattata = {Card: "Rattata.jpg", Stage: "basic", Type: "C", HP: 30, PokePower: "", Attack1: "Bite", Attack2: "", Weak: "F", Resist: "P", Retreat: 0, Evo: 0};
var Revive = {Card: "Revive.jpg", Stage: "trainer"};
var Sandshrew = {Card: "Sandshrew.jpg", Stage: "basic", Type: "F", HP: 40, PokePower: "", Attack1: "Sand-attack", Attack2: "", Weak: "G", Resist: "L", Retreat: 1, Evo: 0};
var Scoop_Up = {Card: "Scoop_Up.jpg", Stage: "trainer"};
var Seel = {Card: "Seel.jpg", Stage: "basic", Type: "W", HP: 60, PokePower: "", Attack1: "Headbutt", Attack2: "", Weak: "L", Resist: "", Retreat: 1, Evo: 0};
var Squirtle = {Card: "Squirtle.jpg", Stage: "basic", Type: "W", HP: 40, PokePower: "", Attack1: "Bubble", Attack2: "Withdraw", Weak: "L", Resist: "", Retreat: 1, Evo: 0};
var Starmie = {Card: "Starmie.jpg", Stage: "stage1", Type: "W", HP: 60, PokePower: "", Attack1: "Recover_Starmie", Attack2: "Star_Freeze", Weak: "L", Resist: "", Retreat: 1, Evo: 0};
var Staryu = {Card: "Staryu.jpg", Stage: "basic", Type: "W", HP: 40, PokePower: "", Attack1: "Slap", Attack2: "", Weak: "L", Resist: "", Retreat: 1};
var Super_Energy_Removal = {Card: "Super_Energy_Removal.jpg", Stage: "trainer"};
var Super_Potion = {Card: "Super_Potion.jpg", Stage: "trainer"};
var Switch = {Card: "Switch.jpg", Stage: "trainer"};
var Tangela = {Card: "Tangela.jpg", Stage: "basic", Type: "G", HP: 50, PokePower: "", Attack1: "Bind", Attack2: "Poisonpowder_Tangela",Weak: "R", Resist: "", Retreat: 2, Evo: 0};
var Venusaur = {Card: "Venusaur.jpg", Stage: "stage2", Type: "G", HP: 100, PokePower: "Energy_Trans", Attack1: "Solarbeam", Attack2: "",Weak: "R", Resist: "", Retreat: 2, Evo: 0};
var Voltorb = {Card: "Voltorb.jpg", Stage: "basic", Type: "L", HP: 40, PokePower: "", Attack1: "Tackle_Voltorb", Attack2: "", Weak: "F", Resist: "", Retreat: 1, Evo: 0};
var Vulpix = {Card: "Vulpix.jpg", Stage: "basic", Type: "R", HP: 40, PokePower: "", Attack1: "Confuse_Ray_Vulpix", Attack2: "", Weak: "W", Resist: "", Retreat: 1, Evo: 0};
var Wartortle = {Card: "Wartortle.jpg", Stage: "stage1", Type: "W", HP: 70, PokePower: "", Attack1: "Withdraw", Attack2: "Bite_Wartortle", Weak: "L", Resist: "", Retreat: 1, Evo: 0};
var Water_Energy = {Card: "Water_Energy.jpg", Stage: "energy", Type: "W"};
var Weedle = {Card: "Weedle.jpg", Stage: "basic", Type: "G", HP: 40, PokePower: "", Attack1: "Poison_Sting_Weedle", Attack2: "", Weak: "R", Resist: "", Retreat: 1, Evo: 0};
var Zapdos = {Card: "Zapdos.jpg", Stage: "basic", Type: "L", HP: 90, PokePower: "", Attack1: "Thunder_Zapdos", Attack2: "Thunderbolt", Weak: "", Resist: "F", Retreat: 3, Evo: 0};

/* Clicking on any card allows a large view of the card. */
function largeCard(element) {
	var exact = element.src;
	document.getElementById("light2").style.display="block";
	document.getElementById("fade").style.display="block";
	
	var img = new Image();
	img.src = exact;
	document.getElementById("light2").appendChild(img);
}

/* Remove card from lightbox on exit */
function removeCard() {
	if ($('#light2').css('display') == 'none') {
		$('#light2 img').remove();
	}
	if ($('#light5').css('display') == 'none') {
		$('#light5 img').remove();
	}
}

/* Set Game Variables */
var deckCount = 60;
/* Set Available Decks */
var grassDeck = [Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Grass_Energy, Double_Colorless_Energy, Double_Colorless_Energy,Bulbasaur, Bulbasaur, Bulbasaur, Bulbasaur, Ivysaur, Ivysaur, Ivysaur, Venusaur, Venusaur, Venusaur, NidoranM, NidoranM, NidoranM, Nidorino, Nidorino, Nidoking, Nidoking, Chansey, Chansey, Tangela, Weedle, Weedle, Weedle, Kakuna, Kakuna, Beedrill, Beedrill, Farfetchd, Bill, Bill, Professor_Oak, Energy_Retrieval, Potion, Potion, Gust_of_Wind, Switch, Professor_Oak, Pokemon_Breeder, Pokemon_Trader, Pokemon_Trader, Pokemon_Trader];

var fireDeck = [Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Fire_Energy, Double_Colorless_Energy, Double_Colorless_Energy, Double_Colorless_Energy, Double_Colorless_Energy, Charmander, Charmander, Charmander, Charmander, Charmeleon, Charmeleon, Charmeleon, Charizard, Charizard, Charizard, Vulpix, Vulpix, Vulpix, Vulpix, Ninetales, Ninetales, Ninetales, Chansey, Chansey, Chansey, Ponyta, Magmar, Magmar, Pokemon_Trader, Pokemon_Trader, Pokemon_Trader, Energy_Retrieval, Energy_Retrieval, Energy_Retrieval, Professor_Oak, Professor_Oak, Revive, Revive, Bill, Bill, Energy_Removal, Energy_Removal, Pokemon_Breeder, Scoop_Up];

var waterDeck = [Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Water_Energy, Double_Colorless_Energy, Double_Colorless_Energy, Double_Colorless_Energy, Squirtle, Squirtle, Squirtle, Squirtle, Wartortle, Wartortle, Wartortle, Blastoise, Blastoise, Blastoise, Poliwag, Poliwag, Poliwag, Poliwag, Poliwhirl, Poliwhirl, Poliwhirl, Poliwrath, Poliwrath, Poliwrath, Chansey, Chansey, Seel, Seel, Seel, Dewgong, Dewgong, Pokemon_Trader, Pokemon_Trader, Pokemon_Trader, Bill, Bill, Potion, Potion, Pokemon_Breeder, Energy_Retrieval, Computer_Search, Professor_Oak, Professor_Oak, Switch];

/* Game Start */

$(document).ready(function(){
	$("#startButton").trigger("click");
});

/* Deck Picker */
function deckPicker(){
	document.getElementById("light3").style.display="block";
	document.getElementById("fade").style.display="block";
}

window.playerDeck = [];

function deckPickerGrass(deck){	
	window.playerDeck = "";
	if (deck === grassDeck){
		window.playerDeck = grassDeck;
		return playerDeck;
	} else {
	}
	populateDeck(grassDeck);
	document.getElementById("light3").style.display="none";
	document.getElementById("fade").style.display="none";
}

function deckPickerFire(deck){
	window.playerDeck = "";
	if (deck === fireDeck){
		window.playerDeck = fireDeck;
		return playerDeck;
	} else {
	}
	populateDeck(fireDeck);
	document.getElementById("light3").style.display="none";
	document.getElementById("fade").style.display="none";
}

function deckPickerWater(deck){
	window.playerDeck = "";
	if (deck === waterDeck){
		window.playerDeck = waterDeck;
		return playerDeck;
	} else {
	}
	populateDeck(waterDeck);
	document.getElementById("light3").style.display="none";
	document.getElementById("fade").style.display="none";
}

/* This actually sets player's deck */
$('#grass, #fire, #water').click(function(){
	if (this.id == 'grass'){
		window.playerDeck = grassDeck;
		return playerDeck;
	} else if (this.id == 'fire'){
		window.playerDeck = fireDeck;
		return playerDeck;
	} else if (this.id == 'water'){
		window.playerDeck = waterDeck;
		return playerDeck;
	}
});

/* Randomly choose a deck for enemy */
var enemyPicker = Array("", grassDeck, fireDeck, waterDeck);
var enemyDeckRandom = Math.floor((Math.random()*3)+1);
var enemyDeck = enemyPicker[enemyDeckRandom];

/* General game and card flow */


/* Keep track of prize cards */
var enemyPrizeCount = $('#enemy .prize .card').length;
var playerPrizeCount = $('#player .prize .card').length;

/* Save # of cards in discard pile */
var enemyDiscardSize = $('#enemy #discard .card').length;
var playerDiscardSize = $('#player #discard .card').length;

/* Shuffle decks */
function shuffleDeck(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/* Starting variables */
window.attacksEnergy1 = ["Psyshock", "String_Shot", "Scratch", "Sing", "Dig", "Fury_Attack", "Pound", "Thundershock", "Leek_Slap", "Sleeping_Gas", "Hypnosis", "Jab", "Doubleslap", "Low_Kick", "Tackle", "Flail", "Thunder_Wave", "Horn_Hazard", "Rock_Throw", "Gnaw", "Water_Gun", "Conversion_1", "Bite", "Sand_Attack", "Headbutt", "Bubble", "Slap", "Tackle_Voltorb", "Poison_Sting_Weedle"];
window.attacksEnergy2 = ["Leech_Seed", "Scrunch", "Ember", "Mud_Slap", "Confuse_Ray_Drowzee", "Thunderpunch", "Destiny_Bond", "Flare", "Dream_Eater", "Recover", "Stiffen", "Poisonpowder_Kakuna", "Foul_Gas", "Fire_Punch", "Selfdestruct", "Stun_Spore", "Psychic", "Barrier", "Lure", "Harden", "Whirlwind", "Whirlwind_Pidgey", "Thunder_Jolt", "Amnesia", "Smash_Kick", "Flame_Tail", "Conversion_2", "Withdraw", "Recover_Starmie", "Bind", "Confuse_Ray_Vulpix"];
window.attacksEnergy3 = ["Confuse_Ray", "Flamethrower", "Twineedle", "Poison_Sting", "Hydro_Pump", "Slash", "Metronome", "Aurora_Beam", "Slam", "Slash_Dugtrio", "Electric_Shock", "Pot_Smash", "Dragon_Rage", "Special_Punch", "Vine_Whip", "Poisonpowder", "Meditate", "Super_Psy", "Karate_Chop", "Thunder_Wave_Magneton", "Thrash", "Toxic", "Double_Kick", "Mirror_Move", "Doubleslap_Poliwhirl", "Water_Gun_Poliwrath", "Agility", "Super_Fang", "Star_Freeze", "Poisonpowder_Tangela", "Bite_Wartortle"];
window.attacksEnergy4 = ["Take_Down", "Double_Edge", "Fire_Spin", "Ice_Beam", "Hyper_Beam", "Earthquake", "Bubblebeam", "Seismic_Toss", "Submission", "Selfdestruct_Magneton", "Horn_Drill", "Fire_Blast", "Whirlpool", "Thunder", "Solarbeam", "Thunder_Zapdos", "Thunderbolt"];
window.enemyStartingHand = 7;
window.enemyStartingPrizes = 6;
window.enemyHand = enemyStartingHand;
window.enemyDeckCount = 60 - enemyStartingHand - enemyStartingPrizes;
window.playerStartingHand = 7;
window.playerStartingPrizes = 6;
window.playerHand = playerStartingHand;
window.playerDeckCount = 60 - playerStartingHand - playerStartingPrizes;
window.playerNoDamageFlag = 0;
window.enemyNoDamageFlag = 0;
window.attachedEnergy = 0;
window.evoFlag = 0;
window.c = 0;
window.playerDiscardPile = [];
window.playerActiveAttachedEnergy = [];
window.playerBench1AttachedEnergy = [];
window.playerBench2AttachedEnergy = [];
window.playerBench3AttachedEnergy = [];
window.playerBench4AttachedEnergy = [];
window.playerBench5AttachedEnergy = [];
window.enemyActiveAttachedEnergy = [];
window.enemyBench1AttachedEnergy = [];
window.enemyBench2AttachedEnergy = [];
window.enemyBench3AttachedEnergy = [];
window.enemyBench4AttachedEnergy = [];
window.enemyBench5AttachedEnergy = [];
window.playerEnergyTotal = 0;
window.enemyEnergyTotal = 0;
//window.playerActiveEnergy = [];
window.enemyActiveEnergy = [];
window.foundEnergy = [];
window.count = 0;
window.turn = "";
window.previousTotal = '';
window.enemyPreviousTotal = '';

// Slots Pokemon will go in later
window.inPlay7 = '';
window.inPlay8 = '';
window.inPlay9 = '';
window.inPlay10 = '';
window.inPlay11 = '';
window.inPlay12 = '';
window.enemyInPlay7 = '';
window.enemyInPlay8 = '';
window.enemyInPlay9 = '';
window.enemyInPlay10 = '';
window.enemyInPlay11 = '';
window.enemyInPlay12 = '';

// Set discard piles to show cards when they are clicked.
discardPile = new Array();
enemyDiscardPile = new Array();
$('#enemy #discard').click(function(){
	document.getElementById('light7').style.display='block';
	document.getElementById('fade').style.display='block';
	for (i=0; i < enemyDiscardPile.length; i++){
			$('.enemyDiscardPile').append('<img src="Cards/Base_Set/' + enemyDiscardPile[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
});
$('#player #discard').click(function(){
	document.getElementById('light8').style.display='block';
	document.getElementById('fade').style.display='block';
	for (i=0; i < discardPile.length; i++){
			$('.discardPile').append('<img src="Cards/Base_Set/' + discardPile[i].Card + '" class="card" onClick="largeCard(this)" />');
	}
});

$(document).ready(function(){
	
/* Enemy and player deck counter */
	setInterval(function(){$('#enemy #deckLeft span').empty(); $('#enemy #deckLeft span').append("Cards Left: "+enemyDeck.length)}, 2000);
	setInterval(function(){$('#player #deckLeft span span').empty(); $('#player #deckLeft span span').append(playerDeck.length)}, 2000);

/* Set game start and parameters */
$('#gameStart').click(function(){
	$('#gameStart').css("display", "none");
	shuffleDeck(playerDeck);
	window.playerHand = $('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerDeck[0].Card + '" class="card" onClick="setActive(playerInHand[0])" /><img src="Cards/Base_Set/' + playerDeck[1].Card + '" class="card" onClick="setActive(playerInHand[1])" /><img src="Cards/Base_Set/' + playerDeck[2].Card + '" class="card" onClick="setActive(playerInHand[2])" /><img src="Cards/Base_Set/' + playerDeck[3].Card + '" class="card" onClick="setActive(playerInHand[3])" /><img src="Cards/Base_Set/' + playerDeck[4].Card + '" class="card" onClick="setActive(playerInHand[4])" /><img src="Cards/Base_Set/' + playerDeck[5].Card + '" class="card" onClick="setActive(playerInHand[5])" /><img src="Cards/Base_Set/' + playerDeck[6].Card + '" class="card" onClick="setActive(playerInHand[6])" />');
	playerStartingHand = playerHand.length;
	window.playerInHand = new Array(playerDeck[0], playerDeck[1], playerDeck[2], playerDeck[3], playerDeck[4], playerDeck[5], playerDeck[6]);
	playerDeck.splice(0, 7);
	shuffleDeck(enemyDeck);
	window.enemyHand = $('.inenemyHand').append('<img src="Cards/Base_Set/' + enemyDeck[0].Card + '" class="card" onClick="setActive(enemyInHand[0])" /><img src="Cards/Base_Set/' + enemyDeck[1].Card + '" class="card" onClick="setActive(enemyInHand[1])" /><img src="Cards/Base_Set/' + enemyDeck[2].Card + '" class="card" onClick="setActive(enemyInHand[2])" /><img src="Cards/Base_Set/' + enemyDeck[3].Card + '" class="card" onClick="setActive(enemyInHand[3])" /><img src="Cards/Base_Set/' + enemyDeck[4].Card + '" class="card" onClick="setActive(enemyInHand[4])" /><img src="Cards/Base_Set/' + enemyDeck[5].Card + '" class="card" onClick="setActive(enemyInHand[5])" /><img src="Cards/Base_Set/' + enemyDeck[6].Card + '" class="card" onClick="setActive(enemyInHand[6])" />');
	enemyStartingHand = enemyHand.length;
	window.enemyInHand = new Array(enemyDeck[0], enemyDeck[1], enemyDeck[2], enemyDeck[3], enemyDeck[4], enemyDeck[5], enemyDeck[6]);
	enemyDeck.splice(0, 7);
	
	$(".playerCover, .enemyCover").css("display", "block");
	checkPlayerBasic();
});
});
/* Set starting hand and prizes */
function checkPlayerBasic(){
	if (playerInHand[0].Stage == "basic" || playerInHand[1].Stage == "basic" || playerInHand[2].Stage == "basic" || playerInHand[3].Stage == "basic" || playerInHand[4].Stage == "basic" || playerInHand[5].Stage == "basic" || playerInHand[6].Stage == "basic") {
		insertPrize1 = '<img src="Cards/Base_Set/' + playerDeck[7].Card + '" class="card" /></div>';
		$('#player #prizes').append('<div class="prize">' + insertPrize1);
		insertPrize2 = '<img src="Cards/Base_Set/' + playerDeck[8].Card + '" class="card" /></div>';
		$('#player #prizes').append('<div class="prize">' + insertPrize2);
		insertPrize3 = '<img src="Cards/Base_Set/' + playerDeck[9].Card + '" class="card" /></div>';
		$('#player #prizes').append('<div class="prize">' + insertPrize3);
		insertPrize4 = '<img src="Cards/Base_Set/' + playerDeck[10].Card + '" class="card" /></div>';
		$('#player #prizes').append('<div class="prize">' + insertPrize4);
		insertPrize5 = '<img src="Cards/Base_Set/' + playerDeck[11].Card + '" class="card" /></div>';
		$('#player #prizes').append('<div class="prize">' + insertPrize5);
		insertPrize6 = '<img src="Cards/Base_Set/' + playerDeck[12].Card + '" class="card" /></div>';
		$('#player #prizes').append('<div class="prize">' + insertPrize6);
		inPlay1 = {Card: playerDeck[7].Card, Stage: playerDeck[7].Stage, Type: playerDeck[7].Type, HP: playerDeck[7].HP, PokePower: playerDeck[7].PokePower, Attack1: playerDeck[7].Attack1, Attack2: playerDeck[7].Attack2, Weak: playerDeck[7].Weak, Resist: playerDeck[7].Resist, Retreat: playerDeck[7].Retreat};
		inPlay2 = {Card: playerDeck[8].Card, Stage: playerDeck[8].Stage, Type: playerDeck[8].Type, HP: playerDeck[8].HP, PokePower: playerDeck[8].PokePower, Attack1: playerDeck[8].Attack8, Attack2: playerDeck[8].Attack2, Weak: playerDeck[8].Weak, Resist: playerDeck[8].Resist, Retreat: playerDeck[8].Retreat};
		inPlay3 = {Card: playerDeck[9].Card, Stage: playerDeck[9].Stage, Type: playerDeck[9].Type, HP: playerDeck[9].HP, PokePower: playerDeck[9].PokePower, Attack1: playerDeck[9].Attack1, Attack2: playerDeck[9].Attack2, Weak: playerDeck[9].Weak, Resist: playerDeck[9].Resist, Retreat: playerDeck[9].Retreat};
		inPlay4 = {Card: playerDeck[10].Card, Stage: playerDeck[10].Stage, Type: playerDeck[10].Type, HP: playerDeck[10].HP, PokePower: playerDeck[10].PokePower, Attack1: playerDeck[10].Attack1, Attack2: playerDeck[10].Attack2, Weak: playerDeck[10].Weak, Resist: playerDeck[10].Resist, Retreat: playerDeck[10].Retreat};
		inPlay5 = {Card: playerDeck[11].Card, Stage: playerDeck[11].Stage, Type: playerDeck[11].Type, HP: playerDeck[11].HP, PokePower: playerDeck[11].PokePower, Attack1: playerDeck[11].Attack1, Attack2: playerDeck[11].Attack2, Weak: playerDeck[11].Weak, Resist: playerDeck[11].Resist, Retreat: playerDeck[11].Retreat};
		inPlay6 = {Card: playerDeck[12].Card, Stage: playerDeck[12].Stage, Type: playerDeck[12].Type, HP: playerDeck[12].HP, PokePower: playerDeck[12].PokePower, Attack1: playerDeck[12].Attack1, Attack2: playerDeck[12].Attack2, Weak: playerDeck[12].Weak, Resist: playerDeck[12].Resist, Retreat: playerDeck[12].Retreat};
		checkEnemyBasic();
	} else {
		alert("You have no Basic Pokemon!");
		$('.inPlayerHand').empty();
		playerDeck.splice(0, 0, playerInHand[0], playerInHand[1], playerInHand[2], playerInHand[3], playerInHand[4], playerInHand[5], playerInHand[6]);
		playerInHand = "";
		shuffleDeck(playerDeck);
	$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerDeck[0].Card + '" class="card" onClick="setActive(playerInHand[0])" /><img src="Cards/Base_Set/' + playerDeck[1].Card + '" class="card" onClick="setActive(playerInHand[1])" /><img src="Cards/Base_Set/' + playerDeck[2].Card + '" class="card" onClick="setActive(playerInHand[2])" /><img src="Cards/Base_Set/' + playerDeck[3].Card + '" class="card" onClick="setActive(playerInHand[3])" /><img src="Cards/Base_Set/' + playerDeck[4].Card + '" class="card" onClick="setActive(playerInHand[4])" /><img src="Cards/Base_Set/' + playerDeck[5].Card + '" class="card" onClick="setActive(playerInHand[5])" /><img src="Cards/Base_Set/' + playerDeck[6].Card + '" class="card" onClick="setActive(playerInHand[6])" />');
		playerInHand = new Array(playerDeck[0], playerDeck[1], playerDeck[2], playerDeck[3], playerDeck[4], playerDeck[5], playerDeck[6]);
		playerDeck.splice(0, 7);
		alert("You do not have a Basic Pokemon. Computer gets to draw an extra card!");
		drawEnemyCard();
		checkPlayerBasic();
	}
}

function checkEnemyBasic(){
	if (enemyInHand[0].Stage == "basic" || enemyInHand[1].Stage == "basic" || enemyInHand[2].Stage == "basic" || enemyInHand[3].Stage == "basic" || enemyInHand[4].Stage == "basic" || enemyInHand[5].Stage == "basic" || enemyInHand[6].Stage == "basic") {
		insertPrize7 = '<img src="Cards/Base_Set/' + enemyDeck[0].Card + '" class="card" /></div>';
		$('#enemy #prizes').append('<div class="prize">' + insertPrize7);
		insertPrize8 = '<img src="Cards/Base_Set/' + enemyDeck[1].Card + '" class="card" /></div>';
		$('#enemy #prizes').append('<div class="prize">' + insertPrize8);
		insertPrize9 = '<img src="Cards/Base_Set/' + enemyDeck[2].Card + '" class="card" /></div>';
		$('#enemy #prizes').append('<div class="prize">' + insertPrize9);
		insertPrize10 = '<img src="Cards/Base_Set/' + enemyDeck[3].Card + '" class="card" /></div>';
		$('#enemy #prizes').append('<div class="prize">' + insertPrize10);
		insertPrize11 = '<img src="Cards/Base_Set/' + enemyDeck[4].Card + '" class="card" /></div>';
		$('#enemy #prizes').append('<div class="prize">' + insertPrize11);
		insertPrize12 = '<img src="Cards/Base_Set/' + enemyDeck[5].Card + '" class="card" /></div>';
		$('#enemy #prizes').append('<div class="prize">' + insertPrize12);
		enemyInPlay1 = {Card: enemyDeck[0].Card, Stage: enemyDeck[0].Stage, Type: enemyDeck[0].Type, HP: enemyDeck[0].HP, PokePower: enemyDeck[0].PokePower, Attack1: enemyDeck[0].Attack1, Attack2: enemyDeck[0].Attack2, Weak: enemyDeck[0].Weak, Resist: enemyDeck[0].Resist, Retreat: enemyDeck[0].Retreat};
		enemyInPlay2 = {Card: enemyDeck[1].Card, Stage: enemyDeck[1].Stage, Type: enemyDeck[1].Type, HP: enemyDeck[1].HP, PokePower: enemyDeck[1].PokePower, Attack1: enemyDeck[1].Attack1, Attack2: enemyDeck[1].Attack2, Weak: enemyDeck[1].Weak, Resist: enemyDeck[1].Resist, Retreat: enemyDeck[1].Retreat};
		enemyInPlay3 = {Card: enemyDeck[2].Card, Stage: enemyDeck[2].Stage, Type: enemyDeck[2].Type, HP: enemyDeck[2].HP, PokePower: enemyDeck[2].PokePower, Attack1: enemyDeck[2].Attack1, Attack2: enemyDeck[2].Attack2, Weak: enemyDeck[2].Weak, Resist: enemyDeck[2].Resist, Retreat: enemyDeck[2].Retreat};
		enemyInPlay4 = {Card: enemyDeck[3].Card, Stage: enemyDeck[3].Stage, Type: enemyDeck[3].Type, HP: enemyDeck[3].HP, PokePower: enemyDeck[3].PokePower, Attack1: enemyDeck[3].Attack1, Attack2: enemyDeck[3].Attack2, Weak: enemyDeck[3].Weak, Resist: enemyDeck[3].Resist, Retreat: enemyDeck[3].Retreat};
		enemyInPlay5 = {Card: enemyDeck[4].Card, Stage: enemyDeck[4].Stage, Type: enemyDeck[4].Type, HP: enemyDeck[4].HP, PokePower: enemyDeck[4].PokePower, Attack1: enemyDeck[4].Attack1, Attack2: enemyDeck[4].Attack2, Weak: enemyDeck[4].Weak, Resist: enemyDeck[4].Resist, Retreat: enemyDeck[4].Retreat};
		enemyInPlay6 = {Card: enemyDeck[5].Card, Stage: enemyDeck[5].Stage, Type: enemyDeck[5].Type, HP: enemyDeck[5].HP, PokePower: enemyDeck[5].PokePower, Attack1: enemyDeck[5].Attack1, Attack2: enemyDeck[5].Attack2, Weak: enemyDeck[5].Weak, Resist: enemyDeck[5].Resist, Retreat: enemyDeck[5].Retreat};
	} else {
		alert("Computer does not have a Basic Pokemon. Draw an extra card!");
		drawPlayerCard();
		$('.inEnemyHand').empty();
		enemyDeck.splice(0, 0, enemyInHand[0], enemyInHand[1], enemyInHand[2], enemyInHand[3], enemyInHand[4], enemyInHand[5], enemyInHand[6]);
		enemyInHand = "";
		shuffleDeck(enemyDeck);
		$('.inenemyHand').append('<img src="Cards/Base_Set/' + enemyDeck[0].Card + '" class="card" onClick="setActive(enemyInHand[0])" /><img src="Cards/Base_Set/' + enemyDeck[1].Card + '" class="card" onClick="setActive(enemyInHand[1])" /><img src="Cards/Base_Set/' + enemyDeck[2].Card + '" class="card" onClick="setActive(enemyInHand[2])" /><img src="Cards/Base_Set/' + enemyDeck[3].Card + '" class="card" onClick="setActive(enemyInHand[3])" /><img src="Cards/Base_Set/' + enemyDeck[4].Card + '" class="card" onClick="setActive(enemyInHand[4])" /><img src="Cards/Base_Set/' + enemyDeck[5].Card + '" class="card" onClick="setActive(enemyInHand[5])" /><img src="Cards/Base_Set/' + enemyDeck[6].Card + '" class="card" onClick="setActive(enemyInHand[6])" />');
		enemyInHand = new Array(enemyDeck[0], enemyDeck[1], enemyDeck[2], enemyDeck[3], enemyDeck[4], enemyDeck[5], enemyDeck[6]);
		enemyDeck.splice(0, 7);
		checkEnemyBasic();
	}
		if (enemyInHand[0].Stage == "basic"){
			if ($('#enemy .active .card').length == 0){
				// put enemy active poke in play
				$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInHand[0].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the image from hand
				$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[0].Card + '"]').remove();
				index = enemyInHand[0];
				enemyInPlay7 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
				index = 0;
				enemyInHand.splice(index, 1);
			}
		} else if (enemyInHand[1].Stage == "basic"){
			if ($('#enemy .active .card').length == 0){
				// put enemy active poke in play
				$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInHand[1].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the image from hand
				$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[1].Card + '"]').remove();
				index = enemyInHand[1];
				enemyInPlay7 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
				index = 1;
				enemyInHand.splice(index, 1);
			}
		} else if (enemyInHand[2].Stage == "basic"){
			if ($('#enemy .active .card').length == 0){
				// put enemy active poke in play
				$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInHand[2].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the image from hand
				$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[2].Card + '"]').remove();
				index = enemyInHand[2];
				enemyInPlay7 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
				index = 2;
				enemyInHand.splice(index, 1);
			}
		} else if (enemyInHand[3].Stage == "basic"){
			if ($('#enemy .active .card').length == 0){
				// put enemy active poke in play
				$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInHand[3].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the image from hand
				$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[3].Card + '"]').remove();
				index = enemyInHand[3];
				enemyInPlay7 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
				index = 3;
				enemyInHand.splice(index, 1);
			}
		} else if (enemyInHand[4].Stage == "basic"){
			if ($('#enemy .active .card').length == 0){
				// put enemy active poke in play
				$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInHand[4].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the image from hand
				$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[4].Card + '"]').remove();
				index = enemyInHand[4];
				enemyInPlay7 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
				index = 4;
				enemyInHand.splice(index, 1);
			}
		} else if (enemyInHand[5].Stage == "basic"){
			if ($('#enemy .active .card').length == 0){
				// put enemy active poke in play
				$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInHand[5].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the image from hand
				$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[5].Card + '"]').remove();
				index = enemyInHand[5];
				enemyInPlay7 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
				index = 5;
				enemyInHand.splice(index, 1);
			}
		} else if (enemyInHand[6].Stage == "basic"){
			if ($('#enemy .active .card').length == 0){
				// put enemy active poke in play
				$('#enemy .active').append('<img src="Cards/Base_Set/' + enemyInHand[6].Card + '" class="card" onClick="largeCard(this)" />');
				// Remove the image from hand
				$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[6].Card + '"]').remove();
				index = enemyInHand[6];
				enemyInPlay7 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
				index = 6;
				enemyInHand.splice(index, 1);
			}
		}
	alert("Choose your active Pokemon.");
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
		$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="setActive(playerInHand[' + i + '])" />');
	}
	setActive();
}

/* Place starting active Pokes */
function setActive(card){
	console.log(playerDeck.length);
	console.log(enemyDeck.length);
	if(playerDeck.length < 35 || enemyDeck.length < 35){
		alert("A deck count error occurred. Restarting game.");
		location.reload();
	}
	$('.handButton').trigger('click');
	card = card;
	if (card.Stage == "basic" || card == Clefairy_Doll){
			$('#player .active').append('<img src="Cards/Base_Set/' + card.Card + '" class="card" onClick="largeCard(this)" />');
			// Remove the card from the hand
			index = playerInHand.indexOf(card);
			inPlay7 = {Card: playerInHand[index].Card, Stage: playerInHand[index].Stage, Type: playerInHand[index].Type, HP: playerInHand[index].HP, PokePower: playerInHand[index].PokePower, Attack1: playerInHand[index].Attack1, Attack2: playerInHand[index].Attack2, Weak: playerInHand[index].Weak, Resist: playerInHand[index].Resist, Retreat: playerInHand[index].Retreat};
			playerInHand.splice(index, 1);
			// Automatically exit hand
			$('#exit').trigger('click');
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="setBench(playerInHand[' + i + '])" />');
			}
		} else {
			alert("That is not a Basic Pokemon. Choose another card.");
		}
		alert("Choose any basic Pokemon you want on the bench.");
		$('#coinFlip').css('display', 'block');
		setBench();
}

// Place starting bench Pokes
function setBench(card){
	$('.handButton').trigger('click');
	card = card;
		if (card.Stage == "basic" || card == Clefairy_Doll){
		if ($('#player .benchPoke:first img').length == 0){
			$('#player .benchPoke:first').append('<img src="Cards/Base_Set/' + card.Card + '" class="card" onClick="largeCard(this)" />');
			// Remove the card from the hand
			index = playerInHand.indexOf(card);
			inPlay8 = {Card: playerInHand[index].Card, Stage: playerInHand[index].Stage, Type: playerInHand[index].Type, HP: playerInHand[index].HP, PokePower: playerInHand[index].PokePower, Attack1: playerInHand[index].Attack1, Attack2: playerInHand[index].Attack2, Weak: playerInHand[index].Weak, Resist: playerInHand[index].Resist, Retreat: playerInHand[index].Retreat};
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="setBench(playerInHand[' + i + '])" />');
			}
		} else if ($('#player .benchPoke:nth-child(2) img').length == 0){
		$('#player .benchPoke:nth-child(2)').append('<img src="Cards/Base_Set/' + card.Card + '" class="card" onClick="largeCard(this)" />');
			// Remove the card from the hand
			index = playerInHand.indexOf(card);
			inPlay9 = {Card: playerInHand[index].Card, Stage: playerInHand[index].Stage, Type: playerInHand[index].Type, HP: playerInHand[index].HP, PokePower: playerInHand[index].PokePower, Attack1: playerInHand[index].Attack1, Attack2: playerInHand[index].Attack2, Weak: playerInHand[index].Weak, Resist: playerInHand[index].Resist, Retreat: playerInHand[index].Retreat};
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="setBench(playerInHand[' + i + '])" />');
			}
		} else if ($('#player .benchPoke:nth-child(3) img').length == 0){
		$('#player .benchPoke:nth-child(3)').append('<img src="Cards/Base_Set/' + card.Card + '" class="card" onClick="largeCard(this)" />');
			// Remove the card from the hand
			index = playerInHand.indexOf(card);
			inPlay10 = {Card: playerInHand[index].Card, Stage: playerInHand[index].Stage, Type: playerInHand[index].Type, HP: playerInHand[index].HP, PokePower: playerInHand[index].PokePower, Attack1: playerInHand[index].Attack1, Attack2: playerInHand[index].Attack2, Weak: playerInHand[index].Weak, Resist: playerInHand[index].Resist, Retreat: playerInHand[index].Retreat};
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="setBench(playerInHand[' + i + '])" />');
			}
		} else if ($('#player .benchPoke:nth-child(4) img').length == 0){
		$('#player .benchPoke:nth-child(4)').append('<img src="Cards/Base_Set/' + card.Card + '" class="card" onClick="largeCard(this)" />');
			// Remove the card from the hand
			index = playerInHand.indexOf(card);
			inPlay11 = {Card: playerInHand[index].Card, Stage: playerInHand[index].Stage, Type: playerInHand[index].Type, HP: playerInHand[index].HP, PokePower: playerInHand[index].PokePower, Attack1: playerInHand[index].Attack1, Attack2: playerInHand[index].Attack2, Weak: playerInHand[index].Weak, Resist: playerInHand[index].Resist, Retreat: playerInHand[index].Retreat};
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="setBench(playerInHand[' + i + '])" />');
			}
		} else if ($('#player .benchPoke:last img').length == 0){
		$('#player .benchPoke:last').append('<img src="Cards/Base_Set/' + card.Card + '" class="card" onClick="largeCard(this)" />');
			// Remove the card from the hand
			index = playerInHand.indexOf(card);
			inPlay12 = {Card: playerInHand[index].Card, Stage: playerInHand[index].Stage, Type: playerInHand[index].Type, HP: playerInHand[index].HP, PokePower: playerInHand[index].PokePower, Attack1: playerInHand[index].Attack1, Attack2: playerInHand[index].Attack2, Weak: playerInHand[index].Weak, Resist: playerInHand[index].Resist, Retreat: playerInHand[index].Retreat};
			playerInHand.splice(index, 1);
			$('.inPlayerHand').empty();
			for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="setBench(playerInHand[' + i + '])" />');
			}
		}
	} else {
		alert("Only basic Pokemon can go on the bench. Pick another card.");
	}
	if (enemyInHand[0].Stage == "basic"){
		$('#enemy .benchPoke:first').append('<img src="Cards/Base_Set/' + enemyInHand[0].Card + '" class="card" onClick="largeCard(this)" />');
		$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[0].Card + '"]').remove();
			index = enemyInHand[0];
			enemyInPlay8 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
			enemyInHand.splice(0, 1);
	} else if (enemyInHand[1].Stage == "basic"){
		if ($('#enemy .benchPoke:first img').length > 0) {
			$('#enemy .benchPoke:nth-child(2)').append('<img src="Cards/Base_Set/' + enemyInHand[1].Card + '" class="card" onClick="largeCard(this)" />');
			$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[1].Card + '"]').remove();
			index = enemyInHand[1];
			enemyInPlay9 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
			enemyInHand.splice(1, 1);
		} else {
			$('#enemy .benchPoke:first img').append('<img src="Cards/Base_Set/' + enemyInHand[1].Card + '" class="card" onClick="largeCard(this)" />');
			$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[1].Card + '"]').remove();
			index = enemyInHand[1];
			enemyInPlay8 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
			enemyInHand.splice(1, 1);
		}
	} else if (enemyInHand[2].Stage == "basic"){
		if ($('#enemy .benchPoke:first img').length > 0 || $('#enemy .benchPoke:nth-child(2) img').length > 0) {
			$('#enemy .benchPoke:nth-child(3)').append('<img src="Cards/Base_Set/' + enemyInHand[2].Card + '" class="card" onClick="largeCard(this)" />');
			$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[2].Card + '"]').remove();
			index = enemyInHand[2];
			enemyInPlay10 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
			enemyInHand.splice(2, 1);
		} else {
			$('#enemy .benchPoke:first').append('<img src="Cards/Base_Set/' + enemyInHand[2].Card + '" class="card" onClick="largeCard(this)" />');
			$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[2].Card + '"]').remove();
			index = enemyInHand[2];
			enemyInPlay8 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
			enemyInHand.splice(2, 1);
		}
	} else if (enemyInHand[3].Stage == "basic"){
		if ($('#enemy .benchPoke:first img').length > 0 || $('#enemy .benchPoke:nth-child(2) img').length > 0 || $('#enemy .benchPoke:nth-child(3) img').length > 0) {
			$('#enemy .benchPoke:nth-child(4)').append('<img src="Cards/Base_Set/' + enemyInHand[3].Card + '" class="card" onClick="largeCard(this)" />');
			$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[3].Card + '"]').remove();
			index = enemyInHand[3];
			enemyInPlay11 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
			enemyInHand.splice(3, 1);
		} else {
			$('#enemy .benchPoke:first').append('<img src="Cards/Base_Set/' + enemyInHand[3].Card + '" class="card" onClick="largeCard(this)" />');
			$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[3].Card + '"]').remove();
			index = enemyInHand[3];
			enemyInPlay8 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
			enemyInHand.splice(3, 1);
		}
	} else if (enemyInHand[4].Stage == "basic"){
		if ($('#enemy .benchPoke:first img').length > 0 || $('#enemy .benchPoke:nth-child(2) img').length > 0 || $('#enemy .benchPoke:nth-child(3) img').length > 0 || $('#enemy .benchPoke:nth-child(4) img').length > 0) {
			$('#enemy .benchPoke:nth-child(5)').append('<img src="Cards/Base_Set/' + enemyInHand[4].Card + '" class="card" onClick="largeCard(this)" />');
			$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[4].Card + '"]').remove();
			index = enemyInHand[4];
			enemyInPlay12 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
			enemyInHand.splice(4, 1);
		} else {
			$('#enemy .benchPoke:first').append('<img src="Cards/Base_Set/' + enemyInHand[4].Card + '" class="card" onClick="largeCard(this)" />');
			$('.inEnemyHand img[src="Cards/Base_Set/' + enemyInHand[4].Card + '"]').remove();
			index = enemyInHand[4];
			enemyInPlay8 = {Card: index.Card, Stage: index.Stage, Type: index.Type, HP: index.HP, PokePower: index.PokePower, Attack1: index.Attack1, Attack2: index.Attack2, Weak: index.Weak, Resist: index.Resist, Retreat: index.Retreat};
			enemyInHand.splice(4, 1);
		}
	}
	
	// Array of all player's in play cards
	playerInPlay = new Array(inPlay1, inPlay2, inPlay3, inPlay4, inPlay5, inPlay6, inPlay7, inPlay8, inPlay9, inPlay10, inPlay11, inPlay12);
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
				$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="setBench(playerInHand[' + i + '])" />');
			}
}
/* Determine who will go first */
function coinFlipStart(){
	alert("We will flip a coin to determine who plays first. Heads, you play first; tails, the computer plays first.");
	$('#coinFlip').css('display', 'none');
	coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails! Computer will go first.");
		enemyPreviousTotal = 0;
		enemyTurn(enemyPreviousTotal);
	} else {
		alert("Coin flip was heads! You get to play first.");
		previousTotal = 0;
		playerTurn(previousTotal);
	}
}
	
/* Setup the player's turn and declare any needed functions */
function playerTurn(previousTotal) {
	$('#enemyActiveHide').css('display', 'none');
	$('.inPlayerHand .card').attr('onClick', 'largeCard(this)');
	alert("First, draw a card to start your turn.");
	drawPlayerCard();
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
}



/* Setup AI for computer turns */
function enemyTurn(enemyPreviousTotal) {
	enemyActiveEnergyCount = $('#enemy .active .energy1 .energy1').length + $('#enemy .active .energy2 .energy2').length + $('#enemy .active .energy3 .energy3').length + $('#enemy .active .energy4 .energy4').length + $('#enemy .active .energy5 .energy5').length + $('#enemy .active .energy6 .energy6').length + $('#enemy .active .energy7 .energy7').length + $('#enemy .active .energy8 .energy8').length;
	enemyBench1EnergyCount = $('#enemy .benchPoke:first .energy1 .energy1').length + $('#enemy .benchPoke:first .energy2 .energy2').length + $('#enemy .benchPoke:first .energy3 .energy3').length + $('#enemy .benchPoke:first .energy4 .energy4').length + $('#enemy .benchPoke:first .energy5 .energy5').length + $('#enemy .benchPoke:first .energy6 .energy6').length + $('#enemy .benchPoke:first .energy7 .energy7').length + $('#enemy .benchPoke:first .energy8 .energy8').length;
	enemyBench2EnergyCount = $('#enemy .benchPoke:nth-child(2) .energy1 .energy1').length + $('#enemy .benchPoke:nth-child(2) .energy2 .energy2').length + $('#enemy .benchPoke:nth-child(2) .energy3 .energy3').length + $('#enemy .benchPoke:nth-child(2) .energy4 .energy4').length + $('#enemy .benchPoke:nth-child(2) .energy5 .energy5').length + $('#enemy .benchPoke:nth-child(2) .energy6 .energy6').length + $('#enemy .benchPoke:nth-child(2) .energy7 .energy7').length + $('#enemy .benchPoke:nth-child(2) .energy8 .energy8').length;
	enemyBench3EnergyCount = $('#enemy .benchPoke:nth-child(3) .energy1 .energy1').length + $('#enemy .benchPoke:nth-child(3) .energy2 .energy2').length + $('#enemy .benchPoke:nth-child(3) .energy3 .energy3').length + $('#enemy .benchPoke:nth-child(3) .energy4 .energy4').length + $('#enemy .benchPoke:nth-child(3) .energy5 .energy5').length + $('#enemy .benchPoke:nth-child(3) .energy6 .energy6').length + $('#enemy .benchPoke:nth-child(3) .energy7 .energy7').length + $('#enemy .benchPoke:nth-child(3) .energy8 .energy8').length;
	enemyBench4EnergyCount = $('#enemy .benchPoke:nth-child(4) .energy1 .energy1').length + $('#enemy .benchPoke:nth-child(4) .energy2 .energy2').length + $('#enemy .benchPoke:nth-child(4) .energy3 .energy3').length + $('#enemy .benchPoke:nth-child(4) .energy4 .energy4').length + $('#enemy .benchPoke:nth-child(4) .energy5 .energy5').length + $('#enemy .benchPoke:nth-child(4) .energy6 .energy6').length + $('#enemy .benchPoke:nth-child(4) .energy7 .energy7').length + $('#enemy .benchPoke:nth-child(4) .energy8 .energy8').length;
	enemyBench5EnergyCount = $('#enemy .benchPoke:last .energy1 .energy1').length + $('#enemy .benchPoke:last .energy2 .energy2').length + $('#enemy .benchPoke:last .energy3 .energy3').length + $('#enemy .benchPoke:last .energy4 .energy4').length + $('#enemy .benchPoke:last .energy5 .energy5').length + $('#enemy .benchPoke:last .energy6 .energy6').length + $('#enemy .benchPoke:last .energy7 .energy7').length + $('#enemy .benchPoke:last .energy8 .energy8').length;
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
	tempArray=[];
	for(j=0; j < enemyInHand.length; j++){
		if (enemyInHand[j].Stage == "energy" || enemyInHand[j].Stage == "specialEnergy"){
			tempArray.splice(0,0,enemyInHand[j]);
			if ($.inArray(enemyInPlay7.Attack2, attacksEnergy4) != -1 && enemyActiveAttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay7.Attack2, attacksEnergy3) != -1 && enemyActiveAttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay7.Attack2, attacksEnergy2) != -1 && enemyActiveAttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay7.Attack2, attacksEnergy1) != -1 && enemyActiveAttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay7.Attack1, attacksEnergy4) != -1 && enemyActiveAttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay7.Attack1, attacksEnergy3) != -1 && enemyActiveAttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay7.Attack1, attacksEnergy2) != -1 && enemyActiveAttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay7.Attack1, attacksEnergy1) != -1 && enemyActiveAttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyActiveAttachedEnergy) {
					enemyActiveAttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyActiveAttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay8.Attack2, attacksEnergy4) != -1 && enemyBench1AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench1EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench1EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay8.Attack2, attacksEnergy3) != -1 && enemyBench1AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench1EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench1EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay8.Attack2, attacksEnergy2) != -1 && enemyBench1AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay8.Attack2, attacksEnergy1) != -1 && enemyBench1AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay8.Attack1, attacksEnergy4) != -1 && enemyBench1AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench1EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench1EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay8.Attack1, attacksEnergy3) != -1 && enemyBench1AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench1EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench1EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay8.Attack1, attacksEnergy2) != -1 && enemyBench1AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay8.Attack1, attacksEnergy1) != -1 && enemyBench1AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench1AttachedEnergy) {
					enemyBench1AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench1AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay9.Attack2, attacksEnergy4) != -1 && enemyBench2AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench2EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench2EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay9.Attack2, attacksEnergy3) != -1 && enemyBench2AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench2EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench2EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay9.Attack2, attacksEnergy2) != -1 && enemyBench2AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay9.Attack2, attacksEnergy1) != -1 && enemyBench2AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay9.Attack1, attacksEnergy4) != -1 && enemyBench2AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench2EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench2EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay9.Attack1, attacksEnergy3) != -1 && enemyBench2AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench2EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench2EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay9.Attack1, attacksEnergy2) != -1 && enemyBench2AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay9.Attack1, attacksEnergy1) != -1 && enemyBench2AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench2AttachedEnergy) {
					enemyBench2AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench2AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay10.Attack2, attacksEnergy4) != -1 && enemyBench3AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench3EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench3EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay10.Attack2, attacksEnergy3) != -1 && enemyBench3AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench3EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench3EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay10.Attack2, attacksEnergy2) != -1 && enemyBench3AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay10.Attack2, attacksEnergy1) != -1 && enemyBench3AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay10.Attack1, attacksEnergy4) != -1 && enemyBench3AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench3EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench3EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay10.Attack1, attacksEnergy3) != -1 && enemyBench3AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench3EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench3EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay10.Attack1, attacksEnergy2) != -1 && enemyBench3AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay10.Attack1, attacksEnergy1) != -1 && enemyBench3AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench3AttachedEnergy) {
					enemyBench3AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench3AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay11.Attack2, attacksEnergy4) != -1 && enemyBench4AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench4EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench4EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay11.Attack2, attacksEnergy3) != -1 && enemyBench4AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBenchEnergy4Count+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench4EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay11.Attack2, attacksEnergy2) != -1 && enemyBench4AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay11.Attack2, attacksEnergy1) != -1 && enemyBench4AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay11.Attack1, attacksEnergy4) != -1 && enemyBench4AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench4EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench4EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBenchAttachedEnergy) {
					enemyBenchAttachedEnergy = [enemyInHand[j]];
					enemyEnergyTotal=1;
				} else {
					enemyBenchAttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay11.Attack1, attacksEnergy3) != -1 && enemyBenchAttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench4EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench4EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay11.Attack1, attacksEnergy2) != -1 && enemyBench4AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay11.Attack1, attacksEnergy1) != -1 && enemyBench4AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench4AttachedEnergy) {
					enemyBench4AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench4AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay12.Attack2, attacksEnergy4) != -1 && enemyBench5AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench5EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench5EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay12.Attack2, attacksEnergy3) != -1 && enemyBench5AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench5EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench5EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay12.Attack2, attacksEnergy2) != -1 && enemyBench5AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay12.Attack2, attacksEnergy1) != -1 && enemyBench5AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay12.Attack1, attacksEnergy4) != -1 && enemyBench5AttachedEnergy.length <= 4){
				$('#enemy .active').append('<div class="energy' + (enemyBench5EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench5EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay12.Attack1, attacksEnergy3) != -1 && enemyBench5AttachedEnergy.length <= 3){
				$('#enemy .active').append('<div class="energy' + (enemyBench5EnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyBench5EnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay12.Attack1, attacksEnergy2) != -1 && enemyBench5AttachedEnergy.length <= 2){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			} else if ($.inArray(enemyInPlay12.Attack1, attacksEnergy1) != -1 && enemyBench5AttachedEnergy.length <= 1){
				$('#enemy .active').append('<div class="energy' + (enemyActiveEnergyCount+1) + '"><img src="Cards/Base_Set/' + enemyInHand[j].Card + '" class="energy' + (enemyActiveEnergyCount+1) + '" /></div>');
				index = enemyInHand[j];
				if (!enemyBench5AttachedEnergy) {
					enemyBench5AttachedEnergy = [enemyInHand[j]];
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=1;
				} else {
					enemyBench5AttachedEnergy.splice(0, 0, enemyInHand[j]);
					enemyInHand.splice(index, 1);
					enemyEnergyTotal=enemyEnergyTotal+1;
				}
			}
		}
		if (tempArray.length > 0){
			break;
		}
	}
}

	window.turn = "Enemy";

	//Computer attack
	alert("Enemy is thinking about attacking.");
		tempAttack=reset();
		if (enemyInPlay7.Attack2 != ""){
			if ($.inArray(enemyInPlay7.Attack2,attacksEnergy4) != -1 && enemyActiveAttachedEnergy.length >= 4){
				tempAttack=eval(enemyInPlay7.Attack2);
				console.log("ran energy4 attack2");
				tempAttack();
				return;
			}else if ($.inArray(enemyInPlay7.Attack2,attacksEnergy3) != -1 && enemyActiveAttachedEnergy.length >= 3){
				tempAttack=eval(enemyInPlay7.Attack2);
				console.log("ran energy3 attack2");
				tempAttack();
				return;
			}else if ($.inArray(enemyInPlay7.Attack2,attacksEnergy2) != -1 && enemyActiveAttachedEnergy.length >= 2){
				tempAttack=eval(enemyInPlay7.Attack2);
				console.log("ran energy2 attack2");
				tempAttack();
				return;
			}else if ($.inArray(enemyInPlay7.Attack2,attacksEnergy1) != -1 && enemyActiveAttachedEnergy.length >= 1){
				tempAttack=eval(enemyInPlay7.Attack2);
				console.log("ran energy1 attack2");
				tempAttack();
				return;
			}
		} else {
			if ($.inArray(enemyInPlay7.Attack1,attacksEnergy4) != -1 && enemyActiveAttachedEnergy.length >= 4){
				tempAttack=eval(enemyInPlay7.Attack1);
					console.log("ran energy4 attack1");
				tempAttack();
				return;
			}else if ($.inArray(enemyInPlay7.Attack1,attacksEnergy3) != -1 && enemyActiveAttachedEnergy.length >= 3){
				tempAttack=eval(enemyInPlay7.Attack1);
					console.log("ran energy3 attack1");
				tempAttack();
				return;
			}else if ($.inArray(enemyInPlay7.Attack1,attacksEnergy2) != -1 && enemyActiveAttachedEnergy.length >= 2){
				tempAttack=eval(enemyInPlay7.Attack1);
					console.log("ran energy2 attack1");
				tempAttack();
				return;
			}else if ($.inArray(enemyInPlay7.Attack1,attacksEnergy1) != -1 && enemyActiveAttachedEnergy.length >= 1){
				tempAttack=eval(enemyInPlay7.Attack1);
					console.log("ran energy1 attack1");
				tempAttack();
				return;
			}
		}

	// below goes at end of this function
	window.c++;
	alert("Enemy did not attack!");
	betweenTurns("Enemy");
}

function enemyPlayTrainer(card) {
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
			console.log("Running Computer Search");
			index = enemyInHand.indexOf(card);
			window.currentHand = enemyInHand.length;
			enemyInHand.splice(index, 1);
		} else if (card == Defender){
			// Damage to Poke -20 until next turn.
			$('.enemyInHand').remove(card);
		} else if (card == Devolution_Spray){
			alert("Please choose one of your Pokemon to devolve.");
			$('#enemy .card').attr('onClick', 'devolutionSpray(this)');
			$('.enemyInHand').remove(card);
		} else if (card == Energy_Removal){
			console.log("Running Energy_Removal");
			return;
		} else if (card == Energy_Retrieval){
			console.log("Running Energy_Retrieval");
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
			reset();
			return;
		} else if (card == Full_Heal){
			console.log("Running Full_Heal");
			// Remove all special condition counters
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
		} else if (card == Gust_of_Wind){
			console.log("Running Gust_of_Wind");
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
		} else if (card == Impostor_Professor_Oak){
			console.log("Running Impostor_Professor_Oak");
			alert("Opponent will shuffle their hand into their deck and draw 7 cards.");
			$('.enemyInHand').empty();
			amount = enemyInHand.length;
			for (i=0; i < enemyInHand.length; i++){
				playerDeck.splice(0, 0, playerInHand[i]);
			}
			$('.playerInHand').remove(card);
			reset();
			return;
		} else if (card == Item_Finder){
			console.log("Running Item_Finder");
			$('.enemyInHand').remove(card);
			return;
		} else if (card == Lass){
			console.log("Running Lass");
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
			$('.enemyInHand').remove(card);
			reset()
			return;
		} else if (card == Maintenance){
			console.log("Running Maintenance");
			if (enemyInHand.length < 3){
				alert("You do not have enough cards in your hand to play this card!");
			} else {
				alert("Choose 2 cards to shuffle into your deck.");
				$('#exit, #exit2, .exit3, .handButton').trigger('click');
				for (i=0; i < enemyInHand.length; i++){
				$('.enemyInHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="maintenance(' + enemyInHand[i] + ')" />');
				}
			}
			$('.enemyInHand').remove(card);
			reset();
			return;
		} else if (card == PlusPower){
			// Add 10 damage to attack by active Pokemon this turn.
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
		} else if (card == Pokedex){
			console.log("Running Pokedex");
			alert("Here are the top 5 cards of your deck. First card you click on will be next.");
			alert("Then, each card you click on after will follow that top card.");
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
			reset();
			return;
		} else if (card == Pokemon_Breeder){
			console.log("Running Pokemon_Breeder");
			alert("Choose an evolution card you want to use.");
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
			reset();
			return;
		} else if (card == Pokemon_Center){
			// Remove all damage counters from your Pokemon. Then, discard all energy from Pokemon that had damage.
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
		} else if (card == Pokemon_Flute){
			// Put a Pokemon from Opponent's discard pile onto their bench.
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
		} else if (card == Pokemon_Trader){
			console.log("Running Pokemon_Trader");
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
			reset();
			return;
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
			} else {
				drawEnemyCard();
			}
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
			reset();
			return;
		} else if (card == Professor_Oak){
			console.log("Running Professor_Oak");
			alert("Discarding your hand and drawing 7 cards from the deck.");
			for(i=0; i < enemyInHand.length; i++){
				enemyDiscardPile.splice(0, 0, enemyInHand[i]);
			}
			enemyInHand = new Array();
			for(i=0; i < 7; i++){
				enemyInHand.splice(0, 0, enemyDeck[i]);
			}
			$('.enemyInHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.enemyInHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
			reset();
			return;
		} else if (card == Scoop_Up){
			console.log("Running Scoop_Up");
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
			reset();
			return;
		} else if (card == Super_Energy_Removal){
			// Discard 1 energy attached to yours to remove 2 energy from 1 of your opponent's Pokemon.
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
		} else if (card == Super_Potion){
			// Discard an energy attached to remove 4 damage counters.
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
		} else if (card == Switch){
			console.log("Running Switch");
			alert("Choose a Pokemon to switch with your active Pokemon.");
			$('#enemy .active .card, #enemy .benchPoke .card').attr('onClick', 'switchFunc(this)');
			index = enemyInHand.indexOf(card);
			enemyInHand.splice(index, 1);
			$('#enemy #discard').append('<img src="Cards/Base_Set/'+card.Card+'" class="card" onclick="largeCard(this)">');
			enemyDiscardPile.splice(0, 0, card);
			reset();
			return;
		}
	}
}

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
	evo = card;
	index = enemyInHand.indexOf(evo);
	if (evo.Card == "Charmeleon.jpg") {
		source = "Cards/Base_Set/Charmeleon.jpg";
		if (enemyInPlay7 == Charmander && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Charmander && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Charmander && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Charmander && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Charmander && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseCharmander = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Charmander && enemyInPlay12.Evo != 1){
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
	} else if (evo.Card == "Charizard.jpg") {
		source = "Cards/Base_Set/Charizard.jpg";
		if (enemyInPlay7 == Charmeleon && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseCharmeleon = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Charmeleon && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseCharmeleon = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Charmeleon && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseCharmeleon = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Charmeleon && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseCharmeleon = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Charmeleon && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseCharmeleon = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Charmeleon && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseCharmeleon = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Kadabra.jpg") {
		source = "Cards/Base_Set/Kadabra.jpg";
		if (enemyInPlay7 == Abra && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseAbra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Abra && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseAbra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Abra && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseAbra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Abra && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseAbra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Abra && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseAbra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Abra && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseAbra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Alakazam.jpg") {
		source = "Cards/Base_Set/Alakazam.jpg";
		if (enemyInPlay7 == Kadabra && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseKadabra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Kadabra && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseKadabra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Kadabra && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseKadabra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Kadabra && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseKadabra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Kadabra && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseKadabra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Kadabra && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseKadabra = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Arcanine.jpg") {
		source = "Cards/Base_Set/Arcanine.jpg";
		if (enemyInPlay7 == Growlithe && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseGrowlithe = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Growlithe && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseGrowlithe = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Growlithe && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseGrowlithe = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Growlithe && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseGrowlithe = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Growlithe && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseGrowlithe = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Growlithe && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseGrowlithe = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Kakuna.jpg") {
		source = "Cards/Base_Set/Kakuna.jpg";
		if (enemyInPlay7 == Weedle && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseWeedle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Weedle && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseWeedle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Weedle && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseWeedle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Weedle && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseWeedle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Weedle && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseWeedle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Weedle && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseWeedle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Beedrill.jpg") {
		source = "Cards/Base_Set/Beedrill.jpg";
		if (enemyInPlay7 == Kakuna && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseKakuna = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Kakuna && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseKakuna = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Kakuna && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseKakuna = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Kakuna && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseKakuna = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Kakuna && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseKakuna = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Kakuna && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseKakuna = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Wartortle.jpg") {
		source = "Cards/Base_Set/Wartortle.jpg";
		if (enemyInPlay7 == Squirtle && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseSquirtle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Squirtle && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseSquirtle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Squirtle && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseSquirtle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Squirtle && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseSquirtle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Squirtle && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseSquirtle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Squirtle && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseSquirtle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Blastoise.jpg") {
		source = "Cards/Base_Set/Blastoise.jpg";
		if (enemyInPlay7 == Wartortle && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseWartortle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Wartortle && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseWartortle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Wartortle && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseWartortle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Wartortle && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseWartortle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Wartortle && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseWartortle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Wartortle && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseWartortle = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Ivysaur.jpg") {
		source = "Cards/Base_Set/Ivysaur.jpg";
		if (enemyInPlay7 == Bulbasaur && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseBulbasaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Bulbasaur && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseBulbasaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Bulbasaur && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseBulbasaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Bulbasaur && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseBulbasaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Bulbasaur && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseBulbasaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Bulbasaur && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseBulbasaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Venusaur.jpg") {
		source = "Cards/Base_Set/Venusaur.jpg";
		if (enemyInPlay7 == Ivysaur && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseIvysaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Ivysaur && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseIvysaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Ivysaur && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseIvysaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Ivysaur && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseIvysaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Ivysaur && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseIvysaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Ivysaur && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseIvysaur = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Metapod.jpg") {
		source = "Cards/Base_Set/Metapod.jpg";
		if (enemyInPlay7 == Caterpie && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseCaterpie = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Caterpie && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseCaterpie = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Caterpie && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseCaterpie = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Caterpie && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseCaterpie = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Caterpie && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseCaterpie = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Caterpie && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseCaterpie = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Dewgong.jpg") {
		source = "Cards/Base_Set/Dewgong.jpg";
		if (enemyInPlay7 == Seel && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseSeel = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Seel && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseSeel = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Seel && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseSeel = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Seel && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseSeel = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Seel && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseSeel = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Seel && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseSeel = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Dugtrio.jpg") {
		source = "Cards/Base_Set/Dugtrio.jpg";
		if (enemyInPlay7 == Diglett && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseDiglett = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Diglett && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseDiglett = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Diglett && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseDiglett = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Diglett && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseDiglett = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Diglett && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseDiglett = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Diglett && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseDiglett = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Dragonair.jpg") {
		source = "Cards/Base_Set/Dragonair.jpg";
		if (enemyInPlay7 == Dratini && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseDratini = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Dratini && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseDratini = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Dratini && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseDratini = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Dratini && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseDratini = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Dratini && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseDratini = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Dratini && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseDratini = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Electrode.jpg") {
		source = "Cards/Base_Set/Electrode.jpg";
		if (enemyInPlay7 == Voltorb && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseVoltorb = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Voltorb && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseVoltorb = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Voltorb && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseVoltorb = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Voltorb && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseVoltorb = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Voltorb && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseVoltorb = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Voltorb && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseVoltorb = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Haunter.jpg") {
		source = "Cards/Base_Set/Haunter.jpg";
		if (enemyInPlay7 == Gastly && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseGastly = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Gastly && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseGastly = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Gastly && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseGastly = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Gastly && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseGastly = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Gastly && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseGastly = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Gastly && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseGastly = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Gyarados.jpg") {
		source = "Cards/Base_Set/Gyarados.jpg";
		if (enemyInPlay7 == Magikarp && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseMagikarp = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Magikarp && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseMagikarp = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Magikarp && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseMagikarp = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Magikarp && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseMagikarp = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Magikarp && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseMagikarp = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Magikarp && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseMagikarp = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Machoke.jpg") {
		source = "Cards/Base_Set/Machoke.jpg";
		if (enemyInPlay7 == Machop && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseMachop = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Machop && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseMachop = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Machop && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseMachop = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Machop && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseMachop = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Machop && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseMachop = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Machop && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseMachop = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Machamp.jpg") {
		source = "Cards/Base_Set/Machamp.jpg";
		if (enemyInPlay7 == Machoke && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseMachoke = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Machoke && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseMachoke = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Machoke && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseMachoke = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Machoke && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseMachoke = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Machoke && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseMachoke = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Machoke && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseMachoke = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Magneton.jpg") {
		source = "Cards/Base_Set/Magneton.jpg";
		if (enemyInPlay7 == Magnemite && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseMagnemite = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Magnemite && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseMagnemite = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Magnemite && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseMagnemite = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Magnemite && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseMagnemite = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Magnemite && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseMagnemite = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Magnemite && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseMagnemite = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Nidorino.jpg") {
		source = "Cards/Base_Set/Nidorino.jpg";
		if (enemyInPlay7 == NidoranM && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseNidoranM = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == NidoranM && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseNidoranM = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == NidoranM && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseNidoranM = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == NidoranM && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseNidoranM = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == NidoranM && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseNidoranM = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == NidoranM && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseNidoranM = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Nidoking.jpg") {
		source = "Cards/Base_Set/Nidoking.jpg";
		if (enemyInPlay7 == Nidorino && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseNidorino = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Nidorino && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseNidorino = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Nidorino && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseNidorino = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Nidorino && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseNidorino = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Nidorino && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseNidorino = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Nidorino && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseNidorino = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Ninetales.jpg") {
		source = "Cards/Base_Set/Ninetales.jpg";
		if (enemyInPlay7 == Vulpix && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseVulpix = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Vulpix && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseVulpix = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Vulpix && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseVulpix = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Vulpix && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseVulpix = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Vulpix && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseVulpix = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Vulpix && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseVulpix = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Pidgeotto.jpg") {
		source = "Cards/Base_Set/Pidgeotto.jpg";
		if (enemyInPlay7 == Pidgey && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			basePidgey = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Pidgey && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			basePidgey = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Pidgey && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			basePidgey = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Pidgey && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			basePidgey = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Pidgey && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			basePidgey = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Pidgey && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			basePidgey = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Raichu.jpg") {
		source = "Cards/Base_Set/Raichu.jpg";
		if (enemyInPlay7 == Pikachu && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			basePikachu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Pikachu && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			basePikachu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Pikachu && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			basePikachu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Pikachu && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			basePikachu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Pikachu && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			basePikachu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Pikachu && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			basePikachu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Poliwhirl.jpg") {
		source = "Cards/Base_Set/Poliwhirl.jpg";
		if (enemyInPlay7 == Poliwag && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			basePoliwag = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Poliwag && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			basePoliwag = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Poliwag && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			basePoliwag = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Poliwag && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			basePoliwag = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Poliwag && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			basePoliwag = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Poliwag && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			basePoliwag = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Poliwrath.jpg") {
		source = "Cards/Base_Set/Poliwrath.jpg";
		if (enemyInPlay7 == Poliwhirl && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			basePoliwhirl = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Poliwhirl && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			basePoliwhirl = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Poliwhirl && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			basePoliwhirl = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Poliwhirl && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			basePoliwhirl = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Poliwhirl && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			basePoliwhirl = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Poliwhirl && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			basePoliwhirl = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Raticate.jpg") {
		source = "Cards/Base_Set/Raticate.jpg";
		if (enemyInPlay7 == Rattata && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseRattata = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Rattata && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseRattata = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Rattata && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseRattata = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Rattata && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseRattata = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Rattata && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseRattata = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Rattata && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseRattata = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
		}
	} else if (evo.Card == "Starmie.jpg") {
		source = "Cards/Base_Set/Starmie.jpg";
		if (enemyInPlay7 == Staryu && enemyInPlay7.Evo != 1){
			enemyInPlay7 = evo;
			enemyInPlay7.Evo = 1;
			baseStaryu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay8 == Staryu && enemyInPlay8.Evo != 1){
			enemyInPlay8 = evo;
			enemyInPlay8.Evo = 1;
			baseStaryu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay9 == Staryu && enemyInPlay9.Evo != 1){
			enemyInPlay9 = evo;
			enemyInPlay9.Evo = 1;
			baseStaryu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else if (enemyInPlay10 == Staryu && enemyInPlay10.Evo != 1){
			enemyInPlay10 = evo;
			enemyInPlay10.Evo = 1;
			baseStaryu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay11 == Staryu && enemyInPlay11.Evo != 1){
			enemyInPlay11 = evo;
			enemyInPlay11.Evo = 1;
			baseStaryu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		}  else if (enemyInPlay12 == Staryu && enemyInPlay12.Evo != 1){
			enemyInPlay12 = evo;
			enemyInPlay12.Evo = 1;
			baseStaryu = card;
			enemyInHand.splice(index, 1);
			$('.inEnemyHand').empty();
			for (i=0; i < enemyInHand.length; i++){
				$('.inEnemyHand').append('<img src="Cards/Base_Set/' + enemyInHand[i].Card + '" class="card" onClick="largeCard(this)" />');
			}
		} else {
			alert("You cannot evolve on the first turn or have already evolved that Pokemon this turn!");
			return;
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
		if ($('#player .active .card').length > 0 && inPlay7.Evo <= 0){
			$('#player .active .card').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay7)');
		}else if ($('#player .benchPoke:first').length > 0 && inPlay8.Evo <= 0){
			$('#player .benchPoke:first').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay8)');
		}else if ($('#player .benchPoke:nth-child(2)').length > 0 && inPlay9.Evo <= 0){
			$('#player .benchPoke:nth-child(2)').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay9)');
		}else if ($('#player .benchPoke:nth-child(3)').length > 0 && inPlay10.Evo <= 0){
			$('#player .benchPoke:nth-child(3)').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay10)');
		}else if ($('#player .benchPoke:nth-child(4)').length > 0 && inPlay11.Evo <= 0){
			$('#player .benchPoke:nth-child(4)').attr('onClick', 'evolvePoke(playerInHand[' + index + '], inPlay11)');
		}else if ($('#player .benchPoke:last').length > 0 && inPlay12.Evo <= 0){
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
				activeEnergyCount = $('#player .active .energy1 .energy1').length + $('#player .active .energy2 .energy2').length + $('#player .active .energy3 .energy3').length + $('#player .active .energy4 .energy4').length + $('#player .active .energy5 .energy5').length + $('#player .active .energy6 .energy6').length + $('#player .active .energy7 .energy7').length + $('#player .active .energy8 .energy8').length;
				bench1EnergyCount = $('#player .benchPoke:first .energy1 .energy1').length + $('#player .benchPoke:first .energy2 .energy2').length + $('#player .benchPoke:first .energy3 .energy3').length + $('#player .benchPoke:first .energy4 .energy4').length + $('#player .benchPoke:first .energy5 .energy5').length + $('#player .benchPoke:first .energy6 .energy6').length + $('#player .benchPoke:first .energy7 .energy7').length + $('#player .benchPoke:first .energy8 .energy8').length;
				bench2EnergyCount = $('#player .benchPoke:nth-child(2) .energy1 .energy1').length + $('#player .benchPoke:nth-child(2) .energy2 .energy2').length + $('#player .benchPoke:nth-child(2) .energy3 .energy3').length + $('#player .benchPoke:nth-child(2) .energy4 .energy4').length + $('#player .benchPoke:nth-child(2) .energy5 .energy5').length + $('#player .benchPoke:nth-child(2) .energy6 .energy6').length + $('#player .benchPoke:nth-child(2) .energy7 .energy7').length + $('#player .benchPoke:nth-child(2) .energy8 .energy8').length;
				bench3EnergyCount = $('#player .benchPoke:nth-child(3) .energy1 .energy1').length + $('#player .benchPoke:nth-child(3) .energy2 .energy2').length + $('#player .benchPoke:nth-child(3) .energy3 .energy3').length + $('#player .benchPoke:nth-child(3) .energy4 .energy4').length + $('#player .benchPoke:nth-child(3) .energy5 .energy5').length + $('#player .benchPoke:nth-child(3) .energy6 .energy6').length + $('#player .benchPoke:nth-child(3) .energy7 .energy7').length + $('#player .benchPoke:nth-child(3) .energy8 .energy8').length;
				bench4EnergyCount = $('#player .benchPoke:nth-child(2) .energy1 .energy1').length + $('#player .benchPoke:nth-child(2) .energy2 .energy2').length + $('#player .benchPoke:nth-child(2) .energy3 .energy3').length + $('#player .benchPoke:nth-child(2) .energy4 .energy4').length + $('#player .benchPoke:nth-child(2) .energy5 .energy5').length + $('#player .benchPoke:nth-child(2) .energy6 .energy6').length + $('#player .benchPoke:nth-child(2) .energy7 .energy7').length + $('#player .benchPoke:nth-child(2) .energy8 .energy8').length;
				bench5EnergyCount = $('#player .benchPoke:last .energy1 .energy1').length + $('#player .benchPoke:last .energy2 .energy2').length + $('#player .benchPoke:last .energy3 .energy3').length + $('#player .benchPoke:last .energy4 .energy4').length + $('#player .benchPoke:last .energy5 .energy5').length + $('#player .benchPoke:last .energy6 .energy6').length + $('#player .benchPoke:last .energy7 .energy7').length + $('#player .benchPoke:last .energy8 .energy8').length;
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
				activeEnergyCount = $('#player .active .energy1 .energy1').length + $('#player .active .energy2 .energy2').length + $('#player .active .energy3 .energy3').length + $('#player .active .energy4 .energy4').length + $('#player .active .energy5 .energy5').length + $('#player .active .energy6 .energy6').length + $('#player .active .energy7 .energy7').length + $('#player .active .energy8 .energy8').length;
				bench1EnergyCount = $('#player .benchPoke:first .energy1 .energy1').length + $('#player .benchPoke:first .energy2 .energy2').length + $('#player .benchPoke:first .energy3 .energy3').length + $('#player .benchPoke:first .energy4 .energy4').length + $('#player .benchPoke:first .energy5 .energy5').length + $('#player .benchPoke:first .energy6 .energy6').length + $('#player .benchPoke:first .energy7 .energy7').length + $('#player .benchPoke:first .energy8 .energy8').length;
				bench2EnergyCount = $('#player .benchPoke:nth-child(2) .energy1 .energy1').length + $('#player .benchPoke:nth-child(2) .energy2 .energy2').length + $('#player .benchPoke:nth-child(2) .energy3 .energy3').length + $('#player .benchPoke:nth-child(2) .energy4 .energy4').length + $('#player .benchPoke:nth-child(2) .energy5 .energy5').length + $('#player .benchPoke:nth-child(2) .energy6 .energy6').length + $('#player .benchPoke:nth-child(2) .energy7 .energy7').length + $('#player .benchPoke:nth-child(2) .energy8 .energy8').length;
				bench3EnergyCount = $('#player .benchPoke:nth-child(3) .energy1 .energy1').length + $('#player .benchPoke:nth-child(3) .energy2 .energy2').length + $('#player .benchPoke:nth-child(3) .energy3 .energy3').length + $('#player .benchPoke:nth-child(3) .energy4 .energy4').length + $('#player .benchPoke:nth-child(3) .energy5 .energy5').length + $('#player .benchPoke:nth-child(3) .energy6 .energy6').length + $('#player .benchPoke:nth-child(3) .energy7 .energy7').length + $('#player .benchPoke:nth-child(3) .energy8 .energy8').length;
				bench4EnergyCount = $('#player .benchPoke:nth-child(2) .energy1 .energy1').length + $('#player .benchPoke:nth-child(2) .energy2 .energy2').length + $('#player .benchPoke:nth-child(2) .energy3 .energy3').length + $('#player .benchPoke:nth-child(2) .energy4 .energy4').length + $('#player .benchPoke:nth-child(2) .energy5 .energy5').length + $('#player .benchPoke:nth-child(2) .energy6 .energy6').length + $('#player .benchPoke:nth-child(2) .energy7 .energy7').length + $('#player .benchPoke:nth-child(2) .energy8 .energy8').length;
				bench5EnergyCount = $('#player .benchPoke:last .energy1 .energy1').length + $('#player .benchPoke:last .energy2 .energy2').length + $('#player .benchPoke:last .energy3 .energy3').length + $('#player .benchPoke:last .energy4 .energy4').length + $('#player .benchPoke:last .energy5 .energy5').length + $('#player .benchPoke:last .energy6 .energy6').length + $('#player .benchPoke:last .energy7 .energy7').length + $('#player .benchPoke:last .energy8 .energy8').length;
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
					reset();
					return playerActiveAttachedEnergy;
				} else {
					playerActiveAttachedEnergy.splice(0, 0, energyCard);
					reset();
					return playerActiveAttachedEnergy;
				}
		} else {
			alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
		}		
	} else if (typeof inPlay8 !== "undefined" && card == inPlay8){
		if (bench1EnergyCount < 8){
			$('#player .benchPoke:first').append('<div class="energy' + (bench1EnergyCount+1) + '"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench1EnergyCount + 1) + '" /></div>');
			if (!playerBench1AttachedEnergy) {
					playerBench1AttachedEnergy = [energyCard];
					reset();
					return playerBench1AttachedEnergy;
				} else {
					playerBench1AttachedEnergy.splice(0, 0, energyCard);
					reset();
					return playerBench1AttachedEnergy;
				}
			reset();
			return playerBench1AttachedEnergy;
		} else {
			alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
		}
	} else if (typeof inPlay9 !== "undefined" && card == inPlay9){
		if (bench2EnergyCount < 8){
			$('#player .benchPoke:nth-child(2)').append('<div class="energy' + (bench2EnergyCount+1) + '"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench2EnergyCount + 1) + '" /></div>');
			if (!playerBench2AttachedEnergy) {
					playerBench2AttachedEnergy = [energyCard];
					reset();
					return playerBench2AttachedEnergy;
				} else {
					playerBench2AttachedEnergy.splice(0, 0, energyCard);
					reset();
					return playerBench2AttachedEnergy;
				}
			reset();
			return playerBench2AttachedEnergy;
		} else {
			alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
		}
	} else if (typeof inPlay10 !== "undefined" && card == inPlay10){
		if (bench3EnergyCount < 8){
			$('#player .benchPoke:nth-child(3)').append('<div class="energy' + (bench3EnergyCount+1) + '"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench3EnergyCount + 1) + '" /></div>');
			if (!playerBench3AttachedEnergy) {
					playerBench3AttachedEnergy = [energyCard];
					reset();
					return playerBench3AttachedEnergy;
				} else {
					playerBench3AttachedEnergy.splice(0, 0, energyCard);
					reset();
					return playerBench3AttachedEnergy;
				}
			reset();
			return playerBench3AttachedEnergy;
		} else {
			alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
		}
	} else if (typeof inPlay11 !== "undefined" && card == inPlay11){
		if (bench4EnergyCount < 8){
			$('#player .benchPoke:nth-child(4)').append('<div class="energy' + (bench4EnergyCount+1) + '"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench4EnergyCount + 1) + '" /></div>');
			if (!playerBench4AttachedEnergy) {
					playerBench4AttachedEnergy = [energyCard];
					reset();
					return playerBench4AttachedEnergy;
				} else {
					playerBench4AttachedEnergy.splice(0, 0, energyCard);
					reset();
					return playerBench4AttachedEnergy;
				}
			reset();
			return playerBench4AttachedEnergy;
		} else {
			alert("This Pokemon has the maximum allowed energy attached to it. Choose another Pokemon.");
		}
	} else if (typeof inPlay12 !== "undefined" && card == inPlay12){
		if (bench5EnergyCount < 8){
			$('#player .benchPoke:last').append('<div class="energy' + (bench5EnergyCount+1) + '"><img src="Cards/Base_Set/' + energyCard.Card + '" class="energy' + (bench5EnergyCount + 1) + '" /></div>');
			if (!playerBench5AttachedEnergy) {
					playerBench5AttachedEnergy = [energyCard];
					reset();
					return playerBench5AttachedEnergy;
				} else {
					playerBench5AttachedEnergy.splice(0, 0, energyCard);
					reset();
					return playerBench5AttachedEnergy;
				}
			reset();
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
	if (currentTotal.length == 'undefined') {
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
	card=card;
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
	if(playerTurn){
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
	} else {
		if (card == enemyInPlay7){
			enemyActiveDamage = enemyActiveDamage - 20;
		} else if (card == enemyInPlay8){
			enemyBench1Damage = enemyBench1Damage - 20;
		} else if (card == enemyInPlay9){
			enemyBench2Damage = enemyBench2Damage - 20;
		} else if (card == enemyInPlay10){
			enemyBench3Damage = enemyBench3Damage - 20;
		} else if (card == enemyInPlay11){
			enemyBench4Damage = enemyBench4Damage - 20;
		} else if (card == enemyInPlay12){
			enemyBench5Damage = enemyBench5Damage - 20;
		}
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

// Function to make Pokemon take no damage.
function noDamage(card, flag){
	if (card == inPlay7){
		playerNoDamageFlag = flag;
	} else if (card == enemyInPlay7){
		enemyNoDamageFlag = flag;
	}
}

// Check to display damage counters
playerActiveDamage = 0;
playerBench1Damage = 0;
playerBench2Damage = 0;
playerBench3Damage = 0;
playerBench4Damage = 0;
playerBench5Damage = 0;
enemyActiveDamage = 0;
enemyBench1Damage = 0;
enemyBench2Damage = 0;
enemyBench3Damage = 0;
enemyBench4Damage = 0;
enemyBench5Damage = 0;

function enemyDamage(enemyActiveDamage, enemyBench1Damage, enemyBench2Damage, enemyBench3Damage, enemyBench4Damage, enemyBench5Damage){
	if (enemyActiveDamage == 10) {
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 20){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage tr:first td:first, #enemyActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 30){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage tr:first td:first, #enemyActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 40){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage tr:first td:first, #enemyActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:first, #enemyActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 50){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyActiveDamage == 60){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 70){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 80){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:first, #enemyActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 90){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:first, #enemyActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 100){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (enemyActiveDamage == 110){		
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 120){		
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (enemyActiveDamage == 130){		
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first, #enemyActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 140){		
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first, #enemyActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 150){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first, #enemyActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyActiveDamage == 160){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first, #enemyActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 170){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first, #enemyActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 180){
		$('#enemyActiveDamage td').empty();
		$('#enemyActiveDamage td:first, #enemyActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyActiveDamage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyActiveDamage == 190){
	}*/
	if (enemyBench1Damage == 10) {
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 20){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage tr:first td:first, #enemyBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 30){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage tr:first td:first, #enemyBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 40){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage tr:first td:first, #enemyBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:first, #enemyBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 50){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyBench1Damage == 60){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 70){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 80){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:first, #enemyBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 90){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:first, #enemyBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 100){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (enemyBench1Damage == 110){		
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 120){		
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (enemyBench1Damage == 130){		
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first, #enemyBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 140){		
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first, #enemyBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 150){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first, #enemyBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyBench1Damage == 160){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first, #enemyBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 170){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first, #enemyBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 180){
		$('#enemyBench1Damage td').empty();
		$('#enemyBench1Damage td:first, #enemyBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench1Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench1Damage == 190){
	}*/
	if (enemyBench2Damage == 10) {
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 20){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage tr:first td:first, #enemyBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 30){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage tr:first td:first, #enemyBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 40){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage tr:first td:first, #enemyBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:first, #enemyBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 50){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyBench2Damage == 60){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 70){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 80){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:first, #enemyBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 90){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:first, #enemyBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 100){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (enemyBench2Damage == 110){		
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 120){		
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (enemyBench2Damage == 130){		
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first, #enemyBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 140){		
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first, #enemyBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 150){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first, #enemyBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyBench2Damage == 160){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first, #enemyBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 170){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first, #enemyBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 180){
		$('#enemyBench2Damage td').empty();
		$('#enemyBench2Damage td:first, #enemyBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench2Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench2Damage == 190){
	}*/
	if (enemyBench3Damage == 10) {
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 20){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage tr:first td:first, #enemyBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 30){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage tr:first td:first, #enemyBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 40){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage tr:first td:first, #enemyBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:first, #enemyBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 50){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyBench3Damage == 60){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 70){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 80){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:first, #enemyBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 90){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:first, #enemyBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 100){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (enemyBench3Damage == 110){		
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 120){		
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (enemyBench3Damage == 130){		
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first, #enemyBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 140){		
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first, #enemyBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 150){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first, #enemyBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyBench3Damage == 160){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first, #enemyBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 170){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first, #enemyBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 180){
		$('#enemyBench3Damage td').empty();
		$('#enemyBench3Damage td:first, #enemyBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench3Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench3Damage == 190){
	}*/
	if (enemyBench4Damage == 10) {
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 20){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage tr:first td:first, #enemyBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 30){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage tr:first td:first, #enemyBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 40){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage tr:first td:first, #enemyBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:first, #enemyBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 50){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyBench4Damage == 60){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 70){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 80){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:first, #enemyBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 90){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:first, #enemyBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 100){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (enemyBench4Damage == 110){		
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 120){		
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (enemyBench4Damage == 130){		
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first, #enemyBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 140){		
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first, #enemyBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 150){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first, #enemyBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyBench4Damage == 160){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first, #enemyBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 170){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first, #enemyBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 180){
		$('#enemyBench4Damage td').empty();
		$('#enemyBench4Damage td:first, #enemyBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench4Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench4Damage == 190){
	}*/
	if (enemyBench5Damage == 10) {
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 20){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage tr:first td:first, #enemyBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 30){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage tr:first td:first, #enemyBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 40){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage tr:first td:first, #enemyBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:first, #enemyBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 50){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyBench5Damage == 60){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 70){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 80){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:first, #enemyBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 90){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:first, #enemyBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 100){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (enemyBench5Damage == 110){		
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 120){		
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#enemyBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (enemyBench5Damage == 130){		
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first, #enemyBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 140){		
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first, #enemyBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 150){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first, #enemyBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (enemyBench5Damage == 160){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first, #enemyBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 170){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first, #enemyBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 180){
		$('#enemyBench5Damage td').empty();
		$('#enemyBench5Damage td:first, #enemyBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#enemyBench5Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (enemyBench5Damage == 190){
	}*/
	knockoutCheck();
}

	function playerDamage (playerActiveDamage, playerBench1Damage, playerBench2Damage, playerBench3Damage, playerBench4Damage, playerBench5Damage){
	if (playerActiveDamage === 10) {
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage === 20){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage tr:first td:first, #playerActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 30){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage tr:first td:first, #playerActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 40){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage tr:first td:first, #playerActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:first, #playerActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 50){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerActiveDamage == 60){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 70){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 80){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:first, #playerActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 90){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:first, #playerActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 100){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (playerActiveDamage == 110){		
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 120){		
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerActiveDamage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (playerActiveDamage == 130){		
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first, #playerActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 140){		
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first, #playerActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 150){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first, #playerActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerActiveDamage == 160){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first, #playerActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 170){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first, #playerActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 180){
		$('#playerActiveDamage td').empty();
		$('#playerActiveDamage td:first, #playerActiveDamage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerActiveDamage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerActiveDamage == 190){
	}*/
	if (playerBench1Damage === 10) {
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage === 20){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage tr:first td:first, #playerBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 30){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage tr:first td:first, #playerBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 40){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage tr:first td:first, #playerBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:first, #playerBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 50){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerBench1Damage == 60){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 70){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 80){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:first, #playerBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 90){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:first, #playerBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 100){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (playerBench1Damage == 110){		
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 120){		
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerBench1Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (playerBench1Damage == 130){		
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first, #playerBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 140){		
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first, #playerBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 150){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first, #playerBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerBench1Damage == 160){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first, #playerBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 170){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first, #playerBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 180){
		$('#playerBench1Damage td').empty();
		$('#playerBench1Damage td:first, #playerBench1Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench1Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench1Damage == 190){
	}*/
	if (playerBench2Damage === 10) {
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage === 20){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage tr:first td:first, #playerBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 30){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage tr:first td:first, #playerBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 40){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage tr:first td:first, #playerBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:first, #playerBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 50){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerBench2Damage == 60){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 70){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 80){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:first, #playerBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 90){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:first, #playerBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 100){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (playerBench2Damage == 110){		
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 120){		
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerBench2Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (playerBench2Damage == 130){		
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first, #playerBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 140){		
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first, #playerBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 150){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first, #playerBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerBench2Damage == 160){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first, #playerBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 170){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first, #playerBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 180){
		$('#playerBench2Damage td').empty();
		$('#playerBench2Damage td:first, #playerBench2Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench2Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench2Damage == 190){
	}*/
	if (playerBench3Damage === 10) {
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage === 20){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage tr:first td:first, #playerBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 30){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage tr:first td:first, #playerBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 40){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage tr:first td:first, #playerBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:first, #playerBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 50){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerBench3Damage == 60){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 70){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 80){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:first, #playerBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 90){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:first, #playerBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 100){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (playerBench3Damage == 110){		
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 120){		
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerBench3Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (playerBench3Damage == 130){		
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first, #playerBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 140){		
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first, #playerBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 150){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first, #playerBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerBench3Damage == 160){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first, #playerBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 170){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first, #playerBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 180){
		$('#playerBench3Damage td').empty();
		$('#playerBench3Damage td:first, #playerBench3Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench3Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench3Damage == 190){
	}*/
	if (playerBench4Damage === 10) {
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage === 20){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage tr:first td:first, #playerBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 30){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage tr:first td:first, #playerBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 40){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage tr:first td:first, #playerBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:first, #playerBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 50){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerBench4Damage == 60){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 70){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 80){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:first, #playerBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 90){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:first, #playerBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 100){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (playerBench4Damage == 110){		
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 120){		
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerBench4Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (playerBench4Damage == 130){		
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first, #playerBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 140){		
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first, #playerBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 150){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first, #playerBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerBench4Damage == 160){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first, #playerBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 170){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first, #playerBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 180){
		$('#playerBench4Damage td').empty();
		$('#playerBench4Damage td:first, #playerBench4Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench4Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench4Damage == 190){
	}*/
	if (playerBench5Damage === 10) {
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage === 20){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage tr:first td:first, #playerBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 30){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage tr:first td:first, #playerBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 40){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage tr:first td:first, #playerBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:first, #playerBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 50){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerBench5Damage == 60){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 70){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 80){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:first, #playerBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 90){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:first, #playerBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 100){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage tr:first td:first').append('<img src="damage100.gif" class="counter" />');
	} else if (playerBench5Damage == 110){		
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 120){		
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first').append('<img src="damage100.gif" class="counter" />');
		$('#playerBench5Damage tr:first td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:first').append('<img src="damage10.gif" class="counter" />');
	}/* else if (playerBench5Damage == 130){		
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first, #playerBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 140){		
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first, #playerBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 150){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first, #playerBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
	} else if (playerBench5Damage == 160){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first, #playerBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 170){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first, #playerBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(3) td:first').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 180){
		$('#playerBench5Damage td').empty();
		$('#playerBench5Damage td:first, #playerBench5Damage td:nth-child(2)').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:first').append('<img src="damage50.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(2) td:nth-child(2)').append('<img src="damage10.gif" class="counter" />');
		$('#playerBench5Damage tr:nth-child(3) td').append('<img src="damage10.gif" class="counter" />');
	} else if (playerBench5Damage == 190){
	}*/
	knockoutCheck();
}

// Function run when the Attack button is clicked.
function attack(card, playerSandAttack, enemySandAttack){
	/*if (playerSandAttack == 1){
		alert("A coin will be flipped. If tails, your attack does nothing!");
		coinFlip = Math.floor(Math.random() * 10) + 1;
	if (coinFlip <= 5){
		alert("Coin flip was tails!");
		endPlayerTurn(); // This needs to be defined still!
	} else {
		alert("Coin flip was heads! Your attack goes through!");
	}
	} else {
	}*/
	success = 0;
	confusionCheck(player);
	if (success == 1){
		alert("Choose an attack to use.");
		$('.attacks').empty();
		document.getElementById("light9").style.display="block";
		document.getElementById("fade").style.display="block";
		$('.attacks').append('<img src="Cards/Base_Set/' + card.Card + '" />');
		$('.attacks').append('<a onClick="' + card.Attack1 + '()" class="buttons" >' + card.Attack1 + '</a>');
		$('.attacks').append('<a onClick="' + card.Attack2 + '()" class="buttons" >' + card.Attack2 + '</a>');
	} else {
	}
}

// Function to check weakness and resistance.
function playerWeakness(type, amount){
	if (playerNoDamageFlag == 1){
		alert("Player's Pokemon takes no damage this turn!");
		return;
	} else if (inPlay7.Weak == type){
		amount = amount * 2;
	} else if (inPlay7.Resist == type){
		amount = amount - 30;
	}
	playerActiveDamage = amount;
	playerDamage();
}

function enemyWeakness(type, amount){
	console.log(amount);
	if (enemyNoDamageFlag == 1){
		alert("Enemy's Pokemon takes no damage this turn!");
		return;
	} else if (enemyInPlay7.Weak == type){
		amount = amount * 2;
	} else if (enemyInPlay7.Resist == type){
		amount = amount - 30;
	}
	enemyActiveDamage = enemyActiveDamage + amount;
	enemyDamage(enemyActiveDamage);
}

//Functions to discard energy on attacks.
function discardEnergy(card){
	card = card;
	index = playerActiveAttachedEnergy.indexOf(i);
	playerActiveAttachedEnergy.splice(index, 1);
	$('#player .active').remove($('.energy'+index));
}

function enemyDiscardEnergy(card){
	card = card;
	for (i=0; i < 17; i++) {
		if (enemyActiveAttachedEnergy[i] == card) {
			index = enemyActiveAttachedEnergy.indexOf(i);
			enemyActiveAttachedEnergy.splice(index, 1);			
		}
	}
	$('#enemy .active .energy').empty();
	$('#enemy .active .energy2').empty();
	$('#enemy .active .energy4').empty();
	$('#enemy .active .energy6').empty();
	$('#enemy .active .energy8').empty();
	$('#enemy .active .energy10').empty();
	$('#enemy .active .energy12').empty();
	$('#enemy .active .energy14').empty();
	$('#enemy .active .energy16').empty();
	for (i=0; i < enemyActiveAttachedEnergy.length; i++) {
		index = enemyActiveAttachedEnergy.indexOf(i);
		if (index <= 0) {
			index = 2;
		}
		$('#enemy .active').append('<div class="energy'+(index)+'"><img src="Cards/Base_Set/'+enemyActiveAttachedEnergy[i].Card+'" class="energy'+index+'"></div>');
	}
}

// Function to prevent any status changes from attacks.
function noStatus(player){
	if (player == player){
	if ($('.playerStatus').length > 0){
		$('.playerStatus').empty();
	}
	} else if (player == enemy){
		if ($('.enemyStatus').length > 0){
			$('.enemyStatus').empty();
		}
	}
}

function reset(playerInHand) {
	playerInHand = window.playerInHand;
	$('.inPlayerHand').empty();
	for (i=0; i < playerInHand.length; i++){
		$('.inPlayerHand').append('<img src="Cards/Base_Set/' + playerInHand[i].Card + '" class="card" onClick="largeCard(playerInHand[' + i + '])" />');
	}
	$('img').attr('onClick', 'largeCard(this)');
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
, 3000);

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
			if ($('.playerStatus #paralyze').length > 0){
				alert("Your Pokemon is no longer paralyzed.");
				$('.playerStatus #paralyze').remove();
			} else if ($('.playerStatus #poison').length > 0){
				alert("Your Pokemon takes 10 damage from Poison!");
				playerActiveDamage = playerActiveDamage + 10;
				playerDamage();
				knockoutCheck();
			} else if ($('.playerStatus #sleep').length > 0){
				alert("Flip a coin to see if you Pokemon wakes up.");
				coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Your Pokemon is still Asleep.");
				} else {
					alert("Coin flip was heads! Your Pokemon is Awake!");
					$('.playerStatus #sleep').remove();
				}
			} else if ($('.playerStatus #burn').length > 0){
				alert("Flip a coin to see if your Pokemon takes damage from Burn.");
				if (coinFlip <= 5){
					alert("Coin flip was tails! Your Pokemon takes 20 damage from Burn!");
					playerActiveDamage = playerActiveDamage + 20;
					playerDamage();
					knockoutCheck();
				} else {
					alert("Coin flip was heads! Your Pokemon does not take damage from Burn!");
				}
			} else if ($('.playerStatus #toxic').length > 0){
				alert("Your Pokemon takes 20 damage from Toxic!");
				playerActiveDamage = playerActiveDamage + 20;
				playerDamage();
				knockoutCheck();
			}
		}
		if ($('.enemyStatus').length > 0) {
			if ($('.enemyStatus #paralyze').length > 0){
				alert("Enemy Pokemon is no longer paralyzed.");
				$('.enemyStatus #paralyze').remove();
			} else if ($('.enemyStatus #poison').length > 0){
				alert("Enemy Pokemon takes 10 damage from Poison!");
				enemyActiveDamage = enemyActiveDamage + 10;
				enemyDamage();
				knockoutCheck();
			} else if ($('.enemyStatus #sleep').length > 0){
				alert("Coin flip to see if enemy Pokemon wakes up.");
				coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon is still Asleep.");
				} else {
					alert("Coin flip was heads! Enemy Pokemon is Awake!");
					$('.enemyStatus #sleep').remove();
				}
			} else if ($('.enemyStatus #burn').length > 0){
				alert("Coin flip to see if Enemy Pokemon takes damage from Burn.");
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon takes 20 damage from Burn!");
					enemyActiveDamage = enemyActiveDamage + 20;
					enemyDamage();
					knockoutCheck();
				} else {
					alert("Coin flip was heads! Enemy Pokemon does not take damage from Burn!");
				}
			} else if ($('.enemyStatus #toxic').length > 0){
				alert("Enemy Pokemon takes 20 damage from Toxic!");
				playerActiveDamage = playerActiveDamage + 20;
				enemyDamage();
				knockoutCheck();
			}
		}
		previousTotal = $('#player .energy1 img').length + $('#player .energy2 img').length + $('#player .energy3 img').length + $('#player .energy4 img').length + $('#player .energy5 img').length + $('#player .energy6 img').length + $('#player .energy7 img').length + $('#player .energy8 img').length;
		enemyPreviousTotal = $('#enemy .energy1 img').length + $('#enemy .energy2 img').length + $('#enemy .energy3 img').length + $('#enemy .energy4 img').length + $('#enemy .energy5 img').length + $('#enemy .energy6 img').length + $('#enemy .energy7 img').length + $('#enemy .energy8 img').length;
		reset();
		$('#exit, #exit2, .exit3').trigger('click');
		$('.handbutton').trigger('click');
		enemyNoDamageFlag = 0;
		enemyTurn(enemyPreviousTotal);
	} else if (turn == "Enemy") {
		//coming from enemy turn
		if ($('.status').length > 0) {
			if ($('.playerStatus #paralyze').length > 0){
				alert("Your Pokemon is no longer paralyzed.");
				$('.playerStatus #paralyze').remove();
			} else if ($('.playerStatus #poison').length > 0){
				alert("Your Pokemon takes 10 damage from Poison!");
				playerActiveDamage = playerActiveDamage + 10;
				playerDamage();
				knockoutCheck();
			} else if ($('.playerStatus #sleep').length > 0){
				alert("Flip a coin to see if you Pokemon wakes up.");
				coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Your Pokemon is still Asleep.");
				} else {
					alert("Coin flip was heads! Your Pokemon is Awake!");
					$('.playerStatus #sleep').remove();
				}
			} else if ($('.playerStatus #burn').length > 0){
				alert("Flip a coin to see if your Pokemon takes damage from Burn.");
				if (coinFlip <= 5){
					alert("Coin flip was tails! Your Pokemon takes 20 damage from Burn!");
					playerActiveDamage = playerActiveDamage + 20;
					playerDamage();
					knockoutCheck();
				} else {
					alert("Coin flip was heads! Your Pokemon does not take damage from Burn!");
				}
			} else if ($('.playerStatus #toxic').length > 0){
				alert("Your Pokemon takes 20 damage from Toxic!");
				playerActiveDamage = playerActiveDamage + 20;
				playerDamage();
				knockoutCheck();
			}
		}
		if ($('#enemy .status').length > 0) {
			if ($('.enemyStatus #paralyze').length > 0){
				alert("Enemy Pokemon is no longer paralyzed.");
				$('.enemyStatus #paralyze').remove();
			} else if ($('#enemy #poison').length > 0){
				alert("Enemy Pokemon takes 10 damage from Poison!");
				enemyActiveDamage = enemyActiveDamage + 10;
				enemyDamage();
				knockoutCheck();
			} else if ($('.enemyStatus #sleep').length > 0){
				alert("Coin flip to see if enemy Pokemon wakes up.");
				coinFlip = Math.floor(Math.random() * 10) + 1;
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon is still Asleep.");
				} else {
					alert("Coin flip was heads! Enemy Pokemon is Awake!");
					$('.enemyStatus #sleep').remove();
				}
			} else if ($('.enemyStatus #burn').length > 0){
				alert("Coin flip to see if Enemy Pokemon takes damage from Burn.");
				if (coinFlip <= 5){
					alert("Coin flip was tails! Enemy Pokemon takes 20 damage from Burn!");
					enemyActiveDamage = enemyActiveDamage + 20;
					enemyDamage();
					knockoutCheck();
				} else {
					alert("Coin flip was heads! Enemy Pokemon does not take damage from Burn!");
				}
			} else if ($('.enemyStatus #toxic').length > 0){
				alert("Enemy Pokemon takes 20 damage from Toxic!");
				playerActiveDamage = playerActiveDamage + 20;
				enemyDamage();
				knockoutCheck();
			}
		}
		previousTotal = $('#player .energy1 img').length + $('#player .energy2 img').length + $('#player .energy3 img').length + $('#player .energy4 img').length + $('#player .energy5 img').length + $('#player .energy6 img').length + $('#player .energy7 img').length + $('#player .energy8 img').length;
		enemyPreviousTotal = $('#enemy .energy1 img').length + $('#enemy .energy2 img').length + $('#enemy .energy3 img').length + $('#enemy .energy4 img').length + $('#enemy .energy5 img').length + $('#enemy .energy6 img').length + $('#enemy .energy7 img').length + $('#enemy .energy8 img').length;
		reset()
		$('#exit, #exit2, .exit3').trigger('click');
		$('.handbutton').trigger('click');
		playerNoDamageFlag = 0;
		playerTurn(previousTotal);
	}
}

// Check to see if a Pokemon is knocked out.
function knockoutCheck(){
	if (playerActiveDamage >= inPlay7.HP){
		playerDiscardedCards = inPlay7+playerActiveAttachedEnergy;
		playerDiscardPile.splice(0, 0, inPlay7+playerActiveAttachedEnergy);
		$('#playerActiveDamage').empty();
		$('.playerStatus').empty();
		knockoutPokemon('Enemy', inPlay7);
		if ($('#player .benchPoke').length < 1){
			alert("You are out of Pokemon! Enemy wins.");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#player .active').empty();
		$('#player .benchPoke img').attr('onClick', 'newActive(card)');
	} else if (playerBench1Damage >= inPlay8.HP){
		playerDiscardedCards = inPlay8+playerBench1AttachedEnergy;
		playerDiscardPile.splice(0, 0, inPlay8+playerBench1AttachedEnergy);
		$('#playerActiveDamage').empty();
		$('.playerStatus').empty();
		knockoutPokemon('Enemy', inPlay8);
		if ($('#player .benchPoke').length < 1){
			alert("You are out of Pokemon! Enemy wins.");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#player .active').empty();
		$('#player .benchPoke img').attr('onClick', 'newActive(card)');
	} else if (playerBench2Damage >= inPlay9.HP){
		playerDiscardedCards = inPlay9+playerBench2AttachedEnergy;
		playerDiscardPile.splice(0, 0, inPlay9+playerBench2AttachedEnergy);
		$('#playerActiveDamage').empty();
		$('.playerStatus').empty();
		knockoutPokemon('Enemy', inPlay9);
		if ($('#player .benchPoke').length < 1){
			alert("You are out of Pokemon! Enemy wins.");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#player .active').empty();
		$('#player .benchPoke img').attr('onClick', 'newActive(card)');
	} else if (playerBench3Damage >= inPlay10.HP){
		playerDiscardedCards = inPlay10+playerBench3AttachedEnergy;
		playerDiscardPile.splice(0, 0, inPlay10+playerBench3AttachedEnergy);
		$('#playerActiveDamage').empty();
		$('.playerStatus').empty();
		knockoutPokemon('Enemy', inPlay10);
		if ($('#player .benchPoke').length < 1){
			alert("You are out of Pokemon! Enemy wins.");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#player .active').empty();
		$('#player .benchPoke img').attr('onClick', 'newActive(card)');
	} else if (playerBench4Damage >= inPlay11.HP){
		playerDiscardedCards = inPlay11+playerBench4AttachedEnergy;
		playerDiscardPile.splice(0, 0, inPlay11+playerBench4AttachedEnergy);
		$('#playerActiveDamage').empty();
		$('.playerStatus').empty();
		knockoutPokemon('Enemy', inPlay11);
		if ($('#player .benchPoke').length < 1){
			alert("You are out of Pokemon! Enemy wins.");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#player .active').empty();
		$('#player .benchPoke img').attr('onClick', 'newActive(card)');
	} else if (playerBench5Damage >= inPlay12.HP){
		playerDiscardedCards = inPlay12+playerBench5AttachedEnergy;
		playerDiscardPile.splice(0, 0, inPlay12+playerBench5AttachedEnergy);
		$('#playerActiveDamage').empty();
		$('.playerStatus').empty();
		knockoutPokemon('Enemy', inPlay12);
		if ($('#player .benchPoke').length < 1){
			alert("You are out of Pokemon! Enemy wins.");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#player .active').empty();
		$('#player .benchPoke img').attr('onClick', 'newActive(card)');
	}
	if (enemyActiveDamage >= enemyInPlay7.HP){
		enemyDiscardedCards = enemyInPlay7+enemyActiveAttachedEnergy;
		enemyDiscardPile.splice(0, 0, enemyInPlay7+enemyActiveAttachedEnergy);
		$('#enemyActiveDamage').empty();
		$('.enemyStatus').empty();
		knockoutPokemon('Player', enemyInPlay7);
		if ($('#enemy .benchPoke').length < 1){
			alert("Enemy is out of Pokemon! You win!!!");
			endGame();
		}
		alert("Enemy will choose a new Active Pokemon.");
		$('#enemy .active').empty();
		enemyChooseActive();
	} else if (enemyBench1Damage >= enemyInPlay8.HP){
		enemyDiscardedCards = enemyInPlay8+enemyBench1AttachedEnergy;
		enemyDiscardPile.splice(0, 0, enemyInPlay8+enemyBench1AttachedEnergy);
		$('#enemyActiveDamage').empty();
		$('.enemyStatus').empty();
		knockoutPokemon('Player', enemyInPlay8);
		if ($('#enemy .benchPoke').length < 1){
			alert("Enemy is out of Pokemon! You win!!!");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#enemy .active').empty();
		$('#enemy .benchPoke').attr('onClick', 'newActive(card)');
	} else if (enemyBench2Damage >= enemyInPlay9.HP){
		enemyDiscardedCards = enemyInPlay9+enemyBench2AttachedEnergy;
		enemyDiscardPile.splice(0, 0, enemyInPlay9+enemyBench2AttachedEnergy);
		$('#enemyActiveDamage').empty();
		$('.enemyStatus').empty();
		knockoutPokemon('Player', enemyInPlay9);
		if ($('#enemy benchPoke').length < 1){
			alert("Enemy is out of Pokemon! You win!!!");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#enemy .active').empty();
		$('#enemy .benchPoke').attr('onClick', 'newActive(card)');
	} else if (enemyBench3Damage >= enemyInPlay10.HP){
		enemyDiscardedCards = enemyInPlay10+enemyBench3AttachedEnergy;
		enemyDiscardPile.splice(0, 0, enemyInPlay10+enemyBench3AttachedEnergy);
		$('#enemyActiveDamage').empty();
		$('.enemyStatus').empty();
		knockoutPokemon('Player', enemyInPlay10);
		if ($('#enemy benchPoke').length < 1){
			alert("Enemy is out of Pokemon! You win!!!");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#enemy .active').empty();
		$('#enemy .benchPoke').attr('onClick', 'newActive(card)');
	} else if (enemyBench4Damage >= enemyInPlay11.HP){
		enemyDiscardedCards = enemyInPlay11+enemyBench4AttachedEnergy;
		enemyDiscardPile.splice(0, 0, enemyInPlay11+enemyBench4AttachedEnergy);
		$('#enemyActiveDamage').empty();
		$('.enemyStatus').empty();
		knockoutPokemon('Player', enemyInPlay11);
		if ($('#enemy benchPoke').length < 1){
			alert("Enemy is out of Pokemon! You win!!!");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#enemy .active').empty();
		$('#enemy .benchPoke').attr('onClick', 'newActive(card)');
	} else if (enemyBench5Damage >= enemyInPlay12.HP){
		enemyDiscardedCards = enemyInPlay12+enemyBench5AttachedEnergy;
		enemyDiscardPile.splice(0, 0, enemyInPlay12+enemyBench5AttachedEnergy);
		$('#enemyActiveDamage').empty();
		$('.enemyStatus').empty();
		knockoutPokemon('Player', enemyInPlay12);
		if ($('#enemy .benchPoke').length < 1){
			alert("Enemy is out of Pokemon! You win!!!");
			endGame();
		}
		alert("Choose your new Active Pokemon.");
		$('#player .active').empty();
		$('#player .benchPoke').attr('onClick', 'newActive(card)');
	}
}

function knockoutPokemon(player){
	if (player == "Player"){
		alert("You have knocked out the opponent's Pokemon! You get a Prize card!");
		takePrize("Player",inPlay1);
	} else if (player == "Enemy") {
		alert("Your active Pokemon is Knocked Out! Opponent gets a prize card.");
		if (enemyInPlay1!=''){
			card = enemyInPlay1;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:first').remove();
			$('#enemy .enemyCover:last').remove();
		} else if (enemyInPlay2!=''){
			card = enemyInPlay2;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:nth-child(2)').remove();
			$('#enemy .enemyCover:last').remove();
		} else if (enemyInPlay3!=''){
			card = enemyInPlay3;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:nth-child(3)').remove();
			$('#enemy .enemyCover:last').remove();
		} else if (enemyInPlay4!=''){
			card = enemyInPlay4;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:nth-child(4)').remove();
			$('#enemy .enemyCover:last').remove();
		} else if (enemyInPlay5!=''){
			card = enemyInPlay5;
			enemyInHand.splice(-1, 0, card);
			$('#enemy .prize:nth-child(5)').remove();
			$('#enemy .enemyCover:last').remove();
		} else if (enemyInPlay6!=''){
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
				largeCard(inPlay1);
				break;
			case (inPlay2):
				$('#player .prize:nth-child(2)').remove();
				largeCard(inPlay2);
				break;
			case (inPlay3):
				$('#player .prize:nth-child(3)').remove();
				largeCard(inPlay3);
				break;
			case (inPlay4):
				$('#player .prize:nth-child(4)').remove();
				largeCard(inPlay4);
				break;
			case (inPlay5):
				$('#player .prize:nth-child(5)').remove();
				largeCard(inPlay5);
				break;
			case (inPlay6):
				$('#player .prize:last').remove();
				largeCard(inPlay6);
				break;
			default:
				break;
		}
		reset();
		if($('#player .prize').length == 0){
			alert("You took all your prize cards. You have won the game!!!");
			endGame();
		} else {
			return;
		}
	} else {
		//enemy should have already taken a prize card.
	}
}

function newActive(card){
	alert(card.Card);
	if (card.Card == inPlay8.Card){
		inPlay7 = inPlay8;
		inPlay8 = '';
		$('#player .active img').remove();
		$('#player .active').append($('#player .benchPoke:first img'));
		$('#player .benchPoke:first img').remove();
		playerActiveDamage = playerBench1Damage;
		playerBench1Damage = 0;
	} else if (card.Card == inPlay9.Card){
		inPlay7 = inPlay9;
		inPlay9 = '';
		$('#player .active img').remove();
		$('#player .active').append($('#player .benchPoke:nth-child(2) img'));
		playerActiveDamage = playerBench2Damage;
		playerBench2Damage = 0;
	} else if (card.Card == inPlay10.Card){
		inPlay7 = inPlay10;
		inPlay10 = '';
		$('#player .active img').remove();
		$('#player .active').append($('#player .benchPoke:nth-child(3) img'));
		playerActiveDamage = playerBench3Damage;
		playerBench3Damage = 0;
	} else if (card.Card == inPlay11.Card){
		inPlay7 = inPlay11;
		inPlay11 = '';
		$('#player .active img').remove();
		$('#player .active').append($('#player .benchPoke:nth-child(4) img'));
		playerActiveDamage = playerBench4Damage;
		playerBench4Damage = 0;
	} else if (card.Card == inPlay12.Card){
		inPlay7 = inPlay12;
		inPlay12 = '';
		$('#player .active img').remove();
		$('#player .active').append($('#player .benchPoke:last img'));
		playerActiveDamage = playerBench5Damage;
		playerBench5Damage = 0;
	}
}

function enemyChooseActive(){
	if(enemyInPlay8 != "" || enemyInPlay9 != "" || enemyInPlay10 != "" || enemyInPlay11 != "" || enemyInPlay12 != ""){
		energyCount = {enemyBench1AttachedEnergy, enemyBench2AttachedEnergy, enemyBench3AttachedEnergy, enemyBench4AttachedEnergy, enemyBench5AttachedEnergy};
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
			if (enemyInPlay8 != ""){
				enemyInPlay7 = enemyInPlay8;
				enemyInPlay8 = '';
				$('#enemy .active img').remove();
				$('#enemy .active').append($('#enemy .benchPoke:first img'));
				enemyActiveDamage = enemyBench1Damage;
				enemyBench1Damage = 0;
			} else if (enemyInPlay9 != ""){
				enemyInPlay7 = enemyInPlay9;
				enemyInPlay9 = '';
				$('#enemy .active img').remove();
				$('#enemy .active').append($('#enemy .benchPoke:nth-child(2) img'));
				enemyActiveDamage = enemyBench2Damage;
				enemyBench2Damage = 0;
			} else if (enemyInPlay10 != ""){
				enemyInPlay7 = enemyInPlay10;
				enemyInPlay10 = '';
				$('#enemy .active img').remove();
				$('#enemy .active').append($('#enemy .benchPoke:nth-child(3) img'));
				enemyActiveDamage = enemyBench3Damage;
				enemyBench3Damage = 0;
			} else if (enemyInPlay11 != ""){
				enemyInPlay7 = enemyInPlay11;
				enemyInPlay10 = '';
				$('#enemy .active img').remove();
				$('#enemy .active').append($('#enemy .benchPoke:nth-child(3) img'));
				enemyActiveDamage = enemyBench4Damage;
				enemyBench4Damage = 0;
			} else if (enemyInPlay12 != ""){
				enemyInPlay7 = enemyInPlay12;
				enemyInPlay10 = '';
				$('#enemy .active img').remove();
				$('#enemy .active').append($('#enemy .benchPoke:nth-child(3) img'));
				enemyActiveDamage = enemyBench5Damage;
				enemyBench5Damage = 0;
			}
		}
	} else {
		alert("Enemy is out of Pokemon! You win!!!");
		endGame();
	}
	return;
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
function endGame(){
	try{
		throw new Error('The game is over, restarting game.');
	}
	catch(e){
		window.location.reload();
	}
}
