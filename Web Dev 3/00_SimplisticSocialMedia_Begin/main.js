/**
 * @description:
 * 1. Create a class called Post that represents a post on a social media platform.
 * * -----------------------------------------------------------------------
 * Hint on how to create a class in JavaScript:
 * Read the section on "Class declarations"
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * Reference: https://www.w3schools.com/js/js_classes.asp
 * 
 * 2. The class should have the following properties:
 * --------------------------------------------------
 *    i. author: string                      : this is a required input           
 *   ii. title: string                       : this is a required input       
 *  iii. content: string                     : this is a required input           
 *   iv. date: Date                          : this is an optional input and can be created with a default value   
 *    v. likes: number                       : this is an optional input and can be created with a default value       
 *   vi. dislikes: number                    : this is an optional input and can be created with a default value           
 *  vii. shares: number                      : this is an optional input and can be created with a default value       
 * viii. commentCount: number                : this is an optional input and can be created with a default value               
 *   ix. comments: list of strings           : this is an optional input and can be created with a default value                   
 * 
 * Hint on how to use optional vs required parameters in a class constructor:
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
 * Reference: https://www.w3schools.com/js/js_classes.asp
 * 
 * 3. The class should have the following methods:
 * * ---------------------------------------------
 *   i. addComment(comment: string): void
 *  ii. comment(): void
 * iii. like(): void
 *  iv. dislike(): void
 *   v. share(): void
 *  vi. display(containerElement: HTMLElement): void
 * 
 */
class Post {
    
    
    
    /**
     * TODO: 
     * > Create a class Post that represents a post on a social media platform.
     * [clarifying note] the word param is used to indicate that the parameter is a REQUIRED input
     * [clarifying note] the word {string} is used to indicate that the parameter is a string
     *                                                                                                                  o
     * > The constructor should have the following parameters:
     * Required parameters:
     * @param { string } author: this is a required input representing the name of the author of the post
     * @param { string } title: this is a required input representing the title of the post
     * @param { string } imageUrl: this is a required input representing the imageUrl of the post
     * @param { string } content: this is a required input representing the content of the post
     * 
     * Optional parameters:
     * @param { Date } date: this is an optional input and can be created with a default value
     * @param { number } likes: this is an optional input and can be created with a default value
     * @param { number } dislikes: this is an optional input and can be created with a default value
     * @param { number } shares: this is an optional input and can be created with a default value
     * @param { number } commentCount: this is an optional input and can be created with a default value
     * @param { array of strings } comments: this is an optional input and can be created with a default value
     * 
    */
   constructor(author, title, content, imageUrl){
        this.author = author;
        this.title = title;
        this.content = content;
        this.imageUrl = imageUrl;
       
        // the date will automatically be today    
        this.date = new Date();
        this.likes = 0;
        this.dislikes = 0;
        this.shares = 0;
        // number of comments
        this.commentCount = 0;
        this.comments = [];
   }

   
   


/**
 * TODO:
 * > Create a funcntion called addComment that takes a parameter comment and adds it to the list of comments in the post
 * Reference: https://www.w3schools.com/jsref/jsref_push.asp
 *  
 * Required parameter:
 * @param { string } comment 
*/
// YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
addcomment(comment){
    this.comments.push(comment);
}


    // YOUR CODE ENDS HERE

    /**
     * TODO:
     * > Create a function called comment that takes no parameters and increments the commentCount by 1
     * > Use the appropriate JS opertaor to increment the commentCount by 1
     * Reference: https://www.w3schools.com/jsref/jsref_operators.asp
     * 
     */
    // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
    comment(){
        this.commentCount = this.commentCount + 1;
    }
    
    // YOUR CODE ENDS HERE

    /**
     * TODO:
     * > Create a function called likes that takes no parameters and increments the likes by 1
     * > Use the appropriate JS opertaor to increment the likes by 1
     * Reference: https://www.w3schools.com/jsref/jsref_operators.asp
     */
    // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
    like(){
        this.likes = this.likes +1;
    }
    
    // YOUR CODE ENDS HERE

    /**
     * TODO:
     * > Create a function called dislike that takes no parameters and increments the dislikes by 1
     * > Use the appropriate JS opertaor to increment the dislikes by 1
     * Reference: https://www.w3schools.com/jsref/jsref_operators.asp
     */
    // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
    dislike(){
        this.dislikes = this.dislikes + 1;
    }
    
    // YOUR CODE ENDS HERE

    /**
     * TODO:
     * > Create a function called share that takes no parameters and increments the shares by 1
     * > Use the appropriate JS opertaor to increment the shares by 1
     * Reference: https://www.w3schools.com/jsref/jsref_operators.asp
     */
    // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
    share(){
        this.shares  = this.shares +1;
    }
    
    // YOUR CODE ENDS HERE

    /**
     * TODO:
     * > Create a function called display that takes a parameter containerElement and displays the post in the containerElement
     * > You'll need to use appendChild() to add the post to the containerElement
     * Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp
     * 
     * Required parameter: 
     * @param { HTMLElement } containerElement 
     * 
     * > Steps are listed within the function
     */
    // YOUR CODE STARTS HERE
    display(containerElement){
        /**
         * EXAMPLE IMPLEMENTATION:
         * 
         * 1. [inside the display function] Use createElement() to create a div element and store it in a variable called postDisplayContainer
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 2. [inside the display function] Use the classList property to add the following classes to the postDisplayContainer element:
         *   'post-display-container', 'bg-light', 'rounded-start-top-0', 'w-100', 'p-3', 'm-3', 'rounded'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         */
        const postDisplayContainer = document.createElement('div');
        postDisplayContainer.classList.add('post-display-container', 'bg-light', 'rounded-start-top-0', 'w-100', 'p-3', 'm-3', 'rounded');
        
        /**
         * TODO:
         * 
         * 3. [inside the display function] Use createElement() to create a div element and store it in a variable called postDisplay
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 4. [inside the display function] Use the classList property to add the following classes to the postDisplay element:
         *  'post-display', 'ms-2'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const postDisplay = document.createElement('div');
        postDisplay.classList.add('post-display','ms-2');
        
        // YOUR CODE ENDS HERE
        
        /**
         * TODO:
         * 
         * 5. [inside the display function] Use createElement() to create a div element and store it in a variable called authorDisplay
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 6. [inside the display function] Use the classList property to add the following classes to the authorDisplay element:
         * 'author-display', 'd-flex', 'justify-content-between'
         * 
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const authorDisplay = document.createElement('div');
        authorDisplay.classList.add('author-display','d-flex','justify-content-between');
        
        // YOUR CODE ENDS HERE
        
        /**
         * EXAMPLE IMPLEMENTATION:
         * 
         * 7. [inside the display function] Use createElement() to create a h6 element and store it in a variable called authorName
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 8. [inside the display function] Use the classList property to add the following classes to the authorName element:
         * 'author-name', 'mb-1' 
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * 9. [inside the display function] Use the innerHTML property to set the authorName element's innerHTML to the author of the post: this.author
         * Reference on how to use the innerHTML property: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         */
        const authorName = document.createElement('h6');
        authorName.classList.add('author-name', 'mb-1');
        authorName.innerHTML = this.author;
        
        /**
         * TODO:
         * 
         * 10. [inside the display function] Use createElement() to create a small element and store it in a variable called postTime
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 11. [inside the display function] Use the classList property to add the following classes to the postTime element:
         * 'post-time', 'text-muted', 'ms-2'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * 12. [inside the display function] Use the innerHTML property to set the postTime element's innerHTML to the date of the post: this.date
         * Reference on how to use the innerHTML property: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const postTime = document.createElement('small');
        postTime.classList.add('post-time','text-muted','ms-2');
        postTime.innerHTML = this.date;
        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 13. [inside the display function] Use createElement() to create a h4 element and store it in a variable called postTitle
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 14. [inside the display function] Use the classList property to add the following classes to the postTitle element:
         * 'post-title'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * 15. [inside the display function] Use the innerHTML property to set the postTitle element's innerHTML to the title of the post
         * Reference on how to use the innerHTML property: https://www.w3schools.com/jsref/prop_html_innerhtml.asp 
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const postTitle = document.createElement('h4');
        postTitle.classList.add('post-title')
        postTitle.innerHTML = this.title

        /**
         * TODO:
         * > Use createElement to create an image asn stoire it in a variable called postImage
         * > add teh image element to the the class called 'post-imageUrl'
         * > Assign the src attribute of the image the value store in `${this.imageUrl}`
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const postImage = document.createElement('img');
        postImage.classList.add('post-image');
        postImage.src = this.imageUrl;        
        // YOUR CODE ENDS HERE
         
        /**
         * TODO:
         * 
         * 16. [inside the display function] Use createElement() to create a p element and store it in a variable called postContent
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 17. [inside the display function] Use the classList property to add the following classes to the postContent element:
         * 'post-content'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * 18. [inside the display function] Use the innerHTML property to set the postContent element's innerHTML to the content of the post
         * Reference on how to use the innerHTML property: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const postContent = document.createElement('p');
        postContent.classList.add('post-content');
        // Use subsrting to manage the UI
        postContent.innerHTML = this.content.substring(0, 48);
        // postContent.innerHTML = this.content;
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 19. [inside the display function] Use createElement() to create a div element and store it in a variable called postActions
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 20. [inside the display function] Use the classList property to add the following classes to the postActions element:
         * 'd-flex', 'justify-content-between', 'nav', 'nav-stack', 'py-3', 'small'
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const postActions = document.createElement('div');
        postActions.classList.add('d-flex','justify-content-between','nav','nav-stack','py-3','small');
        
        // YOUR CODE ENDS HERE

        /**
         * EXAMPLE IMPLEMENTATION:
         * 
         * 21. [inside the display function] Use createElement() to create a button element and store it in a variable called likeAction
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 22. [inside the display function] Use the classList property to add the following classes to the likeAction element:
         * 'like-action', 'btn', 'btn-primary', 'nav-item'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * 23. [inside the display function] Use the innerHTML property to set the likeAction element's innerHTML to the following string:
         * `Likes ${this.likes}`
         * Reference on how to use the innerHTML property: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         * 
         * 24. [inside the display function] Use the addEventListener() method to add a click event listener to the likeAction element
         * Reference on how to use the addEventListener() method: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
         * 
         * 25. [inside the display function] Inside the click event listener, call the like() method from the post object
         * Reference on how to call a method: https://www.w3schools.com/js/js_functions.asp
         * 
         * 26. [inside the display function] Inside the click event listener, use the innerHTML property to set the likeAction element's innerHTML to the following string:
         * `Likes ${this.likes}`
         * Reference on how to use the innerHTML property: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         * 
         * 27. [inside the display function] [Inside the click event listener] Use the bind() function to bind the like() function to the post object
         * Reference on how to use the bind() function: https://www.w3schools.com/jsref/jsref_bind.asp
         */
        const likeAction = document.createElement('button');
        likeAction.classList.add('like-action', 'btn', 'btn-primary', 'nav-item');
        likeAction.innerHTML = `Likes ${this.likes}`;
        
        likeAction.addEventListener('click', ( function(){
                this.like();
                likeAction.innerHTML = `Likes ${this.likes}`;
            }.bind(this) )
        );

        /**
         * TODO:
         * 
         * 28. [inside the display function] Use createElement() to create a a element and store it in a variable called likeActionLink
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 29. [inside the display function] Use the classList property to add the following classes to the likeActionLink element:
         * 'like-action-link', 'nav-link', 'p-0'
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const likeActionlink = document.createElement('a')
        likeActionlink.classList.add('like-action-link','nav','p-0');
        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 30. [inside the display function] Use createElement() to create a i element and store it in a variable called likeActionIcon
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 31. [inside the display function] Use the classList property to add the following classes to the likeActionIcon element:
         * 'bi', 'bi-hand-thumbs-up'
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const likeActionIcon = document.createElement('i');
        likeActionIcon.classList.add('bi','bi-hand-thumbs-up');

        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 32. [inside the display function] Use createElement() to create a button element and store it in a variable called dislikeAction
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 33. [inside the display function] Use the classList property to add the following classes to the dislikeAction element:
         * 'dislike-action', 'btn', 'btn-primary', 'nav-item'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * 34. [inside the display function] Use the innerHTML property to set the dislikeAction element's innerHTML to the following string:
         * `Dislikes ${this.dislikes}`
         * Reference on how to use the innerHTML property: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         * 
         * 35. [inside the display function] Use the addEventListener() method to add a click event listener to the dislikeAction element
         * Reference on how to use the addEventListener() method: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
         * 
         * 36. [inside the display function] Inside the click event listener, call the dislike() method from the post object
         * Reference on how to call a method: https://www.w3schools.com/js/js_functions.asp
         * 
         * 37. [inside the display function] Inside the click event listener, use the innerHTML property to set the dislikeAction element's innerHTML to the following string:
         * `Dislikes ${this.dislikes}`
         * 
         * 38. [inside the display function] [Inside the click event listener] Use the bind() function to bind the dislike() function to the post object
         * Reference on how to use the bind() function: https://www.w3schools.com/jsref/jsref_bind.asp
         */ 
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
            const dislikeAction = document.createElement('button');
            dislikeAction.classList.add('dislike-acton','btn','btn-primary','nav-item');
            dislikeAction.innerHTML = `Dislikes ${this.dislikes}`;
            dislikeAction.addEventListener('click',function(){
                this.dislike()
                dislikeAction.innerHTML = `Dislikes ${this.dislikes}`;
                }.bind(this))
            
            

        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 39. [inside the display function] Use createElement() to create a a element and store it in a variable called dislikeActionLink
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 40. [inside the display function] Use the classList property to add the following classes to the dislikeActionLink element:
         * 'dislike-action-link', 'nav-link', 'p-0'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
            const dislikeActionLink = document.createElement('a');
            dislikeActionLink.classList.add("dislike-action-link",'nav-link','p-0');
        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 41. [inside the display function] Use createElement() to create a i element and store it in a variable called dislikeActionIcon
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 42. [inside the display function] Use the classList property to add the following classes to the dislikeActionIcon element:
         * 'bi', 'bi-hand-thumbs-down'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
            const dislikeActionIcon = document.createElement("i");
            dislikeActionIcon.classList.add('bi','bi-hand-thumbs-down');
        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 43. [inside the display function] Use createElement() to create a button element and store it in a variable called shareAction
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 44. [inside the display function] Use the classList property to add the following classes to the shareAction element:
         * 'share-action', 'btn', 'btn-primary', 'nav-item'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * 45. [inside the display function] Use the innerHTML property to set the shareAction element's innerHTML to the following string:
         * `Shares ${this.shares}`
         * Reference on how to use the innerHTML property: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         * 
         * 46. [inside the display function] Use the addEventListener() method to add a click event listener to the shareAction element
         * Reference on how to use the addEventListener() method: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
         * 
         * 47. [inside the display function] Inside the click event listener, call the share() method from the post object
         * Reference on how to call a method: https://www.w3schools.com/js/js_functions.asp
         * 
         * 48. [inside the display function] Inside the click event listener, use the innerHTML property to set the shareAction element's innerHTML to the following string:
         * `Shares ${this.shares}`
         * 
         * 49. [inside the display function] [Inside the click event listener] Use the bind() function to bind the share() function to the post object
         * Reference on how to use the bind() function: https://www.w3schools.com/jsref/jsref_bind.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
            const shareAction = document.createElement('button');
            shareAction.innerHTML = `Shares ${this.shares}`
            shareAction.classList.add('share-action','btn','btn-primary','nav-item')
            shareAction.addEventListener('click',function(){
                this.share()
                shareAction.innerHTML = `Shares ${this.shares}`
            }.bind(this))

        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 50. [inside the display function] Use createElement() to create a a element and store it in a variable called shareActionLink
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 51. [inside the display function] Use the classList property to add the following classes to the shareActionLink element:
         * 'share-action-link', 'nav-link', 'p-0'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
            const shareActionLink = document.createElement('a');
            shareActionLink.classList.add('share-action-link','nav-link','p-0');
        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 51. [inside the display function] Use createElement() to create a i element and store it in a variable called shareActionIcon
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 52. [inside the display function] Use the classList property to add the following classes to the shareActionIcon element:
         * 'bi', 'bi-share'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
            const shareActionIcon = document.createElement('i');
            shareActionIcon.classList.add("bi",'bi-share');
        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 53. [inside the display function] Use createElement() to create a button element and store it in a variable called commentAction
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 54. [inside the display function] Use the classList property to add the following classes to the commentAction element:
         * 'comment-action', 'btn', 'btn-primary', 'nav-item'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         * 
         * 55. [inside the display function] Use the innerHTML property to set the commentAction element's innerHTML to the following string:
         * `Comments ${this.commentCount}`
         * Reference on how to use the innerHTML property: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
         * 
         * 56. [inside the display function] Use the addEventListener() method to add a click event listener to the commentAction element
         * Reference on how to use the addEventListener() method: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
         * 
         * 57. [inside the display function] Inside the click event listener, call the comment() method from the post object
         * Reference on how to call a method: https://www.w3schools.com/js/js_functions.asp
         * 
         * 58. [inside the display function] Inside the click event listener, use the innerHTML property to set the commentAction element's innerHTML to the following string:
         * `Comments ${this.commentCount}`
         * 
         * 59. [inside the display function] [Inside the click event listener] Use the bind() function to bind the comment() function to the post object
         * Reference on how to use the bind() function: https://www.w3schools.com/jsref/jsref_bind.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
            const commentAction = document.createElement('button');
            commentAction.classList.add('comment-action','btn','btn-primary','nav-item');
            commentAction.innerHTML = `Comments ${this.commentCount}`;
            commentAction.addEventListener('click',function(){
                this.comment()
                commentAction.innerHTML = `Comments ${this.commentCount}`;
            }.bind(this))
                
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 60. [inside the display function] Use createElement() to create a a element and store it in a variable called commentActionLink
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 61. [inside the display function] Use the classList property to add the following classes to the commentActionLink element:
         * 'comment-action-link', 'nav-link', 'p-0'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
            const commentActionLink = document.createElement('a')
            commentActionLink.classList.add('comment-action-link','nav-link','p-0')
        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 62. [inside the display function] Use createElement() to create a i element and store it in a variable called commentActionIcon
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 63. [inside the display function] Use the classList property to add the following classes to the commentActionIcon element:
         * 'bi', 'bi-chat-left-text'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const commentActionIcon = document.createElement('i');
        commentActionIcon.classList.add('bi','bi-chat-left-text');
        
        // YOUR CODE ENDS HERE

        /**
         * TODO:
         * 
         * 64. [inside the display function] Use createElement() to create a span element and store it in a variable called commentActionCount
         * Reference on how to use createElement: https://www.w3schools.com/jsref/met_document_createelement.asp
         * 
         * 65. [inside the display function] Use the classList property to add the following classes to the commentActionCount element:
         * 'comment-action-count', 'badge', 'bg-secondary', 'rounded-pill', 'ms-1'
         * Reference on how to use the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
         */
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        const commentActionCount = document.createElement('span')
        commentActionCount.classList.add('comment-action-count','badge','bg-secondary','rounded-pilll','ms-1');
        
        // YOUR CODE ENDS HERE
        

        /**
         * TODO ( Some implementations have been completed for you ):
         * 
         * 66. [inside the display function] Use the appendChild() method to append the following elements to the postDisplayContainer element:
         * postDisplay, authorDisplay, hr, postTitle, postContent, 
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * 67. [inside the display function] Use the appendChild() method to append the following elements to the postActions element:
         * likeAction, dislikeAction, shareAction, commentAction
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * 68. [inside the display function] Use the appendChild() method to append the following elements to the likeAction element:
         * likeActionLink
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * 69. [inside the display function] Use the appendChild() method to append the following elements to the likeActionLink element:
         * likeActionIcon
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * 70. [inside the display function] Use the appendChild() method to append the following elements to the dislikeAction element:
         * dislikeActionLink
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * 71. [inside the display function] Use the appendChild() method to append the following elements to the dislikeActionLink element:
         * dislikeActionIcon
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * 72. [inside the display function] Use the appendChild() method to append the following elements to the shareAction element:
         * shareActionLink
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * 73. [inside the display function] Use the appendChild() method to append the following elements to the shareActionLink element:
         * shareActionIcon
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * 74. [inside the display function] Use the appendChild() method to append the following elements to the commentAction element:
         * commentActionLink
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * 75. [inside the display function] Use the appendChild() method to append the following elements to the commentActionLink element:
         * commentActionIcon, commentActionCount
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         * 
         * 76. [inside the display function] Use the appendChild() method to append the following elements to the commentActionCount element:
         * commentActionCount
         * Reference on how to use the appendChild() method: https://www.w3schools.com/jsref/met_node_appendchild.asp
         */
        containerElement.appendChild(postDisplayContainer);

        postDisplayContainer.appendChild(postDisplay);
        postDisplay.appendChild(authorDisplay);
        postDisplay.appendChild( document.createElement('hr') );
        authorDisplay.appendChild(authorName);
        authorDisplay.appendChild(postTime);
        
        postDisplayContainer.appendChild(postTitle);
        postDisplayContainer.appendChild(postContent);
        postDisplayContainer.appendChild(postActions);
        // Append the postImage to the postDisplayCsontainer
        postDisplayContainer.appendChild(postImage);
        
        // YOUR CODE STARTS HERE ( Feel free to add more lines as neede below this line )
        postActions.appendChild(likeAction);
        postActions.appendChild(dislikeAction);
        postActions.appendChild(shareAction);
        postActions.appendChild(commentAction);
        
        likeAction.appendChild(likeActionlink);

        likeActionlink.appendChild(likeActionIcon);

        dislikeAction.appendChild(dislikeActionLink);
        
        dislikeActionLink.appendChild(dislikeActionIcon);
        
        shareAction.appendChild(shareActionLink);
        
        shareActionLink.appendChild(shareActionIcon);
        
        commentAction.appendChild(commentActionLink);
        
        commentActionLink.appendChild(commentActionIcon);
        
        commentActionIcon.appendChild(commentActionCount);
        // YOUR CODE ENDS HERE

    }
}


window.onload = function(){
    const postTitle = document.getElementById('post_title');
    const postImage = document.getElementById('post_pic');
    const postAuthor = document.getElementById('post_author');
    const postContent = document.getElementById('post_content');

    var postTitleValue, postContentValue, postAuthorValue, postImageValue;

    const postSubmit = document.getElementById('post_submit');
    const postContainer = document.getElementById('post_container');

    postTitle.addEventListener('change', function(){
        postTitleValue = postTitle.value;
    });

    postContent.addEventListener('change', function(){
        postContentValue = postContent.value;
    });
    postImage.addEventListener('change', function(){
        postImageValue = postImage.value;
    });

    

    postAuthorValue = postAuthor.textContent;

    postSubmit.addEventListener('click', function(){
        // Check that all fields are filled out correctly
        if (postTitleValue && postContentValue && postAuthorValue){
            const post = new Post(postAuthorValue, postTitleValue, postContentValue, postImageValue);
            post.display(postContainer);

            postTitle.value = '';
            postContent.value = '';
        } else {
            // Display error message
            var errorMessage = ""
            if ( postTitleValue == null || postTitleValue == "" ) {
                errorMessage += "Title must be filled out.";
            }
            if ( postContentValue == null || postContentValue == "" ) {
                errorMessage += "Content must be filled out.";
            }
            if ( postAuthorValue == null || postAuthorValue == "" ) {
                errorMessage += "Author name must be provided.";
            }
            if ( postImageValue == null || postImageValue == "" ) {
                errorMessage += "image name must be provided.";
            }

            alert(errorMessage);
        }
    });

}