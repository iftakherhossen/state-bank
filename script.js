// Index JS Start
document.getElementById('login-btn').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value;

    // checking email & password
    if (userEmail == 0 || userPassword == 0) {
        document.getElementById('invalid').innerText = 'Invalid! Please type your Email & Password!';

        // for making empty
        userEmail.value = '';
        userPassword.value = '';
    }
    else if (userEmail == 'iftakher.one@gmail.com' && userPassword == 'refat@708') {
        window.location.href = 'home.html';
    }
    else {
        document.getElementById('invalid').innerText = 'Invalid! Please try again with correct information!';

        // for making empty
        userEmail.value = '';
        userPassword.value = '';
    }
})
// Index JS End