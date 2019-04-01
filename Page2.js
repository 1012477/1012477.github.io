function check_pin_code() {
    var pin_entered, text;
    //Get the value of input field with id="pin_code"
    pin_entered = document.getElementById("pin_code").value;
    // Check to see if pin_entered is correct
    if (pin_entered == "1234") {
        text = '<div class="bs-example">\n' +
            '<div class="row">\n' +
            '<div class="col-md-6"><img src="images/bulbon.gif" alt="" width="100" height="180" id="main_power"></div>\n' +
            '<div class="col-md-6"><img id="secondary_power" onclick="changeImage()" src="images/bulboff.gif" width="100" height="180"></div>\n' +
            '</div>\n'
    } else {
        text = "Input Not valid";
    }
    document.getElementById("power_usage").innerHTML = text;
}
