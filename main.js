// probando codigo de chat 

// Pide al usuario la longitud deseada para la contraseña
const passwordLength = parseInt(prompt('How many characters would you like your new password to be?'));

// Definir los caracteres posibles para la contraseña
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Variable para almacenar la contraseña generada
var newPassword = '';

// Generar la contraseña usando un ciclo for
for (let i = 0; i < passwordLength; i++) {
    // Generar un índice aleatorio para seleccionar un carácter de la lista
    const randomIndex = Math.floor(Math.random() * characters.length);
    
    // Agregar el carácter seleccionado a la contraseña
    newPassword += characters.charAt(randomIndex);
// Escribe la contraseña en la pagina
}

// Imprimir la contraseña generada
console.log('Your new password is:', newPassword);
document.write('Your new password is: ', newPassword);

// Ejemplo de uso