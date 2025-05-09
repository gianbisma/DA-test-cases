# DA-test-cases

Problem 1 Instructions:

1. run: node q1.js

Problem 2 Instructions:

1. use MySQL and run: mysql -u your_user -p your_database < q2.sql

Problem 3 Instructions:

1. Run: npm init -y
2. Run: npm install express body-parser
3. Start the server: node app.js

Testing with curl:

1. Create an order:
   curl -X POST http://localhost:3000/api/orders
   -H "Content-Type: application/json"
   -d '{"customer_name": "Budi", "menu_item": "Nasi Goreng", "quantity": 2}'

2. Get all orders:
   curl http://localhost:3000/api/orders

3. Search orders by customer name:
   curl http://localhost:3000/api/orders?customer_name=Budi

