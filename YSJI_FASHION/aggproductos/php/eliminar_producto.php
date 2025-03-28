<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Include error reporting to see potential issues
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    require '../php/cone.php'; // Your connection file

    // Check for connection errors
    if ($conn->connect_error) {
        die(json_encode([
            "success" => false, 
            "error" => "Connection failed: " . $conn->connect_error
        ]));
    }

    $id = $_POST['id'] ?? ''; // Get product ID

    if ($id !== '') {
        // Prepare the delete statement
        $stmt = $conn->prepare("DELETE FROM productos WHERE id = ?");
        
        if ($stmt === false) {
            // Check if statement preparation failed
            echo json_encode([
                "success" => false, 
                "error" => "Prepare failed: " . $conn->error
            ]);
            exit;
        }

        $stmt->bind_param("i", $id);
        
        // Execute and check the result
        if ($stmt->execute()) {
            // Check if any rows were actually deleted
            if ($stmt->affected_rows > 0) {
                echo json_encode(["success" => true, "deleted_rows" => $stmt->affected_rows]);
            } else {
                echo json_encode([
                    "success" => false, 
                    "error" => "No rows deleted. Check if ID exists."
                ]);
            }
        } else {
            echo json_encode([
                "success" => false, 
                "error" => "Execute failed: " . $stmt->error
            ]);
        }
        
        $stmt->close();
    } else {
        echo json_encode(["success" => false, "error" => "Invalid ID"]);
    }
    
    $conn->close();
}
?>