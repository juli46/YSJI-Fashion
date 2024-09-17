CREATE DATABASE JYSIFASHION;
USE JYSIFASHION;

CREATE TABLE document_types (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name TEXT NOT NULL,
    document_type_id INT NOT NULL,
    FOREIGN KEY (document_type_id) REFERENCES document_types(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name TEXT NOT NULL,
    password VARCHAR(45) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE profiles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE administrator (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name TEXT NOT NULL,
    password VARCHAR(45) NOT NULL,
    profiles_id INT NOT NULL,
    FOREIGN KEY (profiles_id) REFERENCES profiles(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE shipment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    time TIME NOT NULL,
    department VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    product_code VARCHAR(45) NOT NULL UNIQUE,
    barcode VARCHAR(45) NOT NULL,
    reference VARCHAR(45) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_date DATE NOT NULL,
    shipping_date DATE NOT NULL,
    status VARCHAR(30) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    amount INT NOT NULL,
    user_id INT NOT NULL,
    shipment_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (shipment_id) REFERENCES shipment(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE sales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    order_id INT NOT NULL,
    quantity INT NOT NULL,
    sale_price DECIMAL(10,2) NOT NULL,
    sale_date DATETIME NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE address (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date_time DATETIME NOT NULL,
    address VARCHAR(255) NOT NULL,
    shipment_id INT NOT NULL,
    FOREIGN KEY (shipment_id) REFERENCES shipment(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE inventory (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    stock_quantity INT NOT NULL,
    restock_date DATETIME,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES product(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE invoice_detail (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE order_log (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    action VARCHAR(50),
    log_date DATETIME,
    FOREIGN KEY (order_id) REFERENCES orders(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE bill (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE NOT NULL,
    code VARCHAR(10) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    invoice_detail_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (invoice_detail_id) REFERENCES invoice_detail(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE discount (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE discount_product (
    product_id INT NOT NULL,
    discount_id INT NOT NULL,
    PRIMARY KEY (product_id, discount_id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (discount_id) REFERENCES discount(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    description VARCHAR(100) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE product_has_category (
    product_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (product_id, category_id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (category_id) REFERENCES category(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE customer_preferences (
    id INT PRIMARY KEY AUTO_INCREMENT,
    most_searched_color VARCHAR(20) NOT NULL,
    related_searches TEXT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE customers_has_customer_preferences (
    customer_id INT NOT NULL,
    preference_id INT NOT NULL,
    PRIMARY KEY (customer_id, preference_id),
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (preference_id) REFERENCES customer_preferences(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE shopping_cart (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(200) NOT NULL,
    image BLOB NOT NULL,
    device VARCHAR(20) NOT NULL,
    date_time DATETIME NOT NULL,
    click_time TIME NOT NULL,
    place VARCHAR(45) NOT NULL,
    ip VARCHAR(60) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE shopping_cart_has_product (
    shopping_cart_id INT NOT NULL,
    product_id INT NOT NULL,
    PRIMARY KEY (shopping_cart_id, product_id),
    FOREIGN KEY (shopping_cart_id) REFERENCES shopping_cart(id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE payment_method (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_type VARCHAR(45) NOT NULL,
    description TEXT NOT NULL,
    code INT NOT NULL,
    order_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE schedules (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE NOT NULL,
    time TIME NOT NULL,
    order_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE password (
    id INT PRIMARY KEY AUTO_INCREMENT,
    password_hash VARCHAR(60) NOT NULL,
    customer_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;






tigger orders:
DELIMITER //
CREATE TRIGGER after_order_insert
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
   INSERT INTO order_log (order_id, action, log_date)
   VALUES (NEW.id, 'INSERT', NOW());
END //

DELIMITER ;



tigger customers: 

DELIMITER //

CREATE TRIGGER before_customer_insert
BEFORE INSERT ON customers
FOR EACH ROW
BEGIN
   SET NEW.password = SHA2(NEW.password, 256); -- Encriptar la contraseña
END //

DELIMITER ;

