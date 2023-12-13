window.onload = function(){
    
    // Create variables for the welcome message
    let text1 = 'Hello';
    let text2 = 'Ben';
    let text3 = ', please check your order' ;
    result = text1.concat( text2, text3 )
    /**
     * Concatenation:
     * Concatenation is the process of appending/adding one string to the end of another.
     * 
     * Concatenate the three variables above to create the welcome message.
     Reference: https://www.w3schools.com/jsref/jsref_concat_string.asp
     * TODO: Set the welcomeMessage variable below:
     */
    //var welcome = greeting + name + message;
    // Concatenate the three variables above to create the welcome message
    // Create variables to hold details about the sign
    var sign = 'Wedding Cake Store' ;
    var tiles = sign.length;
    var subTotal = tiles * 5;
    var shipping = 7;
    var grandTotal = subTotal + shipping;
    
    // TODO: Get the element that has an id of greeting
    var element = document.getElementById('greeting') ;
    // Replace the content of that element with the personalized welcome message
    // TODO: Set the value of the below variable to the welcome message
    element.textContent = result;
    
    // TODO: Get the el ement that has an id of userSign then update its contents
    var elementSign = document.getElementById('userSign');
    // TODO: Set the value of the below variable to the sign
    elementSign.textContent =  sign;
    
    // Get the element that has an id of tiles then update its contents
    var elementTiles = document.getElementById('tiles');
    // TODO Set the value of the below variable to the tiles
    elementTiles.textContent = tiles ;
    
    // Get the element that has an id of subTotal then update its contents
    var elementSubTotal = document.getElementById('subTotal');
    // TODO: Set the value of the below variable to the subTotal
    elementSubTotal.textContent = '$' + subTotal;
    
    // TODO: Get the element that has an id of shipping then update its contents
    var elementshipping = document.getElementById('shipping') ;
    // TODO: Set the value of the below variable to the shipping
    // TODO: Concatenate the value to a dollar sign like the example on line 43
    elementshipping.textContent = '$' + shipping;
    
    // Get the element that has an id of grandTotal then update its contents
    var elementGrandTotal = document.getElementById('grandTotal') ;
    // TODO: Set the value of the below variable to the grandTotal
    elementGrandTotal.textContent = '$' + grandTotal;
}