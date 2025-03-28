<?php
include '../php/cone.php'; // Conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los datos del formulario
    $codigo_producto = $_POST['codigo_producto'];
    $nombre_producto = $_POST['nombre_producto'];
    $descripcion_producto = $_POST['descripcion_producto'];
    $valor_producto = $_POST['valor_producto'];
    $cantidad_producto = $_POST['cantidad_producto'];
    $categoria_producto = $_POST['categoria_producto'];

    // Preparar la consulta de inserción
    $query = "INSERT INTO productos (codigo_producto, nombre_producto, descripcion_producto, valor_producto, cantidad_producto, categoria_producto) 
              VALUES (?, ?, ?, ?, ?, ?)";

    if ($stmt = $conn->prepare($query)) {
        $stmt->bind_param("ssssss", $codigo_producto, $nombre_producto, $descripcion_producto, $valor_producto, $cantidad_producto, $categoria_producto);

        if ($stmt->execute()) {
            echo json_encode(["success" => "Producto agregado exitosamente"]);
        } else {
            echo json_encode(["error" => "Error al agregar el producto"]);
        }

        $stmt->close();
    } else {
        echo json_encode(["error" => "Error al preparar la consulta"]);
    }
}

$conn->close();
?>
