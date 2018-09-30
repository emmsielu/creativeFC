(function (document, $) {

	var myJsonData;
	var buttons = document.querySelectorAll('.button');

	function ready(){

		for (var i = 0; i < buttons.length; i++) {
				buttons[i].addEventListener('click', onCreateButtonClick);
				
		}

		 fetchCardLists(function(cardLists){
		// fetchCardLists().then(function (cardLists){
			myJsonData = cardLists;

		// });
		 });
	}
	
	
	function fetchCardLists(){

		$.getJSON("/data/cardlists.json", function(json) {
			console.log("json is ", json);
		});

	}

	function chooseCard(category){
		
		var collection = myJsonData[category];
		console.log("category is ", category);
		var collectionLength = collection.length;
		var randomNumber = Math.floor(Math.random() * collectionLength);
		return collection[randomNumber];
	}



	function onCreateButtonClick(){
		
		var buttonName = event.target.name;
		console.log(chooseCard(buttonName));

	}

	document.addEventListener('DOMContentLoaded', ready);

})(document, jQuery);


