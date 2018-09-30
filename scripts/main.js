// (function (document, $) {

(function() {

	var myJsonData;
	var buttons = document.querySelectorAll('.button');

	//var list = document.querySelector('.selection');
	var resultsText = document.getElementsByClassName(".poemText");
	

	/*function fetchCardLists(){
		// $.ajax method returns a "deferred" otherwise known as a Promise
		// a promise is either resolved (success) or errors, known as a catch (you catch the error)
		return $.ajax('/data/cardlists.json');

	}*/

	function reqListener () {
		myJsonData = JSON.parse(this.responseText);
		
	}

	function request() {
		var url = '/data/cardlists.json',
		openReq = new XMLHttpRequest();
		
		openReq.addEventListener('load', reqListener);
		openReq.open('get', url, true);
		openReq.send();
		
	}

	function chooseCard(category){

		var collection = myJsonData[category];
		var collectionLength = collection.length;
		var randomNumber = Math.floor(Math.random() * collectionLength);

		return collection[randomNumber];

	}

	function ready(){
		// Math.seedrandom();

		for (var i = 0; i < buttons.length; i++) {
				buttons[i].addEventListener('click', onCreateButtonClick);
	
    	}

		// fetchCardLists().then(function (cardLists) {
		// 	myJsonData = cardLists;
		// })

		request();
	}

	function onCreateButtonClick(){

		var person = chooseCard('peopleJobs');
		var superHeroVillain = chooseCard('superheroesVillains');
		var colour = chooseCard('colours');
		var animal = chooseCard('animals');
		var action = chooseCard('actions');
		var actionTwo = chooseCard('actions');
		var locationSituation = chooseCard('locationsSituations');
		var locationSituationTwo = chooseCard('locationsSituations');
		// var weather = chooseCard('weather');
		// var foodAndDrink = chooseCard('foodDrink');
		// var bodyParts = chooseCard('bodyParts');
		// var transport = chooseCard('transport');
		var accessory = chooseCard('accessories');
		var actionDoneToThem = chooseCard('receivedAction');

		var poem;
		var buttonName = event.target.name;

		if(buttonName === 'combo1'){

			poem = `${person} and a
			${colour} ${animal} are ${action},
			${locationSituation} when they are ${actionDoneToThem} 
			by ${superHeroVillain}`;


		}else if(buttonName === 'combo2'){

			//poem = 'combo 2 poem';
			poem = `${person} is ${action} with ${superHeroVillain}, while ${actionTwo} ${locationSituation}.
			Meanwhile behind them, a ${colour} ${animal} wearing ${accessory}, is ${locationSituationTwo}`;

		}else if(buttonName === 'combo3'){

			poem = `a ${colour} ${animal} in ${accessory} is ${action} while ${person} is ${actionTwo} by ${superHeroVillain} ${locationSituation}`;

		}

		resultsText.innerHTML = poem;
		console.log(poem);
		
	}

	document.addEventListener('DOMContentLoaded', ready);

// })(document, jQuery);

}());



