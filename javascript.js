
//
function reset(){

    psw.value = "";

    resetFeatures();

    document.getElementById("password-score").innerHTML = " "; //Updates the points on the web app


}

function resetFeatures(){
  txtLengthOver8.innerHTML = "&#128566;";
  txtLengthOver16.innerHTML = "&#128566;";
  txtMulticase.innerHTML = "&#128566;";
  txtSpecialChar.innerHTML = "&#128566;";
  txtAlphanumeric.innerHTML = "&#128566;";
  txtRepeatingChars.innerHTML = "&#128566;";

}



//Shows the password in plain text
function showPass() {
    var element = document.getElementById("psw");
    var button = document.getElementById("show-button");


    if (element.type === "password") {
        element.type = "text";
        button.innerHTML = "Hide";
    } else {
        element.type = "password";
        button.innerHTML = "Show";
    }
}


//Checks the password for key features and updates the web page accordingly
function passwordCheck() {


    //Setting up all the variables
    var pass = document.getElementById("psw").value;
    if (pass.length > 3) {
        var points = 0;
        var lowPass = pass.toLowerCase(); //Needed for the case test
        var highPass = pass.toUpperCase();


        // &#9785; is a sad face
        // &#9786; is a happy face

        //&#128522; is happy emoji
        //&#128560; is sad emoji


        //Check the length
        if (pass.length >= 8) {
            points++;

            txtLengthOver8.innerHTML = "&#128522;".fontcolor("#21FF21");

        } else {
            txtLengthOver8.innerHTML = "&#128560;".fontcolor("#F44336");
        }

        if (pass.length >= 16) {
            points++

            txtLengthOver16.innerHTML = "&#128522;".fontcolor("#21FF21");
        } else {
            txtLengthOver16.innerHTML = "&#128560;".fontcolor("#F44336");
        }

        //Check for multi-case
        if (pass != lowPass && pass != highPass) {
            points++;

            txtMulticase.innerHTML = "&#128522;".fontcolor("#21FF21");
        } else {
            txtMulticase.innerHTML = "&#128560;".fontcolor("#F44336");
        }

        //Check for special chars
        if (!pass.match(/^[a-zA-Z0-9- ]*$/)) {
            points++;

            txtSpecialChar.innerHTML = "&#128522;".fontcolor("#21FF21");
        } else {
            txtSpecialChar.innerHTML = "&#128560;".fontcolor("#F44336");
        }

        //Check for alphanumeric
            if (pass.match(/.*[a-z].*/) && pass.match(/.*[0-9].*/)) {
            points++;

            txtAlphanumeric.innerHTML = "&#128522;".fontcolor("#21FF21");
        } else {
            txtAlphanumeric.innerHTML = "&#128560".fontcolor("#F44336");
        }

        //Check for repeating characters
        if (!pass.match(/(.)\1\1/)) {
            points++;

            txtRepeatingChars.innerHTML = "&#128522;".fontcolor("#21FF21");
        } else {
            txtRepeatingChars.innerHTML = "&#128560;".fontcolor("#F44336");
        }

        //Doesn't fill in if the password is less than three
        if (pass.length < 4) {
            points = 0;


        }


        document.getElementById("password-score").innerHTML = points.toString(); //Updates the points on the web app


    }else {
      resetFeatures();
      document.getElementById("password-score").innerHTML = " ";

    }






}
