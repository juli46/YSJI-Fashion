<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="css/boar.css">
</head>
<body>

        <div class="menu">
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon>
        </div>

    <div class="barra-lateral">
       <div>
       <div class="nombre-pagina">
        <ion-icon id="cloud" name="cloud-outline"></ion-icon>
        
        <span>YSJI FASHION</span>
        </div>
       </div>

        <nav class="navegacion">
            <ul>
                <li>
                    <a id="inbox"  href="d.php">
                    <ion-icon name="grid-outline"></ion-icon>
                    <span>Dasboard</span>
                    </a>
                </li>
                <li>
                    <a href="aggproductos/agg.php">
                    <ion-icon name="shirt-outline"></ion-icon>
                    <span>Productos</span>
                    </a>
                </li>
                <li>
                    <a href="partesdash/pedidos.php">
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
    
    
    <ul class="box-info">
        <li>
            <i class='bx bxs-calendar-check' ></i>
            <span class="text">
                <h3>1020</h3>
                <p>Nuevos pedidos</p>
            </span>
        </li>
        <li>
            <i class='bx bxs-group' ></i>
            <span class="text">
                <h3>2834</h3>
                <p>Usuarios</p>
            </span>
        </li>
        <li>
            <i class='bx bxs-dollar-circle' ></i>
            <span class="text">
                <h3>$1000000</h3>
                <p>Ventas totales</p>
            </span>
        </li>
    </ul>
    
       
   
    </main>


    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="js/das.js"></script>
</body>
</html>