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
    

    // Objects in JS 
    // Allows reusing our code
    /**
     * 
     */
    class Product{
        // constructor that initialises (starts the creation of) the object
        // Propertires/attributes/characteristics of a product
        // > Name
        // > Brand
        // > Size
        // > Date Of Manufacture
        // > Price
        // > Description
        constructor( name, brand, size, dom, price, description ){
            this.name = name;
            this.brand = brand;
            this.size = size;
            this.dom = dom;
            this.price = price;
            this.description = description;
        }

        /**
         * @params {HTMLElement} htmlElement the element into which we want to append the product
         */
        display( htmlElement ){
            // Create a a h1 for the name of the product
            const nameElement = document.createElement("h1");
            nameElement.innerHTML = this.name;
            // create a h3 for brand
            const brandElement = document.createElement("h3")
            brandElement.innerHTML = `Brand: ${this.brand}`;
            // create a p for size
            const sizeElement = document.createElement("p")
            sizeElement.innerHTML = `Size: ${this.size}`;
            // create a p for description
            const descriptionElement = document.createElement("h1")
            descriptionElement.innerHTML = `Description: ${this.description}`;
            // create a p for dom
            const domElement = document.createElement("h1")
            domElement.innerHTML = `Date Of Manufature: ${this.dom}`;
            // create a p for prices
            const priceElement = document.createElement("p")
            priceElement.innerHTML = `Price: ${this.price}`;

            // Append everything to teh HTML element provided
            htmlElement.appendChild(nameElement)
            htmlElement.appendChild(brandElement)
            htmlElement.appendChild(sizeElement)
            htmlElement.appendChild(descriptionElement)
            htmlElement.appendChild(domElement)
            htmlElement.appendChild(priceElement)
            
        }
    }

    // Create an object of customer
    // Prperties of a customer:
    // > the name of the customer
    // > location (where they live)
    // > prooduct what they want to buy
    // > password
    // > email
    class Person{
        constructor(name,location,product,password,email){
            this.name = name;
            this.location = location;
            this.product = product;
            this.password = password;
            this.email  =   email;
        }
    }

    const prods = document.getElementById("products")


    // Create products here
    // > Name
    // > Brand
    // > Size
    // > Date Of Manufacture
    // > Price
    // > Description
    const milk = new Product(
        "White Water",':P','32423424,4324','1009','all ur money any kind','just water thats white u should NOT buy this milk it will make u fat'
    
    )
    const milkTow = new Product(
        "White Water",':P','32423424,4324','1009','all ur money any kind','just water thats white u should NOT buy this milk it will make u fat'
    
    )
    
    milk.display( prods );
    milkTow.display( prods );
}