/**
 * 
 */
var char_race = "";
var char_class = "";
var char_abilityScoresTemp = [];
var char_abilityScores = {
    Strength: 0,
	Dexterity: 0,
	Constitution: 0,
	Intelligence: 0,
	Wisdom: 0,
	Charisma: 0
};
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
		char_abilityScoresTemp[i] = abilitySumArray[i].innerHTML;
		var sum_Div = document.getElementById("absum_" + (i+1));
		sum_Div.innerHTML = char_abilityScoresTemp[i];
	}
	
	
}

 function chooseAbilities() {
	var fieldsets = document.getElementsByTagName("fieldset");
	var abilityText = "<p>";
	
	
	for(var index = 1; index <= fieldsets.length; index++){
		var cells = document.getElementsByName("absum_choice_" + index);
		var abScoreAbility = "";
		
		for(var i = 0; i <= cells.length; i++){
			if(cells[i].checked){
				abScoreAbility = cells[i].value;
				abilityText = pushAbScores(abScoreAbility, abilityText, index);
				break;
			}
			
		}
		
	}
	
	
	
    displayAbilityText(abilityText);

}
function pushAbScores(abScoreAbility, abilityText, index){
		char_abilityScores[abScoreAbility] = char_abilityScoresTemp[index - 1];
		


		return abilityText;
		   	
}
function displayAbilityText(abilityText){
	for(var key in char_abilityScores) {
   var val = char_abilityScores[key];
   abilityText += (key + " : " + val + "<br>");
	}
	abilityText += "</p>";
	 document.getElementById("abilitiesSpan").innerHTML = abilityText;
}