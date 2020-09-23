// have added these to the top to make them global variables and called when the page has finished downloading
var userName = document.getElementById("userName");
var userPw = document.getElementById("userPw");
var userRemember = document.getElementById("rememberMe");

function store() {
    var name = document.getElementById("name");
    var pw = document.getElementById("pw");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

//checking if the fields are filled

    if (name.value.length == 0) {
        alert("Please fill in email");
    } else if (pw.value.length == 0) {
        alert("Please fill in password");
    } else if (name.value.length == 0 && pw.value.length == 0) {
        alert("Please fill in email and password");
    } else if (pw.value.length > 8) {
        alert("Max of 8");
    } else if (!pw.value.match(numbers)) {
        alert("please add 1 number");
    } else if (!pw.value.match(upperCaseLetters)) {
        alert("please add 1 uppercase letter");
    } else if (!pw.value.match(lowerCaseLetters)) {
        alert("please add 1 lovercase letter");
    } else {
// Here if the email and password are filled are passed on to loal storage
        localStorage.setItem("name", name.value);
        localStorage.setItem("pw", pw.value);
// This is just to comfirm that the accout is created
        alert("Your account has been created");
    }
}
var julio = document.getElementById("login_btn");
julio.addEventListener("click", (event) => {
    // have added this to prevent default behavior of onclick handler
    event.preventDefault();
//here iam declaring new variables to what is in local storage so that i compare it with user's input
    var storedName = localStorage.getItem("name");
    var storedPw = localStorage.getItem("pw");
// if it matches the password and email in local storage it will take him to the blog page else an error in details
    if (userName.value == storedName && userPw.value == storedPw) {

        // some changes here
        location.replace("./Blog/index.html");

    } else {
        alert("Error on login");
    }

});

//checking fuction
function check() {
    var storedName = localStorage.getItem("name");
    var storedPw = localStorage.getItem("pw");

    console.log(typeof(storedPw));


    console.log(userName.value)
    if (userName.value == storedName && userPw.value == storedPw) {
        console.log(userName.value)

        location.replace("/hello");

    } else {
        alert("Error on login");
    }
}