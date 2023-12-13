// Defining the playSound() function
function playSound(){
    var sounds = ["static/sound2.mp3","static/sound2.mp3"];
    var sound = document.getElementById("AUDIO");
    /**
     * Ternary Opertator
     * (condition) ? { expression if true } : { expression if false }
     * 
     * Using the parseInt() function to convert the string to an integer
     * integer - Number without a decimal part (example: 4)
     * float - Number with a decimal part (example: 4.8)
     * string - Anything enclosed in 
     *          quotations (example: "I am a string even thought I have special $%^&* characters and numbers")
     */
    (sound)
    ? sound.src = sounds[Math.floor(Math.random() * parseInt(sounds.length))]
    :undefined;
    
    sound.play();
    
}

// Defining the AddRow() function
function addRow(){
    var row = document.createElement("tr"); // tr - stands for table row
    var tableBody = document.getElementById("myTableBody");
    for(i = 0; i < 6; i++){
        var square = document.createElement("td") // td - stands for table data
        square.className = "item " + Math.floor(Math.random() * 6);
        square.setAttribute("onclick","playSound()");
        row.appendChild(square);
    }

    tableBody.appendChild(row);
}


// Create the init() function
function init(){
    var item = document.getElementsByClassName("item");
    item.onclick = playSound();
    init()
}

window.onload = init();