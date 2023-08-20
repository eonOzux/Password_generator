function generate(){
// Ask the user the length of the password.
const passwordLength = parseInt(prompt('How many characters would you like your new password to be?'));

// Define the possible characters in the password.
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Password variable.
var newPassword = '';

// Generate the password with a for cicle.
for (let i = 0; i < passwordLength; i++) {
    // Generar un índice aleatorio para seleccionar un carácter de la lista
    const randomIndex = Math.floor(Math.random() * characters.length);
    
    // Add the selected characters to the variable
    newPassword += characters.charAt(randomIndex);

}

// Write the password in the document
document.write('Your new password is: ', newPassword);
};
