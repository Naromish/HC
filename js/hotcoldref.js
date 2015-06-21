//Check guess validity and then if it's hot or cold
function checkGuess() {

    //Assign guess value
    guess = document.getElementById("guess").value;
    
    //Calculate difference between guess and random number
    difference = Math.abs(guess-randomNumber);

    //Check if guess is number
    if (isNaN(guess) || guess === "" || guess === " " || guess === "  " || guess === "   " )
        {
            $("#guess").attr("placeholder", "That's not a number! Guess again.").val("").focus().blur();
            $("#guess").focus();
        }

    //Check if guess is from 1 to 100
    else if (guess<1 || guess>100) {
            $("#guess").attr("placeholder", "That's not from 1 to 100! Guess again.").val("").focus().blur();
            $("#guess").focus();
        }

    //Check if guess is integer
    else if (guess % 1 !==0) {
            $("#guess").attr("placeholder", "That's not a whole number! Guess again.").val("").focus().blur();
            $("#guess").focus();
        }

    else {
    //Check if guess has already been guessed
        guessCounter +=1;
        if ($.inArray(guess,guessList) > -1) {
            $("#guess").attr("placeholder", "That's already been guessed! Guess again.").val("").focus().blur();
            $("#guess").focus();
        }

        else {
            //Add current guess to list of all guesses
            guessList.push(guess);
        
            //Check if guess is equal to random number
            if (guess == randomNumber) {
                //Show winner screen and hide unneeded visual elements
                $("body").addClass("winnerbackground");
                $(".game").hide();
                $(".winner").show();
                $(".winnertext").append("<h3>" + guess + "</h3>" + "<h2> is as </h2>" + "<h3> HOT </h3>" + "<h2> as it gets! You win!</h2>");
                }


            //Check if guess is hot or cold

            else if (difference <= 99 && difference >= 75) {
            
                if (guess > randomNumber) {
                    $("#guess").attr("placeholder", "FREEZING! Guess much much lower.").val("").focus().blur();
                    }
            
                else {
                    $("#guess").attr("placeholder", "FREEZING! Guess much much higher.").val("").focus().blur();
                    }
                    $("#guess").focus();
                    $(".coldguesses").append("<h4>" + guess + "</h4>");
                    }

            
            else if (difference <= 74 && difference >= 50) {
            
                if (guess > randomNumber) {
                    $("#guess").attr("placeholder", "COLD! Guess lots lower.").val("").focus().blur();
                    }
            
                else {
                    $("#guess").attr("placeholder", "COLD! Guess lots higher.").val("").focus().blur();
                    }
                    $("#guess").focus();
                    $(".coldguesses").append("<h4>" + guess + "</h4>");
                    }


            else if (difference <= 49 && difference >= 25) {
    
                if (guess > randomNumber) {
                    $("#guess").attr("placeholder", "WARM! Guess even lower.").val("").focus().blur();
                    }
        
                else {
                    $("#guess").attr("placeholder", "WARM! Guess even higher.").val("").focus().blur();
                    }
                    $("#guess").focus();
                    $(".hotguesses").append("<h4>" + guess + "</h4>");
                    }

            else if (difference <= 24 && difference >= 1) {
 
                if (guess > randomNumber) {
                    $("#guess").attr("placeholder", "HOT! Guess a bit lower.").val("").focus().blur();
                    }

                else {
                    $("#guess").attr("placeholder", "HOT! Guess a bit higher.").val("").focus().blur();
                    }
                    $("#guess").focus();
                    $(".hotguesses").append("<h4>" + guess + "</h4>");
                    }

            }


        }


}


















*--- Evaluates when substraction is positive --*/
    function positiveAmount() {
        if (userGuess / secretNumber === 1){
            setFeedback("You win");
            finish = true;
          } else if ((secretNumber - userGuess) > 60.5){
            setFeedback("Wow! You are freezing!");
            } else if ((secretNumber - userGuess) > 55.5){
            setFeedback("Wow! You better put on a jacket cause its super cold!");
            } else if ((secretNumber - userGuess) > 50.5){
            setFeedback("Its is super cold man!");
            } else if ((secretNumber - userGuess) > 40.5) {
            setFeedback("Now you are cold!");
            } else if ((secretNumber - userGuess) > 30.5) {
            setFeedback("It's getting warm around here");
            } else if((secretNumber - userGuess) > 20.5) {
            setFeedback("It's getting very warm in here!");
            } else if((secretNumber - userGuess) > 15.5) {
            setFeedback("It's getting very very warm in here!");
            } else if ((secretNumber - userGuess) > 7.5){
            setFeedback("It's hot!");
            } else if ((secretNumber - userGuess) > 5.5){
            setFeedback("It is very hot here!");
           } else if ((secretNumber - userGuess) > 1.5){
            setFeedback("I am burning here!!");
            } else if ((secretNumber - userGuess) > 0.5){
            setFeedback("Its is hotter than the sun!!!!!");
        } else {
        }
    }

/*--- Evaluates when substraction is negative --*/
    function negativeAmount() {
        if (userGuess / secretNumber === 1){
            setFeedback("You win");
            finish = true;
        } else if ((userGuess - secretNumber) > 60.5){
            setFeedback("Wow! You are freezing!");
        } else if ((userGuess - secretNumber) > 55.5){
            setFeedback("Wow! You better put on a jacket cause its super cold!");
        } else if ((userGuess - secretNumber) > 50.5){
            setFeedback("Its is super cold man!");
        } else if ((userGuess - secretNumber) > 40.5) {
            setFeedback("Now you are cold!");
        } else if ((userGuess - secretNumber) > 30.5) {
            setFeedback("It's getting warm around here");
        } else if((userGuess - secretNumber) > 20.5) {
            setFeedback("It's getting very warm in here!");
        } else if((userGuess - secretNumber) > 15.5) {
            setFeedback("It's getting very very warm in here!");
        } else if ((userGuess - secretNumber) > 7.5){
            setFeedback("It is hot!");
        } else if ((userGuess - secretNumber) > 5.5){
            setFeedback("I am very hot here!!");
        } else if((userGuess - userGuess) > 1.5){
            setFeedback("I am burning here!!");
        }else if ((userGuess - secretNumber) > 0.5){
            setFeedback("Its is hotter than the sun!!!!!");
        } else {
        }
    }

/*--- Compares whether the difference is positive or negative --*/
    function comparisonAmount(){
        if (userGuess - secretNumber > 0) {
            negativeAmount();
        } else {
            positiveAmount();
        }
    }






