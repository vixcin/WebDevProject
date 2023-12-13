// Construct the onload method to capture the div with id 'outer_div'
window.onload = function() {

    // Capture the div with id 'outer_div'
    var outer_div = document.getElementById('outer_div');

    // Create a liat of members and some details
    var info = [
        {
            "name": "John Doe",
            "email": "john@doe.mail",
            "age": 15,
            "origin":"New Hampshire",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien quam, scelerisque non elementum quis, pharetra interdum magna. Etiam facilisis, velit ac suscipit ullamcorper, nunc ex placerat augue, ac tincidunt risus est sed lorem. Praesent ut cursus justo. Proin dignissim et nisi non feugiat. Nam accumsan purus a venenatis varius. Proin ut cursus augue, nec rutrum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum congue odio a dolor tempus consequat. Aliquam fermentum semper metus, et tristique orci faucibus eu. Phasellus commodo lacus condimentum magna maximus, et tincidunt mauris euismod."
        },
        {
            "name": "Paul Doe",
            "email": "paul@doe.mail",
            "age": 12,
            "origin":"Singapore",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien quam, scelerisque non elementum quis, pharetra interdum magna. Etiam facilisis, velit ac suscipit ullamcorper, nunc ex placerat augue, ac tincidunt risus est sed lorem. Praesent ut cursus justo. Proin dignissim et nisi non feugiat. Nam accumsan purus a venenatis varius. Proin ut cursus augue, nec rutrum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum congue odio a dolor tempus consequat. Aliquam fermentum semper metus, et tristique orci faucibus eu. Phasellus commodo lacus condimentum magna maximus, et tincidunt mauris euismod."
        },
        {
            "name": "Jane Poe",
            "email": "jane@poe.mail",
            "age": 10,
            "origin":"New Hampshire",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien quam, scelerisque non elementum quis, pharetra interdum magna. Etiam facilisis, velit ac suscipit ullamcorper, nunc ex placerat augue, ac tincidunt risus est sed lorem. Praesent ut cursus justo. Proin dignissim et nisi non feugiat. Nam accumsan purus a venenatis varius. Proin ut cursus augue, nec rutrum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum congue odio a dolor tempus consequat. Aliquam fermentum semper metus, et tristique orci faucibus eu. Phasellus commodo lacus condimentum magna maximus, et tincidunt mauris euismod."
        },
        {
            "name": "Jim Ying",
            "email": "jim@ying.mail",
            "age": 9,
            "origin":"Hong Kong",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien quam, scelerisque non elementum quis, pharetra interdum magna. Etiam facilisis, velit ac suscipit ullamcorper, nunc ex placerat augue, ac tincidunt risus est sed lorem. Praesent ut cursus justo. Proin dignissim et nisi non feugiat. Nam accumsan purus a venenatis varius. Proin ut cursus augue, nec rutrum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum congue odio a dolor tempus consequat. Aliquam fermentum semper metus, et tristique orci faucibus eu. Phasellus commodo lacus condimentum magna maximus, et tincidunt mauris euismod."
        },
        {
            "name": "Jay Kim",
            "email": "jay@kim.mail",
            "age": 11,
            "origin":"Korea",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien quam, scelerisque non elementum quis, pharetra interdum magna. Etiam facilisis, velit ac suscipit ullamcorper, nunc ex placerat augue, ac tincidunt risus est sed lorem. Praesent ut cursus justo. Proin dignissim et nisi non feugiat. Nam accumsan purus a venenatis varius. Proin ut cursus augue, nec rutrum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum congue odio a dolor tempus consequat. Aliquam fermentum semper metus, et tristique orci faucibus eu. Phasellus commodo lacus condimentum magna maximus, et tincidunt mauris euismod."
        },
        {
            "name": "Jean Zheng",
            "email": "jean@zheng.mail",
            "age": 10,
            "origin":"Malaysia",
            "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien quam, scelerisque non elementum quis, pharetra interdum magna. Etiam facilisis, velit ac suscipit ullamcorper, nunc ex placerat augue, ac tincidunt risus est sed lorem. Praesent ut cursus justo. Proin dignissim et nisi non feugiat. Nam accumsan purus a venenatis varius. Proin ut cursus augue, nec rutrum enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum congue odio a dolor tempus consequat. Aliquam fermentum semper metus, et tristique orci faucibus eu. Phasellus commodo lacus condimentum magna maximus, et tincidunt mauris euismod."
        }
    ]

    // Create a list of item to be displayed in a minified way
    const list_cont = document.createElement('div');
    list_cont.setAttribute('id', 'list_cont');

    /**
     * TODO:
     * > Create the list element to contain the items
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Use setAttribute to set the id of the list item to 'list'
     * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
     */
    const list = document.createElement ("ul");
    list. setAttribute ("id","list");
        
    

    // Use a for loop to create the list items
    for (let i = 0; i < info.length; i++) {
        /**
         * TODO:
         * > Create a list item
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * > Create a button and add the text 'Details' to it
         * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 
         * > Use setAttribute to set the class of the list item to 'btn'
         * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
         */
        const item = document.createElement("li");
        const btn  = document.createElement("button");
        btn.setAttribute ("class","btn");
        btn.innerHTML = 'Details';
        
        item.setAttribute('class', 'item');
        item.setAttribute('info-id', i);

        item.innerHTML = `<p>${info[i].name} | ${info[i].email} | ${info[i].age} | ${info[i].origin}</p>`;
        
        item.appendChild(btn);
        list.appendChild(item);
        list_cont.appendChild(list);
        outer_div.appendChild(list_cont);

        // Add an event listener to the button
        btn.onclick = function() {
            /**
             * TODO:
             * > Create a div elemnt and assign it to a variable
             * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
             * 
             * > Use setAttribute to set the class of the div to 'details_cont'
             * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
             */
            const details_cont = document.createElement ("div") ;
            details_cont. setAttribute ("details_cont","details_cont");

            /**
             * TODO:
             * > Create a div element and assign it to a variable
             * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
             * 
             * > Use setAttribute to set the class of the div to 'details'
             * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
             */
            const details = document.createElement ("div") ;
            details.setAttribute("details","details") ;

            // Create a button to close the details and then
            // use setAttribute to set the class to 'close_btn'
            const close_btn = document.createElement('button');
            close_btn.setAttribute('class', 'close_btn');

            close_btn.innerHTML = 'Close';

            /**
             * TODO:
             * > Create a div element and assign it to a variable
             * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
             * 
             * > Use setAttribute to set the class of the div to 'details_text'
             * Reference: https://www.w3schools.com/jsref/met_element_setattribute.asp
             */
            const details_text = document.createElement("div") ;
            details_text.setAttribute("details_text","details_text") ;

            details_text.innerHTML = info[i].about;

            details.appendChild(close_btn);
            details.appendChild(details_text);
            details_cont.appendChild(details);
            item.appendChild(details_cont);

            close_btn.onclick = function() {
                // Remove the details container
                details_cont.remove();
            }
        }
    }

}