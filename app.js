document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //vuln to SQL Injection
    if (username === 'admin' && password === 'password') {
        alert('Login successful! Welcome, admin.');
    } else {
        alert('Login failed.');
    }
});
