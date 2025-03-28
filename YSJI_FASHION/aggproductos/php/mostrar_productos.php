<?php
include '../php/cone.php'; // Incluir conexión a la base de datos

// Consultar los productos
$sql = "SELECT * FROM productos";
$result = $conn->query($sql);

// Mostrar los productos en una tabla
if ($result->num_rows > 0) {
    echo "<table border='1'>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Valor</th>
                    <th>Cantidad</th>
                    <th>Categoría</th>
                    <th>Acciones</th> <!-- Añadir una columna para las acciones -->
                </tr>
            </thead>
            <tbody>";
    
    // Iterar sobre los resultados y mostrarlos en la tabla
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["codigo_producto"] . "</td>
                <td>" . $row["nombre_producto"] . "</td>
                <td>" . $row["descripcion_producto"] . "</td>
                <td>" . $row["valor_producto"] . "</td>
                <td>" . $row["cantidad_producto"] . "</td>
                <td>" . $row["categoria_producto"] . "</td>
                <td>
                     <!-- Botones de Editar y Eliminar dentro de una celda -->
                 <button onclick=\"editarProducto('" . htmlspecialchars($row['id'], ENT_QUOTES, 'UTF-8') . "')\">Editar</button>
            
                    <button onclick=\"eliminarProducto(" . $row['id'] . ")\">Eliminar</button>
                </td>
              </tr>";
    }
    
    echo "</tbody></table>";
} else {
    echo "No hay productos registrados.";
}

$conn->close();
?>
