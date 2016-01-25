/**
 * 
 */

function rollAbilitySets() {
	var numOfSides = document.getElementById('numOfSides').value;
	var numOfRolls = document.getElementById('numOfRolls').value;
	var numOfSets = document.getElementById('numOfRollSets').value;
	
	for (var i = 1; i <= numOfSets; ++i) {
		var rollSetArray = rollDX(numOfSides, numOfRolls);
		printArray(i, rollSetArray);
		var endArray = discardLowest(rollSetArray);
		var arraySum = sumOfArray(endArray);
		printSum(i, arraySum);
	}
	setAbilityRolls();
}

function rollDX(numOfSides, numOfRolls) {
	

	var rollSetArray = [];
	for (var i = 1; i <= numOfRolls; ++i) {
		var face = Math.floor(1 + Math.random() * numOfSides);
		rollSetArray.push(face);
		/* setValues(i, face); */

	} // end die rolling loop
	return rollSetArray;
}
function setValues(dieNumber, face) {

	var dieDiv = document.getElementById("die" + dieNumber);
	dieDiv.innerHTML = face;
}
function printArray(setNum, setArray) {
	var dieDiv = document.getElementById("set" + setNum);
	dieDiv.innerHTML = setArray;
}
function getArray(setNum){
	var abilityRollArray = document.getElementById("set" + setNum).value;
	return abilityRollArray;
}


/********************************************************************/




function discardLowest(setArray){
	var theArray = setArray;
	var index = 0;
	var value = theArray[0];
	for (var i = 1; i < theArray.length; i++) {
	  if (theArray[i] < value) {
	    value = theArray[i];
	    index = i;
	   
	  }
	}
		var theNewArray = theArray.splice(index, 1);
	return theArray;
	
}

function sumOfArray(anyArray){
	var sum = 0;
	for (var i = 0; i < anyArray.length; i++) {
		sum = sum + +anyArray[i];
	}
	return sum;
}

function printSum(setNum, sum){
	var sumDiv = document.getElementById("absum" + setNum);
	sumDiv.innerHTML = sum;
	
	
	
	
}


/*************************************************************************/