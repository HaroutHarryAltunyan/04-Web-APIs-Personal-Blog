document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form data
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Redirect to another page with the form data (encoded in the URL as query parameters)
    window.location.href = `landing.html?username=${encodeURIComponent(username)}&title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`;
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form data
    const usernames = document.getElementById('username').value.split(',').map(name => name.trim());
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Save the data to localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    usernames.forEach(function(username) {
        users.push({ username, title, content });
    });
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to the landing page
    window.location.href = 'landing.html';
});


