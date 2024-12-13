document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Lista de usuarios válidos con roles
    const validUser = [
        {username: "@vendedor1", password: "soyvendedor1", role: "vendedor"},
        {username: "@administrador1", password: "soyadmi1", role: "administrador"}
    ];

    // Verificar credenciales
    const userfound = validUser.find(user => user.username === username && user.password === password);

    if (userfound) {
        // Almacenar el usuario actual y su rol en localStorage
        localStorage.setItem('currentUser', username);
        localStorage.setItem('userRole', userfound.role);

        // Redirigir según el rol
        if (userfound.role === "vendedor") {
            window.location.href = "menu.html";
        } else if (userfound.role === "administrador") {
            window.location.href = "adminmenu.html";
        }
        alert(`Login successful! Welcome ${username}`);
    } else {
        alert("Invalid username or password. Please try again");
    }
});
