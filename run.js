

function runStart() {
	var button = document.getElementById("rollButton");
	button.addEventListener("click", rollAbilitySets, false);
	var pages = document.getElementById("pages");
	var pageList = pages.getElementsByClassName("page");
    var totalPages = pageList.length;	
	var currentPage = 0;
	
	displayPage(currentPage, pageList);
	

	var nextButton = document.getElementById("Next");
	var prevButton = document.getElementById("Previous");
	
	showHideButton(nextButton, prevButton, totalPages, currentPage);

	nextButton.addEventListener("click", function() {
		currentPage = turnPages(this, currentPage, totalPages);
		displayPage(currentPage, pageList);
		showHideButton(nextButton, prevButton, totalPages, currentPage);

	}, false);
	
	prevButton.addEventListener("click", function() {
		currentPage = turnPages(this, currentPage, totalPages);
		displayPage(currentPage, pageList);
		showHideButton(nextButton, prevButton, totalPages, currentPage);
	}, false);
	
	
}
function displayPage(currentPage, pageList) {
	for (i = 0; i < pageList.length; i++) {

		if (i != currentPage) {
			pageList[i].style.display = "none";

		}

		else {
			pageList[i].style.display = "block";

		}
	}

}

function turnPages(direction, currentPage, totalPages) {
	switch (direction.id) {

	case 'Next':

		currentPage++;
		if (currentPage > totalPages){
			currentPage = 0;
		}
		break;

	case 'Previous':

		currentPage--;
		if (currentPage < 0){
			currentPage = 0;
		}
		break;
	}
	return currentPage;

}

function showHideButton(nextButton, prevButton, totalPages, currentPage){
	if (currentPage === 0){
		
		prevButton.style.display= "none";
	}
	else if (currentPage != 0){
		
		prevButton.style.display= "block";
	}
	if (currentPage == totalPages){
		nextButton.style.display= "none";
	}
	else if (currentPage != totalPages){
		nextButton.style.display= "block";
	}
	
}

window.addEventListener("load", runStart, false);
