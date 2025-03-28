CREATE DATABASE ysji_crud;
USE ysji_crud;
CREATE TABLE usuarios (
  id int(11) NOT NULL,
  nombre varchar(255) NOT NULL,
  correo varchar(255) NOT NULL,
  contraseña varchar(255) NOT NULL,
  rol enum('admin','usuario') NOT NULL DEFAULT 'usuario');

INSERT INTO usuarios (id, nombre, correo, contraseña, rol) VALUES
(1, 'Dear', 'dadmin@gmail.com', '$2y$10$/ROxBL7GIC1mNkSQ7HVyQePKnrdghovKmvHKRkz5XtWuo8HNoDnbe', 'admin'),
(3, 'jose', 'joseg@gmail.com', '$2y$10$fl02MbPMXtVLRemUZvwE0OiVJgwyRDZlK2zMbS0c3VH2hHzl/jNGe', 'usuario'),
(4, 'juliana', 'juliyepes08@gmail.com', '$2y$10$2JabNi04H6rQi2uUdU4J2OTvHhwnoR8FuY2SBu2uZOD1r5Nm9AvJi', 'usuario');

