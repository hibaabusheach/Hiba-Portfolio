let nav = document.querySelector(".navbar");
 
function toggle() {
    if (nav.className === 'navbar') {
        nav.className += ' responsive';
    } else {
        nav.className = 'navbar';
    }
}

const myForm = document.getElementById('my-form');
let msgFullNameAlert = document.getElementById('msgFullNameAlert');
let msgEmailAlert = document.getElementById('msgEmailAlert');
let msgPhoneAlert = document.getElementById('msgPhoneAlert');


const nameRegex = /^[a-zA-Z]{3,25}\s$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^[0-9]{10}$/;

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = myForm.elements['fullname'];
    const emailInput = myForm.elements['email'];
    const phoneInput = myForm.elements['phone'];
    const submitBtn = myForm.elements['submit-btn'];

    let isValid = true;

    if (!nameRegex.test(nameInput.value)) {
        msgFullNameAlert.innerText += 'עליך להקליד שם בעל 3 אותיות לפחות בלי רווחים';
        nameInput.style.borderBottomColor = "red";
        isValid = false;
    } else {
        nameInput.style.borderBottomColor = "green";
        msgFullNameAlert.innerText = '';
    }

    if (!emailRegex.test(emailInput.value)) {
        msgEmailAlert.innerText += 'עליך להקליד כתובת אימייל תקינה';
        emailInput.style.borderBottomColor = "red";
        isValid = false;
    } else {
        emailInput.style.borderBottomColor = "green";
        msgEmailAlert.innerText = '';
    } 

    if (!phoneRegex.test(phoneInput.value)) {
        msgPhoneAlert.innerText += 'עליך להקליד מספר טלפון תקין';
        phoneInput.style.borderBottomColor = "red";
        isValid = false;
    } else {
        phoneInput.style.borderBottomColor = "green";
        msgPhoneAlert.innerText = '';
    }

    submitBtn.disabled = !isValid;
    if (isValid) {
        // Continue with form submission or further processing
        alert("Has been sent successfully");
        myForm.submit();
    } else {
        // Handle the case when the button is disabled
        alert("Please fill in all the required fields correctly.");
        submitBtn.disabled = isValid;
  };
});




// // Get form elements DOM
// const form = document.getElementById('form')
// const fullNameInput = document.getElementById('fullName');
// const emailInput = document.getElementById('email');
// const phoneInput = document.getElementById('phone');
// const messageInput = document.getElementById('message');
// const submitButton = document.getElementById('submit');

// // Regex patterns for validation
// const formRegex = /^[]/
// const fullNameRegex = /^[\u0590-\u05FF\s]+$/; // Hebrew letters and spaces only
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
// const phoneRegex = /^\d{10,}$/; // At least 10 digits
// const messageRegex = /^\d{3,200}$/; //min 3 characters max 200 characters

// // Handle form submission//eventListener
// submitButton.addEventListener('click', (event) => {
//   event.preventDefault();

//     // Validate form fields
//     const fullName = fullnameInput.value.trim();
//     const email = emailInput.value.trim();
//     const phone = phoneInput.value.trim();
//     const message = messageInput.value.trim();

//     if (!nameRegex.test(fullName)) {
//         alert('Please enter a valid name.');
//         return;
//     }

//     if (!emailRegex.test(email)) {
//         alert('Please enter a valid email address.');
//         return;
//     }

//     if (!phoneRegex.test(phone)) {
//         alert('Please enter a valid phone number.');
//         return;
//     }

//   // Form is valid, proceed with form submission
//   const mailtoLink = `mailto:example@example.com?subject=Contact Form Submission&body=${encodeURIComponent(message)}`;
//   window.location.href = mailtoLink;
// });

