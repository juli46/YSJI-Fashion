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

    // datos actuales del usuario
    $sql = "SELECT * FROM usuarios WHERE id = :id";
    $stmt = $connect->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    // usuario existe
    if (!$usuario) {
        echo "Usuario no encontrado.";
        exit();
    }

    if (isset($_POST['modificar'])) {
        $nombre = $_POST['nombre'];
        $correo = $_POST['correo'];
        $rol = $_POST['rol'];

    // se prepara y ejecuta la consulta para modificar el usuario
        $sql = "UPDATE usuarios SET nombre = :nombre, correo = :correo, rol = :rol WHERE id = :id";
        $stmt = $connect->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':rol', $rol);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);

        if ($stmt->execute()) {
            header("Location: consultar_usuarios.php"); // volvemos a la lista de usuarios después de modificar
            exit();
        } else {
            echo "Hubo un error al modificar el usuario.";
        }
    }
} else {
    echo "No se ha especificado el ID del usuario.";
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar Usuario</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>Modificar Usuario</h1>
        <form action="modificar_usuario.php?id=<?php echo $usuario['id']; ?>" method="POST">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre" value="<?php echo htmlspecialchars($usuario['nombre']); ?>" required>
            </div>
            <div class="mb-3">
                <label for="correo" class="form-label">Correo</label>
                <input type="email" class="form-control" id="correo" name="correo" value="<?php echo htmlspecialchars($usuario['correo']); ?>" required>
            </div>
            <div class="mb-3">
                <label for="rol" class="form-label">Rol</label>
                <select class="form-control" id="rol" name="rol" required>
                    <option value="admin" <?php echo $usuario['rol'] == 'admin' ? 'selected' : ''; ?>>Administrador</option>
                    <option value="usuario" <?php echo $usuario['rol'] == 'usuario' ? 'selected' : ''; ?>>Usuario</option>
                </select>
            </div>
            <button type="submit" name="modificar" class="btn btn-primary">Modificar</button>
        </form>
    </div>
</body>
</html>
