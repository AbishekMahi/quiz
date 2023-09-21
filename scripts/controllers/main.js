angular.module("hundred")
	.controller('mainCtrl', function ($scope, $http, $interval) {

		//INITIAL VARIABLES	
		$scope.gif = Math.floor(Math.random() * 14) + 1;
		$scope.score = 0;
		$scope.count = 0;
		$scope.sticker = 0;

		//SECTIONS 
		$scope.menu = 1;
		$scope.quiz = 0;
		$scope.wantResults = 0;
		$scope.results = 0;

		$scope.play = 1;

		$scope.name = "";
		$scope.level = "";
		$scope.yes = [];
		$scope.no = [];
		$scope.maybe = [];
		$scope.answer = "";
		$scope.bank = "";
		$scope.qCount = 0;
		$scope.progress = 1;
		$scope.barColour = "bg-success";

		//TIMER STUFF

		$scope.counter; // = 600;
		$scope.counterInit; // = 600;

		//START THE TIMER
		var stop;
		$scope.startTest = function () {
			$scope.menu = 0;
			$scope.quiz = 1;
			$scope.results = 0;
			if (angular.isDefined(stop)) return;

			stop = $interval(function () {
				if ($scope.counter > 0) {
					$scope.counter--;
					if ($scope.counter / $scope.counterInit == 0.5) {
						$scope.barColour = "bg-warning";
					}
					if ($scope.counter / $scope.counterInit == 0.1) {
						$scope.barColour = "bg-danger";
					}
				} else {
					$scope.stopTest($scope.count);
				}

			}, 1000);
		};

		//TIMES UP, SUBMIT QUIZ AND SHOW ANSWERS
		$scope.stopTest = function () {
			if (angular.isDefined(stop)) {
				$interval.cancel(stop);
				stop = undefined;
				$scope.score = $scope.yes.length;
				while ($scope.count < $scope.qCount) {
					$scope.maybe.push($scope.bank[$scope.count].question + " ");
					$scope.count++;
				}
				//console.log($scope.maybe);
				$scope.quiz = 0;
				$scope.results = 0;
				$scope.wantResults = 1;
			}
		};

		//Reset the timer
		$scope.revealScore = function () {
			$scope.results = 1;
			$scope.wantResults = 0;
			if ($scope.score / $scope.qCount > 0.899999) {
				$scope.sticker = 1;
			}
			setTimeout($scope.sendScore, 2000);
		};


		//Reset the timer
		$scope.resetTest = function () {
			$scope.counter = 10;
		};


		//RELOAD PAGE ON PRESSING HOME
		$scope.goHome = function () {
			location.reload();
		};

		//LOAD THE CORRECT JSON THEN START THE TEST
		$scope.selectTest = function (t) {
			if (t == "b") {
				file = "bronze.json";
				$scope.level = "Bronze";
				$scope.counter = 300;
				$scope.counterInit = 300;
			} else if (t == "s") {
				file = "silver.json";
				$scope.level = "Silver";
				$scope.counter = 300;
				$scope.counterInit = 300;
			} else if (t == "g") {
				file = "gold.json";
				$scope.level = "Gold";
				$scope.counter = 300;
				$scope.counterInit = 300;
			} else if (t == "1") {
				file = "1.json";
				$scope.level = "Level 1";
				$scope.counter = 600;
				$scope.counterInit = 600;
			} else if (t == "2") {
				file = "2.json";
				$scope.level = "Level 2";
				$scope.counter = 600;
				$scope.counterInit = 600;
			} else if (t == "3") {
				file = "3.json";
				$scope.level = "Level 3";
				$scope.counter = 600;
				$scope.counterInit = 600;
			} else if (t == "4") {
				file = "4.json";
				$scope.level = "Level 4";
				$scope.counter = 600;
				$scope.counterInit = 600;
			} else if (t == "5") {
				file = "5.json";
				$scope.level = "Level 5";
				$scope.counter = 600;
				$scope.counterInit = 600;
			} else if (t == "6") {
				file = "6.json";
				$scope.level = "Level 6";
				$scope.counter = 600;
				$scope.counterInit = 600;
			} else if (t == "7") {
				file = "7.json";
				$scope.level = "Level 7";
				$scope.counter = 600;
				$scope.counterInit = 600;
			} else if (t == "8") {
				file = "8.json";
				$scope.level = "Level 8";
				$scope.counter = 600;
				$scope.counterInit = 600;
			} else if (t == "9") {
				file = "9.json";
				$scope.level = "Level 9";
				$scope.counter = 600;
				$scope.counterInit = 600;
			}
			$http.get(file).then(function (response) {
				$scope.bank = response.data.records;
				$scope.qCount = $scope.bank.length;
				$scope.bank = $scope.shuffle($scope.bank);
			});
			$scope.startTest();
		};

		//SUBMIT THE QUIZ
		$scope.sendScore = function () {
			document.getElementById("quizForm").submit();
		};

		//STICKERS

		$scope.setSticker = function () {
			$scope.sticker = 1;
		};
		$scope.clearSticker = function () {
			$scope.sticker = 0;
		};

		//IN QUIZ STUFF	

		//SUBMIT AN ANSWER
		$scope.nextQuestion = function () {
			if ($scope.bank[$scope.count].answer == $scope.answer) {
				$scope.score++;
				$scope.yes.push($scope.bank[$scope.count].question + " " + $scope.answer);

			} else if ($scope.bank[$scope.count].answer != $scope.answer) {
				$scope.no.push($scope.bank[$scope.count].question + " " + $scope.answer);
			}

			$scope.count++;
			$scope.answer = "";
			if ($scope.count >= $scope.qCount) {
				console.log($scope.score);
				$scope.stopTest();
			}

		};

		//ADD TO ANSWER
		$scope.addToAnswer = function (a) {
			$scope.answer = $scope.answer + a;

		};

		//CLEAR ANSWER
		$scope.clearAnswer = function () {
			$scope.answer = "";
		};

		//FUNCTION TO SHUFFLE ARRAY

		$scope.shuffle = function (array) {
			var currentIndex = array.length,
				temporaryValue, randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;
		}
	});

//CUSTOM FILTER

angular.
module('hundred').
filter('counter', [function () {
	return function (seconds) {
		return new Date(1970, 0, 1).setSeconds(seconds);
	};
}]);