window.onload = function() {
    // Ask the user for a password
    var password  = prompt("plese enter the password");
    // if the password is not "secret" then show an alert saying "Incorrect password" and redirect the user to index.html
    if(password != "secret"){
        alert("incorrect password");
        // wait 3 seconds before redirecting
        setTimeout(function(){
            // redirect the user to index.html after 3 seconds => 3000 milliseconds
            window.location.href = "index.html"
            
        },3000);
    } 
    else {
        // Get the messages list form the localStorage
        const messages = JSON.parse(localStorage.getItem("messages"));
        // Get the list using getElementById 'messagesList'
        const list = document.getElementById("messageList")
        // Loop through the messages and display them on the screen
        for(let i = 0;i< messages.length;i++){
            // Create a new list item
            const newListItem = document.createElement("li");
            // Set the innerText of the list item to the message
            newListItem.innerText = messages[i];
            // Append the list item to the list on the screen
            list.appendChild(newListItem);
        }
        
    }
}
