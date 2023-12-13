window.onload = function() {
    // Use the document.getElementById() method to get the element with the id "profile_view"
    const right_container = document.getElementById("profile_view");
    
    // Use the style.visibility property to set the visibility of the element to "hidden"
    right_container.style.visibility = "hidden";
    
    // use the var keyword to declare the following variables
    // image_val, name_val, email_val, phone_val, location_val, about_val;
    var image_val, name_val, email_val, phone_val, location_val, about_val

    // get the user input values
    // Profile Photo
    const image = document.getElementById("photo")

    image.addEventListener("change",function() {
        const reader = new FileReader(); 
        
        // Arrow Function:          () => {}
        // Traditional Function:    function() { ... }
        reader.addEventListener("change",function() {
            const uploaded_image = reader.result;
            localStorage.setItem("me",uploaded_image)
            document.querySelector("#me").src = localStorage.getItem("me")
        });
        reader.readAsDataURL(this.files[0]);
    });

    // Name
    const name = document.getElementById("name");
    name.onchange = function (e){
        // User e.target.value to assign the value form the input box
        // to the variable we created
       name_val = e.target.value;        
    }
    
    // Email
    const email = document.getElementById("email");
    email.onchange = function (e){
        email_val = e.target.value;
    }
    
    /* Phone
     * User e.target.value to assign the value form the input box
     * to the variable we created
     */
    const phone = document.getElementById("phone");
    phone.onchange = function (e){
        phone_val = e.target.value;
    }

    /* Location
     * User e.target.value to assign the value form the input box
     * to the variable we created
     */
    const location = document.getElementById("location")
    location.onchange = function (e){
        location_val = e.target.value;
    }
    
    /* About
     * User e.target.value to assign the value form the input box
     * to the variable we created
     */
    const about = document.getElementById("about")
    about.onchange = function (e) {
        about_val = e.target.value;      
    }
    
    /**
     * Get the output elements. This refers to the output elements in which to display
     * the user's inputs
     */
    const image_out = document.getElementById("me");
    const name_out = document.getElementById("name_out");
    const email_out = document.getElementById("email_out");
    const phone_out = document.getElementById("phone_out");
    const location_out = document.getElementById("location_out");
    const about_out = document.getElementById("about_out");


    // Capture the submit Button
    // Submission button
    const view_prof = document.getElementById("view_btn");
    view_prof.onclick = function() {
        // Add the values form the input fields to the output elements
        // Hint: use innerHTML
        name_out.innerHTML = name_val;
        email_out.innerHTML = email_val;
        phone_out.innerHTML = phone_val;
        location_out.innerHTML = location_val;
        about_out.innerHTML = about_val; 
        right_container.style.visibility = "visible";
        
    }


}