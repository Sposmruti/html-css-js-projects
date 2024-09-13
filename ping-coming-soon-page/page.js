const input = document.querySelector('input');
const submit = document.querySelector('.submit');
const errorMessage = document.querySelector('.error-message');

submit.addEventListener('click', e => {
    e.preventDefault();

    const valideEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (valideEmail.test(input.value)) {
        input.style.borderColor = 'hsl(0, 0%, 59%)';
        input.style.opacity = '0.5';
        errorMessage.style.display = 'none';
    } else {
        input.style.borderColor = 'hsl(354, 100%, 66%)';
        input.style.opacity = '1';
        errorMessage.style.display = 'block';
    }
});

 