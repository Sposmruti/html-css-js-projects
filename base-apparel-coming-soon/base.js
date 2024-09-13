const submit = document.querySelector('button');
const input = document.querySelector('input');
const errorIcon = document.querySelector('.icon-error');
const errorMessage = document.querySelector('.error-message');

submit.addEventListener('click' , e => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(input.value)) {
        input.style.borderColor = 'hsla(0, 36%, 70%, 0.521)';
        errorIcon.style.display = 'none';
        errorMessage.style.display = 'none';
        alert('Thank you for subscribing!');
    } else {
        input.style.border = '2px solid hsl(0, 93%, 68%)';
        errorIcon.style.display = 'inline';
        errorMessage.style.display = 'block';
    
    }
})