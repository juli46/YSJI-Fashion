<?php
include '../php/cone.php'; // Incluir conexión a la base de datos

if (isset($_GET['id'])) {
    $id = intval($_GET['id']); // Obtener y asegurar que el ID es un número entero

    $sql = "SELECT * FROM productos WHERE id = ?";
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $producto = $result->fetch_assoc(); // Obtener el producto como un arreglo asociativo
            echo json_encode($producto); // Devolver el producto en formato JSON
        } else {
            echo json_encode(["error" => "Producto no encontrado."]);
        }

        $stmt->close();
    } else {
        echo json_encode(["error" => "Error al preparar la consulta."]);
    }
} else {
    echo json_encode(["error" => "ID no especificado."]);
}

$conn->close();
?>
