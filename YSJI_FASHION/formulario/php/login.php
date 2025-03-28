<?php
session_start();
include 'conexion.php';

if (isset($_POST['correo']) && isset($_POST['contraseña'])) {
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];

    $sql = "SELECT * FROM usuarios WHERE correo = :correo";
    $query = $connect->prepare($sql);
    $query->bindParam(':correo', $correo, PDO::PARAM_STR);
    $query->execute();

    if ($query->rowCount() > 0) {
        $usuario = $query->fetch(PDO::FETCH_OBJ);

        // Verificar si la contraseña es correcta
        if (password_verify($contraseña, $usuario->contraseña)) {
            // Inicia la sesión
            $_SESSION['usuario'] = $usuario->id;
            $_SESSION['rol'] = $usuario->rol;

            // Si el usuario es administrador se va a consulta
            if ($usuario->rol == 'admin') {
                header("Location: ../../d.php"); 
            } else {
                header("Location: ../../index.html"); 
            }
            exit();
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Correo electrónico no registrado.";
    }
}
?>
