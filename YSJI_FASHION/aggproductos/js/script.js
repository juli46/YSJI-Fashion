function toggleMenu(resetForm = false) {
    const menu = document.getElementById('addMenu');
    const overlay = document.getElementById('overlay');
    const form = document.getElementById('productForm');
    const isMenuVisible = menu.classList.contains('show');

    if (isMenuVisible) {
        if (resetForm) form.reset();
        menu.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    } else {
        form.reset();
        menu.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function guardarFormulario() {
    let valid = true;

    // Validación del código del producto
    const codigoProducto = document.getElementById("codigoProducto").value.trim();
    const regexCodigo = /^[A-Z0-9]+$/; // Solo letras mayúsculas y números
    if (!regexCodigo.test(codigoProducto)) {
        Swal.fire("Error", "El código debe contener solo letras mayúsculas y números sin espacios.", "error");
        valid = false;
    }

    // Validación del nombre del producto
    const nombreProducto = document.getElementById("nombreProducto").value.trim();
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
    if (!regexNombre.test(nombreProducto)) {
        Swal.fire("Error", "El nombre solo puede contener letras y espacios.", "error");
        valid = false;
    }

    // Validación de la descripción del producto
    const descripcionProducto = document.getElementById("descripcionProducto").value.trim();
    if (!regexNombre.test(descripcionProducto)) {
        Swal.fire("Error", "La descripción solo puede contener letras y espacios.", "error");
        valid = false;
    }

    // Validación del valor del producto
    const valorProducto = document.getElementById("valorProducto").value.trim();
    if (!/^\d+(\.\d{1,2})?$/.test(valorProducto) || parseFloat(valorProducto) <= 0) {
        Swal.fire("Error", "El valor debe ser un número positivo.", "error");
        valid = false;
    }

    // Validación de la cantidad del producto
    const cantidadProducto = document.getElementById("cantidadProducto").value.trim();
    if (!/^\d+$/.test(cantidadProducto) || parseInt(cantidadProducto) <= 0) {
        Swal.fire("Error", "La cantidad debe ser un número entero positivo.", "error");
        valid = false;
    }

    // Validación de la categoría del producto
    const categoriaProducto = document.getElementById("categoriaProducto").value.trim();
    if (!categoriaProducto) {
        Swal.fire("Error", "Debe seleccionar una categoría.", "error");
        valid = false;
    }

    // Si todo es válido, se envían los datos
    if (valid) {
        const formData = new FormData();
        formData.append("codigo_producto", codigoProducto);
        formData.append("nombre_producto", nombreProducto);
        formData.append("descripcion_producto", descripcionProducto);
        formData.append("valor_producto", valorProducto);
        formData.append("cantidad_producto", cantidadProducto);
        formData.append("categoria_producto", categoriaProducto);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "./php/insertar_producto.php", true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                cargarProductos(); // Recargar la tabla
                toggleMenu(true); // Cerrar el formulario
                Swal.fire("Producto Agregado", "", "success");
            }
        };
        xhr.send(formData);

        return false; // Evita el envío del formulario
    }

    return false;
}

// Función para cargar los productos en la tabla
function cargarProductos() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./php/mostrar_productos.php", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById("productosTabla").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Llamar a cargar productos al inicio
window.onload = cargarProductos;




function eliminarProducto(id) {
    // Confirmación antes de eliminar
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esta acción.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
    }).then((result) => {
        if (result.isConfirmed) {
            // Hacer una petición AJAX para eliminar el producto por ID
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "./php/eliminar_producto.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onload = function() {
                if (xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.success) {
                        Swal.fire('Eliminado!', 'El producto ha sido eliminado.', 'success');
                        // Recargar la lista de productos después de eliminar
                        cargarProductos();
                    } else {
                        Swal.fire('Error', 'Hubo un problema al eliminar el producto.', 'error');
                    }
                }
            };     
            xhr.send("id=" + id); // Enviar el ID del producto para eliminar
        }
    });
}




function editarProducto(idProducto) {
    // Hacer la solicitud para obtener los detalles del producto
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/obtener_producto.php?id=" + idProducto, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var producto = JSON.parse(xhr.responseText);
            console.log(producto); // Para verificar que los datos son correctos
            
            // Llenar los campos del formulario con los valores del producto
            document.getElementById('id-editar').value = producto.id;
            document.getElementById('codigoProducto-editar').value = producto.codigo_producto;
            document.getElementById('nombreProducto-editar').value = producto.nombre_producto;
            document.getElementById('descripcionProducto-editar').value = producto.descripcion_producto;
            document.getElementById('valorProducto-editar').value = producto.valor_producto;
            document.getElementById('cantidadProducto-editar').value = producto.cantidad_producto;
            document.getElementById('categoriaProducto-editar').value = producto.categoria_producto;
            
            // Ocultar el formulario de agregar y mostrar el de edición
            document.getElementById('form-agregar').style.display = 'none';  // Ocultar formulario de agregar
            document.getElementById('form-editar').style.display = 'block'; // Mostrar formulario de edición
        }
    };
    xhr.send();
}

function editarFormulario(id) {
    // Obtenemos los valores de los campos del formulario
    const codigoProducto = document.getElementById("codigoProducto").value;
    const nombreProducto = document.getElementById("nombreProducto").value;
    const descripcionProducto = document.getElementById("descripcionProducto").value;
    const valorProducto = document.getElementById("valorProducto").value;
    const cantidadProducto = document.getElementById("cantidadProducto").value;
    const categoriaProducto = document.getElementById("categoriaProducto").value;

    // Hacemos la solicitud AJAX para actualizar el producto
    const xhr = new XMLHttpRequest();
    xhr.open("POST", ".../php/actualizar_producto.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        if (xhr.status === 200) {
            const respuesta = JSON.parse(xhr.responseText);
            if (respuesta.success) {
                Swal.fire("¡Éxito!", "Producto actualizado correctamente", "success");
                location.reload();  // Recarga la página para reflejar los cambios
            } else {
                Swal.fire("Error", respuesta.error, "error");
            }
        }
    };

    // Enviamos los datos del formulario como parámetros POST
    xhr.send("id=" + id + "&codigoProducto=" + encodeURIComponent(codigoProducto) +
        "&nombreProducto=" + encodeURIComponent(nombreProducto) +
        "&descripcionProducto=" + encodeURIComponent(descripcionProducto) +
        "&valorProducto=" + encodeURIComponent(valorProducto) +
        "&cantidadProducto=" + encodeURIComponent(cantidadProducto) +
        "&categoriaProducto=" + encodeURIComponent(categoriaProducto));

    return false;  // Evita el comportamiento por defecto del formulario
}




