document.getElementById('login-btn').addEventListener('click', function(e){e.preventDefault();
const username = document.getElementById('username').value.trim();
const password = document.getElementById('password').value.trim();

//credentials
// Valid user
const validUser = [
    {username:"@vendedor1", password:"soyvendedor1"},
    {username:"@administrador1", password:"soyadmi1"}
];

const userfound = validUser.find(user => user.username === username && user.password === password);

//Verifyng credentials
if(userfound) {
    alert(`Login succesful! Welcome ${username}`);
    localStorage.setItem('currentUser', username);
    window.location.href = "menu.html";
}else{
    alert("Invalid username or password. Please try again");
}
});
