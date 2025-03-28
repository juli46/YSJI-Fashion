<?php
session_start();
include 'conexion.php';

if (!isset($_SESSION['usuario']) || $_SESSION['rol'] != 'admin') {
    header("Location: login.php"); 
    exit();
}

$sql = "SELECT * FROM usuarios";
$query = $connect->prepare($sql);
$query->execute();
$usuarios = $query->fetchAll(PDO::FETCH_OBJ);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuarios Registrados</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-5">
        <h1>Usuarios Registrados</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody>
    <?php foreach ($usuarios as $usuario): ?>
        <tr>
            <td><?php echo htmlspecialchars($usuario->id); ?></td>
            <td><?php echo htmlspecialchars($usuario->nombre); ?></td>
            <td><?php echo htmlspecialchars($usuario->correo); ?></td>
            <td><?php echo htmlspecialchars($usuario->rol); ?></td>
            <td>
                <a href="modificar_usuario.php?id=<?php echo $usuario->id; ?>" class="btn btn-success btn-sm">Modificar</a>
                
                <a href="eliminar_usuario.php?id=<?php echo $usuario->id; ?>" class="btn btn-danger btn-sm" onclick="return confirm('¿Estás seguro de que deseas eliminar este usuario?')">Eliminar</a>
            </td>
        </tr>
    <?php endforeach; ?>
</tbody>

        </table>
    </div>
</body>
</html>
