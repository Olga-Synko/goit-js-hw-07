const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
        alert('All form fields must be filled in');
    }
    else {
        const formData = {
            email,
            password
        };

        console.log(formData);
        form.reset();
    }
});

//!!!!!!! Попрактикуватися із методом ForEach. 
// const formData = {};
// form.elements.forEach(input => {
//     if (input.type !== 'button' && input.type !== 'submit') {
//         formData[input.name] = input.value.trim();
//     }
// });
// console.log(formData);
// ```