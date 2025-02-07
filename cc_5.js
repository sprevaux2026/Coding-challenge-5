// Task 1: Object Properties - Customer Profile
let customer = {
    name: "Johnny Test",
    age: 15,
    email: "JohhnyTest@gmail.com"
};

// Log each property from above
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

// Task 2: Object Methods - Order Details
let order = {
    orderId: 99999,
    totalAmount: 99,
    status: "Processing",
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`); //logged the info
    }
};

// Call the method to display order details
order.displayOrder();


// Task 3: Array Manipulation - Shopping Cart
let cartItems = ["Apple", "Orange", "Plum"]; // initial products

cartItems.push("Grape-Fruit");   // Add a new product at the end
cartItems.pop();    // Remove the last product
cartItems.unshift("Pear"); // Add a new product at the beginning
cartItems.shift();  // Remove the first product

console.log("Final Shopping Cart:", cartItems);

// Task 4: Map Method - Price Adjustments
let prices = [199, 299, 399];
let discountedPrices = prices.map(price => price * 0.9); // applying a 10% discount

console.log("Discounted Prices:", discountedPrices);
