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