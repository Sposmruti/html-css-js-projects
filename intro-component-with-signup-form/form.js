document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    function showError(input, message, icon, errorMsg) {
        input.style.borderColor = 'hsl(0, 100%, 74%)';
        input.style.color = 'hsl(0, 100%, 74%)';
        icon.style.display = 'inline';
        errorMsg.textContent = message;
        errorMsg.style.display = 'flex';
    }

    function removeError(input, icon, errorMsg) {
        input.style.borderColor = 'hsl(246, 25%, 93%)';
        input.style.color = 'hsl(248, 32%, 30%)';
        icon.style.display = 'none';
        errorMsg.style.display = 'none';
    }

    function showFocus(input) {
        input.style.borderColor = 'hsl(249, 10%, 26%)';
        input.style.borderBottomColor = 'hsl(248, 32%, 70%)';
        input.style.color = 'hsl(248, 32%, 30%)';
        input.style.outline = 'none';
        
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    function validateInput(input, icon, errorMsg, validateFn = null, errorMessage = '') {
        const value = input.value.trim();
        if (!value || (validateFn && !validateFn(value))) {
            showError(input, errorMessage, icon, errorMsg);
            return false;
        } else {
            removeError(input, icon, errorMsg);
            return true;
        }
    }

    
    [firstName, lastName, email, password].forEach(input => {
        input.addEventListener('focus', () => {
            showFocus(input);
        });

        input.addEventListener('blur', () => {
            const icon = document.getElementById(`${input.id}Icon`);
            const errorMsg = document.getElementById(`${input.id}Error`);
            if (!input.value.trim()) {
                showError(input, `${input.placeholder} cannot be empty`, icon, errorMsg);
            } else if (input === email && !validateEmail(input.value.trim())) {
                showError(input, 'Looks like this is not an email', icon, errorMsg);
            } else {
                removeError(input, icon, errorMsg);
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstNameValid = validateInput(firstName, document.getElementById('firstNameIcon'), document.getElementById('firstNameError'), null, 'First Name cannot be empty');
        const lastNameValid = validateInput(lastName, document.getElementById('lastNameIcon'), document.getElementById('lastNameError'), null, 'Last Name cannot be empty');
        const emailValid = validateInput(email, document.getElementById('emailIcon'), document.getElementById('emailError'), validateEmail, 'Looks like this is not an email');
        const passwordValid = validateInput(password, document.getElementById('passwordIcon'), document.getElementById('passwordError'), null, 'Password cannot be empty');

        if (firstNameValid && lastNameValid && emailValid && passwordValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});
