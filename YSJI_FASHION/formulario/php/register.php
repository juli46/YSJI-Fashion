<?php
include('conexion.php');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ysji_crud";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contraseña = password_hash($_POST['contraseña'], PASSWORD_BCRYPT);
    
    $rol = 'usuario';

    $sql = "INSERT INTO usuarios (nombre, correo, contraseña, rol) VALUES ('$nombre', '$correo', '$contraseña', '$rol')";

    if ($conn->query($sql) === TRUE) {
        echo "¡Registro exitoso! Ahora puedes <a href='../prueba_form.html'>iniciar sesión</a>.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
