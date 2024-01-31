const pwdBtn = document.querySelector('#pwd');
const repeatBtn = document.querySelector('#repeat');
const passwordBtns = document.querySelectorAll('.passwordbtn');

passwordBtns.forEach((button) => {
    button.addEventListener('change', () => {
        if (pwdBtn.value !== repeatBtn.value) {
            pwdBtn.setCustomValidity('Passwords do not match');
            repeatBtn.setCustomValidity('Passwords do not match');
        } else {
            pwdBtn.setCustomValidity('');
            repeatBtn.setCustomValidity('');
        }
    });
});
