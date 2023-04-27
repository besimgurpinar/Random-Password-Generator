const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const passwordField = document.getElementById('password');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

// Generate password
function generatePassword(length, uppercase, lowercase, numbers, symbols) {
  let chars = '';
  let password = '';
  
  if (uppercase) {
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (lowercase) {
    chars += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (numbers) {
    chars += '0123456789';
  }
  if (symbols) {
    chars += '!@#$%^&*()_-+='; 
  }
  
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  
  return password;
}

// Generate and display password
function generateAndDisplayPassword() {
  let length = document.getElementById('password-length').value;
  let uppercase = uppercaseEl.checked;
  let lowercase = lowercaseEl.checked;
  let numbers = numbersEl.checked;
  let symbols = symbolsEl.checked;
  let password = generatePassword(length, uppercase, lowercase, numbers, symbols);
  
  passwordField.value = password;
}

// Copy password to clipboard
function copyToClipboard() {
  passwordField.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}

// Event listeners
generateBtn.addEventListener('click', generateAndDisplayPassword);
copyBtn.addEventListener('click', copyToClipboard);
