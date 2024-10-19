function validateForm(event) {
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const message = document.getElementById('error-message');

    if (!username || !password) {
        event.preventDefault();
        message.textContent = 'Username and password required';
    } else {
        message.textContent = '';
    }
}