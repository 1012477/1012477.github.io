function checkPin() {
    var x, text;
    //Get the value of input field with id="numb"
    x = document.getElementById("pin").value;
    // If x is Not a Number or less than one or greater than 10
    if (x == "1674") {
        text = "Missile Launched! <p><img class=\"img-fluid\" src=\"images/missile.gif\"></p>";
    } else {
        text = "Incorrect Pin, Access Denied! <p><img class=\"img-fluid\" src=\"images/accessdenied.gif\"></p>";
    }
    document.getElementById("feedback").innerHTML = text;
}