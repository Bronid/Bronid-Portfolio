function contactsFix() {
    if(document.querySelector('.navbar-toggler').value == "dropped"){
        document.querySelector('.con').className = "nav-link text-white me-5 con";
        document.querySelector('.navbar-toggler').value = "none";
    } else {
        document.querySelector('.con').className = "btn btn-info text-white con";
        document.querySelector('.navbar-toggler').value = "dropped";
    } 
};

function validateForm() {
    var succesful = true;
    document.querySelector('.name').innerHTML = "Your name";
    document.querySelector('.mail').innerHTML = "Your email";
    document.querySelector('.subject').innerHTML = "Subject";
    document.querySelector('.mes').innerHTML = "Your message";
    document.querySelector('.name').style.color = "#000000";
    document.querySelector('.mail').style.color = "#000000";
    document.querySelector('.subject').style.color = "#000000";
    document.querySelector('.mes').style.color = "#000000";

    var myModal = new bootstrap.Modal(document.getElementById('popup'), {
        keyboard: false
    })
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.name').innerHTML = "Name cannot be empty";
        document.querySelector('.name').style.color = "#FF0000";
        succesful = false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.mail').innerHTML = "Email cannot be empty";
        document.querySelector('.mail').style.color = "#FF0000";
        succesful = false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.mail').innerHTML = "Email format invalid";
            document.querySelector('.mail').style.color = "#FF0000";
            succesful = false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.subject').innerHTML = "Subject cannot be empty";
        document.querySelector('.subject').style.color = "#FF0000";
        succesful = false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.mes').innerHTML = "Message cannot be empty";
        document.querySelector('.mes').style.color = "#FF0000";
        succesful = false;
    }
    if (succesful) {
        myModal.toggle()
    }
};
