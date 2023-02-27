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


let background = document.getElementById('registerForm');
let colors = ['BlueViolet', 'Coral', 'HotPink','Gold', 'LightSkyBlue', 'MediumSpringGreen', 'Turquoise'];
let index = 0;

function animateBackground() {
  index = (index + 1) % colors.length;
  background.style.backgroundColor = colors[index];
  setTimeout(animateBackground, 1000);
}

animateBackground();

let element = document.getElementById('title1');
element.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 2000, iterations: Infinity });
