window.onload = function(){

    /**
     * TODO:
     * Capture the element with the id 'firstSection' and store it in the variable sec1
     * Capture the element with the id 'secondSection' and store it in the variable sec2
     * Capture the element with the id 'finalSection' and store it in the variable sec3
     * 
     * Reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
     */
    const sec1 = document.getElementById('firstSection');
    const sec2 = document.getElementById('secondSection');
    const sec3 = document.getElementById('finalSection');

    /**
     * TODO:
     * 
     * > Create a new element with the tag name 'h1' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Create a new text node with the text 'Bears' and store it in a variable
     * > Append the text node to the h1 element
     * > Append the h1 element to the first section (sec1)
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * Reference: https://www.w3schools.com/jsref/met_node_insertbefore.asp
     * 
     */
    const myHeading = document.createElement("h1");
    const myText = document.createTextNode("Bears");

    myHeading.appendChild(myText);
    sec1.appendChild(myHeading);

    /**
     * TODO:
     * 
     * > Create a new element with the tag name 'p' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Create a new text node with the text 'Chicago, IL' and store it in a variable
     * > Append the text node to the p element
     * > Append the p element to the first section
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * Reference: https://www.w3schools.com/jsref/met_node_insertbefore.asp
     */
    
    const myParagraph = document.createElement("p");
    const myText2 = document.createTextNode("Chicago,IL");
    myParagraph.appendChild(myText2) ;
    sec1.appendChild(myParagraph) ;

    /**
     * TODO:
     * > Create a new element with the tag name 'h2' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Create a new text node with the text '2018-2019 NFC North Champions' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Append the text node to the h2 element
     * > Append the h2 element to the second section
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    var h2 = document.createElement('h2');
    const myText3 = document.createTextNode('2018-2019 NFC North Champions');
    h2.appendChild(myText3);
    sec2.appendChild(h2) ;


    /**
     * TODO:
     * > Create a new element with the tag name 'img' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * 
     * > Set the src attribute of the image to 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Khalil_Mack_2018.png'
     * > Set the width attribute of the image to 240
     * Reference:https://www.w3schools.com/jsref/met_element_setattribute.asp
     * 
     * > Append the image to the second section
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    const img = document.createElement('img');
    img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/5e/Khalil_Mack_2018.png");
    img.setAttribute("alt","This is a sports image");
    img.setAttribute("width","240px") ;
    sec2.appendChild(img) ;

    /**
     * TODO:
     * > Create a new element with the tag name 'p' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createelement.asp
     * > Create a new text node with the text 'What will happen this year?' and store it in a variable
     * Reference: https://www.w3schools.com/jsref/met_document_createtextnode.asp
     * 
     * > Append the text node to the p element
     * > Append the p element to the final section
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     */
    sec3.appendChild(document.createTextNode("<p>What will happen this year?</p>"));
    
}