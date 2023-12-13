// JavaScript Objects
window.onload = function(){
    let icon=document.getElementById("burgerIcon");
    let dropDownItems=document.getElementById("hamburgerMenu");
    
    icon.onclick = function(){
        if (dropDownItems.style.display === "none") {
            dropDownItems.style.display = "block";
            } else {
                dropDownItems.style.display = "none";
            }
    }
    
}