/**
 * 
 */
var char_race = "";
var char_class = "";
var char_abilityScores = [0,0,0,0,0,0];
var char_abilityScoresType = [];

function chooseRace() {
	var race_value;
	for(var i = 0; i < raceChoice.length; i++){
	    if(raceChoice[i].checked){
	        race_value = raceChoice[i].value;
	    }
	}
    document.getElementById("raceSpan").innerHTML = race_value;
    char_race = race_value;
}
function chooseClass() {
	var class_value;
	for(var i = 0; i < classChoice.length; i++){
	    if(classChoice[i].checked){
	        class_value = classChoice[i].value;
	    }
	}
    document.getElementById("classSpan").innerHTML = class_value;
    char_class = class_value;

}

function setAbilityRolls(){
	var abilitySumSet = document.getElementById("abilityRollSums");
	var abilitySumArray = abilitySumSet.getElementsByClassName("absum");
	for (var i=0; i < abilitySumArray.length; i++){
		char_abilityScores[i] = abilitySumArray[i].innerHTML;
		var sum_Div = document.getElementById("absum_" + (i+1));
		sum_Div.innerHTML = char_abilityScores[i];
	}
	
	
}

function chooseAbilities() {
	alert("entered choose");
	var rows = document.getElementsByClassName("abilityRow");
	alert("obtained rows element");
	
	
	for(var index = 0; index < rows.length; index++){
		
		alert("entered rows for");
		/*var cells = rows[index].getElementsByName("absum_"  + (index + 1) + "_choice");*/
		var cells;
		cells = rows[index].getElementsByTagName("input");
		alert("obtained elements");
		var abScoreAbility = "";
		for(var i = 0; i < cells.length; i++){
			alert("entered cells for");
			if(cells[i].checked === true){
				alert("entered checked if");
				abScoreAbility = cells[i].value;
			}
			
		}
		alert(cells[i].value );
		alert("exited cells for");
		char_abilityScoresType.push(abScoreAbility);
		alert("pushed " + char_abilityScoresType[index]);
		var abilityText = char_abilityScoresType[index] + ": " + char_abilityScores[index] + "<br>";
		    document.getElementById("abilitiesSpan").innerHTML = abilityText;
			alert("printed to ability span");
	}
	alert("exited rows for");
    

}