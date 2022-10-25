const passwordInput = document.querySelector('#password');

// import general inputs
const inputs = [...document.querySelectorAll(`input:not([type="text"])`)];
console.log(inputs);

const passwordCopyBtn = document.querySelector('#copyButton');

const passwordRangeInput = document.querySelector('#passwordRange');
const rangeText = document.querySelector('#passwordLength');

// Password conditions
// COMMENT: Both numbers work - to map out the array from 0 - 9
// COMMENT: const numbers = Array.from(Array(10).keys());
const numbers = Array.from(Array(10)).map((_, i) => String.fromCharCode(i + 48));
console.log(numbers);

const alphabetLowercase = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97));
console.log(alphabetLowercase);

const alphabetUppercase = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65));
console.log(alphabetUppercase);

const specialCharacters = ['@', '#', '$', '%', '^', '&', '*'];

// Copy the password to clipboard
passwordCopyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordInput.value);

  // COMMENT: add the the class 'password-copied' to the copy button => to switch from copy to copied style
  passwordCopyBtn.classList.add('password-copied');

  // COMMENT: use setTimeOut to change from copied to copy
  setTimeout(() => {
    passwordCopyBtn.classList.remove('password-copied');
  }, 2000);
});

const updatePassword = () => {
  // COMMENT: this is getting the length of the password chosen from the range slider bar
  const length = passwordRangeInput.value;
  // COMMENT: the text that is corresponding to the range chosen from the range slider bar
  rangeText.innerHTML = length;

  const checkboxValue = inputs.slice(1).map((input) => input.checked);
  const password = generatePassword(length, ...checkboxValue);
  passwordInput.value = password;
};

// uppdate password after each change
inputs.forEach((input) => input.addEventListener('change', updatePassword));

const generatePassword = (length, hasSymbols, hasNumbers, hasLowercase, hasUppercase) => {
  const passwordPreference = [
    ...(hasSymbols ? specialCharacters : []),
    ...(hasNumbers ? numbers : []),
    ...(hasLowercase ? alphabetLowercase : []),
    ...(hasUppercase ? alphabetUppercase : []),
  ];

  // For when no condition is checked
  if (passwordPreference.length === 0) return '';

  let password = '';

  for (let i = 0; i < length; i++) {
    // randomNumber => returns a random number between 0 - the length of the password
    const randomNumber = Math.floor(Math.random() * passwordPreference.length);

    // password initially = ''
    // password first loop = '' + 'value of the randomIndex 1'
    // password second loop = '' + 'value of the randomIndex 1' + 'value of the randomIndex 2'
    // ....
    password += passwordPreference[randomNumber];
  }

  return password;
};

// FUTURE DEVELOPMENT
// 1. have a checkbox for excluding similar characters
// 2. The rangeText is changing to the range slider bar value while sliding
// 3. Add a button to generate a new password based on current selection
