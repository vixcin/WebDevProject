// Create a registration page for a new user
// Create a login page for an existing user
// Initialise the window  onload event
window.onload = function() {

    // Create the main div of the page and append it to the body
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "mainDiv");
    document.body.appendChild(mainDiv);

    // Create the registration form that then append it to the main div
    // The form should have an id of regForm
    // The form is has a post method
    var regForm = document.createElement("form");
    regForm.setAttribute("id", "regForm");
    regForm.setAttribute("method", "post");
    mainDiv.appendChild(regForm);
    
    // Create a div to contain the name label and name input and append it to the form
    // Assign it teh class labelInputDivs
    var nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "labelInputDiv");
    regForm.appendChild(nameDiv);


    // Create the name label and name input fields for the registration form and append them to the form
    var nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name: ";
    nameDiv.appendChild(nameLabel);

    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameDiv.appendChild(nameInput);

    // Create a div to contain the email label and email input and append it to the form
    // Assign it the class labelInputDiv
    var emailDiv = document.createElement("div");
    emailDiv.setAttribute("class", "labelInputDiv");
    regForm.appendChild(emailDiv);

    // Create the email label and email input fields for the registration form and append them to the form
    var emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.innerHTML = "Email: ";
    emailDiv.appendChild(emailLabel);

    var emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "email");
    emailDiv.appendChild(emailInput);

    // Create a div to contain the password label and password input and append it to the form
    // Assign it the class labelInputDiv
    var passwordDiv = document.createElement("div");
    passwordDiv.setAttribute("class", "labelInputDiv");
    regForm.appendChild(passwordDiv);


    // Create the password label and password input fields for the registration form and append them to the form
    var passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.innerHTML = "Password: ";
    passwordDiv.appendChild(passwordLabel);
    
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("name", "password");
    passwordDiv.appendChild(passwordInput);

    // Create a div to contain the confirm password label and confirm password input and append it to the form
    // Assign it the class labelInputDiv
    var confirmPasswordDiv = document.createElement("div");
    confirmPasswordDiv.setAttribute("class", "labelInputDiv");
    regForm.appendChild(confirmPasswordDiv);
    
    // Create the confirm password label and confirm password input fields for the registration form and append them to the form
    var confirmPasswordLabel = document.createElement("label");
    confirmPasswordLabel.setAttribute("for", "confirmPassword");
    confirmPasswordLabel.innerHTML = "Confirm Password: ";
    confirmPasswordDiv.appendChild(confirmPasswordLabel);

    var confirmPasswordInput = document.createElement("input");
    confirmPasswordInput.setAttribute("type", "password");
    confirmPasswordInput.setAttribute("id", "confirmPassword");
    confirmPasswordInput.setAttribute("name", "confirmPassword");
    confirmPasswordDiv.appendChild(confirmPasswordInput);

    
    // Create the submit button for the registration form and append it to the form
    var submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submitButton");
    submitButton.innerHTML = "Submit";
    regForm.appendChild(submitButton);


    // FORM VALIDATION
    // Create a function to validate the form
    function validateForm(event) {
        event.preventDefault();
        // Create a variable to store the name input value
        var name = document.getElementById("name").value;
        // Create a variable to store the email input value
        var email = document.getElementById("email").value;
        // Create a variable to store the password input value
        var password = document.getElementById("password").value;
        // Create a variable to store the confirm password input value
        var confirmPassword = document.getElementById("confirmPassword").value;
        // Create a variable to store the error message
        var errorMessage = "";

        // The name input should not be empty, should be at least 3 characters long and should not contain numbers
        if (name == "") {
            errorMessage += "Name is required. ";
        } else if (name.length < 3) {
            errorMessage += "Name must be at least 3 characters long. ";
        } else if (name.match(/\d+/g)) {
            errorMessage += "Name cannot contain numbers. ";
        }

        // The email input should not be empty and should be a valid email address
        if (email == "") {
            errorMessage += "Email is required. ";
        } else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            errorMessage += "Email is not valid. ";
        }

        // The password input should not be empty, should be at least 8 characters long and should contain at least one number
        if (password == "") {
            errorMessage += "Password is required. ";
        } else if (password.length < 8) {
            errorMessage += "Password must be at least 8 characters long. ";
        } else if (!password.match(/\d+/g)) {
            errorMessage += "Password must contain at least one number. ";
        }

        // The confirm password input should not be empty and should match the password input
        if (confirmPassword == "") {
            errorMessage += "Confirm password is required. ";
        } else if (confirmPassword != password) {
            errorMessage += "Passwords do not match. ";
        }

        // If there are any errors, display them in an alert box
        if (errorMessage != "") {
            alert(errorMessage);
            return false;
        } else {
            window.location.href = "welcome.html";
        }

    }

    // Add an event listener to the submit button to call the validateForm function when the button is clicked
    submitButton.addEventListener("click", validateForm);

}