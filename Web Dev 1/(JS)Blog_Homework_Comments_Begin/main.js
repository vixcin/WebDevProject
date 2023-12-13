// Use the onload event listenr to make JS wait of the HTML
// file to load
// Event => Anything that happens on the browser

// Anonymous => Run immediately after the event is triggered
window.onload = function() {
    // DOM - Document Object Model
    // The DOM provides a way of 
    const heading = document.getElementById("heading");

    // Buttons
    const like_btn = document.getElementById("like_btn");
    const dislike_btn = document.getElementById("dislike_btn");
    const share_btn = document.getElementById("share_btn");
    const fav_btn = document.getElementById("fav_btn");

    // get the ptag counts
    // getting elements by class name returns a list
    const like_count = document.getElementById("likes_count");
    const dislike_count = document.getElementById("dislikes_count");
    const share_count = document.getElementById("share_count");
    const fav_count = document.getElementById("fav_cocunt");
    
    // create a temporary variable
    var clicks = 0;
    var dislike_clicks = 0;
    var share_clicks = 0;
    var fav_clicks = 0;

    
    // Test the buttons with alerts and prompts
    like_btn.onclick = function (){
        clicks++;
        like_count.innerText = clicks.toString();
    }
    // Dislike Button
    dislike_btn.onclick = function (){ 
        dislike_clicks++;
        dislike_count.innerText = dislike_clicks.toString();
    }
    // Share Button
    share_btn.onclick = function (){ 
        share_clicks++;
        share_count.innerText = share_clicks.toString();
    }
    // Fav Button
    fav_btn.onclick = function (){
        fav_clicks++;
        fav_count.innerText = fav_clicks.toString();
    }

    // Capture the comments from the HMTL page
    // Capture the input boxes
    const horse_comments = document.getElementById("horse_comments");
    const dolphin_comments = document.getElementById("dolphin_comments");
    const elephant_comments = document.getElementById("elephant_comments");
    
    // Capture the comment submission buttons
    const horse_submit = document.getElementById("horse_submit");
    const dolphin_submit = document.getElementById("dolphin_submit");
    const elephant_submit = document.getElementById("elephant_submit");

    // Capture the comment lists
    const horse_comments_post = document.getElementById("user_comments_horse");
    const dolphin_comments_post = document.getElementById("user_comments_doplhin");
    const elephant_comments_post = document.getElementById("user_comments_elephant");
    
    // Capturing inputs using:
    // (1) onInput() event
    // (2) onChange() event
    // Capture Horse Comments
    horse_comments.onchange = function(e) {
        // assign the value of the input box to a variable
        let comment = e.target.value;
        // Create a p tag to hold the comment
        const p_tag = document.createElement("p");
        p_tag.innerText = comment;
        // Add the comment to the displaying div
        horse_comments_post.appendChild(p_tag);
    }
    // Capture Dolphin Comments
    var dolphin_comments_list = [ ];

    dolphin_comments.onchange = function(e) {
        let comment = e.target.value;
        // Add the comment to the list of dolphin comments
        dolphin_comments_list.push(comment);
        
    }
    dolphin_submit.onclick = function(e) {

        dolphin_comments_list.forEach( function (comment) {

            // Create a p tag to hold the comment
            let p_tag = document.createElement("p");
            // assign the p tag the comment
            p_tag.innerText = comment;
    
            // Create a text node to hold the comment
            dolphin_comments_post.appendChild(p_tag);
        });
    }
    
    // Capture the Elephant Comments
    elephant_comments.onchange = function(e){
        let comment = e.target.value;
        const p_tag = document.createElement("p")
        p_tag.innerText = comment;

        elephant_comments_post.appendChild(p_tag);
    }



    // Create a timer using set time out.
    // Parameters => Function & time period
    // 1 sec => 1000 milliseconds
    setTimeout(
        function(){
            heading.innerText = "We made this blog with Ben";
        },
        2000
    );

}   

