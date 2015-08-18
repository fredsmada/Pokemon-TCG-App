/* Attack and Damage Mostly */

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
}
$(document).ready(function(){
setInterval(
playerDamage(playerActiveDamage, playerBench1Damage, playerBench2Damage, playerBench3Damage, playerBench4Damage, playerBench5Damage)
, 5000);
});

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
		betweenTurns("Player");
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
	for (i=0; i < 17; i++) {
		if (playerActiveAttachedEnergy[i] == card) {
			index = playerActiveAttachedEnergy.indexOf(i);
			playerActiveAttachedEnergy.splice(index, 1);			
		}
	}
	$('#player .active .energy').empty();
	$('#player .active .energy2').empty();
	$('#player .active .energy4').empty();
	$('#player .active .energy6').empty();
	$('#player .active .energy8').empty();
	$('#player .active .energy10').empty();
	$('#player .active .energy12').empty();
	$('#player .active .energy14').empty();
	$('#player .active .energy16').empty();
	for (i=0; i < playerActiveAttachedEnergy.length; i++) {
		index = playerActiveAttachedEnergy.indexOf(i);
		if (index <= 0) {
			index = 2;
		}
		$('#player .active').append('<div class="energy'+(index)+'"><img src="Cards/Base_Set/'+playerActiveAttachedEnergy[i].Card+'" class="energy'+index+'"></div>');
	}
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
