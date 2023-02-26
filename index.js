const Fields = {
    email: email,
    password: password
  };
const requirements = {
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
  password: /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,}$/
  
};
function validateForm(){
  
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  const isValidEmail = requirements.email.test(email);
  const isValidPassword = requirements.password.test(password);
  
  if (!isValidEmail) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (!isValidPassword) {
    alert('Please enter a valid password. Your password must be at least 8 characters long and contain at least one letter and one number.');
    return false;
  } 
  return true;
}


