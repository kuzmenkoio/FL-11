'use strict';

let email = prompt('Please, enter your e-mail');
let Pass = '';
let result = null;
let minPassLenght = 6;

if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < minPassLenght) {
    alert('I don\'t know any emails having name length less than 6 symbols')
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    Pass = prompt('Please, enter Pass')
} else {
    alert('I don’t know you');
}

let userPass = 'UserPass';
let adminPass = 'AdminPass';
let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let userData = email === userEmail && Pass === userPass;
let adminData = email === adminEmail && Pass === adminPass

if (Pass === '' || Pass === null) {
    alert('Canceled');
} else if (!userData && !adminData) {
    alert('Wrong Pass');
}

let oldPass;
let newPass;
let newMinPassLength = 5;
if (userData || adminData) {
    if (confirm('Do you want to change your Pass?')) {
        oldPass = prompt('Please, enter your old Pass');
        if (oldPass === userPass && userData || oldPass === adminPass && adminData) {
            newPass = prompt('Please, enter your new Pass');
            if (newPass.length < newMinPassLength) {
                alert('It’s too short password. Sorry.');
            } else {
                if (prompt('Please, repeat your new Pass') === newPass) {
                    alert('You have successfully changed your Pass.');
                    if (userData) {
                        userPass = newPass;
                    }
                    if (adminData) {
                        adminPass = newPass;
                    }
                } else {
                    alert('You wrote the wrong Pass.');
                }
            }
        } else {
            alert('Wrong Pass');
        }
    } else {
        alert('You have failed the change');
    }
}