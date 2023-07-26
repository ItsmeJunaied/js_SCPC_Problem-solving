function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=[]{}|:;"<>,.?/';
  
    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  }
  
  const passwordLength = 12; // You can change this to your desired password length
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  