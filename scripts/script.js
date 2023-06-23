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

function calculateTotal() {
    var graphicDesignRate = 28;
    var managementRate = 40;
    var programmingRate = 35;
    var testerRate = 30;

    var hoursGraphicDesign = parseFloat(document.getElementById("hoursGraphicDesign").value);
    var hoursManagement = parseFloat(document.getElementById("hoursManagement").value);
    var hoursProgramming = parseFloat(document.getElementById("hoursProgramming").value);
    var hoursTesting = parseFloat(document.getElementById("hoursTester").value);

    var total = (graphicDesignRate * hoursGraphicDesign) + (managementRate * hoursManagement) + (programmingRate * hoursProgramming)
    + (testerRate * hoursTesting);

    document.getElementById("total").innerHTML = "Sum: zł " + total.toFixed(2);
  };