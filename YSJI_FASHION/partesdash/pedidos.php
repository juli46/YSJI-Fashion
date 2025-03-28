<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="../css/boar.css">
    <link rel="stylesheet" href="../css/tablapedidos.css">
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
                    <a href="../aggproductos/agg.php">
                    <ion-icon name="shirt-outline"></ion-icon>
                    <span>Productos</span>
                    </a>
                </li>
                <li>
                    <a id="inbox" href="pedidos.php">
                    <ion-icon name="receipt-outline"></ion-icon>
                    <span>Pedidos</span>
                    </a>
                </li>
                <li>
                    <a href="../formulario/php/consultar_usuarios.php">
                    <ion-icon name="person-outline"></ion-icon>
                    <span>Usuarios</span>
                    </a>
                </li>
                <li>
                    <a href="../formulario/prueba_form.html">
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
        <img src="images/images.jpg" alt="">
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
    
    
    <h1 style="text-align: center;">Lista de Pedidos</h1>
    <table>
        <thead>
            <tr>
                <th>Código del Producto</th>
                <th>Nombre del Producto</th>
                <th>Cantidad</th>
                <th>Nombre del Cliente</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1001</td>
                <td>Bolso Negro</td>
                <td>2</td>
                <td>Laura Gómez</td>
                <td>Pendiente</td>
            </tr>
            <tr>
                <td>1002</td>
                <td>Camiseta Blanca</td>
                <td>1</td>
                <td>Juan Pérez</td>
                <td>Enviado</td>
            </tr>
            <tr>
                <td>1003</td>
                <td>Reloj Deportivo</td>
                <td>3</td>
                <td>María López</td>
                <td>Enviado</td>
            </tr>
            <tr>
                <td>1004</td>
                <td>Chaqueta de Cuero</td>
                <td>1</td>
                <td>Carlos Ruiz</td>
                <td>Pendiente</td>
            </tr>
            <tr>
                <td>1005</td>
                <td>Gorra Azul</td>
                <td>4</td>
                <td>Ana Torres</td>
                <td>Enviado</td>
            </tr>
        </tbody>
    </table>
   
    </main>


    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="../js/das.js"></script>
</body>
</html>