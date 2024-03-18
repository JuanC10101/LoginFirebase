import { loginValidation } from "../controllers/global.js";

const loginBtn = document.getElementById("loginbtn");
const logoutBtn = document.getElementById("logoutbtn");

async function validar(event) {
    event.preventDefault();

    const email = document.getElementById("edtuser").value;
    const password = document.getElementById("edtpassword").value;

    if (!email || !password) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const verificar = loginValidation(email, password);
    const validacion = await verificar;

    if (validacion != null) {
        alert('Autenticación exitosa: ' + email);
        window.location.href = '../templates/home.html';
    } else {
        alert('Error de autenticación: credenciales incorrectas.');
        console.log('Sesión de ' + email + ' no validada.');
    }
}

function cerrarSesion() {
 
    alert("Sesión cerrada");
    window.location.href = 'index.html';
}

window.addEventListener('DOMContentLoaded', async () => {
    loginBtn.addEventListener('click', validar);
    logoutBtn.addEventListener('click', cerrarSesion);
});
