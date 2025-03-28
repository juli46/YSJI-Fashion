(function($) {
    "use strict";
	
	/* ..............................................
	   Loader 
	   ................................................. */
	$(window).on('load', function() {
		$('.preloader').fadeOut();
		$('#preloader').delay(550).fadeOut('slow');
		$('body').delay(450).css({
			'overflow': 'visible'
		});
	});

	/* ..............................................
	   Fixed Menu
	   ................................................. */

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 50) {
			$('.main-header').addClass('fixed-menu');
		} else {
			$('.main-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
	   Gallery
	   ................................................. */

	$('#slides-shop').superslides({
		inherit_width_from: '.cover-slides',
		inherit_height_from: '.cover-slides',
		play: 5000,
		animation: 'fade',
	});

	$(".cover-slides ul li").append("<div class='overlay-background'></div>");

	/* ..............................................
	   Map Full
	   ................................................. */

	$(document).ready(function() {
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').click(function() {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	});

	/* ..............................................
	   Special Menu
	   ................................................. */

	var Container = $('.container');
	Container.imagesLoaded(function() {
		var portfolio = $('.special-menu');
		portfolio.on('click', 'button', function() {
			$(this).addClass('active').siblings().removeClass('active');
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		var $grid = $('.special-list').isotope({
			itemSelector: '.special-grid'
		});
	});

	/* ..............................................
	   BaguetteBox
	   ................................................. */

	baguetteBox.run('.tz-gallery', {
		animation: 'fadeIn',
		noScrollbars: true
	});

	/* ..............................................
	   Offer Box
	   ................................................. */

	$('.offer-box').inewsticker({
		speed: 3000,
		effect: 'fade',
		dir: 'ltr',
		font_size: 13,
		color: '#ffffff',
		font_family: 'Montserrat, sans-serif',
		delay_after: 1000
	});

	/* ..............................................
	   Tooltip
	   ................................................. */

	$(document).ready(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* ..............................................
	   Owl Carousel Instagram Feed
	   ................................................. */

	$('.main-instagram').owlCarousel({
		loop: true,
		margin: 0,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 2,
				nav: true
			},
			600: {
				items: 4,
				nav: true
			},
			1000: {
				items: 8,
				nav: true,
				loop: true
			}
		}
	});

	/* ..............................................
	   Featured Products
	   ................................................. */

	$('.featured-products-box').owlCarousel({
		loop: true,
		margin: 0,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 3,
				nav: true
			},
			1000: {
				items: 4,
				nav: true,
				loop: true
			}
		}
	});

	/* ..............................................
	   Scroll
	   ................................................. */

	$(document).ready(function() {
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').click(function() {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	});


	/* ..............................................
	   Slider Range
	   ................................................. */

	$(function() {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 4000,
			values: [1000, 3000],
			slide: function(event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	});

	/* ..............................................
	   NiceScroll
	   ................................................. */

	$(".brand-box").niceScroll({
		cursorcolor: "#9b9b9c",
	});
	
	
}(jQuery));

/* ..............................................
	   productos
	   ................................................. */
	   let cart = [];
	   let colorSeleccionado = '';
	   let tallaSeleccionada =  ''; 
	   
	
	   function elegirColor(color) {
		   colorSeleccionado = color;
		   alert(`Color seleccionado: ${color}`);
	   }
	   
	
	   function elegirTalla(talla) {
		   tallaSeleccionada = talla;
		   
		   let botonesTalla = document.querySelectorAll('.size-btn');
		   botonesTalla.forEach(button => {
			   if (button.innerText === talla) {
				   button.classList.add('selected'); 
				   button.classList.remove('selected'); 
			   }
		   });
	   
		   
		   console.log("Talla seleccionada: " + tallaSeleccionada);
	   }
	   
	   function addToCart(name, price, image) {
		   if (!colorSeleccionado || !tallaSeleccionada) {
			   alert('Por favor, selecciona un color y una talla antes de agregar al carrito.');
			   return;
		   }
	   
		   let productId = name + '-' + colorSeleccionado + '-' + tallaSeleccionada;
	   
		   let product = cart.find(item => item.id === productId);
	   
		   if (product) {
			   product.quantity++;
		   } else {
			   cart.push({ id: productId, name, price, image, color: colorSeleccionado, talla: tallaSeleccionada, quantity: 1 });
		   }
	   
		   colorSeleccionado = '';
		   tallaSeleccionada = null;
		   updateCart();
	   
		   alert('Producto agregado al carrito con éxito.');
	   }
	   
	   function removeFromCart(productId) {
		 
		   cart = cart.filter(item => item.id !== productId);
	   
		   updateCart();
	   }
	   
	   function clearCart() {
		   cart = [];
		   updateCart();
	   }
	   
	   // Función para actualizar el carrito
	   function updateCart() {
		   let cartProducts = document.querySelector('.cart-products');
		   let total = 0;
	   
		   // Limpiar el carrito en el HTML
		   cartProducts.innerHTML = '';
	   
		   // Agregar cada producto del carrito al HTML
		   cart.forEach(item => {
			   let productElement = document.createElement('div');
			   productElement.classList.add('cart-item');
			   productElement.innerHTML = `
				   <div class="d-flex justify-content-between mb-2">
					   <img src="${item.image}" alt="${item.name}" class="img-thumbnail" width="50">
					   <span>
						   ${item.name} - Color: ${item.color} - Talla: ${item.talla}
					   </span>
					   <span>$${(item.price * item.quantity).toFixed(2)} (${item.quantity} x $${item.price.toFixed(2)})</span>
					   
					   <!-- Botón de eliminar -->
					   <button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.id}')">Eliminar</button>
				   </div>
			   `;
			   cartProducts.appendChild(productElement);
	   
			   total += item.price * item.quantity;
		   });
	   
		   // Actualizar el total
		   document.getElementById('total').innerText = `$${total.toFixed(2)}`;
	   }
	   
	   // Función para pagar
	   function pay() {
		   alert("Proceso de pago");
	   }
	   $(function() {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 1000000, // Establecer el rango de precios
			values: [100000, 500000], // Valores iniciales
			slide: function(event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		// Mostrar el rango de precios al cargar la página
		$("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
	});
	
	// Función para filtrar productos por rango de precio
	document.getElementById("filter-button").addEventListener("click", function() {
		// Obtener los valores seleccionados del slider
		var minPrice = $("#slider-range").slider("values", 0);
		var maxPrice = $("#slider-range").slider("values", 1);
	
		const products = document.querySelectorAll('.product-container');
	
		products.forEach(product => {
			const productPrice = parseInt(product.getAttribute('data-price'));
	
			if (productPrice >= minPrice && productPrice <= maxPrice) {
				product.style.display = 'block';  // Mostrar el producto
			} else {
				product.style.display = 'none';   // Ocultar el producto
			}
		});
	});
	// buscador
	


	function showCart() {
		// Crear el HTML del carrito
		const cartHtml = `
			<section class="h-100">
				<div class="container h-100 py-5">
					<div class="row justify-content-center align-items-center h-100">
						<div class="col-lg-8 col-md-10 col-sm-12">
							<h3 class="fw-normal mb-4 text-center">Carrito de Compras</h3>
			
							<!-- Aquí se agregarán los productos -->
							<div class="cart-products border rounded p-3 mb-4">
								<p class="text-muted text-center">Tu carrito está vacío.</p>
							</div>
			
							<!-- Total y botón de pago -->
							<div class="card">
								<div class="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
									<h5 class="mb-3 mb-md-0">Total: <span id="total" class="text-primary">$0.00</span></h5>
									<div class="d-flex gap-2">
										<button class="btn btn-warning btn-lg" onclick="pay()">Pagar</button>
										<button class="btn btn-danger btn-lg" onclick="clearCart()">Vaciar Carrito</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		`;
	
		// Insertar el HTML del carrito en un contenedor específico
		// Si deseas mostrarlo en un modal o una sección emergente, puedes agregarlo a un contenedor con id "cart-modal"
		const cartContainer = document.getElementById('cart-container');
		
		if (cartContainer) {
			cartContainer.innerHTML = cartHtml;
		}
		
	}
	// x marca
	
	function filterProducts() {
		// Obtener el valor de la marca seleccionada
		const selectedBrand = document.querySelector('input[name="brand"]:checked')?.value;
		
		// Obtener todos los productos
		const products = document.querySelectorAll('.product-container');
		
		// Si no hay productos, no continuar
		if (products.length === 0) {
			console.log('No se encontraron productos.');
			return;
		}
	
		// Si no se ha seleccionado ninguna marca, mostrar todos los productos
		if (selectedBrand === undefined) {
			products.forEach(product => {
				product.style.display = 'block';
			});
		} else {
			// Iterar sobre todos los productos y ocultar o mostrar según la marca seleccionada
			products.forEach(product => {
				const productBrand = product.getAttribute('data-brand');
				
				// Mostrar el producto si coincide con la marca seleccionada
				if (productBrand === selectedBrand) {
					product.style.display = 'block';
				} else {
					// Ocultar si no coincide
					product.style.display = 'none';
				}
			});
		}
	}
	function showAllProducts() {
		const products = document.querySelectorAll('.product-container');
		
		products.forEach(product => {
			product.style.display = 'block';
		});
		
		// Deseleccionar los radio buttons
		const brandRadios = document.querySelectorAll('input[name="brand"]');
		brandRadios.forEach(radio => radio.checked = false);
	}	



	  // Función para filtrar productos por categoría
	  function filterCategory(event, category) {
        event.preventDefault();  // Evita que el enlace haga scroll al inicio de la página
        
        const products = document.querySelectorAll('.product-container');
        
        // Mostrar todos los productos si la categoría es "Todos"
        if (category === 'Todos') {
            products.forEach(product => product.style.display = 'block');
        } else {
            products.forEach(product => {
                const productCategory = product.getAttribute('data-category');
                if (productCategory === category) {
                    product.style.display = 'block';  // Mostrar el producto
                } else {
                    product.style.display = 'none';   // Ocultar el producto
                }
            });
        }
    }