// Read JSON file
import data from './data.json' with { type: 'json' };

// Display all users
console.log('=== All Users ===');
data.users.forEach((user: any) => {
  console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Age: ${user.age}, City: ${user.city}`);
});

// Display all products
console.log('\n=== All Products ===');
data.products.forEach((product: any) => {
  console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Stock: ${product.stock}`);
});

// Display all orders
console.log('\n=== All Orders ===');
data.orders.forEach((order: any) => {
  console.log(`Order ID: ${order.orderId}, User ID: ${order.userId}, Product ID: ${order.productId}, Quantity: ${order.quantity}, Date: ${order.orderDate}`);
});

// Access specific user
console.log('\n=== First User Details ===');
const firstUser = data.users[0];
console.log(`Name: ${firstUser.name}`);
console.log(`Email: ${firstUser.email}`);
console.log(`City: ${firstUser.city}`);

// Access specific product
console.log('\n=== First Product Details ===');
const firstProduct = data.products[0];
console.log(`Product Name: ${firstProduct.name}`);
console.log(`Price: $${firstProduct.price}`);
console.log(`Available Stock: ${firstProduct.stock}`);
