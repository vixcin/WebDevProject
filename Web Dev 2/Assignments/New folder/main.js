window.onload = function(){
    /**
     * TODO: 
     * > Get by id the left and right divs from the HTML document and assign them to constant variables
     * Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
     */
    const leftDiv =  'left';
    const rightDiv =  'right';

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
    const form = 'form';
    form. 'id', 'form';
    leftDiv. (form);

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
    const nameEmailPhoneLocationDiv = 'div';
    nameEmailPhoneLocationDiv. 'id', 'nameEmailPhoneLocationDiv';
    form.  (nameEmailPhoneLocationDiv);

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
    const emailLabel = ;
    emailLabel. ;
    emailLabel.  = 'Email: ';
    nameEmailPhoneLocationDiv. (emailLabel);

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
    const emailInput =  'input');
    emailInput. ('type', 'text');
    emailInput. ('id', 'email');
    emailInput. ('name', 'email');
    nameEmailPhoneLocationDiv. (emailInput);

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
    const phoneLabel =   ;
    phoneLabel. ;
    phoneLabel.   ;
    nameEmailPhoneLocationDiv.  ;
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
    const phoneInput =  ('input');
    phoneInput. ('type', 'text');
    phoneInput. ('id', 'phone');
    phoneInput. ('name', 'phone');
    nameEmailPhoneLocationDiv. (phoneInput);

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
    const locationLabel =  ('label');
    locationLabel. ('for', 'location');
    locationLabel.    'Location: ';
    nameEmailPhoneLocationDiv. (locationLabel);
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
    const locationInput =  ;
    locationInput. ;
    locationInput. ;
    locationInput. ;
    nameEmailPhoneLocationDiv. ;


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
    const imageDiv =  ('div');
    imageDiv. ('id', 'imageDiv');
    form. (imageDiv);

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
    const imageLabel =  ;
    imageLabel. ('for', 'image');
    imageLabel.   'Image URL: ';
    imageDiv. (imageLabel);

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
     * > Use setAttribute to set the input's name attribute to 'image'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the input to the imageDiv
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const imageInput =  ('input');
    imageInput. ('type', 'url');
    imageInput. ('id', 'image');
    imageInput. ('name', 'image');
    imageDiv. (imageInput);

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
    const aboutDiv = ('div');
    aboutDiv. ;
    form. (aboutDiv);

    /**
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
    const aboutLabel =  ('label');
    aboutLabel. ('for', 'about');
    aboutLabel. 'About: ';
    aboutDiv. (aboutLabel);

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
    const aboutInput =  ('input');
    aboutInput. ('type', 'text');
    aboutInput. ('id', 'about');
    aboutInput. ('name', 'about');
    aboutDiv.  (aboutInput);

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
    const skillsDiv =  ('div');
    skillsDiv.  ;
    form. (skillsDiv);

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
    const skillsLabel =  ('label');
    skillsLabel. ('for', 'skills');
    skillsLabel.  'Skills: ';
    skillsDiv. (skillsLabel);

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
    const skillsInput =  ('input');
    skillsInput. ;
    skillsInput. ;
    skillsInput. ;
    skillsDiv. (skillsInput);

    /**
     * TODO:
     * > Create the button div to contain the submit and reset buttons and assign it to a constant variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the div's id attribute to 'buttonDiv'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Add the div to the form
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const buttonDiv =  ;
    buttonDiv. ;
    form. ;

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
    const submitButton =  ('button');
    submitButton. ( );
    submitButton. ( );
    submitButton.   'Submit';
    buttonDiv. (submitButton);

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
    const resetButton =  ('button');
    resetButton. ('type', 'reset');
    resetButton. ('id', 'resetButton');
    resetButton.  = 'Reset';
    buttonDiv. (resetButton);

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
    const dataDiv =  ('div');
    dataDiv. ('id', 'dataDiv');
    rightDiv. (dataDiv);

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
        const email  'email' ;
        const phone   'phone' ;
        const location   'location' ;
        const image  'image' ;
        const about  'about' ;
        const skills   'skills' ;

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
        form. ();

    });

}