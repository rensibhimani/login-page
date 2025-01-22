document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      alert('Login successful!');
    } else {
      alert('Please fill out all fields.');
    }
  });
  

//   function handleLogin(event) {
//     event.preventDefault();
//     alert("Login button clicked!");
// }