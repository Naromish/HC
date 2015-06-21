$(document).ready(function() {

	var randomNumber = 0;
	var userGuess = 0;
    var turns = 0;
    var finish = false;


$("#userGuess").keydown(function(e) {
		if (e.keyCode == 13) {
			checkGuess();
		})
});

function randomNumberGenerator () {
		randomNumber = Math.floor(Math.random() * 100) +1);
    	console.log("randomNumber = " + randomNumber);
	}
    randomNumberGenerator();


function newGame(){
        userGuess = 0;
        finish = false;
        $('#userGuess').val('');
        $('#count').text(guessCount);
        $('#guessList li').remove();
        randomNumber = (Math.floor(Math.random() * 100) +1);
        setFeedback("Guess a number!");
        console.log("it works! new secret number is " + randomNumber);
    }
 //  function setFeedback(feedback) {
 //        $('#feedback').text(feedback);
 //    }

 // function setCount(count){
 //        $('#count').text(guessCount);
 //    }

function checkGuess(){

	userGuess = document.getElementById("userGuess").value;
    difference = Math.abs(userGuess - randomNumber);

    if(isNaN(userGuess)) {
        alert("Try again with a number.");
    }
    else if (userGuess === " ") {
        alert("Please enter a number.");
    } 
    else if (userGuess < 1 || userGuess > 100) {
		alert("Try again with a number from 1 to 100!");
	}         
    // else {
    //     comparisonAmount();
    //     console.log("userGuess = " + userGuess);
    //     $('#userGuess').val('');
    //     guessCount++;
    //     setCount(guessCount);
    //     $('ul#guessList').append("<li>" + userGuess + "</li>");
    // }
    else if (difference <= 99 && difference >= 75) {
    	if (userGuess > randomNumber) {
    		alert ("You're freezing. Keep trying.");
    }
	
	else if (difference <= 74 && difference >= 50) {
    	if (userGuess > randomNumber) {
    		alert ("You're cold. Keep trying.");
    }

	else if (difference <= 49 && difference >= 25) {
    	if (userGuess > randomNumber) {
    		alert ("You're warm.");
    }

    else if (difference <= 24 && difference >= 1) {
		if (userGuess > randomNumber) {
    		alert ("You're hot. Keep trying.");
    }

    else if (difference === 0 {
		if (userGuess === randomNumber) {
    		alert ("You won!");
    }
}



    









    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

   
    



 // $('.new').click(function(){
 //        newGame();
 //    });

/*--- Compare random userGuess with random number ---*/
// $("form").submit(function(e) {
//     e.preventDefault();
//     userGuess = $('#userGuess').val();
//     $('#userGuess').val('');
//     $("#userGuessList").append("<li>" + userGuess + "</li>");
//     console.log("User userGuess is " + userGuess);
//     getDifference(randomNumber);
// });

