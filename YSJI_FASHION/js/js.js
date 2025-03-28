const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
    // Función de validación para el formulario de registro
function validarRegistro() {
    var nombre = document.getElementById("registerNombre").value;
    var correo = document.getElementById("registerCorreo").value;
    var contraseña = document.getElementById("registerContraseña").value;
    var confirmarContraseña = document.getElementById("registerConfirmarContraseña").value;

    var esValido = true;

    // Validación de nombre
    if (nombre === "") {
        document.getElementById("errorNombre").innerText = "Campo obligatorio";
        esValido = false;
    } else if (!/^[a-zA-Z]+$/.test(nombre)) {
        document.getElementById("errorNombre").innerText = "Ingrese solo letras";
        esValido = false;
    } else {
        document.getElementById("errorNombre").innerText = "";
    }

    // Validación de correo
    if (correo === "") {
        document.getElementById("errorCorreo").innerText = "Campo obligatorio";
        esValido = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)) {
        document.getElementById("errorCorreo").innerText = "Formato inválido";
        esValido = false;
    } else {
        document.getElementById("errorCorreo").innerText = "";
    }

    // Validación de contraseña
    if (contraseña === "") {
        document.getElementById("errorContraseña").innerText = "Campo obligatorio";
        esValido = false;
    } else if (contraseña.length < 8) {
        document.getElementById("errorContraseña").innerText = "La contraseña debe tener como mínimo 8 caracteres";
        esValido = false;
    } else if (!/[a-z]/.test(contraseña)) {
        document.getElementById("errorContraseña").innerText = "La contraseña debe tener como mínimo una letra minúscula";
        esValido = false;
    } else if (!/[A-Z]/.test(contraseña)) {
        document.getElementById("errorContraseña").innerText = "La contraseña debe tener como mínimo una letra mayúscula";
        esValido = false;
    } else if (!/[0-9]/.test(contraseña)) {
        document.getElementById("errorContraseña").innerText = "La contraseña debe tener como mínimo un número";
        esValido = false;
    } else if (!/[^a-zA-Z0-9]/.test(contraseña)) {
        document.getElementById("errorContraseña").innerText = "La contraseña debe tener como mínimo un carácter especial";
        esValido = false;
    } else {
        document.getElementById("errorContraseña").innerText = "";
    }

    // Validación de confirmar contraseña
    if (confirmarContraseña === "") {
        document.getElementById("errorConfirmarContraseña").innerText = "Campo obligatorio";
        esValido = false;
    } else if (contraseña !== confirmarContraseña) {
        document.getElementById("errorConfirmarContraseña").innerText = "Las contraseñas no coinciden";
        esValido = false;
    } else {
        document.getElementById("errorConfirmarContraseña").innerText = "";
    }

    if (esValido) {
        alert("¡Registro exitoso!");
    }
    return esValido;
}

// Función para mostrar/ocultar las contraseñas
function mostrarContraseñas() {
    var contraseña = document.getElementById("registerContraseña");
    var confirmarContraseña = document.getElementById("registerConfirmarContraseña");
    var mostrar = document.getElementById("mostrarContraseña").checked;

    if (mostrar) {
        contraseña.type = "text";
        confirmarContraseña.type = "text";
    } else {
        contraseña.type = "password";
        confirmarContraseña.type = "password";
    }
}

// Función de validación para el formulario de inicio de sesión
function validarLogin() {
    var correo = document.getElementById("loginCorreo").value;
    var contraseña = document.getElementById("loginContraseña").value;

    var esValido = true;

    // Validación de correo
    if (correo === "") {
        document.getElementById("errorLoginCorreo").innerText = "Campo obligatorio";
        esValido = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)) {
        document.getElementById("errorLoginCorreo").innerText = "Formato inválido";
        esValido = false;
    } else {
        document.getElementById("errorLoginCorreo").innerText = "";
    }

    // Validación de contraseña
    if (contraseña === "") {
        document.getElementById("errorLoginContraseña").innerText = "Campo obligatorio";
        esValido = false;
    } else {
        document.getElementById("errorLoginContraseña").innerText = "";
    }

    if (esValido) {
        alert("¡Inicio de sesión exitoso!");
    }
    return esValido;
}
