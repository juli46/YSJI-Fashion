<?php
session_start();
include 'conexion.php';

// Verificacion de que es el admin
if (!isset($_SESSION['usuario']) || $_SESSION['rol'] != 'admin') {
    header("Location: login.php"); // si no es admin redirije al inicio
    exit();
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // se prepara y ejecuta la consulta para eliminar al usuario
    $sql = "DELETE FROM usuarios WHERE id = :id";
    $stmt = $connect->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    if ($stmt->execute()) {
        header("Location: consultar_usuarios.php"); // volvemos a la lista de usuarios después de eliminar
        exit();
    } else {
        echo "Hubo un error al eliminar el usuario.";
    }
} else {
    echo "No se ha especificado el ID del usuario a eliminar.";
}
?>
