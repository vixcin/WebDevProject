
// onload event listener awaits the screen to laod every element before executing
window.onload = function() {
    let yourInput = document.querySelector("#guess");
    yourInput.onchange = getUserAnswer;
    refresh = document.querySelector("#play");
    
    /**
     * The syntax used for functions
     * 1. Traditional Functions Syntax
     * function nameOfFunction(){}
     * 
     * 2. Anonymous Functions Syntax
     * function () {}
     * 
     * 3. Arrow Functions Syntax
     * () => {}
     */
    function getUserAnswer(e) {
        
        let compDisplay = document.getElementById("compGuess");
        let yourDisplay = document.getElementById("yourGuess")


        var options = ["stone","tissue","knife"]
        var randomNumber = Math.floor((Math.random() * 3 ));
        var computerChoice = options [randomNumber];


        var userChoice = e.target.value;
        console.log(userChoice);
        /**
         * Tertiary operator
         * (condition) ? expression_to_run_IfTrue : expression_to_run_IfFalse
         */
        
        compDisplay.innerHTML = (userChoice) 
        ? `${computerChoice}`
        :"you have to guess first in order to see the computer's guess";


        yourDisplay.innerHTML = (userChoice)
        ? `${userChoice}`
        : "";

        
        if (computerChoice == userChoice) {
            alert("It's a tie. Rerun to play again");
        }
        
        // If the computer guesses Stone
        else if (computerChoice == "stone") {
            if (userChoice == "tissue") {
                alert("tissue covers stone. you win!");
            }
            else if (userChoice == "knife")
                alert("stone beats knife. Computer wins!");
            // Implement an  else element to print the message
            else {
                alert("That answer doesn't exists please guess [stone, tissue, or knife]") 
            }
        }
        // If the computer guesses Tissue
        else if (computerChoice == "tissue") {
            if (userChoice == "stone") {
                alert("tissue covers stone. Computer wins!");
            }
            else if (userChoice == "knife")
                alert("knife cuts tissue. you win!");
            // Implement an  else element to print the message
            else {
                alert("That answer doesn't exists please guess [stone, tissue, or knife]") 
            }
        }
        // If the computer guesses Knife
        else if (computerChoice == "knife") {
            if (userChoice == "tissue") {
                alert("knife cuts tissue. Computer wins!");
            }
            else if (userChoice == "stone")
                alert("stone beats knife. you win!");
            // Implement an  else element to print the message
            else {
                alert("That answer doesn't exists please guess [stone, tissue, or knife]") 
            }
        }
        
        
        return userChoice;
    }
}
