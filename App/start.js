/*Starting Functions and Variables*/

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
var Wartortle = {Card: "Wartortle.jpg", Stage: "stage1", Type: "W", HP: 60, PokePower: "", Attack1: "Withdraw", Attack2: "Bite_Wartortle", Weak: "L", Resist: "", Retreat: 1, Evo: 0};
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
	setInterval(function(){$('#enemy #deckLeft span span').empty(); $('#enemy #deckLeft span span').append(enemyDeck.length)}, 2000);
	setInterval(function(){$('#player #deckLeft span span').empty(); $('#player #deckLeft span span').append(playerDeck.length)}, 2000);
});

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
		playerPrizes = playerDeck.splice(0, 6);
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
		enemyPrizes = enemyDeck.splice(0, 6);
	} else {
		alert("Computer has no Basic Pokemon!");
		$('.inEnemyHand').empty();
		enemyDeck.splice(0, 0, enemyInHand[0], enemyInHand[1], enemyInHand[2], enemyInHand[3], enemyInHand[4], enemyInHand[5], enemyInHand[6]);
		enemyInHand = "";
		shuffleDeck(enemyDeck);
		$('.inenemyHand').append('<img src="Cards/Base_Set/' + enemyDeck[0].Card + '" class="card" onClick="setActive(enemyInHand[0])" /><img src="Cards/Base_Set/' + enemyDeck[1].Card + '" class="card" onClick="setActive(enemyInHand[1])" /><img src="Cards/Base_Set/' + enemyDeck[2].Card + '" class="card" onClick="setActive(enemyInHand[2])" /><img src="Cards/Base_Set/' + enemyDeck[3].Card + '" class="card" onClick="setActive(enemyInHand[3])" /><img src="Cards/Base_Set/' + enemyDeck[4].Card + '" class="card" onClick="setActive(enemyInHand[4])" /><img src="Cards/Base_Set/' + enemyDeck[5].Card + '" class="card" onClick="setActive(enemyInHand[5])" /><img src="Cards/Base_Set/' + enemyDeck[6].Card + '" class="card" onClick="setActive(enemyInHand[6])" />');
		enemyInHand = new Array(enemyDeck[0], enemyDeck[1], enemyDeck[2], enemyDeck[3], enemyDeck[4], enemyDeck[5], enemyDeck[6]);
		enemyDeck.splice(0, 7);
	}
	if ($('#player #prizes .card').length - 6 > 0 && $('#enemy #prizes .card').length - 6 > 0){
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
	} else if (enemyInHand[0].Stage != "basic" || enemyInHand[1].Stage != "basic" || enemyInHand[2].Stage != "basic" || enemyInHand[3].Stage != "basic" || enemyInHand[4].Stage != "basic" || enemyInHand[5].Stage != "basic" || enemyInHand[6].Stage != "basic"){
		alert("Computer does not have a Basic Pokemon. Draw an extra card!");
		drawPlayerCard();
		checkEnemyBasic();
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