window.onload = function(){
    const right_container = document.getElementById('profile_view');

right_container.style.visibility = 'hidden';

    var image_val, name_val, email_val, phone_val, location_val, about_val;

    const image = document.getElementsById("photo");
    image.addEventlistener('change', function() {
        const reader = new FileReader();

        reader.addEventlistener('load',() => {
            const uploaded_image = reader.result;
            localStorage.setItem('me',uploaded_image)
            document.querySelector('#me').src = localStorage.getItem('me')
        } );
        
        reader.readAsDataURL(this.files[0]);
    })
    // Name
    const name = document.getElementById("name");
    name.onchange = function (e) {
        name_val = e.target.value;
    }

    // Email
    const email = document.getElementById("email");
    email.onchange = function (e) {
        email_val = e.target.value;
    }

    // Phone
    const phone = document.getElementById("phone");
    phone.onchange = function (e) {
        phone_val = e.target.value;
    }

    // Location
    const location = document.getElementById("location");
    location.onchange = function (e) {
        location_val = e.target.value;
    }
}