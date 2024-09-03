CREATE DATABASE ysjfashion;
USE ysjfashion;

-- Tabla 'document_types'
CREATE TABLE document_types (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'users'
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name TEXT NOT NULL,
    document_type_id INT NOT NULL,
    FOREIGN KEY (document_type_id) REFERENCES document_types(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'customers'
CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name TEXT NOT NULL,
    password VARCHAR(45) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'profiles'
CREATE TABLE profiles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'administrator'
CREATE TABLE administrator (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name TEXT NOT NULL,
    password VARCHAR(45) NOT NULL,
    profiles_id INT NOT NULL,
    FOREIGN KEY (profiles_id) REFERENCES profiles(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'shipment'
CREATE TABLE shipment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    time TIME NOT NULL,
    department VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'orders'
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

-- Tabla 'address'
CREATE TABLE address (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date_time DATETIME NOT NULL,
    address VARCHAR(255) NOT NULL,
    shipment_id INT NOT NULL,
    FOREIGN KEY (shipment_id) REFERENCES shipment(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'invoice_detail'
CREATE TABLE invoice_detail (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'bill'
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

-- Tabla 'product'
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

-- Crear índices para campos usados frecuentemente en búsquedas
CREATE INDEX idx_product_code ON product(product_code);
CREATE INDEX idx_name ON product(name);

-- Tabla 'discount'
CREATE TABLE discount (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'discount_product'
CREATE TABLE discount_product (
    product_id INT NOT NULL,
    discount_id INT NOT NULL,
    PRIMARY KEY (product_id, discount_id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (discount_id) REFERENCES discount(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'category'
CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    description VARCHAR(100) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'product_has_category'
CREATE TABLE product_has_category (
    product_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (product_id, category_id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (category_id) REFERENCES category(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'customer_preferences'
CREATE TABLE customer_preferences (
    id INT PRIMARY KEY AUTO_INCREMENT,
    most_searched_color VARCHAR(20) NOT NULL,
    related_searches TEXT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'customers_has_customer_preferences'
CREATE TABLE customers_has_customer_preferences (
    customer_id INT NOT NULL,
    preference_id INT NOT NULL,
    PRIMARY KEY (customer_id, preference_id),
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (preference_id) REFERENCES customer_preferences(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'shopping_cart'
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

-- Tabla 'shopping_cart_has_product'
CREATE TABLE shopping_cart_has_product (
    shopping_cart_id INT NOT NULL,
    product_id INT NOT NULL,
    PRIMARY KEY (shopping_cart_id, product_id),
    FOREIGN KEY (shopping_cart_id) REFERENCES shopping_cart(id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'payment_method'
CREATE TABLE payment_method (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_type VARCHAR(45) NOT NULL,
    description TEXT NOT NULL,
    code INT NOT NULL,
    order_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'schedules'
CREATE TABLE schedules (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE NOT NULL,
    time TIME NOT NULL,
    order_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'password'
CREATE TABLE password (
    id INT PRIMARY KEY AUTO_INCREMENT,
    password_hash VARCHAR(60) NOT NULL,
    date_time DATETIME NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla 'password_history'
CREATE TABLE password_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    password_hash VARCHAR(60) NOT NULL,
    date_time DATETIME NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
