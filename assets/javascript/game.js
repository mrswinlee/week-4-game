// 	Pseudocode
	
// 	declare variables
// 		1. var wins =0;
// 		2. var losses = 0;
// 		3. var your total score is
// 		4. var computerRandomNumber
//		5. create variables for each crystal image button

// 	create crystal buttons

// 		1. create 4 image buttons 
// 		2. assign random value to each button 
// 		3. when user clicks on a crystal, which holds a value, it will appear on "you total score is".
//  	add the crystal value to the total score and appear on the DOM.
//	each time a user clicks on a crystal, it will (add) append to the previous number shown in "your total score is"
// 


//      check following: when user clicks {
// 		if "your total score is" === "computerRandomNumber"
// 		win ++
// 		else "your total score is" > "computerRandomNumber"
// 		losses ++
// 		lose- when the "your total score" is greater than the given number by 1,
//      reset and a new value is given
// 		win- reset
//		reset crystals values to new random number. }


$(document).ready(function() {

var wins = 0;
var losses =0;
var totalScoreIs = 0;
var computerRandomNumber = (Math.floor(Math.random()*120) + 18);
var crystalOrange = (Math.floor(Math.random() * 12));
var crystalBlue = (Math.floor(Math.random()* 12));
var crystalPink = (Math.floor(Math.random()* 12));
var crystalYellow = (Math.floor(Math.random()* 12));

var resetGame = function (){
	totalScoreIs= 0;
	computerRandomNumber = (Math.floor(Math.random()*120) + 18);
	crystalOrange = (Math.floor(Math.random()* 12));
	crystalBlue = (Math.floor(Math.random()* 12));
	crystalPink = (Math.floor(Math.random()* 12));
	crystalYellow = (Math.floor(Math.random()* 12));
}

var checkGameIsOver = function () {
	if (totalScoreIs === computerRandomNumber){
		wins++
		resetGame ();
		}
		else if (totalScoreIs > computerRandomNumber){
		losses++
		resetGame ();
		}
}

var updateDom = function (){
	$("#wins").text(wins)
	$("#losses").text(losses)
	$("#totalScore").text(totalScoreIs)
	$("#randomNumber").text(computerRandomNumber)
	
	}


	//clicking on crystal yield a value
	$("#orange-crystal").on("click",function(){
		totalScoreIs += crystalOrange;
		checkGameIsOver ();
		updateDom ();
	});
	$("#blue-crystal").on("click",function(){
		totalScoreIs += crystalBlue;
		checkGameIsOver ();
		updateDom ();
	});
	$("#pink-crystal").on("click",function(){
		totalScoreIs += crystalPink;
		checkGameIsOver ();
		updateDom ();
	});
	$("#yellow-crystal").on("click",function(){
		totalScoreIs += crystalYellow;
		checkGameIsOver ();
		updateDom ();
	});
    
    // after checkGameIsOVer, update DOM

    //check total score = computerRandomNumber

});
 