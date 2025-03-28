<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="../css/boar.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="./css/st.css">
    <link rel="stylesheet" href="./css/s.css">
</head>
<body>

        <div class="menu">
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon>
        </div>

    <div class="barra-lateral ">
       <div>
       <div class="nombre-pagina">
        <ion-icon id="cloud" name="cloud-outline"></ion-icon>
        
        <span>YSJI FASHION</span>
        </div>
       </div>

        <nav class="navegacion">
            <ul>
                <li>
                    <a  href="../d.php">
                    <ion-icon name="grid-outline"></ion-icon>
                    <span>Dasboard</span>
                    </a>
                </li>
                <li>
                    <a  id="inbox" href="../agg.html">
                    <ion-icon name="shirt-outline"></ion-icon>
                    <span>Productos</span>
                    </a>
                </li>
                <li>
                    <a href="../partesdash/pedidos.php">
                    <ion-icon name="receipt-outline"></ion-icon>
                    <span>Pedidos</span>
                    </a>
                </li>
                <li>
                    <a href="formulario/php/consultar_usuarios.php">
                    <ion-icon name="person-outline"></ion-icon>
                    <span>Usuarios</span>
                    </a>
                </li>
                <li>
                    <a href="formulario/prueba_form.html">
                    <ion-icon name="log-out-outline"></ion-icon>
                    <span>Salir</span>
                    </a>
                </li>
            </ul>
        </nav>

       <div>
       <div class="linea"></div>

<div class="modo-oscuro">
    <div class="info">
    <ion-icon name="moon-outline"></ion-icon>
    <span>Modo Oscuro</span>
    </div>
    <div class="switch">
        <div class="base">
            <div class="circulo">

            </div>
        </div>
    </div>
</div>


    <div class="usuario">
        <img src="../images/images.jpg" alt="">
        <div class="info-usuario">
            <div class="nombre-email">
                <span class="nombre">Yuli</span>
                <span class="email">Yulivelez01@gmail.com</span>

            </div>
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
    </div>
       </div>

    </div>

    <main>
    
    
   
    <div class="productos-formulario">
    <div class="container">
        <h2>Registrar Productos</h2>
        <button class="add-button" onclick="toggleMenu(true)">Agregar +</button>
        <div class="overlay" id="overlay"></div>
        <div class="menu" id="addMenu">
            <form id="productForm" onsubmit="return guardarFormulario()">
                <div class="split">
                <div class="form-group">
                    <label for="codigoProducto">Código</label>
                    <input type="text" id="codigoProducto" placeholder="Código del Producto" required>
                    <div class="error-message" id="codigoError"></div>
                </div>
                <div class="form-group">
                    <label for="nombreProducto">Nombre</label>
                    <input type="text" id="nombreProducto" placeholder="Nombre del Producto" required>
                    <div class="error-message" id="nombreError"></div>
                </div>
                <div class="form-group">
                    <label for="descripcionProducto">Descripción</label>
                    <input type="text" id="descripcionProducto" placeholder="Descripción" required>
                    <div class="error-message" id="descripcionError"></div>
                </div>
                </div>
                <div class="split">
                <div class="form-group">
                    <label for="valorProducto">Valor</label>
                    <input type="number" id="valorProducto" placeholder="Valor" required min="1">
                    <div class="error-message" id="valorError"></div>
                </div>
                <div class="form-group">
                    <label for="cantidadProducto">Cantidad</label>
                    <input type="number" id="cantidadProducto" placeholder="Cantidad" required min="1">
                    <div class="error-message" id="cantidadError"></div>
                </div>
                <div class="form-group">
                    <label for="categoriaProducto">Categoría</label>
                    <select id="categoriaProducto" required>
                        <option value="">Seleccione</option>
                        <option value="bolso">Bolso</option>
                        <option value="accesorio">Accesorio</option>
                        <option value="ropa">Ropa</option>
                    </select>
                    <div class="error-message" id="categoriaError"></div>
                </div>
                <input type="hidden" id="id">
                <div class="button-group">
                    <button type="submit" class="submit-button">Guardar</button>
                    <button type="button" class="cancel-button" onclick="toggleMenu(false)">Cancelar</button>
                </div>
            </form>
            </div>

            <form id="form-editar" style="display:none;">
                <input type="hidden" id="id-editar" name="id"> <!-- Campo oculto para el ID del producto -->
                
                <label for="codigoProducto-editar">Código:</label>
                <input type="text" id="codigoProducto-editar" name="codigoProducto" required>
                
                <label for="nombreProducto-editar">Nombre:</label>
                <input type="text" id="nombreProducto-editar" name="nombreProducto" required>
                
                <label for="descripcionProducto-editar">Descripción:</label>
                <input type="text" id="descripcionProducto-editar" name="descripcionProducto" required>
                
                <label for="valorProducto-editar">Valor:</label>
                <input type="text" id="valorProducto-editar" name="valorProducto" required>
                
                <label for="cantidadProducto-editar">Cantidad:</label>
                <input type="text" id="cantidadProducto-editar" name="cantidadProducto" required>
                
                <label for="categoriaProducto-editar">Categoría:</label>
                <input type="text" id="categoriaProducto-editar" name="categoriaProducto" required>
                
                <button type="submit">Guardar cambios</button>
                <button type="button" id="cancelarEdicion" onclick="cancelarEdicion()">Cancelar</button>
            </form>
        </div>

        <h3>Productos Registrados</h3>
        <div id="productosTabla"></div> <!-- Aquí se cargará la tabla de productos -->
    </div>
</div>



    <script src="./js/script.js"></script>


   
    </main>


    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="../js/das.js"></script>
</body>
</html>