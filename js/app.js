$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    $(".new").click(function() {
    x = Math.floor(Math.random() * 100) +1);
    console.log("Clicked New Game " + x);
    console.log(typeof x);
});
    
    var x = Math.floor((Math.random() * 100) + 1);
    var turns = 4;
    var feedback = 'Guess the number between 1 and 100!';

    while (turns > 0) {
        var guess = prompt(feedback + 'You have' + turns + 'guesses left.');
        if (!guess) break;
        guess = Number(guess);
        if (guess == x) {
            console.log('You guessed right!');
            turns = 0;
        } else {
            hint = 'No. Try again.';
            if (guess < x) feedback = +'Too low.';
            if (guess < x) feedback = +'Too hight.';
            turns = turns - 1;
        }
    }
    alert('The number was ' + x + '.');


});





/*--- Compare random guess with random number ---*/
$("form").submit(function(e) {
    e.preventDefault();
    userGuess = $('#userGuess').val();
    $('#userGuess').val('');
    $("#guessList").append("<li>" + userGuess + "</li>");
    console.log("User Guess is " + userGuess);
    getDifference(randomNumber);
});





function newGame() {
    newGame();
    startGame();

}
