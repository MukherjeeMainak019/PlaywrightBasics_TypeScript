"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Read JSON file
const data_json_1 = __importDefault(require("./data.json"));

// Display all users
console.log('=== All Users ===');
data_json_1.default.users.forEach((user) => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Age: ${user.age}, City: ${user.city}`);
});
// Display all products
console.log('\n=== All Products ===');
data_json_1.default.products.forEach((product) => {
    console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Stock: ${product.stock}`);
});
// Display all orders
console.log('\n=== All Orders ===');
data_json_1.default.orders.forEach((order) => {
    console.log(`Order ID: ${order.orderId}, User ID: ${order.userId}, Product ID: ${order.productId}, Quantity: ${order.quantity}, Date: ${order.orderDate}`);
});
// Access specific user
console.log('\n=== First User Details ===');
const firstUser = data_json_1.default.users[0];
console.log(`Name: ${firstUser.name}`);
console.log(`Email: ${firstUser.email}`);
console.log(`City: ${firstUser.city}`);

// Access specific product
console.log('\n=== First Product Details ===');
const firstProduct = data_json_1.default.products[0];
console.log(`Product Name: ${firstProduct.name}`);
console.log(`Price: $${firstProduct.price}`);
console.log(`Available Stock: ${firstProduct.stock}`);
