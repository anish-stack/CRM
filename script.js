// script.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // You can now make an AJAX request to your backend to handle the login logic.
        fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Login successful', data);
                localStorage.setItem('token',data.token)
                localStorage.setItem('email',data.user.email)
                localStorage.setItem('id',data.user._id) // Corrected this line
                setTimeout((
                    window.location.href="home.html"
                ))
            } else {
                // Display an error message to the user.
                console.log('Login failed:', data.message); // You can log the error message here
            }
        })
        .catch(error => {
            console.log(error);
        });
    });
});


// show time
const time = document.getElementById('time');

function updateTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    time.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the time immediately
updateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);


