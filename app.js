/*
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
*/

// Simple REST API for food ordering system using Node.js and Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory array to store orders
const orders = [];
let nextOrderId = 1;

// POST endpoint to create new orders
app.post('/api/orders', (req, res) => {
  const { customer_name, menu_item, quantity } = req.body;
  
  // Simple validation
  if (!customer_name || !menu_item || !quantity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  if (quantity <= 0) {
    return res.status(400).json({ error: 'Quantity must be greater than 0' });
  }
  
  // Create new order
  const newOrder = {
    order_id: nextOrderId,
    customer_name,
    menu_item,
    quantity,
    order_date: new Date()
  };
  
  // Save to in-memory array
  orders.push(newOrder);
  nextOrderId++;
  
  // Return success response
  res.status(201).json({
    message: "Order received successfully",
    order_id: newOrder.order_id
  });
});

// GET endpoint to retrieve all orders
app.get('/api/orders', (req, res) => {
  const { customer_name } = req.query;
  
  // If customer_name is provided, filter orders by customer name
  if (customer_name) {
    const filteredOrders = orders.filter(order => 
      order.customer_name.toLowerCase() === customer_name.toLowerCase()
    );
    
    // Check if any orders were found for this customer
    if (filteredOrders.length === 0) {
      return res.status(404).json({ 
        error: 'No orders found',
        message: `No orders found for customer: ${customer_name}`
      });
    }
  }
  
  // Return all orders
  res.json(orders);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
