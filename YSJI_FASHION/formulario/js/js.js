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
        function mostrarContraseñas() {
            var password = document.getElementById("registerContraseña");
            var confirmarPassword = document.getElementById("registerConfirmarContraseña");
            var checkBox = document.getElementById("mostrarContraseña");
        
            if (checkBox.checked == true) {
                password.type = "text";
                confirmarPassword.type = "text";
            } else {
                password.type = "password";
                confirmarPassword.type = "password";
            }
        }
        
        function validarRegistro() {
            // Obtener los elementos del formulario
            const nombre = document.getElementById("registerNombre").value.trim();
            const correo = document.getElementById("registerCorreo").value.trim();
            const contraseña = document.getElementById("registerContraseña").value;
            const confirmarContraseña = document.getElementById("registerConfirmarContraseña").value;
        
            // Mensajes de error
            const errorNombre = document.getElementById("errorNombre");
            const errorCorreo = document.getElementById("errorCorreo");
            const errorContraseña = document.getElementById("errorContraseña");
            const errorConfirmarContraseña = document.getElementById("errorConfirmarContraseña");
        
            // Limpiar mensajes previos
            errorNombre.innerHTML = '';
            errorCorreo.innerHTML = '';
            errorContraseña.innerHTML = '';
            errorConfirmarContraseña.innerHTML = '';
        
            // Expresiones regulares
            const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
            const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
            let valid = true;
        
            // Validación de Nombre
            if (nombre === '') {
                errorNombre.innerHTML = 'Por favor, ingrese su nombre.';
                valid = false;
            } else if (!nombreRegex.test(nombre)) {
                errorNombre.innerHTML = 'Nombre no válido. Solo se permiten letras.';
                valid = false;
            }
        
            // Validación de Correo Electrónico
            if (correo === '') {
                errorCorreo.innerHTML = 'Por favor, ingrese un correo electrónico.';
                valid = false;
            } else if (!correoRegex.test(correo)) {
                errorCorreo.innerHTML = 'Correo electrónico no válido.';
                valid = false;
            }
        
            // Validación de Contraseña
            if (contraseña === '') {
                errorContraseña.innerHTML = 'Por favor, ingrese una contraseña.';
                valid = false;
            } else if (!contraseñaRegex.test(contraseña)) {
                errorContraseña.innerHTML = 'Contraseña no válida. Debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y caracteres especiales.';
                valid = false;
            }
        
            // Validación de Confirmar Contraseña
            if (confirmarContraseña === '') {
                errorConfirmarContraseña.innerHTML = 'Por favor, confirme su contraseña.';
                valid = false;
            } else if (confirmarContraseña !== contraseña) {
                errorConfirmarContraseña.innerHTML = 'Las contraseñas no coinciden.';
                valid = false;
            }
        
            return valid;
        }
        
        
        