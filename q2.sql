DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    menu_item VARCHAR(100),
    order_date DATETIME
);

-- sample data
INSERT INTO orders (customer_name, menu_item, order_date) VALUES
('Budi', 'Nasi Goreng', '2025-04-01 08:30:00'),
('Ani', 'Mie Ayam', '2025-04-01 12:45:00'),
('Tono', 'Sate Ayam', '2025-04-02 18:20:00'),
('Budi', 'Bakso', '2025-04-03 14:15:00');

-- Query: Show all orders made on 2025-04-01
SELECT *
FROM orders
WHERE DATE(order_date) = '2025-04-01';
