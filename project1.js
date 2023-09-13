let nav = document.querySelector(".navbar");
let menuItem = document.querySelectorAll(".navbar ul a");
let menuLength = menuItem.length;

function toggle() {
    if (nav.className === 'navbar') {
        nav.className += ' responsive';
    } else {
        nav.className = 'navbar';
    }
}

// Function to highlight the active menu item
function highlightActiveMenuItem() {
    // Use location.hash to get the current URL hash --> #gallery
    let currentLocation = location.hash; // 
    for (let i = 0; i < menuLength; i++) {
        let href = menuItem[i].getAttribute("href");
        
        if (href === currentLocation) {
            menuItem[i].classList.add("active");
            console.log(menuItem[i]);
        } else {
            menuItem[i].classList.remove("active");
        }
    }
}

// Call the highlightActiveMenuItem function on page load
document.addEventListener("DOMContentLoaded", highlightActiveMenuItem);

// Add click event listener to each menu item
for (let i = 0; i < menuLength; i++) {
    menuItem[i].addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        let href = this.getAttribute("href");
        location.hash = href; // Change the URL hash
        highlightActiveMenuItem(); // Highlight the active menu item
    });
}


const myForm = document.getElementById('my-form');
let msgFullNameAlert = document.getElementById('msgFullNameAlert');
let msgEmailAlert = document.getElementById('msgEmailAlert');
let msgPhoneAlert = document.getElementById('msgPhoneAlert');


const nameRegex = /^[A-Za-z'-]+(?: [A-Za-z'-]+)*$/;
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
        msgFullNameAlert.textContent = '';
    }

    if (!emailRegex.test(emailInput.value)) {
        msgEmailAlert.innerText += 'עליך להקליד כתובת אימייל תקינה';
        emailInput.style.borderBottomColor = "red";
        isValid = false;
    } else {
        emailInput.style.borderBottomColor = "green";
        msgEmailAlert.textContent = '';
    } 

    if (!phoneRegex.test(phoneInput.value)) {
        msgPhoneAlert.innerText += 'עליך להקליד מספר טלפון תקין';
        phoneInput.style.borderBottomColor = "red";
        isValid = false;
    } else {
        phoneInput.style.borderBottomColor = "green";
        msgPhoneAlert.textContent = '';
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
