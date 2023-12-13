window.onload = function() {
    const heading = document.getElementById("heading");

    const like_btn = document.getElementById("like_btn")
    const dislike_btn =document.getElementById("dislike_btn")
    const share_btn=document.getElementById("share_btn")
    const fav_btn=document.getElementById("fav_btn")


    const like_count = document.getElementById("likes_count")
    const dislike_count = document.getElementById("dislikes_count")
    const share_count = document.getElementById("share_count")
    const fav_count = document.getElementById("fav_count")

    var clicks = 0;
    var dislikes_clicks = 0;
    var share_clicks = 0;
    var fav_clicks = 0;

    //like button function
    like_btn.onclick = function (){
        clicks++;
        like_count.innerText = clicks.toString();    
    }
    //dislike button function
    dislike_btn.onclick = function (){
        dislikes_clicks++;
        dislike_count.innerText = dislikes_clicks.toString();    
    }
    //share button function 
    share_btn.onclick = function (){
        share_clicks++;
        share_count.innerText = share_clicks.toString();    
    }
    //fav button function
    fav_btn.onclick = function (){
        fav_clicks++;
        fav_count.innerText = fav_clicks.toString();    
    }

    /**                     
     * #
     * .
     * nameof tag
     * 
     * Document Object Model
     * document.body.style.backgroundColor = "Yellow"
     * 
     */

    //capture the commnet from the HMtl page
    const horse_comment = document.getElementById("horse_comments")
    const dolphin_comment = document.getElementById("dolphin_comments")
    const elephant_comment = document.getElementById("elephant_comments")
    
    //capture the submission buttons
    const horse_submit = document.getElementById("horse_submit")
    const dolphin_submit = document.getElementById("dolphin_submit")
    const elephant_submit = document.getElementById("elephant_submit")
    
    // Capture the comments list
    const horse_comments_post = document.getElementById("user_comments_horse")
    const dolphin_comments_post = document.getElementById("user_comments_dolphin")
    const elephant_comments_post = document.getElementById("user_comments_elephant")
    
    // Caturing inputs using:
    // (1) on Input (event)
    // (2) on Onchange (event)
    horse_comment.onchange = function(e) {
        console.log(e.target.value);
    }

    var dolphin_comments_list = [  ];

    dolphin_comment.onchange = function(e) {
        let comment = e.target.value;
        // console.log(comment);
        // dolphin_comments_list.push(comment);
        let p_tag = document.createElement("p")
        p_tag.innerText = comment;
    
        dolphin_comments_post.appendChild(p_tag)
    }
    // dolphin_submit.onclick = function(e) {
    //     e.preventDefault();

    //     dolphin_comments_list.forEach( function(comment) {
    //         // Create a p tag to hold the comment
    //         let p_tag = document.createElement("p")
    //         p_tag.innerText = comment;
        
    //         dolphin_comments_post.appendChild(p_tag)
    //     });
        
    // }
    
    
    elephant_comment.onchange = function(e) {

    }
    

    setTimeout(
            function(){
                heading.innerHTML = "we made this blog with be)"
            },
            2000
        );
}
