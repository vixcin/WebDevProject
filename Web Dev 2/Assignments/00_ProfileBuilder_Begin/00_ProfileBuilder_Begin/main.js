window.onload = function(){
    /**
     * TODO: 
     * > Get by id the left and right divs from the HTML document and assign them to constant variables
     * Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
     */
    const leftDiv =  document.getElementById('left');
    const rightDiv = document.getElementById('right');

    /**
     * TODO:
     * > Create a form and assigne it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the form's id to 'form'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the form to the left div
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const form = document.createElement('form');
    form.setAttribute('id','form');
    leftDiv.appendChild(form);

    /**
     * TODO:
     * > Create a div for the user's name, email, phone, and location and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the div's id to 'nameEmailPhoneLocationDiv'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the div to the form
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const nameEmailPhoneLocationDiv =document.createElement('div');
    nameEmailPhoneLocationDiv.setAttribute('id', 'nameEmailPhoneLocationDiv');
    form.appendChild(nameEmailPhoneLocationDiv);

    /**
     * EXAMPLE IMPLEMENTATION:
     * > Create the name label and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the label's for attribute to 'name'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label's text to 'Name: '
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Add the label to the nameEmailPhoneLocationDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     */
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.innerHTML = 'Name: ';
    nameEmailPhoneLocationDiv.appendChild(nameLabel);

    /**
     * EXAMPLE IMPLEMENTATION:
     * > Create the name input and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the input's type attribute to 'text'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's id attribute to 'name'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's name attribute to 'name'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the input to the nameEmailPhoneLocationDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp     * 
     */
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameEmailPhoneLocationDiv.appendChild(nameInput);

    /**
     * TODO:
     * > Create the email label and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the label's for attribute to 'email'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label's text to 'Email: '                                                                                 
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp                                                                           
     * 
     * > Add the label to the nameEmailPhoneLocationDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const emailLabel = document.createElement("label") ;
    emailLabel.setAttribute('for','email') ;
    emailLabel.innerHTML  = "Email: ";
    nameEmailPhoneLocationDiv.appendChild(emailLabel);

    /**
     * TODO:
     * > Create the email input and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the input's type attribute to 'text'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's id attribute to 'email'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's name attribute to 'email'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the input to the nameEmailPhoneLocationDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    nameEmailPhoneLocationDiv.appendChild(emailInput);

    /**
     * TODO
     * > Create the phone label and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the label's for attribute to 'phone'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label's text to 'Phone: '
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Add the label to the nameEmailPhoneLocationDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const phoneLabel = document.createElement("label")  ;
    phoneLabel.setAttribute("for","phone") ;
    phoneLabel.innerHTML = "Phone: ";
    nameEmailPhoneLocationDiv.appendChild(phoneLabel);
    /**
     * TODO:
     * > Create the phone input and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the input's type attribute to 'text'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's id attribute to 'phone'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's name attribute to 'phone'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the input to the nameEmailPhoneLocationDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'tel');
    phoneInput.setAttribute('id', 'phone');
    phoneInput.setAttribute('name', 'phone');
    nameEmailPhoneLocationDiv.appendChild(phoneInput);

    /**
     * TODO
     * > Create the location label and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the label's for attribute to 'location'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label's text to 'Location: '
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Add the label to the nameEmailPhoneLocationDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const locationLabel = document.createElement('label');
    locationLabel.setAttribute('for', 'location');
    locationLabel.innerHTML = 'Location: ';
    nameEmailPhoneLocationDiv.appendChild(locationLabel);
    /**
     * TODO
     * > Create the location input and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the input's type attribute to 'text'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's id attribute to 'location'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's name attribute to 'location'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the input to the nameEmailPhoneLocationDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const locationInput = document.createElement("input");
    locationInput.setAttribute("type","text");
    locationInput.setAttribute("id","location");
    locationInput.setAttribute("name","location");
    nameEmailPhoneLocationDiv.appendChild(locationInput);


    /**
     * TODO:
     * > Create the image div to contain the image label and input and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the div's id attribute to 'imageDiv'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the div to the form
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('id', 'imageDiv');
    form.appendChild(imageDiv);

    /**
     * TODO:
     * > Create the image label and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the label's for attribute to 'image'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label's text to 'Image URL: '
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Add the label to the imageDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const imageLabel = document.createElement("label");
    imageLabel.setAttribute('for', 'image');
    imageLabel.innerHTML = 'Image URL: ';
    imageDiv.appendChild(imageLabel);

    /**
     * TODO:
     * > Create the image input and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the input's type attribute to 'url'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's id attribute to 'image'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's name  attribute to 'image'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the input to the imageDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const imageInput = document.createElement('input');
    imageInput.setAttribute('type', 'url');
    imageInput.setAttribute('id', 'image');
    imageInput.setAttribute('name', 'image');
    imageDiv.appendChild(imageInput);

    /**
     * TODO:
     * > Create the about div to contain the about label and input and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the div's id attribute to 'aboutDiv'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the div to the form
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('id','aboutDiv');
    form.appendChild(aboutDiv);

    /**s
     * TODO:
     * > Create the about label and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the label's for attribute to 'about'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label's text to 'About: '
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Add the label to the aboutDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const aboutLabel =document.createElement('label');
    aboutLabel.setAttribute('for', 'about');
    aboutLabel.innerHTML = 'About: ';
    aboutDiv.appendChild (aboutLabel);

    /**
     * > Create the about input and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the input's type attribute to 'text'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's id attribute to 'about'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's name attribute to 'about'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the input to the aboutDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const aboutInput =document.createElement ('input');
    aboutInput.setAttribute ('type', 'text');
    aboutInput.setAttribute ('id', 'about');
    aboutInput.setAttribute ('name', 'about');
    aboutDiv.appendChild  (aboutInput);

    /**
     * TODO:
     * > Create the skills div to contain the skills label and input and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the div's id attribute to 'skillsDiv'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the div to the form
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const skillsDiv = document.createElement ('div');
    skillsDiv.setAttribute('id','skillsDiv')  ;
    form.appendChild (skillsDiv);

    /**
     * TODO:
     * > Create the skills label and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the label's for attribute to 'skills'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the label's text to 'Skills: '
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Add the label to the skillsDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const skillsLabel = document.createElement ('label');
    skillsLabel.setAttribute ('for', 'skills');
    skillsLabel.innerHTML =  'Skills: ';
    skillsDiv.appendChild (skillsLabel);

    /**
     * TODO:
     * > Create the skills input and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the input's type attribute to 'text'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's id attribute to 'skills'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the input's name attribute to 'skills'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the input to the skillsDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const skillsInput = document.createElement ('input');
    skillsInput.setAttribute('type','text') ;
    skillsInput.setAttribute('id','skills') ;
    skillsInput.setAttribute('name','skills') ;
    skillsDiv.appendChild (skillsInput);

    /**
     * TODO:
     * > Create the button div to contain the submit and reset buttons and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the div's id attribute to 'buttonDiv'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * b
     * > Add the div to the form
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const buttonDiv = document.createElement('div') ;
    buttonDiv.setAttribute('id','buttonDiv') ;
    form.appendChild(buttonDiv) ;

    /**
     * TODO:
     * > Create the submit button and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the button's type attribute to 'submit'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the button's id attribute to 'submitButton'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the button's text to 'Submit'
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Add the button to the buttonDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const submitButton = document.createElement ('button');
    submitButton.setAttribute ('type','submit' );
    submitButton.setAttribute ('id','submitButton');
    submitButton.innerHTML = 'Submit';
    buttonDiv.appendChild (submitButton);

    /**
     * TODO:
     * > Create the reset button and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the button's type attribute to 'reset'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use setAttribute to set the button's id attribute to 'resetButton'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Use innerHTML to set the button's text to 'Reset'
     * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
     * 
     * > Add the button to the buttonDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp 
     */
    const resetButton = document.createElement('button');
    resetButton.setAttribute('type', 'reset');
    resetButton.setAttribute ('id', 'resetButton');
    resetButton.innerHTML = 'Reset';
    buttonDiv.appendChild(resetButton);

    /**
     * TODO:
     * > Create the data display div to contain the collected data and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the div's id attribute to 'dataDiv'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the div to the right div
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const dataDiv = document.createElement('div');
    dataDiv.setAttribute('id', 'dataDiv');
    rightDiv.appendChild(dataDiv);

    /////////////////////////////////////////////////////////////////////////////////////////
    ///////               DISPLAY THE COLLECTED DATA IN THE RIGHT DIV                ////////
    /////////////////////////////////////////////////////////////////////////////////////////

    // Display the collected data in the right div
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        /**
         * TODO:
         * (contains example)
         * > Get by id the input elements of the user's name, email, phone, location, image, about, and skills
         * Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
         * 
         * > Use the value property to get the value of the input
         * Reference: https://www.w3schools.com/jsref/prop_text_value.asp
         * 
         */
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const location = document.getElementById('location').value;
        const image = document.getElementById('image').value;
        const about = document.getElementById('about').value;
        const skills = document.getElementById('skills').value;

        /**
         * EXAMPLE IMPLEMENTATION:
         * > Check if the user has entered data in all the input fields
         * Reference: https://www.w3schools.com/jsref/jsref_if.asp
         * 
         * > If the user has not entered data in all the input fields, 
         * display an alert message that says 'Please fill in all the fields'
         * Reference: https://www.w3schools.com/jsref/met_win_alert.asp
         */
        if ( 
            name === '' ||
            email === '' ||
            phone === '' ||
            location === '' ||
            image === '' ||
            about === '' ||
            skills === '' 
        ){
            alert('Please fill in all the fields');
            return;
        }


        // Clear the data div before adding anything to it
        dataDiv.innerHTML = '';

        /**
         * Create a div for the user's name and email and add it to the data div
         * Also add the user's name and email to the div
         */
        var contactDiv = document.createElement('div');
        contactDiv.setAttribute('id', 'contactDiv');
        dataDiv.appendChild(contactDiv);

        var namePara = document.createElement('p');
        namePara.innerHTML = `Name: ${name}`;
        contactDiv.appendChild(namePara);

        var emailPara = document.createElement('p');
        emailPara.innerHTML = `Email: ${email}`;
        contactDiv.appendChild(emailPara);

        var phonePara = document.createElement('p');
        phonePara.innerHTML = `Phone: ${phone}`;
        contactDiv.appendChild(phonePara);

        /**
         * Create a div for the user's image and add it to the data div
         * Createa an image element and add it to the image div
         * make the source of the image the user's image
         */
        var imageDiv = document.createElement('div');
        imageDiv.setAttribute('id', 'imageDiv');
        dataDiv.appendChild(imageDiv);

        var imageEl = document.createElement('img');
        imageEl.setAttribute('src', image);
        imageDiv.appendChild(imageEl);

        /**
         * Create a div for the user's location and add it to the data div
         */
        var locationDiv = document.createElement('div');
        locationDiv.setAttribute('id', 'locationDiv');
        dataDiv.appendChild(locationDiv);

        var locationPara = document.createElement('p');
        locationPara.innerHTML = `Location: ${location}`;
        locationDiv.appendChild(locationPara);

        /**
         * Create a div for the user's skills and about and add it to the data div
         * Also add the user's skills and about to the div
         * Make the skills into a list
         * Make the about into a paragraph
         */
        var skillsDiv = document.createElement('div');
        skillsDiv.setAttribute('id', 'skillsDiv');
        dataDiv.appendChild(skillsDiv);

        // Create a h5 skills heading
        var skillsHeading = document.createElement('h5');
        skillsHeading.innerHTML = 'Skills:';
        skillsDiv.appendChild(skillsHeading);

        var skillsListCont = document.createElement('ul');
        skillsListCont.setAttribute('id', 'skillsListCont');
        skillsDiv.appendChild(skillsListCont);

        // split the skills into an array
        var splitSkills = skills.split(',');
        // loop through the array and add each skill to the list
        for (var i = 0; i < splitSkills.length; i++) {
            var skillsList = document.createElement('li');
            skillsList.innerHTML = splitSkills[i];
            skillsListCont.appendChild(skillsList);
        }

        // Create a h5 about heading
        var aboutHeading = document.createElement('h5');
        aboutHeading.innerHTML = 'About:';
        skillsDiv.appendChild(aboutHeading);
        
        var aboutPara = document.createElement('p');
        aboutPara.innerHTML = `${about}`;
        skillsDiv.appendChild(aboutPara);
        
        /**
         * TODO:
         * > Create a button to clear the data div
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * > Use setAttribute to set the button's id attribute to 'clearButton'
         * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
         * 
         * > Use innerHTML to set the button's text to 'Clear'
         * Reference: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         * 
         * > Add the button to the data div
         * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
         */
        var clearButton = document.createElement('button');
        clearButton.setAttribute('id', 'clearButton');
        clearButton.innerHTML = 'Clear';
        dataDiv. clearButton;

        /**
         * > Add an event listener to the button to clear the data div 
         */
        clearButton.addEventListener('click', function() {
            dataDiv.innerHTML = '';
        });

        /**
         * TODO:
         * > Use reset to clear the form
         * Reference: https://www.w3schools.com/jsref/met_form_reset.asp
         */
        form.reset();

    });

}