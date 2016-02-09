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
	var fieldsets = document.getElementsByTagName("fieldset");
	alert("obtained fieldsets element");
	var abilityText = "<p>";
	
	
	for(var index = 1; index <= fieldsets.length; index++){
		
		alert("entered fieldsets for ");
		var cells = document.getElementsByName("absum_choice_" + index);
		alert("obtained cells " + cells.length);
		var abScoreAbility = "";
		
		for(var i = 0; i <= cells.length; i++){
			if(cells[i].checked){
				alert("entered checked if" + cells[i].value);
				abScoreAbility = cells[i].value;
				alert("abScoreAbility = " + abScoreAbility);
				abilityText = pushAbScores(abScoreAbility, abilityText, index);
				break;
			}
			
		}
		
	}
	alert("exited fieldsets for");
	abilityText += "</p>";
    displayAbilityText(abilityText);

}
function pushAbScores(abScoreAbility, abilityText, index){
alert(abScoreAbility );
		char_abilityScoresType.push(abScoreAbility);
		alert("pushed " + char_abilityScoresType[index - 1]);
		abilityText += (char_abilityScoresType[index - 1] + " : " + char_abilityScores[index -1] + "<br>");
		alert(abilityText);
		return abilityText;
		   	
}
function displayAbilityText(abilityText){
	alert(abilityText);
	 document.getElementById("abilitiesSpan").innerHTML = abilityText;
			alert("printed to ability span");
}
