var x = document.getElementById("demo");
var latitude, longitude;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            showPosition(position);
        }, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
}

function sendLocationViaWhatsApp() {
    if (latitude !== undefined && longitude !== undefined) {
        var whatsappURL = `https://api.whatsapp.com/send?phone=+916301211673&text=My location is: Latitude: ${latitude}, Longitude: ${longitude}`;
        window.open(whatsappURL, "_blank");
    } else {
        x.innerHTML = "Location not available. Please click 'Get Location' first.";
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User  denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const description = this.querySelector('.description');
            const isVisible = description.style.display === 'block';

            serviceItems.forEach(i => {
                i.querySelector('.description').style.display = 'none';
            });

            if (!isVisible) {
                description.style.display = 'block';
            }
        });
    });
});

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top smoothly
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Optional: Track clicks on the WhatsApp link
document.querySelector('.whatsapp-chat').addEventListener('click', () => {
    console.log("User clicked on WhatsApp chat link");
    // Add additional functionality here if needed
});