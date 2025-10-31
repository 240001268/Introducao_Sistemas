function checkUsername () {

    let username = document.getElementById("username");
    let msg = document.getElementById("feedback");

    if (username == '' || username.value.length < 5) {
        msg.innerText = "Não cumpre os requisitos mínimos.";
    } else {
        msg.innerText = '';
    }
}

// DOM Event handler
let username = document.getElementById("username");
username.onblur = checkUsername;

// Event listener
username.addEventListener('onblur', checkUsername)

function checkUsername (minChars) {

    let username = document.getElementById("username");
    let msg = document.getElementById("feedback");

    if (username == '' || username.value.length < 5) {
        msg.innerText = "Não cumpre os requisitos mínimos.";
    } else {
        msg.innerText = '';
    }
}

//username.addEventListener('onblur', checkUsername(5));


username.addEventListener('onblur', function() {
    checkUsername(5);
});